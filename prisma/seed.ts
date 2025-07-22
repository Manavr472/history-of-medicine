import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create subsections
  const preclinical = await prisma.subsection.upsert({
    where: { slug: 'preclinical' },
    update: {},
    create: {
      slug: 'preclinical',
      name: 'Pre-Clinical',
    },
  });

  const clinical = await prisma.subsection.upsert({
    where: { slug: 'clinical' },
    update: {},
    create: {
      slug: 'clinical',
      name: 'Clinical',
    },
  });

  const paraclinical = await prisma.subsection.upsert({
    where: { slug: 'paraclinical' },
    update: {},
    create: {
      slug: 'paraclinical',
      name: 'Para-Clinical',
    },
  });

  console.log('Created subsections:', { preclinical, clinical, paraclinical });

  // Create some sample blog posts
  const blogPosts = await Promise.all([
    prisma.blogPost.create({
      data: {
        title: 'Introduction to Pre-Clinical Studies',
        content: '<p>This is a comprehensive introduction to pre-clinical studies in medical history.</p><p>Pre-clinical studies form the foundation of modern medical research...</p>',
        summary: 'A comprehensive introduction to pre-clinical studies and their importance in medical history.',
        published: true,
        subsectionId: preclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Early Clinical Trials',
        content: '<p>The history of clinical trials dates back to ancient times...</p><p>Modern clinical trials have evolved significantly...</p>',
        summary: 'Exploring the evolution of clinical trials throughout medical history.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Laboratory Medicine Evolution',
        content: '<p>The development of laboratory medicine has been crucial to modern healthcare...</p>',
        summary: 'Understanding the evolution of laboratory medicine and diagnostic testing.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Advancements in Pre-Clinical Research',
        content: '<p>Recent advancements in pre-clinical research have transformed drug development...</p>',
        summary: 'Recent advancements in pre-clinical research and their impact on drug development.',
        published: true,
        subsectionId: preclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Clinical Trials in the 21st Century',
        content: '<p>Clinical trials have become more complex and regulated...</p>',
        summary: 'An overview of modern clinical trials and their regulatory landscape.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'The Role of Paraclinical Tests',
        content: '<p>Paraclinical tests play a crucial role in diagnosing and managing diseases...</p>',
        summary: 'The importance of paraclinical tests in modern medicine.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Historical Perspectives on Medical Research',
        content: '<p>Medical research has a rich history that informs current practices...</p>',
        summary: 'A historical overview of medical research and its evolution.',
        published: true,
        subsectionId: preclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Clinical Research Methodologies',
        content: '<p>Understanding the methodologies used in clinical research is essential...</p>',
        summary: 'An exploration of various clinical research methodologies.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Paraclinical Innovations',
        content: '<p>Innovations in paraclinical testing have improved patient outcomes...</p>',
        summary: 'Recent innovations in paraclinical testing and their implications.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'The Future of Pre-Clinical Research',
        content: '<p>Future trends in pre-clinical research promise to enhance drug discovery...</p>',
        summary: 'Future trends in pre-clinical research and their potential impact.',
        published: true,
        subsectionId: preclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Ethics in Clinical Trials',
        content: '<p>Ethical considerations are paramount in clinical trials...</p>',
        summary: 'An overview of ethical considerations in clinical trials.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Paraclinical Testing in Modern Medicine',
        content: '<p>Paraclinical testing is integral to modern diagnostic practices...</p>',
        summary: 'The role of paraclinical testing in modern medicine.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Integrating Pre-Clinical and Clinical Research',
        content: '<p>Integrating pre-clinical and clinical research is essential for effective drug development...</p>',
        summary: 'The importance of integrating pre-clinical and clinical research.',
        published: true,
        subsectionId: preclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Clinical Trials: Past, Present, and Future',
        content: '<p>Clinical trials have evolved significantly over the decades...</p>',
        summary: 'A retrospective look at clinical trials and their future directions.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Advancements in Paraclinical Research',
        content: '<p>Paraclinical research has seen significant advancements in recent years...</p>',
        summary: 'Recent advancements in paraclinical research and their implications.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'The Role of Biomarkers in Clinical Research',
        content: '<p>Biomarkers play a crucial role in the development of new therapies...</p>',
        summary: 'An exploration of the role of biomarkers in clinical research.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Pre-Clinical Models in Drug Development',
        content: '<p>Pre-clinical models are essential for testing new drugs...</p>',
        summary: 'The importance of pre-clinical models in drug development.',
        published: true,
        subsectionId: preclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'The Impact of Technology on Paraclinical Testing',
        content: '<p>Technology has revolutionized paraclinical testing...</p>',
        summary: 'How technology is transforming paraclinical testing.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Clinical Research in the Digital Age',
        content: '<p>Digital tools are reshaping clinical research methodologies...</p>',
        summary: 'The impact of digital tools on clinical research.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Ethical Challenges in Paraclinical Research',
        content: '<p>Paraclinical research presents unique ethical challenges...</p>',
        summary: 'An overview of ethical challenges in paraclinical research.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Future Directions in Pre-Clinical Research',
        content: '<p>Future directions in pre-clinical research promise to enhance our understanding of diseases...</p>',
        summary: 'Exploring future directions in pre-clinical research.',
        published: true,
        subsectionId: preclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Clinical Trials and Patient Safety',
        content: '<p>Ensuring patient safety is a top priority in clinical trials...</p>',
        summary: 'The importance of patient safety in clinical trials.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Paraclinical Research and Disease Management',
        content: '<p>Paraclinical research plays a crucial role in managing diseases...</p>',
        summary: 'The role of paraclinical research in disease management.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Integrating Technology in Pre-Clinical Research',
        content: '<p>Technology integration is transforming pre-clinical research...</p>',
        summary: 'How technology is enhancing pre-clinical research.',
        published: true,
        subsectionId: preclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Clinical Research and Global Health',
        content: '<p>Clinical research has a significant impact on global health...</p>',
        summary: 'The role of clinical research in improving global health outcomes.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Paraclinical Testing Innovations',
        content: '<p>Innovations in paraclinical testing are improving diagnostic accuracy...</p>',
        summary: 'Recent innovations in paraclinical testing and their benefits.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'The Future of Clinical Trials',
        content: '<p>The future of clinical trials is being shaped by new technologies and methodologies...</p>',
        summary: 'Exploring the future of clinical trials and emerging trends.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Pre-Clinical Research and Drug Safety',
        content: '<p>Pre-clinical research is essential for ensuring drug safety...</p>',
        summary: 'The importance of pre-clinical research in ensuring drug safety.',
        published: true,
        subsectionId: preclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Paraclinical Research and Patient Care',
        content: '<p>Paraclinical research is integral to patient care and treatment decisions...</p>',
        summary: 'The role of paraclinical research in enhancing patient care.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Clinical Trials and Regulatory Challenges',
        content: '<p>Regulatory challenges are a significant aspect of clinical trials...</p>',
        summary: 'An overview of regulatory challenges in clinical trials.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Advancements in Pre-Clinical Drug Testing',
        content: '<p>Advancements in pre-clinical drug testing are paving the way for new therapies...</p>',
        summary: 'Recent advancements in pre-clinical drug testing and their implications.',
        published: true,
        subsectionId: preclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'The Role of Paraclinical Research in Diagnostics',
        content: '<p>Paraclinical research is crucial for accurate diagnostics...</p>',
        summary: 'Understanding the role of paraclinical research in diagnostics.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Clinical Research and Patient Engagement',
        content: '<p>Patient engagement is becoming increasingly important in clinical research...</p>',
        summary: 'The significance of patient engagement in clinical research.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Future Trends in Paraclinical Testing',
        content: '<p>Future trends in paraclinical testing promise to enhance diagnostic capabilities...</p>',
        summary: 'Exploring future trends in paraclinical testing.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Integrating Pre-Clinical and Clinical Data',
        content: '<p>Integrating pre-clinical and clinical data is essential for comprehensive research...</p>',
        summary: 'The importance of integrating pre-clinical and clinical data.',
        published: true,
        subsectionId: preclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Clinical Trials and Data Transparency',
        content: '<p>Data transparency is a critical aspect of clinical trials...</p>',
        summary: 'The importance of data transparency in clinical trials.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Paraclinical Research and Emerging Diseases',
        content: '<p>Paraclinical research plays a vital role in understanding emerging diseases...</p>',
        summary: 'The role of paraclinical research in addressing emerging diseases.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'The Evolution of Pre-Clinical Research',
        content: '<p>Pre-clinical research has evolved significantly over the years...</p>',
        summary: 'A retrospective look at the evolution of pre-clinical research.',
        published: true,
        subsectionId: preclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Clinical Trials and Global Collaboration',
        content: '<p>Global collaboration is essential for the success of clinical trials...</p>',
        summary: 'The importance of global collaboration in clinical trials.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Paraclinical Testing and Personalized Medicine',
        content: '<p>Paraclinical testing is integral to the development of personalized medicine...</p>',
        summary: 'The role of paraclinical testing in advancing personalized medicine.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Pre-Clinical Research and Innovation',
        content: '<p>Innovation in pre-clinical research is driving new discoveries...</p>',
        summary: 'How innovation is shaping the future of pre-clinical research.',
        published: true,
        subsectionId: preclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Clinical Research and Health Equity',
        content: '<p>Health equity is a critical consideration in clinical research...</p>',
        summary: 'The importance of health equity in clinical research.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Paraclinical Research and Technological Advances',
        content: '<p>Technological advances are transforming paraclinical research...</p>',
        summary: 'The impact of technological advances on paraclinical research.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'The Future of Paraclinical Research',
        content: '<p>The future of paraclinical research is promising, with advancements in technology...</p>',
        summary: 'Exploring future trends in paraclinical research.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Clinical Trials and Patient-Centric Approaches',
        content: '<p>Patient-centric approaches are becoming increasingly important in clinical trials...</p>',
        summary: 'The significance of patient-centric approaches in clinical trials.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Pre-Clinical Research and Drug Development',
        content: '<p>Pre-clinical research is a critical step in the drug development process...</p>',
        summary: 'The role of pre-clinical research in drug development.',
        published: true,
        subsectionId: preclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Paraclinical Testing and Disease Prevention',
        content: '<p>Paraclinical testing plays a crucial role in disease prevention...</p>',
        summary: 'The importance of paraclinical testing in disease prevention.',
        published: true,
        subsectionId: paraclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Clinical Research and Innovation',
        content: '<p>Innovation in clinical research is driving new therapies and treatments...</p>',
        summary: 'How innovation is shaping the future of clinical research.',
        published: true,
        subsectionId: clinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Integrating Pre-Clinical and Clinical Research',
        content: '<p>Integrating pre-clinical and clinical research is essential for comprehensive medical advancements...</p>',
        summary: 'The importance of integrating pre-clinical and clinical research.',
        published: true,
        subsectionId: preclinical.id,
      },
    }),
    prisma.blogPost.create({
      data: {
        title: 'Paraclinical Research and Patient Outcomes',
        content: '<p>Paraclinical research is integral to improving patient outcomes...</p>',
        summary: 'The role of paraclinical research in enhancing patient outcomes.',
        published: true,
        subsectionId: paraclinical.id,
      },
    })
  ]);

  console.log('Created blog posts:', blogPosts.length);
  console.log('Seeding completed!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
