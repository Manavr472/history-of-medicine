import { PrismaClient } from '../../generated/prisma';
import Link from "next/link";

const prisma = new PrismaClient();

export default async function HistoryLandingPage() {
  // Fetch all subsections from PostgreSQL
  const subsections = await prisma.subsection.findMany({
    orderBy: { name: 'asc' },
    include: {
      _count: {
        select: { blogPosts: true }
      }
    }
  });

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="milker text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          History of Medicine
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Explore the rich history of medical advances across different specialties
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subsections.map((section) => (
          <Link
            key={section.id}
            href={`/history/${section.slug}`}
            className="group block rounded-xl border border-green-200 dark:border-green-700 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-green-800 dark:text-green-300 group-hover:text-green-600 dark:group-hover:text-green-400 mb-2">
                  {section.name}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {section._count.blogPosts} {section._count.blogPosts === 1 ? 'article' : 'articles'}
                </p>
              </div>
              <span className="mt-auto inline-flex items-center text-green-600 dark:text-green-400 font-medium group-hover:underline">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      {subsections.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            No subsections found. Please check back later.
          </p>
        </div>
      )}
    </main>
  );
}
