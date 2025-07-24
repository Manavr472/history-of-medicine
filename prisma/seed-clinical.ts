import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

// Sample data structure as provided
const historySections = [
  {
    slug: 'clinical',
    name: 'Clinical History',
    description: 'Medical practices and clinical developments',
    subsections: [
      {
        slug: 'orthopedics',
        name: 'Orthopedics',
        description: 'Bone and musculoskeletal history',
        level: 0,
        isLeaf: false,
        children: [
          { slug: 'orthopedic-knee', name: 'Knee', description: 'History of knee treatments', level: 1, isLeaf: true },
          { slug: 'orthopedic-hip', name: 'Hip', description: 'History of hip treatments', level: 1, isLeaf: true },
          { slug: 'orthopedic-spine', name: 'Spine', description: 'Spine surgery and evolution', level: 1, isLeaf: true }
        ]
      },
      {
        slug: 'cardiology',
        name: 'Cardiology',
        description: 'Heart disease treatment',
        level: 0,
        isLeaf: false,
        children: [
          { slug: 'electrophysiology', name: 'Electrophysiology', description: 'Heart rhythm treatment history', level: 1, isLeaf: true },
          { slug: 'interventional-cardiology', name: 'Interventional Cardiology', description: 'Minimally invasive cardiac procedures', level: 1, isLeaf: true }
        ]
      },
      { slug: 'neurosurgery', name: 'Neurosurgery', description: 'Brain and nervous system surgery', level: 0, isLeaf: true },
      { slug: 'plastic-surgery', name: 'Plastic Surgery', description: 'Reconstructive and cosmetic surgery', level: 0, isLeaf: true },
      { slug: 'gastroenterology', name: 'Gastroenterology', description: 'Digestive system medicine', level: 0, isLeaf: true },
      { slug: 'endocrinology', name: 'Endocrinology', description: 'Hormone-related disorders', level: 0, isLeaf: true },
      { slug: 'nephrology', name: 'Nephrology', description: 'Kidney disease treatment', level: 0, isLeaf: true },
      { slug: 'diagnosis', name: 'Diagnosis', description: 'Development of diagnostic methods', level: 0, isLeaf: true },
      { slug: 'patient-care', name: 'Patient Care', description: 'History of patient care practices', level: 0, isLeaf: true },
      { slug: 'medical-ethics', name: 'Medical Ethics', description: 'Evolution of medical ethics', level: 0, isLeaf: true }
    ]
  }
];

// Recursive function to create sections and their children
async function createSection(
  sectionData: any,
  historySectionId: string,
  parentId?: string
): Promise<void> {
  try {
    // Create or upsert the current section/subsection
    const section = await prisma.subsection.upsert({
      where: { slug: sectionData.slug },
      update: {
        name: sectionData.name,
        description: sectionData.description,
        historySectionId: historySectionId,
        parentId: parentId || null,
        level: sectionData.level,
        isLeaf: sectionData.isLeaf
      },
      create: {
        slug: sectionData.slug,
        name: sectionData.name,
        description: sectionData.description,
        historySectionId: historySectionId,
        parentId: parentId || null,
        level: sectionData.level,
        isLeaf: sectionData.isLeaf
      }
    });

    console.log(`${parentId ? '  ' : ''}✓ Created/updated ${parentId ? 'child subsection' : 'subsection'}: ${sectionData.name}`);

    // Recursively create children if they exist
    if (sectionData.children && sectionData.children.length > 0) {
      for (const child of sectionData.children) {
        await createSection(child, historySectionId, section.id);
      }
    }
  } catch (error) {
    console.error(`✗ Failed to create section ${sectionData.name}:`, error);
    throw error;
  }
}

async function main() {
  console.log('Starting seed process for clinical history sections...');

  try {
    for (const historySection of historySections) {
      // Create or upsert the main history section
      const createdHistorySection = await prisma.historySection.upsert({
        where: { slug: historySection.slug },
        update: {
          name: historySection.name,
          description: historySection.description
        },
        create: {
          slug: historySection.slug,
          name: historySection.name,
          description: historySection.description
        }
      });

      console.log(`✓ Created/updated history section: ${historySection.name}`);

      // Create all subsections and their nested children
      for (const subsection of historySection.subsections) {
        await createSection(subsection, createdHistorySection.id);
      }
    }

    console.log('\n🎉 Seed completed successfully!');
    console.log('Created hierarchical structure:');
    console.log('- History Section: Clinical History');
    console.log('  - Top-level Subsections (10 items)');
    console.log('    - Orthopedics (with 3 children: Knee, Hip, Spine)');
    console.log('    - Cardiology (with 2 children: Electrophysiology, Interventional Cardiology)');
    console.log('    - 8 other leaf subsections');
    console.log('\nOnly leaf subsections (isLeaf: true) can have blog posts attached.');

  } catch (error) {
    console.error('❌ Seed process failed:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error('Fatal error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('✓ Database connection closed');
  });
