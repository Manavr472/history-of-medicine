import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.redirect(new URL('/login?error=invalid-token', request.url));
    }

    // Find user by verification token
    const user = await prisma.user.findUnique({
      where: { emailVerificationToken: token }
    });

    if (!user) {
      return NextResponse.redirect(new URL('/login?error=invalid-token', request.url));
    }

    if (user.verified) {
      return NextResponse.redirect(new URL('/login?message=already-verified', request.url));
    }

    // Update user as verified
    await prisma.user.update({
      where: { id: user.id },
      data: {
        verified: true,
        emailVerifiedAt: new Date(),
        emailVerificationToken: null // Clear the token after use
      }
    });

    // Redirect to login with success message
    return NextResponse.redirect(new URL('/login?message=email-verified', request.url));

  } catch (error) {
    console.error('Error verifying email:', error);
    return NextResponse.redirect(new URL('/login?error=verification-failed', request.url));
  }
}
