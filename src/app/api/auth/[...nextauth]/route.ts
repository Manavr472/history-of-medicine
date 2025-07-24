import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '../../../../generated/prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          })

          if (!user || !user.password) {
            return null
          }

          const isValidPassword = await bcrypt.compare(credentials.password, user.password)

          if (!isValidPassword) {
            return null
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            verified: user.verified
          }
        } catch (error) {
          console.error('Error in credentials authorization:', error)
          return null
        }
      }
    })
  ],
  // Allow linking accounts with the same email - this enables automatic account linking
  allowDangerousEmailAccountLinking: true,
  callbacks: {
    async session({ session, user }: any) {
      // Send properties to the client
      session.user.id = user.id
      session.user.role = user.role
      return session
    },
    async signIn({ user, account, profile }: any) {
      try {
        if (account.provider === 'google') {
          // Check if there's an existing user with this email
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email },
            include: { accounts: true }
          })
          
          if (existingUser) {
            // Check if this Google account is already linked
            const existingGoogleAccount = existingUser.accounts.find(
              (acc: any) => acc.provider === 'google' && acc.providerAccountId === account.providerAccountId
            )
            
            if (existingGoogleAccount) {
              console.log(`Google account already linked for user: ${user.email}`)
              return true
            }
            
            // Check if user has any OAuth accounts already
            const hasOAuthAccount = existingUser.accounts.some((acc: any) => 
              acc.provider !== 'credentials'
            )
            
            // Check if user has a password (email/password authentication)
            const hasPassword = !!existingUser.password
            
            if (hasPassword && !hasOAuthAccount) {
              // User has email/password account but no OAuth accounts
              // This is the exact scenario we want to support - link Google to existing password account
              console.log(`Linking Google account to existing email/password user: ${user.email}`)
              
              // Create the Google account record to link it to the existing user
              try {
                const newAccount = await prisma.account.create({
                  data: {
                    userId: existingUser.id,
                    type: account.type,
                    provider: account.provider,
                    providerAccountId: account.providerAccountId,
                    refresh_token: account.refresh_token,
                    access_token: account.access_token,
                    expires_at: account.expires_at,
                    token_type: account.token_type,
                    scope: account.scope,
                    id_token: account.id_token,
                    session_state: account.session_state,
                  }
                })
                console.log(`Google account successfully linked to user: ${user.email}, Account ID: ${newAccount.id}`)
              } catch (accountError: any) {
                console.error('Error creating Google account record:', accountError)
                // Check if the error is due to duplicate account
                if (accountError?.code === 'P2002') {
                  console.log('Google account already exists for this user, proceeding with sign-in')
                } else {
                  console.error('Unexpected error during account creation:', accountError)
                }
              }
              
              // Preserve the existing user's data and link the Google account
              user.id = existingUser.id
              user.name = user.name || existingUser.name // Prefer Google name if available
              user.role = existingUser.role || 'user'
              user.verified = existingUser.verified
              
              return true
            } else if (hasOAuthAccount) {
              // User already has OAuth accounts, just add another one
              console.log(`User ${user.email} already has OAuth accounts, linking Google account`)
              
              // Check if this specific Google account is already linked to avoid duplicates
              const existingGoogleAccount = existingUser.accounts.find(
                (acc: any) => acc.provider === 'google' && acc.providerAccountId === account.providerAccountId
              )
              
              if (!existingGoogleAccount) {
                try {
                  await prisma.account.create({
                    data: {
                      userId: existingUser.id,
                      type: account.type,
                      provider: account.provider,
                      providerAccountId: account.providerAccountId,
                      refresh_token: account.refresh_token,
                      access_token: account.access_token,
                      expires_at: account.expires_at,
                      token_type: account.token_type,
                      scope: account.scope,
                      id_token: account.id_token,
                      session_state: account.session_state,
                    }
                  })
                  console.log(`Additional Google account linked to user: ${user.email}`)
                } catch (accountError: any) {
                  console.error('Error creating additional Google account record:', accountError)
                }
              }
              
              user.id = existingUser.id
              user.role = existingUser.role || 'user'
              return true
            } else {
              // User exists but has neither password nor OAuth (shouldn't happen, but handle gracefully)
              console.log(`Linking Google account to existing user: ${user.email}`)
              
              try {
                await prisma.account.create({
                  data: {
                    userId: existingUser.id,
                    type: account.type,
                    provider: account.provider,
                    providerAccountId: account.providerAccountId,
                    refresh_token: account.refresh_token,
                    access_token: account.access_token,
                    expires_at: account.expires_at,
                    token_type: account.token_type,
                    scope: account.scope,
                    id_token: account.id_token,
                    session_state: account.session_state,
                  }
                })
                console.log(`Google account linked to existing user: ${user.email}`)
              } catch (accountError: any) {
                console.error('Error creating Google account record for existing user:', accountError)
              }
              
              user.id = existingUser.id
              user.role = existingUser.role || 'user'
              return true
            }
          } else {
            // New user, ensure they have a default role
            if (!user.role) {
              user.role = 'user'
            }
            console.log(`Creating new user with Google account: ${user.email}`)
            return true
          }
        }
        
        return true
      } catch (error) {
        console.error('Error in signIn callback:', error)
        // Return false to deny sign-in on error
        return false
      }
    }
  },
  events: {
    async linkAccount({ user, account }: any) {
      console.log(`Account linked: ${account.provider} for user ${user.email}`)
    },
    async signIn({ user, account, isNewUser }: any) {
      if (account?.provider === 'google') {
        console.log(`Google sign-in: ${user.email}, isNewUser: ${isNewUser}`)
      }
    }
  },
  pages: {
    signIn: '/login',
    signUp: '/signup',
    error: '/auth/error' // Custom error page
  },
  session: {
    strategy: 'database' as const
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
