import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

// Pre-Clinical History data with nested structure
const preClinicalHistoryData = [
  {
    slug: 'preclinical',
    name: 'Pre-Clinical History',
    description: 'Basic medical sciences and early medical education',
    subsections: [
      { slug: 'anatomy', name: 'Anatomy', description: 'History of anatomical studies', level: 0, isLeaf: true },
      { slug: 'physiology', name: 'Physiology', description: 'Development of physiological understanding', level: 0, isLeaf: true },
      { slug: 'biochemistry', name: 'Biochemistry', description: 'Evolution of biochemical knowledge', level: 0, isLeaf: true }
    ]
  }
];

// Para-Clinical History data with nested structure
const paraClinicalHistoryData = [
  {
    slug: 'paraclinical',
    name: 'Para-Clinical History',
    description: 'Supporting medical sciences and diagnostics',
    subsections: [
      { slug: 'microbiology', name: 'Microbiology', description: 'History of microbiological discoveries', level: 0, isLeaf: true },
      { slug: 'pathology', name: 'Pathology', description: 'Development of pathological studies', level: 0, isLeaf: true },
      { slug: 'pharmacology', name: 'Pharmacology', description: 'History of drug development', level: 0, isLeaf: true },
      { slug: 'forensic-medicine', name: 'Forensic Medicine', description: 'Evolution of legal medicine', level: 0, isLeaf: true }
    ]
  }
];

// Clinical History data with nested structure
const clinicalHistoryData = [
  {
    slug: 'clinical',
    name: 'Clinical History',
    description: 'Medical practices and clinical developments',
    subsections: [
      {
        slug: 'medicine-allied',
        name: 'Medicine & Allied',
        description: 'Internal medicine and related specialties',
        level: 0,
        isLeaf: false,
        children: [
          { slug: 'general-medicine', name: 'General Medicine', description: 'History of internal medicine', level: 1, isLeaf: true },
          { slug: 'psychiatry', name: 'Psychiatry', description: 'Mental health and psychiatric care', level: 1, isLeaf: true },
          { slug: 'radiology', name: 'Radiology', description: 'History of medical imaging', level: 1, isLeaf: true },
          { slug: 'dermatology', name: 'Dermatology', description: 'Skin and dermatological conditions', level: 1, isLeaf: true }
        ]
      },
      {
        slug: 'surgical-allied',
        name: 'Surgical & Allied',
        description: 'Surgical specialties and procedures',
        level: 0,
        isLeaf: false,
        children: [
          { slug: 'general-surgery', name: 'General Surgery', description: 'History of general surgical procedures', level: 1, isLeaf: true },
          { slug: 'orthopaedics', name: 'Orthopaedics', description: 'Bone and musculoskeletal surgery', level: 1, isLeaf: true },
          { slug: 'otorhinolaryngology', name: 'Otorhinolaryngology', description: 'ENT (Ear, Nose, Throat) medicine', level: 1, isLeaf: true },
          { slug: 'ophthalmology', name: 'Ophthalmology', description: 'Eye care and vision medicine', level: 1, isLeaf: true },
          { slug: 'obstetrics-gynaecology', name: 'Obstetrics & Gynaecology', description: 'Women\'s health and reproductive medicine', level: 1, isLeaf: true }
        ]
      }
    ]
  }
];

interface SubsectionData {
  slug: string;
  name: string;
  description: string;
  level: number;
  isLeaf: boolean;
  children?: SubsectionData[];
}

interface HistorySectionData {
  slug: string;
  name: string;
  description: string;
  subsections: SubsectionData[];
}

// Recursive function to create sections and their children
async function createSection(
  sectionData: SubsectionData,
  historySectionId: string,
  parentId?: string
): Promise<any> {
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

    const indent = '  '.repeat(sectionData.level + 1);
    console.log(`${indent}✓ Created/updated ${parentId ? 'child subsection' : 'subsection'}: ${sectionData.name}`);

    // Recursively create children if they exist
    if (sectionData.children && sectionData.children.length > 0) {
      for (const child of sectionData.children) {
        await createSection(child, historySectionId, section.id);
      }
    }

    return section;
  } catch (error) {
    console.error(`✗ Failed to create section ${sectionData.name}:`, error);
    throw error;
  }
}

async function seedHistorySections(historySectionsData: HistorySectionData[]) {
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
      for (const subsection of historySection.subsections) {
        await createSection(subsection, createdHistorySection.id);
      }
    }

    console.log('\n🎉 Seed completed successfully!');
  } catch (error) {
    console.error('❌ Seed process failed:', error);
    throw error;
  }
}

async function main() {
  console.log('🚀 Starting comprehensive seed for Pre-Clinical and Para-Clinical sections...\n');

  try {
    // Seed Pre-Clinical sections
    await seedHistorySections(preClinicalHistoryData);
    console.log('');
    
    // Seed Para-Clinical sections  
    await seedHistorySections(paraClinicalHistoryData);
    console.log('');
    
    // Seed Clinical sections
    await seedHistorySections(clinicalHistoryData);

    console.log('\n📊 All three history sections seeded successfully!');
    console.log('   1. Pre-Clinical History: Anatomy, Physiology, Biochemistry (3 leaf nodes)');
    console.log('   2. Para-Clinical History: Microbiology, Pathology, Pharmacology, Forensic Medicine (4 leaf nodes)'); 
    console.log('   3. Clinical History: Medicine & Allied (4 children), Surgical & Allied (5 children)');
    console.log('      - Medicine & Allied: General Medicine, Psychiatry, Radiology, Dermatology');
    console.log('      - Surgical & Allied: General Surgery, Orthopaedics, ENT, Ophthalmology, Obs & Gynae');

  } catch (error) {
    console.error('Fatal error during seeding:', error);
    throw error;
  }
}

// Only run main if this file is executed directly
if (require.main === module) {
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
      console.log('✓ Database connection closed');
    });
}

// Export for reuse
export {
  preClinicalHistoryData,
  paraClinicalHistoryData, 
  clinicalHistoryData,
  seedHistorySections,
  createSection,
  main
};
