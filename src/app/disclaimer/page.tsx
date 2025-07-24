'use client'
import React from 'react';

const DisclaimerPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Disclaimer</h1>
                    
                    <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. General Information Only</h2>
                            <p>
                                The information provided on this website is intended for <strong>general educational and informational purposes</strong> only. 
                                While we aim to present accurate and well-researched historical content, the material should <strong>not be considered medical advice</strong> or 
                                a substitute for consultation with qualified healthcare professionals.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. No Medical or Professional Advice</h2>
                            <p>
                                This site does <strong>not provide medical, legal, or professional advice</strong> of any kind. Any references to medical practices, 
                                treatments, or theories are strictly historical in nature and should not be interpreted as endorsements or recommendations for modern use.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. Accuracy and Completeness</h2>
                            <p>
                                We make every effort to ensure the accuracy of the information presented. However, the history of medicine is a vast and evolving field, 
                                and historical interpretations can vary. We do <strong>not guarantee the completeness, timeliness, or accuracy</strong> of the content and{' '}
                                <strong>accept no responsibility for errors or omissions</strong>.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4. Use at Your Own Risk</h2>
                            <p>
                                Use of any information from this website is at your own risk. We will not be held liable for any loss, injury, or damage resulting 
                                from your reliance on the content provided.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">5. External Links</h2>
                            <p>
                                This website may include links to external sites for reference or further reading. We do not have control over the content or policies 
                                of these sites and do not endorse them. We are not responsible for any damages or implications caused by visiting any external links mentioned.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">6. Copyright and Fair Use</h2>
                            <p>
                                Some images, texts, or excerpts used on this website may be reproduced under the doctrine of <strong>fair use</strong> for educational 
                                and commentary purposes. Where possible, we strive to give proper attribution. If you believe your copyrighted material has been used 
                                improperly, please contact us, and we will promptly address your concern.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">7. Contact</h2>
                            <p>For questions, corrections, or concerns related to the content of this site, please contact us at:</p>
                            <p className="mt-2">
                                📧 <a href="mailto:manavr472@gmail.com" className="font-semibold">manavr472@gmail.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisclaimerPage;