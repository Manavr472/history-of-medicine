import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Privacy Policy</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: December 2024</p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Welcome to Itihasa XR. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Information We Collect</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                        <li>Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
                        <li>Derivative Data: Information our servers automatically collect when you access the Site, such as your IP address, browser type, and operating system.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Use of Your Information</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                        <li>Create and manage your account.</li>
                        <li>Process your transactions and send you related information.</li>
                        <li>Improve our website and services.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Disclosure of Your Information</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                        <li>By Law or to Protect Rights: If we believe the release of information about you is necessary to respond to legal process.</li>
                        <li>Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Contact Us</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                        If you have questions or comments about this Privacy Policy, please contact us at:
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Email: manavr472@gmail.com</p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;