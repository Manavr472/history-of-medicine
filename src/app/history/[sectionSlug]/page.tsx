import { PrismaClient } from '../../../generated/prisma';
import { notFound } from "next/navigation";
import Link from "next/link";

const prisma = new PrismaClient();

interface PageProps {
  params: Promise<{ 
    sectionSlug: string;
  }>;
}

export default async function HistorySectionPage({ params }: PageProps) {
  const { sectionSlug } = await params;

  // Find the specific history section with its subsections
  const historySection = await prisma.historySection.findUnique({
    where: { slug: sectionSlug },
    include: {
      subsections: {
        where: { level: 0 }, // Only top-level subsections
        orderBy: { name: 'asc' },
        include: {
          _count: {
            select: { blogPosts: true }
          },
          children: {
            include: {
              _count: {
                select: { blogPosts: true }
              }
            }
          }
        }
      }
    }
  });

  if (!historySection) {
    return notFound();
  }

  return (
    <main className="max-w-6xl mx-auto p-6">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm">
        <div className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400">
          <Link 
            href="/history"
            className="text-green-600 dark:text-green-400 hover:underline"
          >
            History
          </Link>
          <span>›</span>
          <span className="text-neutral-800 dark:text-neutral-200 font-medium">
            {historySection.name}
          </span>
        </div>
      </nav>

      {/* Section Header with Color Coding */}
      <div className="text-center mb-12">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
          historySection.slug === 'preclinical' ? 'bg-blue-100 dark:bg-blue-900' :
          historySection.slug === 'paraclinical' ? 'bg-purple-100 dark:bg-purple-900' :
          'bg-green-100 dark:bg-green-900'
        }`}>
          <span className={`text-2xl font-bold ${
            historySection.slug === 'preclinical' ? 'text-blue-600 dark:text-blue-400' :
            historySection.slug === 'paraclinical' ? 'text-purple-600 dark:text-purple-400' :
            'text-green-600 dark:text-green-400'
          }`}>
            {historySection.slug === 'preclinical' ? '🔬' :
             historySection.slug === 'paraclinical' ? '🩺' : '⚕️'}
          </span>
        </div>
        <h1 className="milker text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          {historySection.name}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
          {historySection.description}
        </p>
        <div className="text-sm text-neutral-500 dark:text-neutral-500">
          {historySection.subsections.length} subsections available
        </div>
      </div>

      {/* Subsections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {historySection.subsections.map((subsection) => {
          // Calculate total blog posts (from this subsection + all children)
          const totalPosts = subsection._count.blogPosts + 
            (subsection.children?.reduce((acc, child) => acc + child._count.blogPosts, 0) || 0);

          // Color scheme based on section type
          const colorScheme = historySection.slug === 'preclinical' ? 'blue' :
                              historySection.slug === 'paraclinical' ? 'purple' : 'green';

          return (
            <Link
              key={subsection.id}
              href={`/history/${historySection.slug}/${subsection.slug}`}
              className={`group block rounded-xl border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                colorScheme === 'blue' ? 'border-blue-200 dark:border-blue-700 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900' :
                colorScheme === 'purple' ? 'border-purple-200 dark:border-purple-700 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900' :
                'border-green-200 dark:border-green-700 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900'
              }`}
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    colorScheme === 'blue' ? 'text-blue-800 dark:text-blue-300 group-hover:text-blue-600 dark:group-hover:text-blue-400' :
                    colorScheme === 'purple' ? 'text-purple-800 dark:text-purple-300 group-hover:text-purple-600 dark:group-hover:text-purple-400' :
                    'text-green-800 dark:text-green-300 group-hover:text-green-600 dark:group-hover:text-green-400'
                  }`}>
                    {subsection.name}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {subsection.description}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {totalPosts} {totalPosts === 1 ? 'article' : 'articles'}
                    {subsection.children && subsection.children.length > 0 && (
                      <span className="text-xs text-neutral-500 block mt-1">
                        {subsection.children.length} subcategories
                      </span>
                    )}
                  </p>
                </div>
                <span className={`mt-auto inline-flex items-center font-medium group-hover:underline ${
                  colorScheme === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                  colorScheme === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                  'text-green-600 dark:text-green-400'
                }`}>
                  Explore →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      
      {historySection.subsections.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            No subsections found in this history section. Please check back later.
          </p>
        </div>
      )}
    </main>
  );
}
