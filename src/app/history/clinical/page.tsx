'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HistorySection from '@/app/components/historysection';
import { useRouter } from 'next/navigation';

interface Article {
    id: number;
    title: string;
    p1: string;
    p2?: string;
    p3?: string;
    image?: string;
}

const clinicalArticles: Article[] = [
  {
    "id": 1,
    "title": "Early Clinical Practices",
    "p1": "Dive into ancient treatments like bloodletting, trepanation, and spiritual healing methods. Civilizations such as the Egyptians, Greeks, Chinese, and Indians practiced holistic medicine, balancing bodily humors or energies.",
    "p2": "Trepanation, one of the earliest surgical practices, involved drilling holes into the skull to relieve pressure or expel evil spirits. Bloodletting was believed to restore health by balancing bodily fluids.",
    "p3": "While primitive by modern standards, these methods reflect humanity's first systematic attempts to treat disease and maintain wellness.",
    "image": "",
  },
  {
    "id": 2,
    "title": "Surgical Milestones",
    "p1": "Explore the impact of anesthesia, antisepsis, and the first organ transplants on surgical practice. The 19th century marked the introduction of ether and chloroform, revolutionizing surgery by making it painless.",
    "p2": "Joseph Lister's promotion of antiseptic techniques drastically reduced infection and mortality rates. By the 20th century, advancements in immunology and technology enabled complex procedures like open-heart surgery and kidney transplants.",
    "p3": "These milestones transformed surgery from a last resort to a routine, life-saving intervention.",
    "image": "",
  },
  {
    "id": 3,
    "title": "Development of Medical Specialties",
    "p1": "Follow how disciplines like psychiatry, pediatrics, and gynecology branched out from general medicine. As medical knowledge expanded, practitioners began to focus on specific patient populations and types of diseases.",
    "p2": "Psychiatry emerged with the work of figures like Sigmund Freud, while pediatrics grew in response to high infant mortality rates.",
    "p3": "Specialties like cardiology, dermatology, and oncology further refined medical care, allowing for more accurate diagnosis and tailored treatments.",
    "image": "",
  },
  {
    "id": 4,
    "title": "Public Health and Disease Control",
    "p1": "Learn about breakthroughs in epidemiology, from John Snow's cholera map to COVID-19 vaccines. The understanding that clean water, sanitation, and vaccination can prevent disease reshaped cities and saved millions of lives.",
    "p2": "The 20th century saw the eradication of smallpox, control of polio, and strategies for HIV/AIDS.",
    "p3": "Modern public health campaigns, global health organizations, and rapid response to pandemics continue to evolve, aiming to protect communities worldwide.",
    "image": "",
  },
  {
    "id": 5,
    "title": "Medical Education and Hospitals",
    "p1": "Witness the evolution of medical training, from apprenticeships in monasteries to structured academic institutions. Medieval hospitals were often religious institutions offering care without much scientific foundation.",
    "p2": "The Renaissance brought dissection and anatomy into the curriculum, and universities began formalizing medical education.",
    "p3": "Today, hospitals serve as centers of learning, research, and patient care, integrating technology, simulation labs, and interprofessional education to prepare future healthcare providers.",
    "image": "",
  },
  {
    "id": 6,
    "title": "Pharmacological Advancements",
    "p1": "Trace the journey from herbal remedies to synthetic drugs and biotech treatments. Ancient civilizations relied on plant-based cures, many of which laid the foundation for modern drugs.",
    "p2": "The 19th century introduced compounds like aspirin, morphine, and quinine. With the discovery of penicillin in the 20th century, pharmaceuticals rapidly evolved into a billion-dollar industry.",
    "p3": "Today, pharmacogenomics enables personalized prescriptions, and biotechnology drives the creation of complex therapies like monoclonal antibodies.",
    "image": "",
  },
  {
    "id": 7,
    "title": "Radiology and Medical Imaging",
    "p1": "Explore how medical imaging transformed diagnostics. Wilhelm Roentgen's discovery of X-rays in 1895 enabled doctors to view inside the body non-invasively.",
    "p2": "CT scans, MRI, PET scans, and ultrasounds followed, each improving visualization of internal organs and structures.",
    "p3": "Imaging now plays a central role in everything from cancer detection to prenatal care, enhancing accuracy and treatment planning.",
    "image": "",
  },
  {
    "id": 8,
    "title": "Biomedical Engineering",
    "p1": "Understand how engineering innovations have enhanced medicine. From prosthetic limbs and pacemakers to dialysis machines and robotic surgery, biomedical engineering bridges the gap between medicine and mechanics.",
    "p2": "This field has also driven the development of wearable health monitors and implantable devices, increasing both longevity and quality of life for millions of patients.",
    "p3": "",
    "image": "",
  },
  {
    "id": 9,
    "title": "Digital Health and Telemedicine",
    "p1": "Investigate how digital technology is reshaping healthcare. Telemedicine provides remote access to care, especially in underserved regions.",
    "p2": "Electronic health records streamline data sharing, while mobile health apps promote wellness and patient engagement.",
    "p3": "The COVID-19 pandemic accelerated the global adoption of digital health, proving its value in continuity of care.",
    "image": "",
  },
  {
    "id": 10,
    "title": "Ethics and Medical Law",
    "p1": "Examine the development of ethical frameworks and laws in medicine. From the Hippocratic Oath to modern principles like autonomy, beneficence, and justice, ethics guide clinical decision-making.",
    "p2": "Landmark cases and medical dilemmas have shaped policies on consent, end-of-life care, and genetic testing.",
    "p3": "As technology advances, medical ethics remains vital to ensure equitable, respectful, and responsible care.",
    "image": "",
  },
];

// Dummy data for other sections (for right sidebar)
const preArticles: Article[] = [
    { id: 101, title: 'Ancient Anatomical Knowledge', p1: 'Early anatomical knowledge.' },
    { id: 102, title: 'Rise of Modern Anatomy', p1: 'Vesalius and the rise of dissection.' },
];
const paraClinicalArticles: Article[] = [
    { id: 201, title: 'Discovery of Microorganisms', p1: 'How pathology shaped modern diagnostics.' },
    { id: 202, title: 'Development of Germ Theory', p1: 'Rise of microbiology in disease detection.' },
];
const orthoArticles: Article[] = [
    { id: 301, title: 'Origins of Orthopaedics', p1: 'Ancient bone setting techniques.' },
    { id: 302, title: 'Medieval Bone Setters', p1: 'Development of orthopedic surgery.' },
];

const ClinicalHistoryPage: React.FC = () => {
    const [selectedArticle, setSelectedArticle] = useState<Article>(clinicalArticles[0]);
    const router = useRouter();

    return (
        <>
        <HistorySection/>
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left Sidebar: Clinical Chronological List */}
            <aside className="w-full md:w-1/5 min-w-0 md:min-w-[200px] border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-2">
                <h2 className="font-bold text-lg mb-2 studio-sans">Clinical</h2>
                <nav className="flex flex-col gap-1">
                    {clinicalArticles.map(article => (
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
            <SectionList title="Para-Clinical" articles={paraClinicalArticles} route="/history/paraClinical" />
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

export default ClinicalHistoryPage;
