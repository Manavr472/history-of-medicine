import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    // Get token from header
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    // Verify token and check if user is admin
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId }
    });

    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Get request body
    const { postId, status } = await request.json();

    if (!postId || !status) {
      return NextResponse.json({ error: 'Missing postId or status' }, { status: 400 });
    }

    // Validate status
    const validStatuses = ['DRAFT', 'SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'PUBLISHED', 'REJECTED'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    // Update the blog post status
    const updateData: any = { status };
    
    // If publishing, set publishedAt timestamp
    if (status === 'PUBLISHED') {
      updateData.publishedAt = new Date();
    }

    const updatedPost = await prisma.blogPost.update({
      where: { id: postId },
      data: updateData,
      include: {
        author: {
          select: {
            email: true,
            firstName: true,
            lastName: true
          }
        },
        images: true
      }
    });

    return NextResponse.json({ 
      message: 'Post status updated successfully',
      blogPost: updatedPost 
    });

  } catch (error) {
    console.error('Error updating post status:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
