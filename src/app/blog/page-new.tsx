'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, User, Tag, Eye, PlusCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

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

const BlogPage: React.FC = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPublishedPosts();
  }, []);

  const fetchPublishedPosts = async () => {
    try {
      const response = await fetch('/api/blog/published');
      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts);
      } else {
        setError('Failed to load blog posts');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  const truncateContent = (content: string, maxLength: number = 200) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading blog posts...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog</h1>
            <p className="text-gray-600">
              Discover medical insights and educational content
            </p>
          </div>
          {user && (
            <Link
              href="/create-blog"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Create Post
            </Link>
          )}
        </div>

        {error && (
          <div className="mb-6 p-4 border border-red-300 rounded-md bg-red-50">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Blog Posts */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <Eye className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No blog posts yet</h3>
              <p className="text-gray-500 mb-4">
                Be the first to share your medical insights and knowledge.
              </p>
              {user && (
                <Link
                  href="/create-blog"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <PlusCircle className="w-5 h-5 mr-2" />
                  Create First Post
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
              >
                {/* Post Image */}
                {post.images.length > 0 && (
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.images[0].url}
                      alt={post.images[0].originalName}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>
                )}

                <div className="p-6">
                  {/* Subsection Tag */}
                  <div className="flex items-center mb-3">
                    <Tag className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                      {post.subsection}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Content Preview */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {truncateContent(post.content)}
                  </p>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author.firstName} {post.author.lastName}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="mt-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
