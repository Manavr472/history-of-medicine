import React from 'react';

const MichaelFreemanPage: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row p-5">
            <div className="w-full lg:w-1/4 lg:pr-5 mb-5 lg:mb-0">
                <h1 className="text-2xl font-bold">Michael Freeman</h1>
                <img className='mt-4 w-auto h-auto rounded-lg' src="https://i.ibb.co/rfkZytg/Michael-Freeman.jpg" alt="Michael Freeman" />
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold">Dates</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Date of Birth: 1929</li>
                        <li>Date of Death: 2017</li>
                        <li>Serving Period: 1960 - 2006</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold ">Places</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Birth Place: London, England</li>
                        <li>Serving Country: United Kingdom</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold mt-2">Activities and Key Contributions</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Pioneered modern knee replacement surgery</li>
                        <li>Developed the Freeman-Samuelson knee prosthesis</li>
                        <li>Authored numerous influential publications on joint replacement surgery</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold mt-2">Resources</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li><a href="https://en.wikipedia.org/wiki/Michael_Freeman_(surgeon)" target="_blank" rel="noopener noreferrer" className="text-blue-500">Wikipedia</a></li>
                        <li><a href="https://livesonline.rcseng.ac.uk/biogs/E009379b.htm" target="_blank" rel="noopener noreferrer" className="text-blue-500">RCS</a></li>
                    </ul>
                </div>
            </div>
        
            <div className="w-full lg:w-2/3 lg:mr-4 text-justify mb-5 lg:mb-0">
                <h2 className="text-xl font-semibold">Detailed Journey of His Life</h2>
                <p className="mt-4">
                Dr. Michael Freeman&apos;s journey in orthopedics was marked by a restless curiosity and a drive to find innovative solutions for complex knee problems. Born in 1929, his early experiences in medicine, including influential time spent with Dr. David Macintosh in Boston, sparked a lifelong fascination with the biomechanics of the knee joint. He recognized the limitations of traditional approaches to treating knee arthritis and saw in the emerging field of total knee arthroplasty (TKA) an opportunity to transform the lives of patients crippled by this debilitating condition.
                </p>

                <p className="mt-4">
                Freeman&apos;s return to London and his collaboration with engineer Savile Swanson at the Imperial College London Hospital (ICLH) marked the beginning of a pivotal chapter in TKA history. Together, they developed the Freeman-Swanson knee, one of the earliest attempts at a truly functional total knee replacement.  This design, though it faced challenges with long-term wear and loosening, introduced important new concepts to the field.
                </p>

                <p className="mt-4">
                Beyond the implant itself, Freeman&apos;s most significant contribution was his pioneering work on surgical technique. He recognized that successful TKA hinged not just on the design of the prosthesis but also on meticulous surgical execution and a deep understanding of the knee&apos;s complex biomechanics. He emphasized the importance of achieving balanced flexion and extension gaps, a concept now fundamental to TKA surgery worldwide. His work on soft tissue balancing and ligament releases revolutionized the surgical approach to knee replacement, paving the way for more stable and functional outcomes.
                </p>

                <p className="mt-4">
                Though often less celebrated in modern accounts of TKA history, Michael Freeman&apos;s contributions were instrumental in shaping the field&apos;s early development.  His work at ICLH, his focus on surgical technique, and his pioneering insights into soft tissue balancing laid the groundwork for the transformative success of modern knee replacement. He served as a bridge between the era of simple hinge prostheses and the sophisticated, anatomically designed implants of today, leaving a lasting legacy of innovation that continues to benefit patients worldwide.
                </p>
            </div>
            <div className="w-full lg:w-1/4">
                {/* Feedback Section */}
                <div className="border p-4 rounded shadow mt-4">
                    <h2 className="text-xl font-semibold">Testimonial from a Colleague</h2>
                    <p className="mt-2">Dr. Michael Freeman&apos;s contributions to orthopedic surgery have been revolutionary. His innovative work in knee replacements has established new standards in the field. I had the privilege of working with him on numerous projects, and his dedication and passion for advancement were truly remarkable. His legacy continues to shape contemporary orthopedic practices.</p>
                </div>
                <div className="border p-4 rounded shadow mt-4">
                    <h2 className="text-xl font-semibold">Share Your Experience</h2>
                    <form className="mt-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
                                Feedback
                            </label>
                            <input type="text" id="feedback" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Share your thoughts..." />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Submit
                            </button>
                            <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:shadow-outline" type="button">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 01-2.828 0l-2.586-2.586a2 2 0 010-2.828l6.586-6.586a2 2 0 012.828 0l2.586 2.586a2 2 0 010 2.828z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MichaelFreemanPage;