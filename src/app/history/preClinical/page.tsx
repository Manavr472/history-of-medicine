'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HistorySection from '@/app/components/historysection';
import { useRouter } from 'next/navigation';
// Pre-Clinical Articles
interface Article {
    id: number;
    title: string;
    p1: string;
    p2?: string;
    p3?: string;
    image?: string; // Placeholder for image URL
}
const preClinicalArticles: Article[] = [
    {
        id: 1,
        title: "Ancient Anatomical Knowledge",
        p1: "Explore early beliefs about human anatomy from Egypt, India, and Greece. Ancient Egyptians believed the heart was the center of emotion and thought, and their mummification practices reflected a deep curiosity about internal organs. In India, early texts like the Sushruta Samhita described surgical techniques and anatomical observations, emphasizing the importance of bodily balance. Greek philosophers such as Alcmaeon and Empedocles speculated about the functions of the brain and blood. The Greeks developed the Four Humors theory, which linked health to bodily fluids. In India, the Ayurveda system described anatomy through the Tridosha framework, focusing on balance between bodily energies. These early ideas laid the groundwork for later systematic study of the human body.",
        p2: "The transmission of anatomical knowledge was often limited by religious and cultural taboos against dissection. Despite these barriers, some societies permitted the examination of animal or even human bodies under special circumstances. Egyptian papyri and Indian manuscripts preserved anatomical observations for future generations. In Greece, Hippocrates and his followers began to separate medicine from superstition, advocating for natural explanations of disease. The blending of Egyptian, Indian, and Greek ideas created a rich tapestry of early anatomical thought. These traditions influenced medical education for centuries, even as new discoveries emerged.",
        p3: "Hippocrates and Galen provided systematic medical philosophies that dominated Western medicine for centuries. Galen, in particular, synthesized knowledge from earlier cultures and conducted animal dissections to infer human anatomy. His writings became authoritative texts in Europe and the Islamic world. The persistence of these ancient ideas, despite their inaccuracies, demonstrates the enduring influence of early anatomical theories. It was not until the Renaissance that direct observation and dissection would challenge and refine these long-held beliefs. The legacy of ancient anatomical knowledge remains evident in modern medical terminology and concepts.",
        image: "",
    },
    {
        id: 2,
        title: "Rise of Modern Anatomy",
        p1: "Discover how Andreas Vesalius revolutionized anatomy by conducting dissections on human cadavers, correcting errors in Galen's animal-based observations. Vesalius was a professor at the University of Padua, where he insisted on firsthand investigation rather than relying on ancient texts. His meticulous drawings and detailed descriptions set new standards for anatomical accuracy. Vesalius challenged the prevailing dogma by demonstrating discrepancies between Galen's teachings and actual human anatomy. His work marked a turning point in the history of medicine, emphasizing the importance of empirical evidence. The Renaissance spirit of inquiry fueled his groundbreaking research.",
        p2: "His seminal work 'De Humani Corporis Fabrica' laid the foundation for evidence-based anatomical science. Published in 1543, this lavishly illustrated book provided an unprecedented look at the structure of the human body. Vesalius's illustrations, created in collaboration with skilled artists, made complex anatomical concepts accessible to students and physicians. The Fabrica was widely circulated and translated, influencing generations of medical practitioners. Vesalius's insistence on direct observation inspired others to question established authorities. The book's impact extended beyond anatomy, shaping the development of scientific methodology.",
        p3: "Vesalius emphasized direct observation, challenging centuries of dogma and influencing the development of modern medical education. His approach encouraged students to learn through hands-on experience rather than rote memorization. The shift toward practical dissection became a hallmark of medical training in Europe. Vesalius's legacy can be seen in today's anatomy labs and medical curricula. By prioritizing observation and experimentation, he helped lay the groundwork for the scientific revolution. The rise of modern anatomy transformed medicine into a discipline grounded in evidence and critical thinking.",
        image: "",
    },
    {
        id: 3,
        title: "Physiology and Circulatory Discoveries",
        p1: "Learn about William Harvey's 17th-century discovery of the circulatory system, which demonstrated that the heart pumps blood in a closed loop. Before Harvey, most physicians believed blood was produced in the liver and consumed by the body. Harvey's careful experiments involved measuring blood flow and observing the action of heart valves. He published his findings in 'De Motu Cordis' in 1628, providing clear evidence for the circulation of blood. Harvey's work was initially controversial, as it contradicted centuries of accepted wisdom. Over time, his ideas gained acceptance and transformed the understanding of physiology.",
        p2: "This challenged traditional views and provided a mechanical explanation for bodily functions. Harvey's experiments showed that the heart acted as a pump, propelling blood through arteries and veins in a continuous circuit. His quantitative approach introduced a new level of rigor to medical research. The concept of circulation explained how nutrients and oxygen were delivered to tissues, and how waste products were removed. Harvey's findings paved the way for later discoveries in cardiovascular medicine. The shift from mystical to mechanical explanations marked a major advance in scientific thought.",
        p3: "Harvey's work was pivotal in transitioning medicine from philosophical speculation to empirical science. His methods emphasized observation, measurement, and repeatable experiments. The acceptance of circulation led to new investigations into the functions of other organs and systems. Harvey's legacy influenced generations of physiologists and physicians, inspiring further research into the body's inner workings. The discovery of circulation remains one of the most important milestones in medical history. It exemplifies the power of scientific inquiry to overturn long-held beliefs and advance human knowledge.",
        image: "",
    },
    {
        id: 4,
        title: "Origins of Biochemistry",
        p1: "Trace the journey from mystical alchemy to modern biochemistry. Early thinkers attempted to transmute elements and manipulate life forces, believing that health and disease were governed by mysterious substances. Alchemists in the Middle Ages sought the philosopher's stone and the elixir of life, blending spiritual and chemical pursuits. Their experiments with distillation, fermentation, and extraction laid the groundwork for laboratory techniques. Over time, the focus shifted from mystical goals to practical applications in medicine and industry. The gradual accumulation of chemical knowledge set the stage for scientific breakthroughs.",
        p2: "These efforts unknowingly laid the groundwork for chemical understanding of the body. By the 18th and 19th centuries, scientists began to isolate and identify specific compounds involved in metabolism. The discovery of oxygen and its role in respiration was a major milestone. Researchers like Antoine Lavoisier and Justus von Liebig investigated the chemical processes underlying digestion and energy production. The identification of enzymes and hormones revealed the complexity of biochemical regulation. Advances in analytical techniques allowed for the precise measurement of biological molecules.",
        p3: "With the discovery of enzymes, hormones, and finally the structure of DNA in the 20th century, biochemistry became essential in diagnosing and treating disease. The understanding of metabolic pathways enabled the development of targeted therapies for a wide range of conditions. Biochemical research has led to breakthroughs in nutrition, pharmacology, and genetics. Today, biochemistry is at the heart of medical innovation, from cancer treatment to personalized medicine. The field continues to evolve, driven by new technologies and discoveries. The origins of biochemistry reflect humanity's enduring quest to understand the chemistry of life.",
        image: "",
    },
    {
        id: 5,
        title: "Foundations of Pharmacology",
        p1: "Review how different civilizations harnessed nature for healing. Herbal remedies in Chinese medicine, Indian Ayurveda, and Greco-Roman texts like Dioscorides' 'De Materia Medica' documented early drug use. Ancient healers experimented with plants, minerals, and animal products to treat a variety of ailments. Knowledge of medicinal substances was passed down through generations, often accompanied by rituals and beliefs. The trial-and-error approach led to the discovery of effective treatments as well as dangerous poisons. Pharmacological knowledge was closely linked to botany and chemistry.",
        p2: "Over time, isolation of active compounds like morphine and digitalis marked the beginning of modern pharmacology. The 19th century saw the extraction and purification of drugs from natural sources, allowing for standardized dosages and improved safety. Chemists synthesized new compounds, expanding the range of available medications. The development of anesthesia and antibiotics revolutionized surgery and infection control. Pharmacology emerged as a scientific discipline, with rigorous testing and regulation. The understanding of drug mechanisms enabled the design of targeted therapies.",
        p3: "These advances led to the development of clinical therapeutics. Modern pharmacology integrates knowledge from chemistry, biology, and medicine to create safer and more effective treatments. The discovery of receptors and signaling pathways has transformed drug development. Clinical trials ensure that new medications are both safe and effective before reaching patients. Pharmacology continues to evolve with advances in biotechnology and genomics. The foundations laid by ancient and early modern practitioners remain central to the science of healing.",
        image: "",
    },
    {
        id: 6,
        title: "Discovery of Microorganisms",
        p1: "Understand how Antonie van Leeuwenhoek's improved microscope revealed a hidden microbial world in the 17th century. Using handcrafted lenses, he observed tiny organisms in water, saliva, and other substances. Leeuwenhoek described bacteria, protozoa, and sperm cells, which he called 'animalcules.' His meticulous observations were shared with the Royal Society, sparking widespread interest in microscopy. The discovery of microorganisms challenged existing ideas about the origins of life and disease. Leeuwenhoek's work demonstrated the power of technology to expand human perception.",
        p2: "He observed bacteria, protozoa, and sperm cells, which he called 'animalcules.' These findings provided the first glimpse into a vast and diverse world of microscopic life. Leeuwenhoek's reports inspired other scientists to explore the microscopic realm. The development of better microscopes enabled more detailed studies of cells and tissues. The existence of microorganisms raised new questions about their roles in health and disease. The stage was set for future breakthroughs in microbiology.",
        p3: "These observations challenged the idea of spontaneous generation and set the stage for microbiology and the germ theory of disease. Scientists began to investigate the causes of fermentation, decay, and infection. The realization that invisible organisms could influence human health was revolutionary. Leeuwenhoek's discoveries laid the foundation for later work by Pasteur, Koch, and others. The study of microorganisms has since become central to medicine, agriculture, and industry. The discovery of the microbial world transformed our understanding of life itself.",
        image: "",
    },
    {
        id: 7,
        title: "Development of Germ Theory",
        p1: "Explore how Louis Pasteur and Robert Koch transformed medicine by proving that microbes cause disease. Pasteur's experiments with fermentation and spoilage demonstrated that microorganisms were responsible for these processes. He developed techniques for sterilization and vaccination, including the first vaccines for rabies and anthrax. Koch established a set of criteria, known as Koch's postulates, for linking specific microbes to specific diseases. He identified the causative agents of tuberculosis, cholera, and other infections. Their work provided a scientific basis for infection control and public health.",
        p2: "Pasteur's work on fermentation and vaccines for rabies and anthrax, alongside Koch's postulates and identification of pathogens like Mycobacterium tuberculosis, established the foundations of modern infectious disease control. The acceptance of germ theory led to improvements in sanitation, hygiene, and medical practice. Hospitals adopted sterilization procedures to prevent the spread of infection. The development of antiseptics and antibiotics further reduced mortality from infectious diseases. Germ theory revolutionized the understanding and treatment of illness.",
        p3: "The impact of germ theory extended beyond medicine to agriculture, food safety, and industry. Pasteurization, named after Pasteur, became a standard method for preserving food and preventing disease. The identification of disease-causing microbes enabled the development of targeted vaccines and therapies. Public health campaigns focused on vaccination, clean water, and sanitation. The legacy of Pasteur and Koch endures in modern microbiology and epidemiology. Their discoveries continue to save lives around the world.",
        image: "",
    },
    {
        id: 8,
        title: "The Birth of Immunology",
        p1: "Follow the development of immunology starting with Edward Jenner's smallpox vaccine in 1796. Jenner observed that milkmaids who contracted cowpox were immune to smallpox, a deadly disease. He tested his hypothesis by inoculating a young boy with cowpox and later exposing him to smallpox, demonstrating protection. Jenner's pioneering work laid the foundation for the science of vaccination. The concept of immunity sparked further research into the body's defenses against disease. Immunology emerged as a distinct field in the 19th and 20th centuries.",
        p2: "Jenner's use of cowpox to immunize against smallpox paved the way for vaccination science. Scientists began to investigate the mechanisms underlying immune responses. The discovery of antibodies and antigens provided insight into how the body recognizes and fights pathogens. Advances in cell biology revealed the roles of white blood cells and other immune components. The development of new vaccines helped control diseases like polio, measles, and influenza. Immunology became central to public health and preventive medicine.",
        p3: "Later, advances in understanding antibodies, antigens, and immune responses would lead to new vaccines, allergy treatments, and immunotherapies. The study of autoimmune diseases and immunodeficiencies expanded the scope of immunology. Modern techniques such as monoclonal antibody production and immunotherapy have revolutionized cancer treatment. Research into the immune system continues to yield new therapies for infectious and chronic diseases. The birth of immunology represents a triumph of observation, experimentation, and innovation. Its impact on human health is profound and ongoing.",
        image: "",
    },
    {
        id: 9,
        title: "Advances in Diagnostic Imaging",
        p1: "Trace the journey from Roentgen's discovery of X-rays in 1895 to the development of MRI, CT, and PET scans. X-rays allowed physicians to visualize bones and internal structures without surgery, revolutionizing diagnosis. The invention of computed tomography (CT) provided cross-sectional images of the body, enhancing the detection of tumors and injuries. Magnetic resonance imaging (MRI) offered detailed views of soft tissues using magnetic fields and radio waves. Positron emission tomography (PET) enabled the study of metabolic processes in real time. Each new technology expanded the capabilities of medical imaging.",
        p2: "These technologies transformed diagnostics by allowing non-invasive visualization of internal structures. Physicians could detect fractures, infections, and cancers with unprecedented accuracy. Imaging became essential for planning surgeries and monitoring treatment outcomes. The development of contrast agents improved the visualization of blood vessels and organs. Advances in digital imaging and computer processing enhanced image quality and interpretation. Diagnostic imaging became a cornerstone of modern medicine.",
        p3: "They revolutionized fields like oncology, neurology, and orthopedics. Early detection of disease improved patient outcomes and survival rates. Imaging guided minimally invasive procedures, reducing the need for open surgery. The integration of imaging with other diagnostic tools enabled comprehensive patient assessment. Ongoing research continues to refine imaging techniques and expand their applications. The evolution of diagnostic imaging reflects the synergy of physics, engineering, and medicine.",
        image: "",
    },
    {
        id: 10,
        title: "Evolution of Laboratory Medicine",
        p1: "See how laboratory science evolved from simple urinalysis and bloodletting to advanced diagnostic tools like blood cultures, PCR, and genetic sequencing. Early physicians relied on the color, smell, and taste of bodily fluids to diagnose illness. The invention of the microscope enabled the identification of blood cells and pathogens. Chemical tests for glucose, proteins, and other substances improved diagnostic accuracy. The development of blood typing and cross-matching made transfusions safer. Laboratory medicine became increasingly sophisticated with the introduction of automation and quality control.",
        p2: "Innovations in lab techniques have drastically improved the precision of diagnosis. Polymerase chain reaction (PCR) allowed for the rapid detection of infectious agents and genetic mutations. Sequencing technologies enabled the identification of hereditary diseases and cancer markers. High-throughput analyzers processed thousands of samples daily, increasing efficiency and reliability. The integration of laboratory data with electronic health records facilitated clinical decision-making. Laboratory professionals became essential members of the healthcare team.",
        p3: "These advances enabled early detection of a wide range of diseases. Screening programs for conditions like diabetes, HIV, and cancer rely on laboratory tests. Personalized medicine uses genetic information to tailor treatments to individual patients. The evolution of laboratory medicine continues with the development of point-of-care testing and wearable diagnostics. Ongoing research seeks to improve sensitivity, specificity, and accessibility. Laboratory science remains at the forefront of medical innovation and patient care.",
        image: "",
    },
];

