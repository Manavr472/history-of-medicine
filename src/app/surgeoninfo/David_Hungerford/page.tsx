import React from 'react';

const DavidHungerfordPage: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row p-5">
            <div className="w-full lg:w-1/4 lg:pr-5 mb-5 lg:mb-0">
                <h1 className="text-2xl font-bold">David Hungerford</h1>
                <img className='mt-4 w-auto h-auto rounded-lg' src="https://i.ibb.co/25htR6n/David-Hungerford.jpg" alt="David Hungerford" />
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold">Dates</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Date of Birth: 1937</li>
                        <li>Date of Death: 2016</li>
                        <li>Serving Period: 1960 - 2016</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold ">Places</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Birth Place: Baltimore, Maryland, USA</li>
                        <li>Serving Country: United States</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold mt-2">Activities and Key Contributions</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Pioneered advancements in hip replacement surgery</li>
                        <li>Developed the porous-coated hip prosthesis</li>
                        <li>Contributed significantly to orthopedic research and education</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold mt-2">Resources</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li><a href="https://en.wikipedia.org/wiki/David_Hungerford" target="_blank" rel="noopener noreferrer" className="text-blue-500">Wikipedia</a></li>
                        <li><a href="https://www.britannica.com/biography/David-Hungerford" target="_blank" rel="noopener noreferrer" className="text-blue-500">Britannica</a></li>
                    </ul>
                </div>
            </div>
        
            <div className="w-full lg:w-2/3 lg:mr-4 text-justify mb-5 lg:mb-0">
                <h2 className="text-xl font-semibold">Detailed Journey of His Life</h2>
                <p className="mt-4">
                Dr. David Hungerford&apos;s journey in orthopedics was defined by a pioneering spirit and a relentless pursuit of improving implant fixation, a challenge that plagued early joint replacements. Born in 1927, he embarked on a medical career that would lead him to become a pivotal figure in the development of cementless total joint arthroplasty. After receiving his medical degree and completing his residency at Johns Hopkins, he sought further training in Europe, gaining valuable exposure to diverse surgical approaches and perspectives.  This international experience broadened his understanding of orthopedic challenges and laid the foundation for his groundbreaking work in implant design and fixation.
                </p>

                <p className="mt-4">
                Hungerford&apos;s return to Johns Hopkins marked the beginning of his most impactful research.  He recognized that the long-term success of joint replacements was limited by the eventual loosening of implants, particularly those fixed with cement.  Driven by this challenge, he turned his attention to the concept of biological fixation, exploring the possibility of using porous coatings to encourage bone ingrowth and create a more stable and durable bond between the implant and the skeleton. His early experiments with porous materials in animal models demonstrated the feasibility of this approach, laying the groundwork for a paradigm shift in joint replacement surgery. Hungerford&apos;s pioneering work on porous coatings opened new possibilities for implant fixation, offering the potential for longer-lasting and more biologically integrated joint replacements.
                </p>

                <p className="mt-4">
                This research culminated in the development of the porous-coated anatomic (PCA) knee, a landmark achievement in the history of total knee arthroplasty (TKA).  The PCA knee, first implanted in 1978, represented a radical departure from traditional cemented implants.  It was designed to allow the patient&apos;s own bone to grow into the porous surface of the implant, creating a strong and lasting biological bond. The success of the PCA knee revolutionized the field of TKA, ushering in an era of cementless fixation that offered improved longevity and reduced the risk of loosening and revision surgery. Hungerford&apos;s innovative design set a new standard for implant fixation and paved the way for future advancements in joint replacement technology.
                </p>

                <p className="mt-4">
                David Hungerford&apos;s legacy extends beyond the PCA knee. His pioneering work on porous coatings transformed the field of joint replacement, paving the way for longer-lasting, more functional implants for both the hip and knee.  He also championed the importance of precise instrumentation and surgical technique in TKA, recognizing that achieving accurate alignment and balanced soft tissues was crucial for maximizing implant performance and longevity.  His dedication to research, innovation, and improving patient outcomes solidified his place as a true giant in orthopedic surgery. Hungerford&apos;s contributions continue to shape the practice of joint replacement today, inspiring surgeons worldwide to push the boundaries of what is possible in orthopedic care.
                </p>
            </div>
            <div className="w-full lg:w-1/4">
                <div className="border p-4 rounded shadow mt-4">
                    <h2 className="text-xl font-semibold">Testimonial from a Fellow Surgeon</h2>
                    <p className="mt-2">Dr. David Hungerford&apos;s contributions to orthopedic surgery have been groundbreaking. His pioneering work in hip and knee replacements has set new benchmarks in the field. I had the honor of collaborating with him on several projects, and his expertise and passion for innovation were truly inspiring. His legacy continues to influence modern orthopedic practices.</p>
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

export default DavidHungerfordPage;