const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function verifySeededData() {
  console.log('Verifying seeded data...\n');

  try {
    // Get all history sections with their nested subsections
    const historySections = await prisma.historySection.findMany({
      include: {
        subsections: {
          include: {
            children: true,
            parent: true
          },
          orderBy: [
            { level: 'asc' },
            { name: 'asc' }
          ]
        }
      }
    });

    for (const section of historySections) {
      console.log(`📚 History Section: ${section.name}`);
      console.log(`   Slug: ${section.slug}`);
      console.log(`   Description: ${section.description}`);
      console.log(`   Total Subsections: ${section.subsections.length}\n`);

      // Group subsections by level for better visualization
      const topLevel = section.subsections.filter(s => s.level === 0);
      const childLevel = section.subsections.filter(s => s.level === 1);

      console.log(`   📁 Top-level Subsections (${topLevel.length}):`);
      for (const subsection of topLevel) {
        console.log(`     • ${subsection.name} (${subsection.slug})`);
        console.log(`       Level: ${subsection.level}, IsLeaf: ${subsection.isLeaf}`);
        
        // Show children
        const children = childLevel.filter(c => c.parentId === subsection.id);
        if (children.length > 0) {
          console.log(`       Children (${children.length}):`);
          for (const child of children) {
            console.log(`         ◦ ${child.name} (${child.slug}) - IsLeaf: ${child.isLeaf}`);
          }
        }
        console.log('');
      }
    }

    // Show leaf nodes (where blog posts can be attached)
    console.log('\n🍃 Leaf Subsections (can have blog posts):');
    const leafSubsections = await prisma.subsection.findMany({
      where: { isLeaf: true },
      include: {
        historySection: true,
        parent: true
      },
      orderBy: { name: 'asc' }
    });

    for (const leaf of leafSubsections) {
      const hierarchy = leaf.parent ? 
        `${leaf.historySection.name} → ${leaf.parent.name} → ${leaf.name}` :
        `${leaf.historySection.name} → ${leaf.name}`;
      console.log(`   • ${hierarchy}`);
    }

    console.log(`\n✅ Total leaf subsections: ${leafSubsections.length}`);

  } catch (error) {
    console.error('❌ Error verifying data:', error);
  } finally {
    await prisma.$disconnect();
    console.log('\n✓ Database connection closed');
  }
}

verifySeededData();
