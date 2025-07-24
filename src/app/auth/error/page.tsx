'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AuthErrorPage() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const errorParam = searchParams.get('error');
    const emailParam = searchParams.get('email');

    if (emailParam) {
      setEmail(emailParam);
    }

    if (errorParam) {
      switch (errorParam) {
        case 'OAuthAccountNotLinked':
          setError('account_not_linked');
          break;
        case 'OAuthCallback':
          setError('oauth_callback');
          break;
        case 'OAuthCreateAccount':
          setError('oauth_create_account');
          break;
        case 'EmailCreateAccount':
          setError('email_create_account');
          break;
        case 'Callback':
          setError('callback_error');
          break;
        case 'OAuthSignin':
          setError('oauth_signin');
          break;
        case 'EmailSignin':
          setError('email_signin');
          break;
        case 'CredentialsSignin':
          setError('credentials_signin');
          break;
        case 'SessionRequired':
          setError('session_required');
          break;
        default:
          setError('unknown_error');
      }
    }
  }, [searchParams]);

  const getErrorContent = () => {
    switch (error) {
      case 'account_not_linked':
        return {
          title: 'Account Already Exists',
          description: 'An account with this email already exists using a different sign-in method.',
          action: 'Link Account',
          actionUrl: `/auth/link-account?email=${encodeURIComponent(email)}&provider=google`,
          showAlternative: true
        };
      case 'oauth_callback':
        return {
          title: 'Authentication Failed',
          description: 'There was a problem during the authentication process.',
          action: 'Try Again',
          actionUrl: '/login',
          showAlternative: false
        };
      case 'oauth_create_account':
        return {
          title: 'Account Creation Failed',
          description: 'We couldn\'t create your account using Google. Please try signing up with email instead.',
          action: 'Sign Up with Email',
          actionUrl: '/signup',
          showAlternative: false
        };
      case 'session_required':
        return {
          title: 'Sign In Required',
          description: 'You need to be signed in to access this page.',
          action: 'Sign In',
          actionUrl: '/login',
          showAlternative: false
        };
      default:
        return {
          title: 'Authentication Error',
          description: 'An unexpected error occurred during authentication.',
          action: 'Try Again',
          actionUrl: '/login',
          showAlternative: false
        };
    }
  };

  const errorContent = getErrorContent();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {errorContent.title}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Something went wrong during authentication
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Authentication Error
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{errorContent.description}</p>
                    {email && (
                      <p className="mt-1">
                        <strong>Email:</strong> {email}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href={errorContent.actionUrl}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {errorContent.action}
              </Link>

              {errorContent.showAlternative && (
                <Link
                  href="/login"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign In with Email Instead
                </Link>
              )}

              <Link
                href="/"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Go to Homepage
              </Link>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                If you continue to experience issues, please contact support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
