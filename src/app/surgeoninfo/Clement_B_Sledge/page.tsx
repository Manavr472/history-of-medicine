import React from 'react';

const ClementBSledgePage: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row p-5">
            <div className="w-full lg:w-1/4 lg:pr-5 mb-5 lg:mb-0">
                <h1 className="text-2xl font-bold">Clement B. Sledge</h1>
                <img className='mt-4 w-auto h-auto rounded-lg' src="https://i.ibb.co/RynshN9/Clement-B-Sledge.jpg" alt="Clement Sledge" />
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold">Dates</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Date of Birth: 1930</li>
                        <li>Serving Period: 1960 - Present</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold ">Places</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Birth Place: United States</li>
                        <li>Serving Country: United States</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold mt-2">Activities and Key Contributions</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Pioneered advancements in joint replacement surgery</li>
                        <li>Developed innovative techniques in orthopedic surgery</li>
                        <li>Served as a professor and mentor to many orthopedic surgeons</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold mt-2">Resources</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li><a href="https://connects.catalyst.harvard.edu/Profiles/display/Person/60828" target="_blank" rel="noopener noreferrer" className="text-blue-500">Harvard Catalyst</a></li>
                        <li><a href="https://www.ases-assn.org/founder/clement-b-sledge-md/" target="_blank" rel="noopener noreferrer" className="text-blue-500">ASES</a></li>
                    </ul>
                </div>
            </div>
        
            <div className="w-full lg:w-2/3 lg:mr-4 text-justify mb-5 lg:mb-0">
                <h2 className="text-xl font-semibold">Detailed Journey of His Life</h2>
                <p className="mt-4">
                Dr. Clement B. Sledge&apos;s distinguished career in orthopedics was defined by a deep commitment to both clinical excellence and the advancement of knowledge, particularly in the realm of knee surgery. Born in 1938, he embarked on a path that would see him become a highly respected surgeon, educator, and thought leader.  After receiving his medical degree from Harvard Medical School, he completed his residency at Massachusetts General Hospital, a renowned center of surgical innovation.  He then joined the faculty at Harvard, where he would spend his entire career, ultimately becoming the Charles A. Dana Professor of Orthopedic Surgery. This academic setting provided the fertile ground for his pursuit of both exceptional patient care and groundbreaking research. 
                </p>

                <p className="mt-4">
                Sledge&apos;s early work focused on unraveling the complexities of the knee joint and the challenges of treating knee arthritis.  He recognized the limitations of early total knee arthroplasty (TKA) designs and the crucial importance of developing implants that not only replaced the damaged joint surfaces but also restored the knee&apos;s natural biomechanics. He emphasized the need to preserve as much healthy bone as possible during surgery and to carefully balance the surrounding soft tissues, including ligaments and tendons, to achieve optimal stability and function.  His research and clinical experience laid the foundation for many of the surgical principles that guide modern TKA. 
                </p>

                <p className="mt-4">
                Sledge&apos;s contributions extended beyond the operating room.  He was a passionate advocate for evidence-based practice and recognized the need for standardized outcome measures to evaluate the effectiveness of different surgical treatments.  He played a significant role in developing and promoting the use of such measures in knee surgery, enabling more rigorous comparisons of different approaches and contributing to a more scientific and data-driven approach to orthopedic care.  His seminal textbook, *The Knee*, co-authored with Robert B. Duthie, became a cornerstone of orthopedic education, reflecting his profound understanding of knee disorders and his commitment to sharing his knowledge with future generations of surgeons. 
                </p>

                <p className="mt-4">
                Clement Sledge&apos;s legacy in orthopedics is one of lasting impact.  His contributions to TKA design and surgical technique helped shape the evolution of knee replacement into the highly successful procedure it is today.  His emphasis on evidence-based practice and the development of standardized outcome measures transformed the field, driving a shift toward more rigorous evaluation and continuous improvement in patient care. He was also a dedicated mentor and educator, inspiring countless orthopedic residents and fellows to pursue careers in academic medicine and contribute to the advancement of the field.  His influence continues to be felt in operating rooms and classrooms around the world, a testament to his enduring commitment to excellence and innovation in orthopedic surgery. 
                </p>
            </div>
            <div className="w-full lg:w-1/4">
                {/* Dummy comment */}
                <div className="border p-4 rounded shadow mt-4">
                    <h2 className="text-xl font-semibold">Personal Interactions and Contributions</h2>
                    <p className="mt-2">Dr. Clement B. Sledge&apos;s contributions to orthopedic surgery are truly remarkable. I had the privilege of attending one of his lectures, and his insights into knee replacement surgery were invaluable. His dedication to advancing the field is inspiring. His personal interactions with patients and colleagues alike have left a lasting impact on all who have had the opportunity to work with him.</p>
                </div>
                {/* Feedback Section */}
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

export default ClementBSledgePage;