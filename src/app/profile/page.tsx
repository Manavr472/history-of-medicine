'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface LinkedAccount {
  id: string;
  provider: string;
  type: string;
  linkedAt: string;
}

interface UserProfile {
  id: string;
  name: string | null;
  email: string;
  role: string;
  verified: boolean;
  createdAt: string;
}

interface ProfileData {
  user: UserProfile;
  linkedAccounts: LinkedAccount[];
  hasPassword: boolean;
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [unlinkingAccount, setUnlinkingAccount] = useState<string | null>(null);
  const [sendingVerification, setSendingVerification] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session) {
      router.push('/login');
      return;
    }

    fetchProfile();
  }, [session, status]);

  const fetchProfile = async () => {
    try {
      const response = await fetch('/api/auth/profile');
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      } else {
        setError('Failed to load profile');
      }
    } catch (error) {
      setError('An error occurred while loading profile');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnlinkAccount = async (accountId: string, provider: string) => {
    if (!profile) return;
    
    // Prevent unlinking if it's the only authentication method
    const totalMethods = profile.linkedAccounts.length;
    if (totalMethods === 1) {
      setError('Cannot unlink the only authentication method');
      return;
    }

    const confirmMessage = provider === 'email' 
      ? 'Are you sure you want to remove email/password authentication? You will only be able to sign in with linked OAuth providers.'
      : `Are you sure you want to unlink your ${provider} account?`;
    
    if (!confirm(confirmMessage)) return;

    setUnlinkingAccount(accountId);
    setError('');

    try {
      const response = await fetch('/api/auth/unlink', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accountId, provider }),
      });

      const data = await response.json();

      if (response.ok) {
        // Refresh profile data
        await fetchProfile();
        alert(data.message);
      } else {
        setError(data.error || 'Failed to unlink account');
      }
    } catch (error) {
      setError('An error occurred while unlinking account');
    } finally {
      setUnlinkingAccount(null);
    }
  };

  const handleSendVerificationEmail = async () => {
    setSendingVerification(true);
    setError('');
    setVerificationMessage('');

    try {
      const response = await fetch('/api/auth/send-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setVerificationMessage(data.message);
      } else {
        setError(data.error || 'Failed to send verification email');
      }
    } catch (error) {
      setError('An error occurred while sending verification email');
    } finally {
      setSendingVerification(false);
    }
  };

  const getProviderIcon = (provider: string) => {
    switch (provider) {
      case 'google':
        return '🔍';
      case 'email':
        return '📧';
      default:
        return '🔗';
    }
  };

  const getProviderName = (provider: string) => {
    switch (provider) {
      case 'google':
        return 'Google';
      case 'email':
        return 'Email/Password';
      default:
        return provider.charAt(0).toUpperCase() + provider.slice(1);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">Failed to load profile</p>
          <Link href="/" className="text-green-500 hover:text-green-400 mt-2 inline-block">
            Go back to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100" style={{ fontFamily: 'Typographica, sans-serif' }}>
            Profile Management
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Manage your account information and linked authentication methods
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
            <p className="text-red-800 dark:text-red-200">{error}</p>
          </div>
        )}

        {/* Success Message */}
        {verificationMessage && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
            <p className="text-green-800 dark:text-green-200">{verificationMessage}</p>
          </div>
        )}

        <div className="space-y-8">
          {/* User Information */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 p-6">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Account Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Name
                </label>
                <p className="text-neutral-900 dark:text-neutral-100">
                  {profile.user.name || 'Not provided'}
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Email
                </label>
                <p className="text-neutral-900 dark:text-neutral-100">{profile.user.email}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Role
                </label>
                <p className="text-neutral-900 dark:text-neutral-100 capitalize">
                  {profile.user.role.toLowerCase()}
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Account Status
                </label>
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    profile.user.verified 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {profile.user.verified ? 'Verified' : 'Unverified'}
                  </span>
                  {!profile.user.verified && (
                    <button
                      onClick={handleSendVerificationEmail}
                      disabled={sendingVerification}
                      className="ml-3 px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {sendingVerification ? 'Sending...' : 'Send Verification Email'}
                    </button>
                  )}
                </div>
                {!profile.user.verified && (
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Verify your email to access all features and ensure account security
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Member Since
                </label>
                <p className="text-neutral-900 dark:text-neutral-100">
                  {formatDate(profile.user.createdAt)}
                </p>
              </div>
            </div>
          </div>

          {/* Linked Accounts */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 p-6">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Linked Authentication Methods
            </h2>
            
            <div className="space-y-3">
              {profile.linkedAccounts.map((account) => (
                <div key={account.id} className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-700 rounded-md">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getProviderIcon(account.provider)}</span>
                    <div>
                      <p className="font-medium text-neutral-900 dark:text-neutral-100">
                        {getProviderName(account.provider)}
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        Linked on {formatDate(account.linkedAt)}
                      </p>
                    </div>
                  </div>
                  
                  {/* Only show unlink button if there are multiple authentication methods */}
                  {profile.linkedAccounts.length > 1 && (
                    <button
                      onClick={() => handleUnlinkAccount(account.id, account.provider)}
                      disabled={unlinkingAccount === account.id}
                      className="px-3 py-1 text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 border border-red-300 hover:border-red-400 dark:border-red-600 dark:hover:border-red-500 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {unlinkingAccount === account.id ? 'Unlinking...' : 'Unlink'}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Add Authentication Method */}
            <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-600">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-3">
                Add Authentication Method
              </h3>
              <div className="space-y-2">
                {!profile.hasPassword && (
                  <Link
                    href="/add-password"
                    className="inline-flex items-center px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                  >
                    📧 Add Email/Password
                  </Link>
                )}
                {!profile.linkedAccounts.some(acc => acc.provider === 'google') && (
                  <Link
                    href="/api/auth/signin/google"
                    className="inline-flex items-center px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors ml-2"
                  >
                    🔍 Link Google Account
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
