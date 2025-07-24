'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { 
  Eye, 
  CheckCircle, 
  XCircle, 
  Clock, 
  FileText, 
  User, 
  Calendar,
  Image as ImageIcon,
  Search,
  Filter
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  subsection: string;
  slug: string;
  status: string;
  submittedAt: string;
  publishedAt?: string;
  author: {
    email: string;
    firstName: string;
    lastName: string;
  };
  images: {
    id: string;
    filename: string;
    originalName: string;
    url: string;
  }[];
}

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!loading && (!user || user.role !== 'ADMIN')) {
      router.push('/');
      return;
    }

    if (user && user.role === 'ADMIN') {
      fetchBlogPosts();
    }
  }, [user, loading, router]);

  useEffect(() => {
    filterPosts();
  }, [blogPosts, statusFilter, searchTerm]);

  const fetchBlogPosts = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('/api/admin/blog-posts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setBlogPosts(data.blogPosts);
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = blogPosts;

    if (statusFilter !== 'ALL') {
      filtered = filtered.filter(post => post.status === statusFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  };

  const updatePostStatus = async (postId: string, newStatus: string) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('/api/admin/blog-posts/update-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ postId, status: newStatus })
      });

      if (response.ok) {
        // Refresh the posts
        fetchBlogPosts();
        setSelectedPost(null);
      }
    } catch (error) {
      console.error('Error updating post status:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'SUBMITTED': return 'bg-blue-100 text-blue-800';
      case 'UNDER_REVIEW': return 'bg-yellow-100 text-yellow-800';
      case 'APPROVED': return 'bg-green-100 text-green-800';
      case 'PUBLISHED': return 'bg-emerald-100 text-emerald-800';
      case 'REJECTED': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'SUBMITTED': return <Clock className="w-4 h-4" />;
      case 'UNDER_REVIEW': return <Eye className="w-4 h-4" />;
      case 'APPROVED': return <CheckCircle className="w-4 h-4" />;
      case 'PUBLISHED': return <CheckCircle className="w-4 h-4" />;
      case 'REJECTED': return <XCircle className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!user || user.role !== 'ADMIN') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage submitted blog posts</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search posts, content, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="ALL">All Status</option>
                <option value="SUBMITTED">Submitted</option>
                <option value="UNDER_REVIEW">Under Review</option>
                <option value="APPROVED">Approved</option>
                <option value="PUBLISHED">Published</option>
                <option value="REJECTED">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                    {getStatusIcon(post.status)}
                    {post.status.replace('_', ' ')}
                  </div>
                </div>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {post.content}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author.firstName} {post.author.lastName}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.submittedAt).toLocaleDateString()}
                    </div>
                  </div>
                  {post.images.length > 0 && (
                    <div className="flex items-center gap-1 text-green-600">
                      <ImageIcon className="w-4 h-4" />
                      {post.images.length}
                    </div>
                  )}
                </div>

                <div className="mt-4 text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded">
                  Subsection: {post.subsection}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No blog posts found</p>
          </div>
        )}
      </div>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedPost.title}</h2>
                  <p className="text-gray-600 mt-1">
                    By {selectedPost.author.firstName} {selectedPost.author.lastName} 
                    • {new Date(selectedPost.submittedAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedPost.status)}`}>
                  {getStatusIcon(selectedPost.status)}
                  {selectedPost.status.replace('_', ' ')}
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Subsection: {selectedPost.subsection}
                </div>
              </div>

              <div className="prose max-w-none mb-6">
                <div className="whitespace-pre-wrap text-gray-700">
                  {selectedPost.content}
                </div>
              </div>

              {selectedPost.images.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Images</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedPost.images.map((image) => (
                      <div key={image.id} className="border rounded-lg overflow-hidden">
                        <img
                          src={image.url}
                          alt={image.originalName}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-2 text-xs text-gray-500 truncate">
                          {image.originalName}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedPost.status === 'SUBMITTED' && (
                <div className="flex gap-3">
                  <button
                    onClick={() => updatePostStatus(selectedPost.id, 'UNDER_REVIEW')}
                    className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    Mark Under Review
                  </button>
                  <button
                    onClick={() => updatePostStatus(selectedPost.id, 'APPROVED')}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updatePostStatus(selectedPost.id, 'REJECTED')}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Reject
                  </button>
                </div>
              )}

              {selectedPost.status === 'UNDER_REVIEW' && (
                <div className="flex gap-3">
                  <button
                    onClick={() => updatePostStatus(selectedPost.id, 'APPROVED')}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updatePostStatus(selectedPost.id, 'REJECTED')}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Reject
                  </button>
                </div>
              )}

              {selectedPost.status === 'APPROVED' && (
                <button
                  onClick={() => updatePostStatus(selectedPost.id, 'PUBLISHED')}
                  className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Publish Post
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
