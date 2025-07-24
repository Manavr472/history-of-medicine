import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Get history sections with their nested subsections
    const historySections = await prisma.historySection.findMany({
      include: {
        subsections: {
          where: {
            parentId: null // Only get top-level subsections
          },
          include: {
            children: {
              select: {
                id: true,
                name: true,
                slug: true,
                description: true,
                level: true,
                isLeaf: true
              }
            }
          },
          orderBy: {
            name: 'asc'
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    });

    // Transform to the format expected by the frontend
    const result = historySections.map(section => ({
      id: section.id,
      name: section.name,
      slug: section.slug,
      description: section.description,
      subsections: section.subsections.map(subsection => ({
        id: subsection.id,
        name: subsection.name,
        slug: subsection.slug,
        description: subsection.description,
        level: subsection.level,
        isLeaf: subsection.isLeaf,
        // Only include children if this subsection has them
        children: subsection.children.length > 0 ? subsection.children.map(child => ({
          value: child.id,
          label: child.name,
          slug: child.slug,
          description: child.description,
          level: child.level,
          isLeaf: child.isLeaf
        })) : undefined,
        // If it's a leaf node, it can be selected for blog posts
        value: subsection.isLeaf ? subsection.id : undefined,
        label: subsection.isLeaf ? subsection.name : undefined
      }))
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching subsections:', error);
    
    // Return fallback structure
    const fallbackStructure = [
      {
        id: 'clinical',
        name: 'Clinical History',
        slug: 'clinical',
        description: 'Medical practices and clinical developments',
        subsections: [
          {
            id: 'surgery',
            name: 'Surgery',
            slug: 'surgery',
            description: 'Evolution of surgical techniques',
            level: 0,
            isLeaf: false,
            children: [
              { value: 'general-surgery', label: 'General Surgery', slug: 'general-surgery', description: 'General surgical procedures', level: 1, isLeaf: true }
            ]
          }
        ]
      }
    ];
    
    return NextResponse.json(fallbackStructure);
  }
}
