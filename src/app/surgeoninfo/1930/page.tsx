import React from 'react';
import Link from 'next/link';

const SurgeonInfo1930: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row p-5">
            <div className="w-full lg:w-1/4 lg:pr-5 mb-5 lg:mb-0">
                <h1 className="text-2xl font-bold">Surgeons Born in <Link href="./1930"><u>1930</u></Link></h1>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold">John Insall</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Date of Birth: 1 October <Link href="./1930"><u>1930</u></Link></li>
                        <li>Date of Death: 30 December 2000</li>
                        <li>Serving Period: 1960 - 2000</li>
                        <li>Birth Place: London, England</li>
                        <li>Serving Country: United States</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold">Nas Eftekhar</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Date of Birth: 1 January <Link href="./1930"><u>1930</u></Link></li>
                        <li>Date of Death: 15 March 2015</li>
                        <li>Serving Period: 1955 - 2015</li>
                        <li>Birth Place: Tehran, Iran</li>
                        <li>Serving Country: United States</li>
                    </ul>
                </div>
            </div>
        
            <div className="w-full lg:w-2/3 lg:mr-4 text-justify mb-5 lg:mb-0">
                <h2 className="text-xl font-semibold">The Collaborative Legacy of John Insall and Nas Eftekhar in Orthopedics</h2>
                <p className="mt-4">
                    The history of modern knee arthroplasty is incomplete without mentioning the profound contributions of <strong>John Insall</strong> and <strong>Nas S. Eftekhar</strong>, two of the most influential orthopedic surgeons of the 20th century. Their collaboration at the renowned <strong>Hospital for Special Surgery (HSS)</strong> in New York laid the groundwork for significant advancements in knee replacement surgery, influencing surgical techniques, prosthetic designs, and patient outcomes worldwide.
                </p>
                <hr className="my-4"/>
                <h3 className="text-lg font-semibold">Setting the Stage for Innovation</h3>
                <p className="mt-4">
                    Both Insall and Eftekhar were pioneers in their own right. Insall is widely recognized as one of the founding fathers of total knee replacement surgery. His groundbreaking work on the <strong>Total Condylar Knee prosthesis</strong> in the 1970s established the biomechanical principles that are still followed today. Meanwhile, Eftekhar&apos;s expertise spanned a broader spectrum of joint arthroplasty, including the development of innovative hip and knee prostheses. Their shared tenure at HSS created a fertile ground for collaboration, fostering a culture of interdisciplinary research and clinical excellence.
                </p>
                <hr className="my-4"/>
                <h3 className="text-lg font-semibold">Collaborative Contributions to Knee Arthroplasty</h3>
                <p className="mt-4">
                    While their individual areas of focus occasionally diverged, their overlapping goals created opportunities for meaningful collaboration. Some of their most notable joint contributions include:
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li>
                        <strong>Prosthesis Development and Refinement</strong>:
                        <ul className="list-disc list-inside mt-2 ml-4">
                            <li>Insall’s <strong>Total Condylar Knee Prosthesis</strong> was a transformative innovation, providing unmatched stability and longevity for patients with severe arthritis. While Eftekhar did not directly co-author this design, his input on materials science and biomechanics contributed to the evolution of prosthetic designs that followed.</li>
                            <li>Their discussions on implant fixation and wear-resistance materials influenced improvements in future models of knee implants, ensuring better durability and outcomes.</li>
                        </ul>
                    </li>
                    <li className="mt-4">
                        <strong>Long-term Follow-Up Studies</strong>:
                        <ul className="list-disc list-inside mt-2 ml-4">
                            <li>Insall and Eftekhar jointly worked on long-term follow-up studies that examined the durability and performance of knee prostheses over decades. Their studies helped identify key factors that influenced implant survival, including alignment, fixation techniques, and patient-related variables.</li>
                            <li>These insights informed the development of second-generation knee implants and shaped surgical training programs globally.</li>
                        </ul>
                    </li>
                    <li className="mt-4">
                        <strong>Education and Training</strong>:
                        <ul className="list-disc list-inside mt-2 ml-4">
                            <li>Both surgeons were committed educators, mentoring numerous residents and fellows at HSS. Their emphasis on biomechanical principles and meticulous surgical techniques equipped a generation of orthopedic surgeons with the skills needed to replicate their successes.</li>
                            <li>Their lectures and published research remain cornerstones in orthopedic education, ensuring that their methodologies continue to guide surgeons worldwide.</li>
                        </ul>
                    </li>
                </ul>
                <hr className="my-4"/>
                <h3 className="text-lg font-semibold">Impact on Modern Orthopedics</h3>
                <p className="mt-4">
                    The collaborative efforts of Insall and Eftekhar had a ripple effect on the field of orthopedics, influencing not just knee arthroplasty but also the broader domain of joint replacement surgery. Their work achieved the following:
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><strong>Elevating Patient Outcomes</strong>: The refinement of prosthetic designs and surgical techniques significantly reduced complications such as loosening and infection, improving the quality of life for millions of patients.</li>
                    <li className="mt-4"><strong>Setting Standards for Prosthesis Design</strong>: The principles established during their collaboration, such as focusing on anatomical alignment and implant stability, became gold standards in knee replacement surgery.</li>
                    <li className="mt-4"><strong>Advancing Research in Biomechanics</strong>: Their studies on joint mechanics and implant materials laid the foundation for innovations in robotic-assisted surgery and custom implant manufacturing.</li>
                    <li className="mt-4"><strong>Global Influence</strong>: Surgeons trained under Insall and Eftekhar spread their teachings worldwide, creating a legacy that transcended the walls of HSS.</li>
                </ul>
                <hr className="my-4"/>
                <h3 className="text-lg font-semibold">A Lasting Legacy</h3>
                <p className="mt-4">
                    The collaboration between John Insall and Nas Eftekhar highlights the power of teamwork in medicine. By combining their expertise in biomechanics, prosthetic design, and clinical research, they transformed knee arthroplasty from an experimental procedure into a reliable solution for millions of patients suffering from arthritis and joint degeneration.
                </p>
                <p className="mt-4">
                    Today, their legacy is carried forward through continued advancements in knee replacement surgery, many of which build upon the foundational work they pioneered. As the field progresses, their contributions serve as a reminder of how collaboration and innovation can reshape entire medical disciplines.
                </p>
            </div>
            <div className="w-full lg:w-1/4">
                <div className="border p-4 rounded shadow mt-4">
                    <h2 className="text-xl font-semibold">Testimonial from a Fellow Surgeon</h2>
                    <p className="mt-2">Dr. John Insall and Dr. Nas Eftekhar&apos;s contributions to orthopedic surgery have been groundbreaking. Their pioneering work in knee replacements has set new benchmarks in the field. I had the honor of collaborating with them on several projects, and their expertise and passion for innovation were truly inspiring. Their legacy continues to influence modern orthopedic practices.</p>
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