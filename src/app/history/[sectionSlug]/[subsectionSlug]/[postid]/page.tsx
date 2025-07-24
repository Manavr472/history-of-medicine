import { PrismaClient } from '../../../../../generated/prisma';
import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";

const prisma = new PrismaClient();

// Helper function to build breadcrumb path for nested subsections
function buildBreadcrumbPath(subsection: any, sectionSlug: string, currentSubsectionSlug: string): Array<{name: string, slug: string, href: string}> {
  const path = [];
  let current = subsection;
  
  // Build path from current subsection up to root
  while (current) {
    // All subsections use the flat URL structure: /history/[sectionSlug]/[subsectionSlug]
    const href = `/history/${sectionSlug}/${current.slug}`;
    
    path.unshift({
      name: current.name,
      slug: current.slug,
      href: href
    });
    current = current.parent;
  }
  
  return path;
}

interface PageProps {
  params: Promise<{ 
    sectionSlug: string;
    subsectionSlug: string;
    postid: string;
  }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { sectionSlug, subsectionSlug, postid } = await params;

  // Fetch the blog post with all related data
  const blog = await prisma.blogPost.findFirst({
    where: {
      id: postid,
      subsection: {
        slug: subsectionSlug,
        historySection: {
          slug: sectionSlug
        }
      },
      published: true,
      status: 'PUBLISHED'
    },
    include: {
      subsection: {
        include: {
          historySection: true,
          parent: {
            include: {
              parent: {
                include: {
                  parent: {
                    include: {
                      parent: true // Support up to 5 levels of nesting
                    }
                  }
                }
              }
            }
          }
        }
      },
      author: {
        select: {
          name: true,
          role: true
        }
      },
      images: {
        orderBy: { createdAt: 'asc' }
      }
    },
  });

  if (!blog) {
    return notFound();
  }

  // Build the complete breadcrumb path
  const breadcrumbPath = buildBreadcrumbPath(blog.subsection, sectionSlug, subsectionSlug);

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm">
        <div className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400 flex-wrap">
          <Link 
            href="/history"
            className="text-green-600 dark:text-green-400 hover:underline"
          >
            History
          </Link>
          <span>›</span>
          <Link 
            href={`/history/${sectionSlug}`}
            className="text-green-600 dark:text-green-400 hover:underline"
          >
            {blog.subsection.historySection.name}
          </Link>
          {/* Render complete breadcrumb path for nested subsections */}
          {breadcrumbPath.map((item, index) => (
            <React.Fragment key={item.slug}>
              <span>›</span>
              <Link 
                href={item.href}
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                {item.name}
              </Link>
            </React.Fragment>
          ))}
          <span>›</span>
          <span className="text-neutral-800 dark:text-neutral-200 font-medium truncate">
            {blog.title}
          </span>
        </div>
      </nav>

      {/* Blog Post Header */}
      <header className="mb-8">
        <h1 className="milker text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          {blog.title}
        </h1>
        
        {blog.summary && (
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
            {blog.summary}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500 mb-6">
          <div className="flex items-center gap-2">
            <span>Published in</span>
            <Link 
              href={`/history/${sectionSlug}/${subsectionSlug}`}
              className="text-green-600 dark:text-green-400 hover:underline font-medium"
            >
              {blog.subsection.name}
            </Link>
          </div>
          
          {blog.author && (
            <div className="flex items-center gap-2">
              <span>by</span>
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                {blog.author.name}
              </span>
              {blog.author.role !== 'VIEWER' && (
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                  {blog.author.role.toLowerCase()}
                </span>
              )}
            </div>
          )}

          {blog.publishedAt && (
            <time dateTime={blog.publishedAt.toISOString()}>
              {blog.publishedAt.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}

          {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
            <span className="text-xs">
              Updated {blog.updatedAt.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
          )}
        </div>

        {/* Blog Status Indicator (for debugging/admin) */}
        {blog.status !== 'PUBLISHED' && (
          <div className="mb-4 p-3 bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Status: <span className="font-medium">{blog.status}</span>
            </p>
          </div>
        )}
      </header>

      {/* Blog Post Images (if any) */}
      {blog.images && blog.images.length > 0 && (
        <section className="mb-8">
          <div className="grid grid-cols-1 gap-4">
            {blog.images.map((image) => (
              <figure key={image.id} className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={image.path} 
                  alt={image.alt || blog.title}
                  className="w-full h-auto object-cover"
                />
                {image.caption && (
                  <figcaption className="p-3 bg-neutral-100 dark:bg-neutral-800 text-sm text-neutral-600 dark:text-neutral-400">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Blog Post Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <div 
          dangerouslySetInnerHTML={{ __html: blog.content }}
          className="text-neutral-800 dark:text-neutral-200"
        />
      </article>

      {/* Footer Navigation */}
      <footer className="pt-8 border-t border-neutral-200 dark:border-neutral-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Link 
            href={`/history/${sectionSlug}/${subsectionSlug}`}
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline"
          >
            ← Back to {blog.subsection.name}
          </Link>
          
          <div className="text-sm text-neutral-500 dark:text-neutral-500">
            <span>Article ID: {blog.id}</span>
          </div>
        </div>
        
        {/* Hierarchy context */}
        <div className="mt-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
          <h3 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">
            Article Context
          </h3>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            <p>
              This article is part of the{' '}
              <Link href={`/history/${sectionSlug}`} className="text-green-600 dark:text-green-400 hover:underline">
                {blog.subsection.historySection.name}
              </Link>
              {' '}section under{' '}
              {breadcrumbPath.map((item, index) => (
                <span key={item.slug}>
                  <Link 
                    href={item.href}
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    {item.name}
                  </Link>
                  {index < breadcrumbPath.length - 1 && ' › '}
                </span>
              ))}
              .
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
