'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  subsection: string;
  slug: string;
  status: string;
  publishedAt: string;
  author: {
    firstName: string;
    lastName: string;
    email: string;
  };
  images: {
    id: string;
    url: string;
    originalName: string;
  }[];
}

export default function BlogPostDetail() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (params.slug) {
      fetchPost(params.slug as string);
    }
  }, [params.slug]);

  const fetchPost = async (slug: string) => {
    try {
      const response = await fetch(`/api/blog/post/${slug}`);
      if (response.ok) {
        const data = await response.json();
        setPost(data.post);
      } else if (response.status === 404) {
        setError('Blog post not found');
      } else {
        setError('Failed to load blog post');
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      setError('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  const sharePost = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.content.substring(0, 100) + '...',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading blog post...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {error || 'Post not found'}
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <button
              onClick={sharePost}
              className="inline-flex items-center px-3 py-2 text-gray-600 hover:text-gray-700 transition-colors"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-sm border overflow-hidden">
          {/* Featured Image */}
          {post.images.length > 0 && (
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={post.images[0].url}
                alt={post.images[0].originalName}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}

          <div className="p-8">
            {/* Meta Information */}
            <div className="flex items-center mb-6">
              <Tag className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded mr-4">
                {post.subsection}
              </span>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {post.author.firstName} {post.author.lastName}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {post.title}
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {post.content}
              </div>
            </div>

            {/* Additional Images */}
            {post.images.length > 1 && (
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Images</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {post.images.slice(1).map((image) => (
                    <div key={image.id} className="border rounded-lg overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.originalName}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Author Information */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    {post.author.firstName} {post.author.lastName}
                  </h4>
                  <p className="text-gray-600">{post.author.email}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
