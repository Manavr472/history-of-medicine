import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../[...nextauth]/route';
import { PrismaClient } from '../../../../generated/prisma/client';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

// Configure nodemailer (you'll need to update with your email service details)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (user.verified) {
      return NextResponse.json({ error: 'Email already verified' }, { status: 400 });
    }

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');

    // Update user with verification token
    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerificationToken: verificationToken
      }
    });

    // Create verification URL
    const verificationUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/auth/verify-email?token=${verificationToken}`;

    // Send verification email
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: user.email,
      subject: 'Verify Your Email - History of Medicine',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Email Verification</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2c5aa0;">Verify Your Email Address</h2>
            <p>Hello ${user.name},</p>
            <p>Thank you for registering with History of Medicine. To complete your registration and start contributing blog posts, please verify your email address by clicking the button below:</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${verificationUrl}" 
                 style="display: inline-block; padding: 12px 30px; background-color: #2c5aa0; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
                Verify Email Address
              </a>
            </div>
            
            <p>If the button doesn't work, you can also copy and paste this link into your browser:</p>
            <p style="word-break: break-all; color: #666;">${verificationUrl}</p>
            
            <p>This verification link will expire in 24 hours for security reasons.</p>
            
            <hr style="border: 1px solid #eee; margin: 30px 0;">
            <p style="font-size: 12px; color: #666;">
              If you didn't create an account with History of Medicine, please ignore this email.
            </p>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      message: 'Verification email sent successfully. Please check your email and click the verification link.' 
    });

  } catch (error) {
    console.error('Error sending verification email:', error);
    return NextResponse.json(
      { error: 'Failed to send verification email' }, 
      { status: 500 }
    );
  }
}
