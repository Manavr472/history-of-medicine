import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../[...nextauth]/route';
import { PrismaClient } from '../../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { accountId, provider } = await request.json();

    if (!accountId || !provider) {
      return NextResponse.json(
        { error: 'Account ID and provider are required' },
        { status: 400 }
      );
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        accounts: true
      }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Check if this is the only authentication method
    const hasPassword = !!user.password;
    const linkedAccounts = user.accounts.length;
    
    if (!hasPassword && linkedAccounts <= 1) {
      return NextResponse.json(
        { error: 'Cannot unlink the only authentication method. Please set a password first.' },
        { status: 400 }
      );
    }

    // Special handling for email/password unlinking
    if (provider === 'email' && accountId === 'email-password') {
      if (linkedAccounts === 0) {
        return NextResponse.json(
          { error: 'Cannot remove password when no other authentication methods are linked' },
          { status: 400 }
        );
      }
      
      // Remove password
      await prisma.user.update({
        where: { id: user.id },
        data: { password: null }
      });

      return NextResponse.json({
        message: 'Email/password authentication removed successfully'
      });
    }

    // Unlink OAuth account
    const account = await prisma.account.findFirst({
      where: {
        id: accountId,
        userId: user.id,
        provider: provider
      }
    });

    if (!account) {
      return NextResponse.json(
        { error: 'Account not found or does not belong to user' },
        { status: 404 }
      );
    }

    await prisma.account.delete({
      where: { id: accountId }
    });

    return NextResponse.json({
      message: `${provider} account unlinked successfully`
    });

  } catch (error) {
    console.error('Error unlinking account:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
