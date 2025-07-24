const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
  console.log('Creating history sections and nested subsections...');

  // Create history sections with their nested subsection structure
  const historySections = [
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
          slug: 'surgery',
          name: 'Surgery',
          description: 'Evolution of surgical techniques',
          level: 0,
          isLeaf: false,
          children: [
            { slug: 'general-surgery', name: 'General Surgery', description: 'General surgical procedures', level: 1, isLeaf: true },
            { slug: 'cardiac-surgery', name: 'Cardiac Surgery', description: 'Heart surgery developments', level: 1, isLeaf: true },
            { slug: 'neurosurgery', name: 'Neurosurgery', description: 'Brain and nervous system surgery', level: 1, isLeaf: true },
            { slug: 'orthopedic-surgery', name: 'Orthopedic Surgery', description: 'Bone and joint surgery', level: 1, isLeaf: true },
            { slug: 'plastic-surgery', name: 'Plastic Surgery', description: 'Reconstructive and cosmetic surgery', level: 1, isLeaf: true }
          ]
        },
        {
          slug: 'internal-medicine',
          name: 'Internal Medicine',
          description: 'Development of internal medicine',
          level: 0,
          isLeaf: false,
          children: [
            { slug: 'cardiology', name: 'Cardiology', description: 'Heart disease treatment', level: 1, isLeaf: true },
            { slug: 'gastroenterology', name: 'Gastroenterology', description: 'Digestive system medicine', level: 1, isLeaf: true },
            { slug: 'endocrinology', name: 'Endocrinology', description: 'Hormone-related disorders', level: 1, isLeaf: true },
            { slug: 'nephrology', name: 'Nephrology', description: 'Kidney disease treatment', level: 1, isLeaf: true }
          ]
        },
        { slug: 'diagnosis', name: 'Diagnosis', description: 'Development of diagnostic methods', level: 0, isLeaf: true },
        { slug: 'patient-care', name: 'Patient Care', description: 'History of patient care practices', level: 0, isLeaf: true },
        { slug: 'medical-ethics', name: 'Medical Ethics', description: 'Evolution of medical ethics', level: 0, isLeaf: true }
      ]
    }
  ];

  for (const section of historySections) {
    try {
      // Create or update history section
      const historySection = await prisma.historySection.upsert({
        where: { slug: section.slug },
        update: {
          name: section.name,
          description: section.description
        },
        create: {
          slug: section.slug,
          name: section.name,
          description: section.description
        }
      });
      
      console.log(`✓ Created/updated history section: ${section.name}`);

      // Create top-level subsections
      for (const subsection of section.subsections) {
        try {
          const parentSubsection = await prisma.subsection.upsert({
            where: { slug: subsection.slug },
            update: {
              name: subsection.name,
              description: subsection.description,
              historySectionId: historySection.id,
              level: subsection.level,
              isLeaf: subsection.isLeaf
            },
            create: {
              slug: subsection.slug,
              name: subsection.name,
              description: subsection.description,
              historySectionId: historySection.id,
              level: subsection.level,
              isLeaf: subsection.isLeaf
            }
          });
          console.log(`  ✓ Created/updated subsection: ${subsection.name}`);

          // Create child subsections if they exist
          if (subsection.children) {
            for (const child of subsection.children) {
              try {
                await prisma.subsection.upsert({
                  where: { slug: child.slug },
                  update: {
                    name: child.name,
                    description: child.description,
                    historySectionId: historySection.id,
                    parentId: parentSubsection.id,
                    level: child.level,
                    isLeaf: child.isLeaf
                  },
                  create: {
                    slug: child.slug,
                    name: child.name,
                    description: child.description,
                    historySectionId: historySection.id,
                    parentId: parentSubsection.id,
                    level: child.level,
                    isLeaf: child.isLeaf
                  }
                });
                console.log(`    ✓ Created/updated child subsection: ${child.name}`);
              } catch (error) {
                console.log(`    ✗ Failed to create child subsection ${child.name}:`, error.message);
              }
            }
          }
        } catch (error) {
          console.log(`  ✗ Failed to create subsection ${subsection.name}:`, error.message);
        }
      }
    } catch (error) {
      console.log(`✗ Failed to create history section ${section.name}:`, error.message);
    }
  }

  console.log('\nSeed completed successfully!');
  console.log('Created nested subsection structure:');
  console.log('- History Sections (3): Pre-Clinical, Para-Clinical, Clinical');
  console.log('  - Top-level Subsections');
  console.log('    - Child Subsections (only leaf subsections can have blog posts)');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
