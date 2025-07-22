import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  summary?: string | null;
}

interface PageProps {
  params: Promise<{ subsection: string }>;

}

export default async function SubsectionPage({ params }: PageProps) {
  const { subsection } = await params;

  // Find the subsection and its blog posts
  const subsectionData = await prisma.subsection.findUnique({
    where: { slug: subsection },
    include: {
      blogPosts: {
        where: { published: true },
        orderBy: { createdAt: 'desc' },
      },
    },
  });

  if (!subsectionData) {
    return notFound();
  }

  const blogPosts: BlogPost[] = subsectionData.blogPosts;

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold capitalize mb-6">{subsectionData.name || subsection} Section</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/history/${subsection}/${post.id}`}
            className="group block rounded-xl border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-950 shadow hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <div className="p-5 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-green-800 dark:text-green-300 group-hover:text-green-600 dark:group-hover:text-green-400 mb-2 truncate">
                  {post.title}
                </h2>
                {post.summary && (
                  <p className="text-sm text-neutral-700 dark:text-neutral-200 line-clamp-3 mb-3">{post.summary}</p>
                )}
              </div>
              <span className="mt-auto inline-block text-green-600 dark:text-green-400 font-medium group-hover:underline">Read Article →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
