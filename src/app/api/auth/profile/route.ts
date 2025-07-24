import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../[...nextauth]/route';
import { PrismaClient } from '../../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Find user and their linked accounts
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        accounts: {
          select: {
            id: true,
            provider: true,
            type: true,
          }
        }
      }
    }) as any;

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Check if user has password (email/password authentication)
    const hasPassword = !!user.password;

    // Format the response
    // Format the response
    const linkedAccounts = user.accounts.map((account: { id: any; provider: any; type: any; }) => ({
      id: account.id,
      provider: account.provider,
      type: account.type,
      linkedAt: user.createdAt, // Use user's createdAt as fallback
    }));
    // Add email/password as an account type if user has password
    if (hasPassword) {
      linkedAccounts.push({
        id: 'email-password',
        provider: 'email',
        type: 'email',
        linkedAt: user.createdAt,
      });
    }

    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        verified: user.verified,
        createdAt: user.createdAt,
      },
      linkedAccounts,
      hasPassword,
    });

  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
