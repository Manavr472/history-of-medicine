import { PrismaClient } from '../../generated/prisma';
import Link from "next/link";

const prisma = new PrismaClient();

export default async function HistoryLandingPage() {
  // Fetch all history sections with their subsections
  const historySections = await prisma.historySection.findMany({
    orderBy: { name: 'asc' },
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

  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="milker text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          History of Medicine
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Explore the rich history of medical advances across different specialties
        </p>
      </div>

      <div className="space-y-12">
        {historySections.map((historySection) => (
          <section key={historySection.id} className="mb-12">
            <div className="mb-8">
              <h2 className="milker text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                {historySection.name}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                {historySection.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {historySection.subsections.map((subsection) => {
                // Calculate total blog posts (from this subsection + all children)
                const totalPosts = subsection._count.blogPosts + 
                  (subsection.children?.reduce((acc, child) => acc + child._count.blogPosts, 0) || 0);

                return (
                  <Link
                    key={subsection.id}
                    href={`/history/${historySection.slug}/${subsection.slug}`}
                    className="group block rounded-xl border border-green-200 dark:border-green-700 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 group-hover:text-green-600 dark:group-hover:text-green-400 mb-2">
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
                      <span className="mt-auto inline-flex items-center text-green-600 dark:text-green-400 font-medium group-hover:underline">
                        Explore →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      
      {historySections.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            No history sections found. Please check back later.
          </p>
        </div>
      )}
    </main>
  );
}
