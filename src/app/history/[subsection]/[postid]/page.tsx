import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: { 
    subsection: string;
    postid: string;
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { subsection, postid } = await params;

  // Fetch the blog post with subsection data
  const blog = await prisma.blogPost.findFirst({
    where: {
      id: postid,
      subsection: {
        slug: subsection,
      },
      published: true,
    },
    include: {
      subsection: true,
    },
  });

  if (!blog) {
    return notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm">
        <Link 
          href={`/history/${subsection}`}
          className="text-green-600 dark:text-green-400 hover:underline"
        >
          ← Back to {blog.subsection.name || subsection}
        </Link>
      </nav>

      {/* Blog Post Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          {blog.title}
        </h1>
        
        {blog.summary && (
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
            {blog.summary}
          </p>
        )}

        <div className="text-sm text-neutral-500 dark:text-neutral-500">
          <span>Published in {blog.subsection.name}</span>
          <span className="mx-2">•</span>
          <time dateTime={blog.createdAt.toISOString()}>
            {blog.createdAt.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </header>

      {/* Blog Post Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <div 
          dangerouslySetInnerHTML={{ __html: blog.content }}
          className="text-neutral-800 dark:text-neutral-200"
        />
      </article>

      {/* Footer Navigation */}
      <footer className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
        <Link 
          href={`/history/${subsection}`}
          className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline"
        >
          ← View all articles in {blog.subsection.name}
        </Link>
      </footer>
    </main>
  );
}
