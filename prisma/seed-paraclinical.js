const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

// Para-Clinical History data with nested structure
const paraClinicaHistoryData = [
  {
    slug: 'paraclinical',
    name: 'Para-Clinical History',
    description: 'Supporting medical sciences and diagnostics',
    subsections: [
      {
        slug: 'radiology',
        name: 'Radiology',
        description: 'History of medical imaging',
        level: 0,
        isLeaf: false,
        children: [
          { slug: 'x-ray', name: 'X-Ray', description: 'Development of radiography', level: 1, isLeaf: true },
          { slug: 'ct-scan', name: 'CT Scan', description: 'Computed tomography history', level: 1, isLeaf: true },
          { slug: 'mri', name: 'MRI', description: 'Magnetic resonance imaging', level: 1, isLeaf: true },
          { slug: 'ultrasound', name: 'Ultrasound', description: 'Ultrasound imaging development', level: 1, isLeaf: true }
        ]
      },
      {
        slug: 'pathology',
        name: 'Pathology',
        description: 'Development of pathological studies',
        level: 0,
        isLeaf: false,
        children: [
          { slug: 'anatomical-pathology', name: 'Anatomical Pathology', description: 'Tissue and organ pathology', level: 1, isLeaf: true },
          { slug: 'clinical-pathology', name: 'Clinical Pathology', description: 'Laboratory-based pathology', level: 1, isLeaf: true },
          { slug: 'forensic-pathology', name: 'Forensic Pathology', description: 'Legal medicine pathology', level: 1, isLeaf: true }
        ]
      },
      { slug: 'laboratory', name: 'Laboratory Medicine', description: 'Evolution of lab diagnostics', level: 0, isLeaf: true },
      { slug: 'pharmacology', name: 'Pharmacology', description: 'History of drug development', level: 0, isLeaf: true },
      { slug: 'anesthesiology', name: 'Anesthesiology', description: 'Development of anesthesia', level: 0, isLeaf: true }
    ]
  }
];

// Recursive function to create sections and their children
async function createSection(sectionData, historySectionId, parentId = null) {
  try {
    // Create or upsert the current section/subsection
    const section = await prisma.subsection.upsert({
      where: { slug: sectionData.slug },
      update: {
        name: sectionData.name,
        description: sectionData.description,
        historySectionId: historySectionId,
        parentId: parentId,
        level: sectionData.level || 0,
        isLeaf: sectionData.isLeaf !== undefined ? sectionData.isLeaf : true
      },
      create: {
        slug: sectionData.slug,
        name: sectionData.name,
        description: sectionData.description,
        historySectionId: historySectionId,
        parentId: parentId,
        level: sectionData.level || 0,
        isLeaf: sectionData.isLeaf !== undefined ? sectionData.isLeaf : true
      }
    });

    const indent = '  '.repeat((sectionData.level || 0) + 1);
    console.log(`${indent}✓ Created/updated ${parentId ? 'child subsection' : 'subsection'}: ${sectionData.name}`);

    // Recursively create children if they exist
    if (sectionData.children && Array.isArray(sectionData.children) && sectionData.children.length > 0) {
      for (const child of sectionData.children) {
        await createSection(child, historySectionId, section.id);
      }
    }

    return section;
  } catch (error) {
    console.error(`✗ Failed to create section ${sectionData.name}:`, error.message);
    throw error;
  }
}

async function main() {
  console.log('Starting seed process for Para-Clinical history sections...');

  try {
    for (const historySection of paraClinicaHistoryData) {
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
    console.log('- History Section: Para-Clinical History');
    console.log('  - Top-level Subsections (5 items)');
    console.log('    - Radiology (with 4 children: X-Ray, CT Scan, MRI, Ultrasound)');
    console.log('    - Pathology (with 3 children: Anatomical, Clinical, Forensic Pathology)');
    console.log('    - 3 other leaf subsections: Laboratory Medicine, Pharmacology, Anesthesiology');
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
