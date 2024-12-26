import React from 'react';
import Link  from 'next/link';

const JohnInsallPage: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row p-5">
            <div className="w-full lg:w-1/4 lg:pr-5 mb-5 lg:mb-0">
                <h1 className="text-2xl font-bold">John Insall</h1>
                <img className='mt-4 w-auto h-auto rounded-lg' src="https://i.ibb.co/DzPxMRj/Dr-John-Insall.png" alt="John Insall" />
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold">Dates</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Date of Birth: 1 October <Link href="./1930"><u>1930</u></Link></li>
                        <li>Date of Death: 30 December 2000</li>
                        <li>Serving Period: 1960 - 2000</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold ">Places</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Birth Place: London, England</li>
                        <li>Serving Country: United States</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold mt-2">Activities and Key Contributions</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li>Pioneered modern knee replacement surgery</li>
                        <li>Developed the Insall-Burstein knee prosthesis</li>
                        <li>Authored numerous influential publications on knee surgery</li>
                    </ul>
                </div>
                <div className='border p-4 rounded shadow mt-4'>
                    <h2 className="text-xl font-semibold mt-2">Resources</h2><hr/>
                    <ul className="list-disc list-inside mt-2">
                        <li><a href="https://en.wikipedia.org/wiki/John_Insall" target="_blank" rel="noopener noreferrer" className="text-blue-500">Wikipedia</a></li>
                        <li><a href="https://www.jbjs.org/reader.php?rsuite_id=782331&source=The_Journal_of_Bone_and_Joint_Surgery/83/4/635&topics=kn#info" target="_blank" rel="noopener noreferrer" className="text-blue-500">JB&JS</a></li>
                    </ul>
                </div>
            </div>
        
            <div className="w-full lg:w-2/3 lg:mr-4 text-justify mb-5 lg:mb-0">
                <h2 className="text-xl font-semibold">Detailed Journey of His Life</h2>
                <p className="mt-4">
                John Insall was born in 1930 in Bournemouth,
                    England, by the sea. He was educated at the University of Cambridge and at London Hospital
                    Medical School, graduating in 1956. He received
                    his training at St. Bartholomew&apos;s Hospital in Kent
                    and at the Royal Free Hospital in London. He then
                    served as a resident in general surgery and orthopedic surgery at the Royal Victoria Hospital and
                    at Shriners Hospital for Crippled Children in
                    Montreal. In 1961, he was awarded a fellowship
                    in orthopedic surgery at the Hospital for Special
                    Surgery in New York City.
                    After 2 years of practice in England, he
                    returned to the United States in 1965 as an attending surgeon and director of the knee service at the
                    Hospital for Special Surgery. He served as professor of orthopedic surgery at Cornell University
                    Medical College from 1980 to 1996. In 1991, he
                    joined with Drs. W. Norman Scott, Michael A.
                    Kelly, and Peter D. McCann to form the Insall
                    Scott Kelly (ISK) Institute for Orthopedics and
                    Sports Medicine at New York City&apos;s Beth Israel
                    Medical Center. He served as director of the ISK
                    Institute and its fellowship program. In 1996,
                    he was appointed clinical professor of orthopedic surgery at the Albert Einstein College of
                    Medicine.
                </p>
                <p className="mt-4">
                    Dr. Insall was a founding member of the Knee
                    Society in 1983 and became its president in 1987.
                    He was instrumental in the development of the
                    Knee Society scoring system. His colleagues rec-
                    ognized his many achievements by establishing
                    the Insall Award, which honors an outstanding
                    paper concerning clinical results and techniques
                    at the annual open meeting of the Society.
                    John Insall&apos;s contributions to orthopedic
                    surgery are legendary. His articles appeared in
                    The Journal of Bone and Joint Surgery over four
                    decades, beginning with reports on his experience
                    with valgus tibial osteotomy for the treatment of
                    osteoarthritis of the knee. Subsequent articles
                    dealt with techniques for the treatment of patellar
                    chondromalacia and malalignment as well as iliotibial band transfer for the treatment of knees
                    with anterior cruciate ligament deficiency. His
                    most outstanding publication is the classic book
                    Surgery of the Knee (now in its third edition),
                    coedited by his colleague and dear friend Dr.
                    Norman Scott.
                    Dr. Insall will be most remembered for his
                    numerous contributions to knee arthroplasty. His
                    work with the total condylar knee prosthesis
                    began in 1974 at the Hospital for Special Surgery,
                    and, with Albert Burstein, he designed the
                    Insall-Burstein knee prosthesis, first implanted in
                    1978. With Michael Freeman, he pioneered the
                    philosophy of excision of the cruciate ligaments
                    and soft-tissue releases during knee arthroplasty.
                    Among his special talents was his ability to devise
                    arthroplasty techniques that were forgiving yet
                    effective, allowing countless otherwise crippled
                    patients throughout the world to resume normal
                    lives. His most recent design innovations involved mobile-bearing inserts and fixed bearings
                    that allow high degrees of flexion.
                </p>
                <p className="mt-4">
                    Dr. Insall also developed exposure techniques
                    (for example, the “quadriceps snip”), quadricepsplasty for the treatment of patellar instability,
                    ligament releases for the treatment of angular
                    deformity, and intraoperative guidelines for
                    femoral component rotation. He was a pioneer in
                    the two-stage revision for septic knee arthroplasty. In addition, he was responsible for the
                    design of many instruments used intraoperatively
                    to facilitate the accurate implantation of prosthetic components.
                    His long-term follow-up studies of clinical
                    results in various populations of patients, such as
                    those who are young, elderly, or obese and those
                    who have diabetes, psoriasis, or poliomyelitis, are
                    the gold standard against which all future results
                    will be compared.
                    John Insall was an acknowledged master
                    surgeon. His clinical skills were complemented
                    by his equally strong ability to teach others by
                    both word and example. Some 60 surgeons, many
                    now world-renowned themselves, served as his
                    fellows. They formed the Insall Club in his honor
                    and meet annually to share experiences and
                    promote research in knee arthroplasty techniques.
                </p>
                <p className="mt-4">
                    His lectures were classics, and he served frequently as the keynote speaker at national meetings. He was an annual fixture, for example, at
                    Seth Greenwald&apos;s Current Concepts Meeting in
                    Orlando, Larry Dorr&apos;s Master Techniques in Los
                    Angeles, and, of course, the ISK meeting in New
                    York City. He adopted Leo Whiteside&apos;s technique
                    of video presentation in lieu of slides, delivering
                    messages that were clear, precise, and, when
                    appropriate, entertaining.
                    Both in public and in private, John Insall was
                    a kind and good person; he was a gentleman and
                    a role model for his colleagues and his friends. An
                    avid reader, he could converse on virtually any
                    topic. If he disagreed with you, he would not
                    become argumentative, but his silence spoke
                    volumes.
                    He loved golf and was a student of the game.
                    If your swing was off, he could tell you why, but
                    he never offered advice unless asked. As one
                    might expect, his own swing was controlled and
                    graceful, and his short game was played with surgical precision.
                    His academic demands made him a world
                    traveler. He profited from these opportunities to
                    educate himself about the local culture, frequenting museums and historical sites. His boundless
                    energy took him on many a long walk to experience the environs of a new city and partake of the
                    local cuisine.
                </p>
                <p className="mt-4">
                    In May 1999, the orthopedic community was
                    shocked to learn that John had metastatic lung
                    cancer. We were not surprised, however, at the
                    strength and dignity that he showed over the next
                    18 months. Never complaining, he remained optimistic and as active as possible.
                    In his last year, John returned to the seaside in
                    Connecticut with his beloved wife, Mary. There,
                    when able, he walked the beach, read voraciously,
                    and bonded with his young grandson, John. He
                    still enjoyed a “proper meal” with a “proper
                    wine” and offered wise counsel to his students to
                    the end.
                    John N. Insall, considered by many to be the
                    father of modern-day total knee replacement
                    prostheses and techniques, died peacefully on
                    December 30, 2000.
                </p>
            </div>
            <div className="w-full lg:w-1/4">
                {/* Feedback Section */}
                <div className="border p-4 rounded shadow mt-4">
                    <h2 className="text-xl font-semibold">Testimonial from a Fellow Surgeon</h2>
                    <p className="mt-2">Dr. John Insall&apos;s contributions to orthopedic surgery have been groundbreaking. His pioneering work in knee replacements has set new benchmarks in the field. I had the honor of collaborating with him on several projects, and his expertise and passion for innovation were truly inspiring. His legacy continues to influence modern orthopedic practices.</p>
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

export default JohnInsallPage;