import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Get all history sections with their hierarchical subsections
    const historySections = await prisma.historySection.findMany({
      orderBy: { name: 'asc' },
      include: {
        subsections: {
          where: { level: 0 }, // Only top-level subsections
          orderBy: { name: 'asc' },
          include: {
            children: {
              where: { isLeaf: true }, // Only leaf children that can have blog posts
              orderBy: { name: 'asc' },
              select: {
                id: true,
                slug: true,
                name: true,
                description: true,
                level: true,
                isLeaf: true
              }
            }
          }
        }
      }
    });

    // Transform the data for the frontend
    const transformedSections = historySections.map((section) => ({
      id: section.id,
      name: section.name,
      slug: section.slug,
      description: section.description,
      subsections: section.subsections.flatMap((subsection) => {
        const items = [];
        
        // If the top-level subsection is a leaf, include it
        if (subsection.isLeaf) {
          items.push({
            value: subsection.id,
            label: subsection.name,
            slug: subsection.slug,
            description: subsection.description,
            level: subsection.level,
            parentPath: section.slug
          });
        }
        
        // Include all leaf children
        subsection.children.forEach((child) => {
          items.push({
            value: child.id,
            label: `${subsection.name} → ${child.name}`,
            slug: child.slug,
            description: child.description,
            level: child.level,
            parentPath: `${section.slug}/${subsection.slug}`
          });
        });
        
        return items;
      })
    }));

    return NextResponse.json(transformedSections);
  } catch (error) {
    console.error('Error fetching history sections:', error);
    return NextResponse.json(
      { error: 'Failed to fetch history sections' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
