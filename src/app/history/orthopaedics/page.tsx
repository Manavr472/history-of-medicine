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

const orthoArticles: Article[] = [
  {
    "id": 1,
    "title": "Origins of Orthopaedics",
    "p1": "The term 'orthopaedics' was coined in 1741 by French physician Nicolas Andry to describe the correction of childhood skeletal deformities.",
    "p2": "However, bone setting and splinting practices date back to ancient Egypt, Greece, and India. Mummies have been found with splints, and Hippocrates described techniques to treat dislocations and fractures.",
    "p3": "These early practices laid the foundation for what would become modern orthopedic medicine.",
    "image": "",
  },
  {
    "id": 2,
    "title": "Medieval Bone Setters",
    "p1": "During the medieval period, bone setting was largely a craft practiced by laypeople, often passed down through families.",
    "p2": "Despite lacking formal training, these practitioners developed a reputation for treating fractures and joint dislocations effectively.",
    "p3": "Their techniques influenced the evolution of orthopedic care, even as the medical establishment remained skeptical of their methods.",
    "image": "",
  },
  {
    "id": 3,
    "title": "Orthopaedics in the Age of Surgery",
    "p1": "With the advent of anesthesia and antiseptics in the 19th century, surgical intervention for bone and joint conditions became safer and more widespread.",
    "p2": "This era saw the formal recognition of orthopaedics as a surgical specialty. Techniques for internal fixation and skeletal traction improved outcomes for trauma and deformity corrections.",
    "p3": "The foundation was laid for modern orthopedic surgery as we know it today.",
    "image": "",
  },
  {
    "id": 4,
    "title": "Advances in Fracture Management",
    "p1": "The 20th century witnessed a revolution in fracture treatment, beginning with the introduction of plaster casts and evolving into modern internal fixation techniques.",
    "p2": "Pioneers like Hugh Owen Thomas and Robert Jones helped standardize orthopedic practice.",
    "p3": "The development of intramedullary nails and locking plates transformed long bone fracture care.",
    "image": "",
  },
  {
    "id": 5,
    "title": "Rise of Joint Replacement Surgery",
    "p1": "One of the most significant milestones in modern orthopaedics was the development of total joint arthroplasty.",
    "p2": "Sir John Charnley's low-friction hip replacement in the 1960s revolutionized care for arthritis patients.",
    "p3": "Knee, shoulder, and elbow replacements followed, vastly improving mobility and quality of life for millions.",
    "image": "",
  },
  {
    "id": 6,
    "title": "Pediatric Orthopaedics",
    "p1": "Dedicated pediatric orthopaedics evolved as a subspecialty to address congenital deformities like clubfoot and scoliosis.",
    "p2": "The development of non-surgical interventions like the Ponseti method for clubfoot and advanced bracing techniques allowed for early intervention with fewer complications.",
    "p3": "Growth plate considerations further distinguish this subspecialty from adult orthopedics.",
    "image": "",
  },
  {
    "id": 7,
    "title": "Spinal Surgery Innovations",
    "p1": "Spinal surgery advanced significantly in the latter half of the 20th century with the advent of imaging techniques like MRI and the refinement of spinal fusion techniques.",
    "p2": "Conditions such as scoliosis, disc herniation, and spinal stenosis can now be treated with minimally invasive procedures.",
    "p3": "Advanced instrumentation has made spinal surgery safer and more effective than ever before.",
    "image": "",
  },
  {
    "id": 8,
    "title": "Sports Medicine and Arthroscopy",
    "p1": "The explosion of interest in sports and physical fitness led to the growth of sports medicine and the development of arthroscopic surgery.",
    "p2": "This minimally invasive technique allows surgeons to diagnose and treat joint issues with less trauma and quicker recovery.",
    "p3": "Common procedures include ACL reconstructions and meniscal repairs that get athletes back to competition faster.",
    "image": "",
  },
  {
    "id": 9,
    "title": "Orthopaedic Trauma Care",
    "p1": "Modern orthopaedic trauma care focuses on rapid stabilization and early mobility. Techniques like external fixation and damage control orthopaedics are crucial in polytrauma cases.",
    "p2": "Collaboration with emergency medicine and critical care has optimized protocols for better outcomes in accident and war injuries.",
    "p3": "The goal is always to preserve function while saving lives in critical situations.",
    "image": "",
  },
  {
    "id": 10,
    "title": "Future of Orthopaedics",
    "p1": "Emerging technologies such as 3D printing, robotics, and biologics are shaping the future of orthopaedics.",
    "p2": "Customized implants, tissue engineering, and AI-assisted surgical planning aim to provide more personalized and effective treatments.",
    "p3": "The integration of digital health tools continues to enhance diagnostics, rehabilitation, and remote care.",
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
const clinicalArticles: Article[] = [
    { id: 301, title: 'Early Clinical Practices', p1: 'The emergence of hospitals in history.' },
    { id: 302, title: 'Surgical Milestones', p1: 'Milestones in surgical practice.' },
];

const OrthopaedicsHistoryPage: React.FC = () => {
    const [selectedArticle, setSelectedArticle] = useState<Article>(orthoArticles[0]);

    return (
        <>
        <HistorySection />
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left Sidebar: Orthopaedics Chronological List */}
            <aside className="w-full md:w-1/5 min-w-0 md:min-w-[200px] border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-2">
                <h2 className="font-bold text-lg mb-2 studio-sans">Orthopaedics</h2>
                <nav className="flex flex-col gap-1">
                    {orthoArticles.map(article => (
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
            <SectionList title="Clinical" articles={clinicalArticles} route="/history/clinical" />
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

export default OrthopaedicsHistoryPage;
