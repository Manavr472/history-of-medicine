'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { Upload, X, Plus } from 'lucide-react';

interface Subsection {
  id: string;
  name: string;
  description: string;
}

export default function CreateBlog() {
  const { user } = useAuth();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [subsection, setSubsection] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [subsections, setSubsections] = useState<Subsection[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    fetchSubsections();
  }, [user, router]);

  const fetchSubsections = async () => {
    try {
      const response = await fetch('/api/blog/subsections');
      if (response.ok) {
        const data = await response.json();
        setSubsections(data.subsections);
      }
    } catch (error) {
      console.error('Error fetching subsections:', error);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    // Limit to 5 images total
    const currentImageCount = images.length;
    const availableSlots = 5 - currentImageCount;
    const filesToAdd = files.slice(0, availableSlots);

    setImages(prev => [...prev, ...filesToAdd]);

    // Create previews
    filesToAdd.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviews(prev => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('You must be logged in to submit a blog post');
        return;
      }

      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('subsection', subsection);
      
      images.forEach((image) => {
        formData.append('images', image);
      });

      const response = await fetch('/api/blog/submit', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        router.push(`/blog/success?title=${encodeURIComponent(title)}&status=${data.blogPost.status}`);
      } else {
        setError(data.error || 'Failed to submit blog post');
      }
    } catch (error) {
      console.error('Error submitting blog:', error);
      setError('An error occurred while submitting your blog post');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Submit a Blog Post
            </h1>

            {error && (
              <div className="mb-6 p-4 border border-red-300 rounded-md bg-red-50">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your blog post title..."
                  required
                />
              </div>

              <div>
                <label htmlFor="subsection" className="block text-sm font-medium text-gray-700 mb-2">
                  Subsection *
                </label>
                <select
                  id="subsection"
                  value={subsection}
                  onChange={(e) => setSubsection(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select a subsection...</option>
                  {subsections.map((sub) => (
                    <option key={sub.id} value={sub.id}>
                      {sub.name}
                    </option>
                  ))}
                </select>
                {subsection && (
                  <p className="mt-1 text-sm text-gray-500">
                    {subsections.find(s => s.id === subsection)?.description}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Content *
                </label>
                <textarea
                  id="content"
                  rows={12}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Write your blog post content here..."
                  required
                />
                <p className="mt-1 text-sm text-gray-500">
                  {content.length} characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Images (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  {images.length < 5 && (
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="mt-4">
                        <label htmlFor="image-upload" className="cursor-pointer">
                          <span className="mt-2 block text-sm font-medium text-gray-900">
                            Upload images
                          </span>
                          <input
                            id="image-upload"
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="sr-only"
                          />
                        </label>
                        <p className="mt-1 text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB each. Maximum 5 images.
                        </p>
                      </div>
                    </div>
                  )}

                  {imagePreviews.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                      {imagePreviews.map((preview, index) => (
                        <div key={index} className="relative">
                          <img
                            src={preview}
                            alt={`Preview ${index + 1}`}
                            className="h-24 w-full object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                      {images.length < 5 && (
                        <label htmlFor="image-upload-additional" className="cursor-pointer">
                          <div className="h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400">
                            <Plus className="h-8 w-8 text-gray-400" />
                          </div>
                          <input
                            id="image-upload-additional"
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="sr-only"
                          />
                        </label>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !title || !content || !subsection}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit for Review'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
