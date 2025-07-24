import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Last updated: July 2025</p>
                </div>
                
                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Welcome to History of Medicine(HoMe). Please read these Terms of Service (&apos;Terms&apos;, &apos;Terms of Service&apos;) carefully before using the History of Medicine(HoMe) website (the &apos;Service&apos;) operated by History of Medicine(HoMe) (&apos;us&apos;, &apos;we&apos;, or &apos;our&apos;).
                    </p>
                    
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.
                    </p>
                    
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. Changes to Terms</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        We reserve the right to modify or replace these Terms at any time. We will try to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    </p>
                    
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. Use of Service</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the Service.
                    </p>
                    
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">4. Termination</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                    
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">5. Contact Us</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        If you have any questions about these Terms, please contact us at{' '}
                        <a href="mailto:manavr472@gmail.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
                            manavr472@gmail.com
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;