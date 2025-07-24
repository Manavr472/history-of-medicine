import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import { PrismaClient } from '../../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    // Get the current session
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const { provider, email } = await request.json();

    if (!provider || !email) {
      return NextResponse.json(
        { error: 'Provider and email are required' },
        { status: 400 }
      );
    }

    // Check if the user is trying to link an account with their own email
    if (email !== session.user.email) {
      return NextResponse.json(
        { error: 'Email mismatch. You can only link accounts with the same email address.' },
        { status: 400 }
      );
    }

    // Get the current user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { accounts: true }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Check if the account is already linked
    const existingAccount = user.accounts.find(
      (account: any) => account.provider === provider
    );

    if (existingAccount) {
      return NextResponse.json(
        { error: `${provider} account is already linked to your account` },
        { status: 400 }
      );
    }

    // For now, we return a success message
    // The actual linking will happen through NextAuth when they sign in again
    return NextResponse.json({
      success: true,
      message: `Ready to link ${provider} account. Please sign in with ${provider} to complete the linking process.`
    });

  } catch (error) {
    console.error('Error in link-account API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Get the user's linked accounts
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { accounts: true }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const linkedAccounts = user.accounts.map((account: any) => ({
      provider: account.provider,
      providerAccountId: account.providerAccountId,
      type: account.type
    }));

    return NextResponse.json({
      linkedAccounts,
      availableProviders: ['google'], // Add more providers as needed
      canLinkMore: linkedAccounts.length < 3 // Arbitrary limit
    });

  } catch (error) {
    console.error('Error fetching linked accounts:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
