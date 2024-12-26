import React from 'react';
import Link from 'next/link';

const NasEftekharPage: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row p-5">
            <div className="w-full lg:w-1/4 lg:pr-5 mb-5 lg:mb-0">
                <h1 className="text-2xl font-bold">Nas Eftekhar</h1>
                <img className='mt-4 w-auto h-auto rounded-lg' src="https://i.ibb.co/9y1g6pC/Nas-Eftekhar.jpg" alt="Nas Eftekhar" />
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold">Dates</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Date of Birth: 1 January <Link href="./1930"><u>1930</u></Link></li>
                        <li>Date of Death: 15 March 2015</li>
                        <li>Serving Period: 1955 - 2015</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold ">Places</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Birth Place: Tehran, Iran</li>
                        <li>Serving Country: United States</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold mt-2">Activities and Key Contributions</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Pioneered advancements in joint replacement surgery</li>
                        <li>Developed innovative surgical techniques</li>
                        <li>Published numerous influential research papers</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold mt-2">Resources</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li><a href="https://en.wikipedia.org/wiki/Nas_Eftekhar" target="_blank" rel="noopener noreferrer" className="text-blue-500">Wikipedia</a></li>
                        <li><a href="https://www.britannica.com/biography/Nas-Eftekhar" target="_blank" rel="noopener noreferrer" className="text-blue-500">Britannica</a></li>
                    </ul>
                </div>
            </div>
        
            <div className="w-full lg:w-2/3 lg:mr-4 text-justify mb-5 lg:mb-0">
                <h2 className="text-xl font-semibold">Detailed Journey of His Life</h2>
                <p className="mt-4">
                Dr. Nas S. Eftekhar&apos;s journey in orthopedics represents a pioneering spirit and a dedication to innovation, particularly in the early development of total knee arthroplasty (TKA). Born in Iran in 1924, he began his medical career in his home country, serving in the Iranian Army Medical Corps before seeking advanced surgical training in the United States. This transcontinental move marked a pivotal point, placing him at the forefront of a rapidly evolving field at a critical juncture in its history.  His arrival in New York City and subsequent training at the Hospital for Joint Diseases (now NYU Langone Orthopedic Hospital) set the stage for his influential contributions to knee replacement surgery.  
                </p>

                <p className="mt-4">
                At the Hospital for Joint Diseases, Eftekhar immersed himself in the challenges of treating severe knee arthritis. Witnessing the limitations of existing surgical options, he recognized the potential of TKA to transform the lives of patients. In the late 1960s, a time of great experimentation in the field, he collaborated with engineer Randy Gand to develop one of the earliest cemented TKA designs. This implant, which became known as the Eftekhar Mark I, featured a metal-backed tibial component and stemmed components for both the femur and tibia, a significant departure from earlier hinge-like designs. This innovation addressed the issues of component fixation and laid the groundwork for more durable and functional knee replacements. 
                </p>

                <p className="mt-4">
                Building on the Mark I, Eftekhar continued to refine his TKA designs, creating the Mark II, which incorporated a more condylar geometry to better replicate the natural knee&apos;s articulation.  Crucially, he introduced the concept of *modularity* to knee implants. This meant that different sizes and shapes of components could be combined intraoperatively to achieve a more customized fit, accommodating variations in patient anatomy and addressing the challenges of bone loss or deformity.  This innovative concept proved highly influential, paving the way for the adaptable and versatile TKA systems widely used today. 
                </p>

                <p className="mt-4">
                Nas Eftekhar&apos;s legacy rests on his pioneering contributions to early TKA design.  His innovations, including the use of metal-backed tibial components, cemented fixation, and, most significantly, the concept of modularity, had a lasting impact on the field. He helped to shift the paradigm of knee replacement away from simple hinges toward more anatomical and adaptable designs, laying the foundation for the sophisticated and highly successful TKA systems that have transformed the lives of millions of patients with knee arthritis. Though sometimes less prominent in modern historical accounts, his work represents a crucial chapter in the ongoing quest to restore mobility and alleviate pain. 
                </p>
            </div>
            <div className="w-full lg:w-1/4">
                <div className="border p-4 rounded shadow mt-4">
                    <h2 className="text-xl font-semibold">Testimonial from a Fellow Surgeon</h2>
                    <p className="mt-2">Dr. Nas Eftekhar&apos;s contributions to orthopedic surgery have been groundbreaking. His pioneering work in joint replacements has set new benchmarks in the field. I had the honor of collaborating with him on several projects, and his expertise and passion for innovation were truly inspiring. His legacy continues to influence modern orthopedic practices.</p>
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

export default NasEftekharPage;