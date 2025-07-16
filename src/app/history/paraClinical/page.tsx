'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HistorySection from '@/app/components/historysection';
import { useRouter } from 'next/navigation';

// Paraclinical Articles
interface Article {
    id: number;
    title: string;
    p1: string;
    p2?: string;
    p3?: string;
    image?: string;
}

const paraClinicalArticles: Article[] = [
    {
        id: 1,
        title: "Discovery of Microorganisms",
        p1: "Antonie van Leeuwenhoek’s pioneering work with handcrafted microscopes in the 17th century unveiled a previously invisible world teeming with what he called 'animalcules'—now recognized as microorganisms. His curiosity led him to examine pond water, dental plaque, and other substances, revealing bacteria, protozoa, and spermatozoa for the first time. Leeuwenhoek meticulously documented his findings, sending detailed letters and illustrations to the Royal Society in London. His observations challenged prevailing notions about the simplicity of life and the limits of human perception. Although he did not fully understand the implications for human disease, his discoveries inspired a new era of scientific inquiry. The foundation he laid would eventually support the development of microbiology and the germ theory of disease.",
        p2: "Despite initial skepticism, Leeuwenhoek’s discoveries were gradually accepted by the scientific community, thanks to his persistence and the reproducibility of his observations. His work inspired others to improve microscope technology and explore the microscopic world further. Over time, the study of microorganisms became central to understanding processes such as fermentation, decay, and eventually, infection. Leeuwenhoek’s legacy is not only in what he saw, but in how he inspired generations of scientists to look closer at the world around them.",
        p3: "The ripple effects of Leeuwenhoek’s work extended far beyond his lifetime. His meticulous methods set new standards for scientific investigation, emphasizing the importance of empirical evidence. The microorganisms he discovered would later be implicated in processes ranging from fermentation to infectious disease. As microscopy advanced, researchers built upon his observations to identify pathogens and develop new diagnostic techniques. Leeuwenhoek’s curiosity and perseverance exemplify the spirit of scientific discovery, reminding us that even the smallest things can have a profound impact on our understanding of the world.",
        image: "",
    },
    {
        id: 2,
        title: "Development of Germ Theory",
        p1: "The germ theory of disease marked a monumental shift in medical understanding, largely due to the groundbreaking work of Louis Pasteur and Robert Koch in the 19th century. Pasteur’s experiments on fermentation and spoilage demonstrated that microorganisms, rather than spontaneous generation, were responsible for these processes. He devised methods to sterilize and pasteurize liquids, preventing contamination and disease. Pasteur’s research extended to the development of vaccines for rabies and anthrax, showcasing the practical applications of germ theory. His work challenged centuries-old beliefs about the origins of illness and laid the groundwork for modern microbiology.",
        p2: "Before germ theory, many believed that diseases arose from miasmas or imbalances in bodily fluids. Pasteur’s and Koch’s research provided concrete evidence that specific microorganisms caused specific diseases, fundamentally changing medical practice. Their discoveries led to improved hygiene, sterilization techniques, and the widespread adoption of antiseptics in hospitals. This new understanding also spurred the development of public health measures, such as vaccination campaigns and sanitation systems, which dramatically reduced the spread of infectious diseases.",
        p3: "The acceptance of germ theory revolutionized medicine, prompting the development of antiseptics, vaccines, and antibiotics. It shifted the focus of healthcare from treating symptoms to preventing infection, saving countless lives. The collaborative efforts of Pasteur, Koch, and their contemporaries fostered a new era of scientific inquiry, emphasizing the importance of rigorous experimentation and evidence-based medicine. Today, the principles of germ theory underpin our understanding of infectious diseases, guiding research and public health policy worldwide.",
        image: "",
    },
    {
        id: 3,
        title: "The Birth of Immunology",
        p1: "Immunology traces its origins to Edward Jenner’s groundbreaking work in 1796, when he developed the first successful vaccine using cowpox to protect against smallpox. Jenner observed that milkmaids who contracted cowpox rarely succumbed to smallpox, leading him to hypothesize that exposure to a less dangerous pathogen could confer immunity. He tested this theory by inoculating a young boy with cowpox and later exposing him to smallpox, resulting in immunity. Jenner’s work demonstrated the potential of vaccination as a preventive measure, sparking widespread interest and adoption.",
        p2: "Throughout the 19th and 20th centuries, the field of immunology evolved rapidly. Scientists discovered antitoxins, immune responses, and the roles of white blood cells and antibodies in defending the body against disease. Louis Pasteur expanded on Jenner’s principles, developing vaccines for rabies and anthrax. The identification of cellular and humoral immunity provided a deeper understanding of how the body recognizes and combats pathogens. Advances in laboratory techniques enabled researchers to study immune mechanisms in detail, paving the way for new therapies and diagnostic tools.",
        p3: "Immunology has become a cornerstone of modern medicine, informing the development of vaccines, allergy treatments, and immunotherapies for cancer and autoimmune diseases. The foundational concept of acquired immunity continues to drive research into emerging infectious diseases and personalized medicine. Jenner’s legacy endures in the ongoing quest to harness the immune system’s power to prevent and treat illness, offering hope for a healthier future.",
        image: "",
    },
    {
        id: 4,
        title: "Advances in Diagnostic Imaging",
        p1: "Trace the revolutionary impact of imaging technologies, starting with Wilhelm Roentgen’s discovery of X-rays in 1895, which allowed physicians to see inside the human body without surgery.",
        p2: "The introduction of computed tomography (CT) in the 1970s and magnetic resonance imaging (MRI) in the 1980s further expanded diagnostic capabilities. CT scans provided cross-sectional images of the body, enhancing the diagnosis of complex conditions. MRI offered detailed views of soft tissues, while ultrasound enabled real-time visualization of organs and blood flow. These innovations improved the accuracy and speed of diagnosis, reducing the need for exploratory surgery and minimizing patient risk. Imaging became essential in nearly every medical specialty, from cardiology to oncology.",
        p3: "Modern diagnostic imaging continues to evolve, incorporating digital technology, artificial intelligence, and 3D reconstruction. These advancements have expanded the capabilities of clinicians, allowing for earlier detection, precise surgical planning, and real-time monitoring of patient health. The integration of imaging with electronic health records and telemedicine further enhances patient care, making advanced diagnostics accessible to a broader population.",
        image: "",
    },
    {
        id: 5,
        title: "Evolution of Laboratory Medicine",
        p1: "Laboratory medicine has progressed from rudimentary diagnostic methods such as uroscopy and bloodletting to highly sophisticated analyses of blood, tissues, and genetic material. Early physicians relied on visual inspection and basic chemical tests to assess health, often with limited accuracy. The invention of the microscope in the 17th century enabled the examination of cells and microorganisms, laying the groundwork for modern laboratory diagnostics. Over time, chemical assays and staining techniques improved the detection of diseases like diabetes and infections.",
        p2: "As laboratory medicine advanced, the role of clinical laboratories expanded to include blood typing, hormone assays, and the detection of infectious agents. The development of quality control standards and accreditation processes ensured the reliability of test results. Collaboration between laboratory scientists and clinicians became essential for accurate diagnosis and effective treatment planning. The integration of laboratory data with electronic health records has further improved patient care by enabling rapid access to critical information.",
        p3: "Today, laboratory medicine plays a critical role in public health, epidemiology, and personalized medicine. Advances in molecular diagnostics and genomics have expanded the scope of testing, enabling the identification of rare diseases and the tracking of epidemics. The ongoing development of point-of-care testing and digital health tools continues to enhance the accessibility and efficiency of laboratory services.",
        image: "",
    },
    {
        id: 6,
        title: "Antibiotic Revolution",
        p1: "The discovery of antibiotics transformed the treatment of infectious diseases, beginning with Alexander Fleming’s accidental identification of penicillin in 1928. Fleming observed that a mold contaminant inhibited the growth of bacteria in a petri dish, leading to the isolation of penicillin. This breakthrough ushered in a new era of antimicrobial therapy, enabling the effective treatment of previously lethal infections such as pneumonia, syphilis, and sepsis. The mass production of penicillin during World War II saved countless lives and demonstrated the power of scientific collaboration.",
        p2: "The impact of antibiotics extended beyond individual patient care, influencing public health and the development of new medical procedures. The ability to control infections made organ transplants, chemotherapy, and intensive care possible. However, the misuse and overuse of antibiotics have led to the emergence of resistant bacteria, posing a significant threat to global health. Efforts to develop new antibiotics and promote responsible use are ongoing challenges for the medical community.",
        p3: "The antibiotic revolution has had a profound impact on global health, extending life expectancy and improving quality of life. It has also highlighted the importance of responsible antibiotic use and the need for continued research into resistance mechanisms. The legacy of Fleming and his successors endures in the ongoing quest to develop safe and effective treatments for infectious diseases.",
        image: "",
    },
    {
        id: 7,
        title: "Rise of Surgical Innovations",
        p1: "Surgical practices have evolved dramatically over the centuries, transitioning from crude procedures performed without anesthesia to highly sophisticated operations. In the early days, surgery was often a last resort, associated with significant pain and risk. The introduction of ether and chloroform anesthesia in the 19th century revolutionized the field, allowing for longer and more complex procedures. Joseph Lister’s pioneering work in antiseptic surgery further reduced infection rates, improving patient outcomes.",
        p2: "The refinement of surgical techniques continued with the development of aseptic methods, blood transfusions, and advanced suturing materials. The 20th century introduced innovations such as organ transplantation, microsurgery, and endoscopic procedures. These advances expanded the range of treatable conditions and improved patient survival rates. Training programs and surgical specialties emerged, fostering expertise and innovation within the field.",
        p3: "Modern surgery continues to benefit from technological advancements, including computer-assisted navigation, 3D printing, and regenerative medicine. These tools have transformed the surgical landscape, offering new possibilities for patient care. The ongoing pursuit of innovation ensures that surgery remains at the forefront of medical progress.",
        image: "",
    },
    {
        id: 8,
        title: "The Genomic Era",
        p1: "The sequencing of the human genome, completed in 2003, marked the beginning of a new era in medicine. This monumental achievement provided a comprehensive map of human genetic information, enabling researchers to identify genes associated with disease and health. Genomics has revolutionized our understanding of genetic predispositions, inheritance patterns, and the molecular basis of illness. The ability to analyze individual genomes has paved the way for personalized medicine, where treatments are tailored to an individual’s genetic makeup.",
        p2: "Genomic research has also facilitated the discovery of biomarkers for early disease detection and the development of targeted therapies. The integration of genomics with other fields, such as proteomics and metabolomics, has deepened our understanding of complex diseases. Ethical, legal, and social implications of genomic data have prompted ongoing discussions about privacy, consent, and equitable access to genomic medicine.",
        p3: "The field of genomics continues to evolve rapidly, integrating data from diverse sources to improve diagnosis, prevention, and treatment. Ethical considerations and data privacy remain important challenges, but the potential benefits for human health are immense. The genomic era promises to transform medicine, offering new avenues for research and care.",
        image: "",
    },
    {
        id: 9,
        title: "Telemedicine and Digital Health",
        p1: "The integration of digital technology into healthcare delivery has transformed patient care, making it more accessible and efficient. Telemedicine enables virtual consultations, allowing patients to connect with healthcare providers from the comfort of their homes. Wearable health trackers monitor vital signs and activity levels, providing real-time data for personalized care. AI-driven diagnostics assist clinicians in interpreting test results and identifying potential health issues.",
        p2: "Digital health platforms have also improved communication between patients and providers, enabling secure sharing of medical records and test results. Remote monitoring tools support the management of chronic diseases, reducing hospital visits and improving patient outcomes. The expansion of telemedicine has increased access to care in rural and underserved areas, helping to bridge gaps in the healthcare system.",
        p3: "Telemedicine and digital health are now permanent fixtures in the healthcare system, driving innovation and expanding the reach of medical services. Ongoing advancements in connectivity, data security, and user experience will continue to shape the future of healthcare delivery.",
        image: "",
    },
    {
        id: 10,
        title: "Artificial Intelligence in Medicine",
        p1: "Artificial intelligence (AI) is reshaping modern healthcare through applications in diagnostics, drug discovery, and personalized treatment plans. Machine learning algorithms analyze massive datasets to detect patterns that may elude human clinicians, improving the accuracy and speed of diagnosis. AI-driven tools assist in interpreting medical images, identifying anomalies, and predicting disease progression. These technologies enable earlier intervention and more effective treatment strategies.",
        p2: "Beyond diagnostics, AI is being used to streamline administrative tasks, optimize hospital workflows, and enhance patient engagement through chatbots and virtual assistants. Predictive analytics help healthcare providers anticipate patient needs and allocate resources efficiently. As AI systems become more sophisticated, they are expected to play a greater role in clinical decision support and population health management.",
        p3: "The integration of AI into healthcare presents both opportunities and challenges, including ethical considerations, data privacy, and the need for robust validation. As AI continues to evolve, it promises to usher in a new era of precision medicine, improving outcomes and expanding access to high-quality care.",
        image: "",
    },
];

