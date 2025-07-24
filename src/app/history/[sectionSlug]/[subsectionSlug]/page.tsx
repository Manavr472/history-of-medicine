import { PrismaClient } from '../../../../generated/prisma';
import { notFound } from "next/navigation";
import Link from "next/link";

const prisma = new PrismaClient();

interface PageProps {
  params: Promise<{ 
    sectionSlug: string;
    subsectionSlug: string;
  }>;
}

export default async function SubsectionPage({ params }: PageProps) {
  const { sectionSlug, subsectionSlug } = await params;

  // Find the history section first
  const historySection = await prisma.historySection.findUnique({
    where: { slug: sectionSlug },
  });

  if (!historySection) {
    return notFound();
  }

  // Find the subsection and its children/blog posts
  const subsectionData = await prisma.subsection.findFirst({
    where: { 
      slug: subsectionSlug,
      historySectionId: historySection.id
    },
    include: {
      historySection: true,
      parent: true,
      children: {
        orderBy: { name: 'asc' },
        include: {
          _count: {
            select: { blogPosts: true }
          }
        }
      },
      blogPosts: {
        where: { 
          published: true,
          status: 'PUBLISHED'
        },
        orderBy: { publishedAt: 'desc' },
        include: {
          author: {
            select: {
              name: true
            }
          }
        }
      },
      _count: {
        select: { blogPosts: true }
      }
    },
  });

  if (!subsectionData) {
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
          <span> › </span>
          <Link 
            href="/history"
            className="text-green-600 dark:text-green-400 hover:underline"
          >
            {subsectionData.historySection.name}
          </Link>
          <span> › </span>
          <span className="text-neutral-800 dark:text-neutral-200 font-medium">
            {subsectionData.name}
          </span>
        </div>
      </nav>

      {/* Section Header */}
      <header className="mb-8">
        <h1 className="milker text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          {subsectionData.name}
        </h1>
        {subsectionData.description && (
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
            {subsectionData.description}
          </p>
        )}
        <div className="text-sm text-neutral-500 dark:text-neutral-500">
          <span>Level {subsectionData.level}</span>
          {subsectionData.parent && (
            <>
              <span className="mx-2">•</span>
              <span>Part of {subsectionData.parent.name}</span>
            </>
          )}
        </div>
      </header>

      {/* Show children subsections if this is not a leaf node */}
      {!subsectionData.isLeaf && subsectionData.children.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
            Subcategories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsectionData.children.map((child) => (
              <Link
                key={child.id}
                href={`/history/${sectionSlug}/${child.slug}`}
                className="group block rounded-xl border border-blue-200 dark:border-blue-700 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                      {child.name}
                    </h3>
                    {child.description && (
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                        {child.description}
                      </p>
                    )}
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {child._count.blogPosts} {child._count.blogPosts === 1 ? 'article' : 'articles'}
                    </p>
                  </div>
                  <span className="mt-auto inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Show blog posts if this is a leaf node or has direct posts */}
      {subsectionData.blogPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
            Articles {subsectionData.isLeaf ? '' : '(Direct Posts)'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsectionData.blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/history/${sectionSlug}/${subsectionSlug}/${post.id}`}
                className="group block rounded-xl border border-green-200 dark:border-green-700 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 group-hover:text-green-600 dark:group-hover:text-green-400 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    {post.summary && (
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 mb-3">
                        {post.summary}
                      </p>
                    )}
                    <div className="text-xs text-neutral-500 dark:text-neutral-500">
                      {post.author && <span>By {post.author.name}</span>}
                      {post.publishedAt && (
                        <span className="block">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="mt-auto inline-flex items-center text-green-600 dark:text-green-400 font-medium group-hover:underline">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {subsectionData.isLeaf && subsectionData.blogPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            No articles found in this section yet. Check back later for new content!
          </p>
        </div>
      )}

      {!subsectionData.isLeaf && subsectionData.children.length === 0 && subsectionData.blogPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            This section is being organized. Please check back later!
          </p>
        </div>
      )}
    </main>
  );
}
