'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Edit, Eye } from 'lucide-react';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const status = searchParams.get('status');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Blog Post Submitted!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your blog post has been successfully submitted for review.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          {title && (
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900">"{title}"</h3>
              <div className="mt-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {status || 'SUBMITTED'}
                </span>
              </div>
            </div>
          )}

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              </div>
              <div>
                <span className="font-medium text-gray-900">Review Process:</span> Your post is now in the review queue
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5">
                <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
              </div>
              <div>
                <span className="font-medium text-gray-900">Admin Review:</span> Our team will review your content for quality and relevance
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              </div>
              <div>
                <span className="font-medium text-gray-900">Publication:</span> Once approved, your post will be published on the site
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            href="/create-blog"
            className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
          >
            <Edit className="w-4 h-4 mr-2" />
            Submit Another Post
          </Link>
          
          <Link
            href="/blog"
            className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
          >
            <Eye className="w-4 h-4 mr-2" />
            View All Blog Posts
          </Link>
          
          <Link
            href="/"
            className="w-full flex justify-center items-center px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            You'll receive an email notification once your post is reviewed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BlogSubmissionSuccess() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
