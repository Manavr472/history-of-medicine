'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function LinkAccountPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [provider, setProvider] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get email and provider from URL parameters
    const emailParam = searchParams.get('email');
    const providerParam = searchParams.get('provider');
    
    if (emailParam) setEmail(emailParam);
    if (providerParam) setProvider(providerParam);
  }, [searchParams]);

  const handleLinkAccount = async () => {
    setIsLoading(true);
    setError('');

    try {
      // Attempt to sign in with the OAuth provider again
      // This time it should work because we've enabled allowDangerousEmailAccountLinking
      const result = await signIn(provider, {
        callbackUrl: '/profile?message=AccountLinked',
        redirect: false
      });

      if (result?.error) {
        setError('Failed to link accounts. Please try again.');
      } else if (result?.ok) {
        router.push('/profile?message=AccountLinked');
      }
    } catch (error) {
      setError('An error occurred while linking accounts.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Link Your Accounts
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We found an existing account with this email address
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Account Already Exists
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      You already have an account with the email <strong>{email}</strong>.
                      You can link your {provider} account to your existing account for easier sign-in.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900">Choose an option:</h4>
              
              <div className="space-y-3">
                <button
                  onClick={handleLinkAccount}
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Linking...
                    </>
                  ) : (
                    <>Link {provider} Account</>
                  )}
                </button>

                <Link
                  href="/login"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign In with Email Instead
                </Link>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                By linking your accounts, you'll be able to sign in using either method.
                Your account data will be merged safely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
