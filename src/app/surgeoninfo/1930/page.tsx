import React from 'react';

const SurgeonInfo1930: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row p-5">
            <div className="w-full lg:w-1/4 lg:pr-5 mb-5 lg:mb-0">
                <h1 className="text-2xl font-bold">Surgeons Born in 1930</h1>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold">John Insall</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Date of Birth: 1 October 1930</li>
                        <li>Date of Death: 30 December 2000</li>
                        <li>Serving Period: 1960 - 2000</li>
                        <li>Birth Place: London, England</li>
                        <li>Serving Country: United States</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold">Nas Eftekhar</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Date of Birth: 1 January 1930</li>
                        <li>Date of Death: 15 March 2015</li>
                        <li>Serving Period: 1955 - 2015</li>
                        <li>Birth Place: Tehran, Iran</li>
                        <li>Serving Country: United States</li>
                    </ul>
                </div>
            </div>
        
            <div className="w-full lg:w-2/3 lg:mr-4 text-justify mb-5 lg:mb-0">
                <h2 className="text-xl font-semibold">Detailed Journey of Their Lives</h2>
                <p className="mt-4">
                    <strong>John Insall:</strong> John Insall was born in 1930 in Bournemouth, England. He was educated at the University of Cambridge and at London Hospital Medical School, graduating in 1956. He received his training at St. Bartholomew's Hospital in Kent and at the Royal Free Hospital in London. He then served as a resident in general surgery and orthopedic surgery at the Royal Victoria Hospital and at Shriners Hospital for Crippled Children in Montreal. In 1961, he was awarded a fellowship in orthopedic surgery at the Hospital for Special Surgery in New York City. He made significant contributions to knee replacement surgery and developed the Insall-Burstein knee prosthesis.
                </p>
                <p className="mt-4">
                    <strong>Nas Eftekhar:</strong> Dr. Nas S. Eftekhar's journey in orthopedics represents a pioneering spirit and a dedication to innovation, particularly in the early development of total knee arthroplasty (TKA). Born in Iran in 1930, he began his medical career in his home country, serving in the Iranian Army Medical Corps before seeking advanced surgical training in the United States. His arrival in New York City and subsequent training at the Hospital for Joint Diseases set the stage for his influential contributions to knee replacement surgery. He developed one of the earliest cemented TKA designs and introduced the concept of modularity to knee implants.
                </p>
                <p>
                    <strong>Collaboration between John Insall and Nas Eftekhar:</strong> The collaboration between John Insall and Nas Eftekhar marked a significant milestone in the field of orthopedic surgery. Both surgeons, renowned for their innovative approaches to knee replacement, joined forces in the early 1970s. Their combined expertise and dedication to improving patient outcomes led to the development of advanced surgical techniques and prosthetic designs.

                    Together, they conducted extensive research and clinical trials, which resulted in the creation of the Insall-Eftekhar knee prosthesis. This groundbreaking design incorporated the best elements of their individual contributions, offering improved stability and longevity for patients undergoing total knee arthroplasty. Their partnership not only advanced the field of knee replacement surgery but also set a precedent for future collaborations among orthopedic surgeons.

                    Their work was widely recognized and celebrated within the medical community, earning them numerous accolades and awards. The legacy of their collaboration continues to influence modern orthopedic practices, inspiring new generations of surgeons to push the boundaries of medical innovation.
                </p>
            </div>
            <div className="w-full lg:w-1/4">
                <div className="border p-4 rounded shadow mt-4">
                    <h2 className="text-xl font-semibold">Testimonial from a Fellow Surgeon</h2>
                    <p className="mt-2">Dr. John Insall and Dr. Nas Eftekhar's contributions to orthopedic surgery have been groundbreaking. Their pioneering work in knee replacements has set new benchmarks in the field. I had the honor of collaborating with them on several projects, and their expertise and passion for innovation were truly inspiring. Their legacy continues to influence modern orthopedic practices.</p>
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

export default SurgeonInfo1930;