// Dummy data for other sections
const paraArticles: Article[] = [
    { id: 101, title: 'Discovery of Microorganisms', p1: 'How pathology shaped modern diagnostics.' },
    { id: 102, title: 'Development of Germ Theory', p1: 'Rise of microbiology in disease detection.' },
];
const clinicalArticles: Article[] = [
    { id: 201, title: 'Early Clinical Practices', p1: 'The emergence of hospitals in history.' },
    { id: 202, title: 'Surgical Milestones', p1: 'Milestones in surgical practice.' },
];
const orthoArticles: Article[] = [
    { id: 301, title: 'Origins of Orthopaedics', p1: 'Ancient bone setting techniques.' },
    { id: 302, title: 'Medieval Bone Setters', p1: 'Development of orthopedic surgery.' },
];

const PreClinicalHistoryPage: React.FC = () => {
    const [selectedArticle, setSelectedArticle] = useState<Article>(preClinicalArticles[0]);
    const router = useRouter();

    return (
        <>
        < HistorySection />
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left Sidebar: Pre-Clinical Chronological List */}
            <aside className="w-full md:w-1/5 min-w-0 md:min-w-[200px] border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-2">
            <h2 className="font-bold text-lg mb-2 studio-sans">Pre-Clinical</h2>
            <nav className="flex flex-col gap-1">
                {preClinicalArticles.map(article => (
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
            <SectionList title="Para-Clinical" articles={paraArticles} route="/history/paraClinical" />
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

export default PreClinicalHistoryPage;
