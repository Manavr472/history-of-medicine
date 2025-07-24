import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';
import { verifyToken } from '../../../lib/auth';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const userId = decoded.userId;

    // Check if user exists and is verified
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (!user.verified) {
      return NextResponse.json({ 
        error: 'Email verification required. Please verify your email before creating blog posts.',
        requiresVerification: true 
      }, { status: 403 });
    }

    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const subsectionId = formData.get('subsection') as string;

    if (!title || !content || !subsectionId) {
      return NextResponse.json({ error: 'Title, content, and subsection are required' }, { status: 400 });
    }

    // Verify subsection exists and is a leaf node (can accept blog posts)
    const subsection = await prisma.subsection.findUnique({
      where: { id: subsectionId }
    });

    if (!subsection) {
      return NextResponse.json({ error: 'Invalid subsection' }, { status: 400 });
    }

    if (!subsection.isLeaf) {
      return NextResponse.json({ 
        error: 'Blog posts can only be created in leaf subsections. Please select a more specific category.' 
      }, { status: 400 });
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Check if slug already exists
    const existingPost = await prisma.blogPost.findFirst({
      where: { id: slug }
    });

    if (existingPost) {
      return NextResponse.json({ error: 'A blog post with this title already exists' }, { status: 400 });
    }

    // Create blog post
    const blogPost = await prisma.blogPost.create({
      data: {
        id: slug,
        title,
        content,
        slug,
        authorId: userId,
        status: 'SUBMITTED',
        submittedAt: new Date(),
        subsectionId: subsectionId
      }
    });

    // Handle image uploads
    const uploadedImages = [];
    const images = formData.getAll('images') as File[];
    
    if (images.length > 0) {
      // Create uploads directory if it doesn't exist
      const uploadsDir = join(process.cwd(), 'public', 'uploads', 'blog-images');
      try {
        await mkdir(uploadsDir, { recursive: true });
      } catch (error) {
        // Directory already exists
      }

      for (const image of images) {
        if (image.size > 0) {
          const bytes = await image.arrayBuffer();
          const buffer = Buffer.from(bytes);

          // Generate unique filename
          const timestamp = Date.now();
          const filename = `${timestamp}-${image.name}`;
          const filepath = join(uploadsDir, filename);

          // Write file
          await writeFile(filepath, buffer);

          // Save image record in database
          const imageRecord = await prisma.postImage.create({
            data: {
              filename: image.name,
              path: `/uploads/blog-images/${filename}`,
              size: image.size,
              mimeType: image.type,
              blogPostId: blogPost.id,
            }
          });

          uploadedImages.push(imageRecord);
        }
      }
    }

    return NextResponse.json({
      message: 'Blog post submitted successfully! It will be reviewed by an admin before publication.',
      blogPost: {
        id: blogPost.id,
        title: blogPost.title,
        status: blogPost.status,
        subsection: subsection.name
      },
      images: uploadedImages
    });

  } catch (error) {
    console.error('Error submitting blog post:', error);
    return NextResponse.json({ error: 'Failed to submit blog post' }, { status: 500 });
  }
}
