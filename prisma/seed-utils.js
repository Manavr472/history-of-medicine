const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

/**
 * Generic recursive function to create nested history sections and subsections
 * @param {Object} sectionData - The section data with potential children
 * @param {string} historySectionId - The parent history section ID
 * @param {string|null} parentId - The parent subsection ID (null for top-level)
 * @returns {Promise<Object>} The created subsection
 */
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

/**
 * Main seeding function for nested history sections
 * @param {Array} historySectionsData - Array of history sections with nested subsections
 */
async function seedHistorySections(historySectionsData) {
  console.log('Starting seed process for nested history sections...');

  try {
    for (const historySection of historySectionsData) {
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
      if (historySection.subsections && Array.isArray(historySection.subsections)) {
        for (const subsection of historySection.subsections) {
          await createSection(subsection, createdHistorySection.id);
        }
      }
    }

    console.log('\n🎉 Seed completed successfully!');
    
    // Display summary
    for (const section of historySectionsData) {
      console.log(`- History Section: ${section.name}`);
      if (section.subsections) {
        const topLevelCount = section.subsections.length;
        const withChildrenCount = section.subsections.filter(s => s.children && s.children.length > 0).length;
        console.log(`  - Top-level Subsections: ${topLevelCount}`);
        if (withChildrenCount > 0) {
          console.log(`  - Subsections with children: ${withChildrenCount}`);
        }
      }
    }
    console.log('\nNote: Only leaf subsections (isLeaf: true) can have blog posts attached.');

  } catch (error) {
    console.error('❌ Seed process failed:', error);
    throw error;
  }
}

// Example usage with the clinical history data:
const clinicalHistoryData = [
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

// Execute the seeding if this file is run directly
if (require.main === module) {
  seedHistorySections(clinicalHistoryData)
    .catch((e) => {
      console.error('Fatal error during seeding:', e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
      console.log('✓ Database connection closed');
    });
}

// Export functions for reuse
module.exports = {
  seedHistorySections,
  createSection,
  clinicalHistoryData
};
