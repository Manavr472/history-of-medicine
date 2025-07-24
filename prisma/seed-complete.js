const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

// Complete nested history sections data
const allHistorySections = [
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
  },
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
  },
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
  console.log('🚀 Starting complete seed process for all history sections...\n');

  try {
    let totalSections = 0;
    let totalSubsections = 0;
    let totalLeafNodes = 0;

    for (const historySection of allHistorySections) {
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

      console.log(`📚 Created/updated history section: ${historySection.name}`);
      totalSections++;

      // Create all subsections and their nested children
      for (const subsection of historySection.subsections) {
        await createSection(subsection, createdHistorySection.id);
        totalSubsections++;
        
        // Count leaf nodes
        if (subsection.isLeaf) {
          totalLeafNodes++;
        }
        if (subsection.children) {
          totalLeafNodes += subsection.children.filter(child => child.isLeaf).length;
        }
      }
      console.log(''); // Add spacing between sections
    }

    console.log('🎉 Complete seed process finished successfully!\n');
    console.log('📊 Summary:');
    console.log(`   • History Sections: ${totalSections}`);
    console.log(`   • Total Subsections: ${totalSubsections}`);
    console.log(`   • Leaf Nodes (can have blog posts): ${totalLeafNodes}`);
    console.log('\n📋 Created structure:');
    console.log('   1. Pre-Clinical History');
    console.log('      - Anatomy (4 children) + Physiology (4 children) + 3 leaf nodes');
    console.log('   2. Para-Clinical History');
    console.log('      - Radiology (4 children) + Pathology (3 children) + 3 leaf nodes');
    console.log('   3. Clinical History');
    console.log('      - Orthopedics (3 children) + Cardiology (2 children) + 8 leaf nodes');
    console.log('\n✅ All nested subsections ready for blog post creation!');

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
