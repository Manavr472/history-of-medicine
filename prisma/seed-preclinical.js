const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

// Pre-Clinical History data with nested structure
const preClinicaHistoryData = [
  {
    slug: 'preclinical',
    name: 'Pre-Clinical History',
    description: 'Basic medical sciences and early medical education',
    subsections: [
      {
        slug: 'anatomy',
        name: 'Anatomy',
        description: 'History of anatomical studies',
        level: 0,
        isLeaf: false,
        children: [
          { slug: 'gross-anatomy', name: 'Gross Anatomy', description: 'Macroscopic anatomy studies', level: 1, isLeaf: true },
          { slug: 'histology', name: 'Histology', description: 'Microscopic tissue studies', level: 1, isLeaf: true },
          { slug: 'embryology', name: 'Embryology', description: 'Development anatomy', level: 1, isLeaf: true },
          { slug: 'neuroanatomy', name: 'Neuroanatomy', description: 'Nervous system anatomy', level: 1, isLeaf: true }
        ]
      },
      {
        slug: 'physiology',
        name: 'Physiology',
        description: 'Development of physiological understanding',
        level: 0,
        isLeaf: false,
        children: [
          { slug: 'cardiovascular-physiology', name: 'Cardiovascular Physiology', description: 'Heart and circulation function', level: 1, isLeaf: true },
          { slug: 'respiratory-physiology', name: 'Respiratory Physiology', description: 'Lung and breathing function', level: 1, isLeaf: true },
          { slug: 'renal-physiology', name: 'Renal Physiology', description: 'Kidney function studies', level: 1, isLeaf: true },
          { slug: 'neurophysiology', name: 'Neurophysiology', description: 'Nervous system function', level: 1, isLeaf: true }
        ]
      },
      { slug: 'biochemistry', name: 'Biochemistry', description: 'Evolution of biochemical knowledge', level: 0, isLeaf: true },
      { slug: 'microbiology', name: 'Microbiology', description: 'History of microbiological discoveries', level: 0, isLeaf: true },
      { slug: 'medical-education', name: 'Medical Education', description: 'Evolution of medical training', level: 0, isLeaf: true }
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
  console.log('Starting seed process for Pre-Clinical history sections...');

  try {
    for (const historySection of preClinicaHistoryData) {
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
    console.log('- History Section: Pre-Clinical History');
    console.log('  - Top-level Subsections (5 items)');
    console.log('    - Anatomy (with 4 children: Gross Anatomy, Histology, Embryology, Neuroanatomy)');
    console.log('    - Physiology (with 4 children: Cardiovascular, Respiratory, Renal, Neurophysiology)');
    console.log('    - 3 other leaf subsections: Biochemistry, Microbiology, Medical Education');
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