// Dummy data for other sections (for right sidebar)
const preArticles: Article[] = [
    { id: 1, title: 'Ancient Anatomical Knowledge', p1: 'Early anatomical knowledge.' },
    { id: 2, title: 'Rise of Modern Anatomy', p1: 'Vesalius and the rise of dissection.' },
];
const clinicalArticles: Article[] = [
    { id: 201, title: 'Early Clinical Practices', p1: 'The emergence of clinical methods.' },
    { id: 202, title: 'Surgical Milestones', p1: 'Development of surgical practice.' },
];
const orthoArticles: Article[] = [
    { id: 301, title: 'Origins of Orthopaedics', p1: 'Ancient bone setting techniques.' },
    { id: 302, title: 'Medieval Bone Setters', p1: 'Development of orthopedic surgery.' },
];

const ParaClinicalHistoryPage: React.FC = () => {
    const [selectedArticle, setSelectedArticle] = useState<Article>(paraClinicalArticles[0]);

    return (
        <>
        <HistorySection />
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left Sidebar: Para-Clinical Chronological List */}
            <aside className="w-full md:w-1/5 min-w-0 md:min-w-[200px] border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-2">
                <h2 className="font-bold text-lg mb-2 studio-sans">Para-Clinical</h2>
                <nav className="flex flex-col gap-1">
                    {paraClinicalArticles.map(article => (
                        <button
                            key={article.id}
                            className={`text-left px-2 py-1 rounded transition-colors ${
                                selectedArticle.id === article.id
                                    ? 'bg-green-100 dark:bg-green-900 font-bold text-green-700 dark:text-green-300'
                                    : 'hover:bg-green-50 dark:hover:bg-green-800'
                            }`}
                            onClick={() => setSelectedArticle(article)}
                        >
                            {article.title}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Center: Article Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
            <article className="w-full max-w-3xl rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
                <AnimatePresence mode="wait">
                <motion.div
                    key={selectedArticle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Image Placeholder */}
                    <div className="w-full flex justify-center mb-6">
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-gray-400">
                        Image Placeholder
                    </div>
                    </div>
                    <h1 className="milker text-2xl sm:text-3xl font-bold mb-4 text-center">{selectedArticle.title}</h1>
                    <div className="studio-sans text-base sm:text-lg text-justify text-gray-800 dark:text-gray-200 space-y-4">
                    <p>{selectedArticle.p1}</p>
                    {selectedArticle.p2 && <p>{selectedArticle.p2}</p>}
                    {selectedArticle.p3 && <p>{selectedArticle.p3}</p>}
                    </div>
                </motion.div>
                </AnimatePresence>
            </article>
            </main>

            {/* Right Sidebar: Other Sections */}
            <aside className="w-full md:w-1/5 min-w-0 md:min-w-[200px] border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-4">
            <SectionList title="Pre-Clinical" articles={preArticles} route="/history/preClinical" />
            <SectionList title="Clinical" articles={clinicalArticles} route="/history/clinical" />
            <SectionList title="Orthopaedics" articles={orthoArticles} route="/history/orthopaedics" />
            </aside>
        </div>
        </>
    );
};

// Helper component for right sidebar
function SectionList({ title, articles, route }: { title: string; articles: Article[]; route: string }) {
    const router = useRouter();
    
    return (
        <div>
            <h3 className="font-semibold mb-1 studio-sans cursor-pointer hover:text-green-600" onClick={() => router.push(route)}>{title}</h3>
            <ul className="flex flex-col gap-1">
                {articles.map(article => (
                    <li key={article.id} className="text-sm px-2 py-1 rounded hover:bg-green-50 dark:hover:bg-green-800 cursor-pointer" onClick={() => router.push(route)}>
                        <span className="font-medium">{article.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ParaClinicalHistoryPage;