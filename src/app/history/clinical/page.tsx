'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Surgery {
    id: number;
    title: string;
    description: string;
}

const surgeries: Surgery[] = [
    { 
        id: 1, 
        title: 'Knee Replacement Surgery', 
        description: 'Advanced techniques in knee replacement to restore mobility and reduce pain for patients with severe joint damage.' 
    },
    { 
        id: 2, 
        title: 'Arthroscopic Knee Surgery', 
        description: 'Minimally invasive procedure to diagnose and treat knee joint issues, ensuring quicker recovery and less discomfort.' 
    },
    { 
        id: 3, 
        title: 'Knee Ligament Repair', 
        description: 'Specialized procedures to repair torn ligaments like ACL or MCL, helping athletes and active individuals regain stability.' 
    },
    { 
        id: 4, 
        title: 'Cartilage Restoration', 
        description: 'Innovative treatments to repair or regenerate knee cartilage, preventing further joint degeneration and improving function.' 
    },
    { 
        id: 5, 
        title: 'Knee Osteotomy', 
        description: 'Surgical intervention to realign the knee joint, relieving pressure on damaged areas and delaying the need for replacement.' 
    },
    { 
        id: 6, 
        title: 'Robotic-Assisted Knee Surgery', 
        description: 'Utilizing robotic systems for precise knee surgeries, enhancing outcomes and reducing recovery time.' 
    },
    { 
        id: 7, 
        title: 'Stem Cell Therapy for Knees', 
        description: 'Using stem cells to promote healing and regeneration in knee injuries, offering a non-surgical alternative for chronic pain.' 
    },
    { 
        id: 8, 
        title: 'Meniscus Repair', 
        description: 'Advanced techniques to repair torn meniscus tissue, preserving knee function and preventing long-term complications.' 
    },
    { 
        id: 9, 
        title: 'Knee Fracture Fixation', 
        description: 'Surgical solutions to stabilize and heal fractures in the knee joint, restoring strength and mobility.' 
    },
    { 
        id: 10, 
        title: 'Physical Therapy for Knee Recovery', 
        description: 'Comprehensive rehabilitation programs to strengthen the knee and improve range of motion post-surgery or injury.' 
    },
];

const ClinicalMedicalHistoryPage: React.FC = () => {
    const [selectedSurgery, setSelectedSurgery] = useState<Surgery | null>(null);

    const handleCardClick = (surgery: Surgery) => {
        setSelectedSurgery(surgery);
    };

    const handleBackClick = () => {
        setSelectedSurgery(null);
    };

    return (
        <div className="p-4">
            <div className="flex justify-center">
                <h1 className="milker text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center">Clinical-Medical History</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {surgeries.map((surgery) => (
                    <motion.div
                        key={surgery.id}
                        layout
                        className={`bg-white p-4 dark:bg-black rounded-lg shadow-lg overflow-hidden transform transition duration-500 ${
                            selectedSurgery?.id === surgery.id ? 'col-span-1 sm:col-span-2 lg:col-span-3' : 'hover:scale-105 hover:shadow-lg hover:shadow-green-500'
                        } cursor-pointer`}
                        onClick={() => handleCardClick(surgery)}
                    >
                        <h2 className="text-lg font-bold">{surgery.title}</h2>
                        <AnimatePresence>
                            {selectedSurgery?.id === surgery.id ? (
                                <motion.p
                                    key="expanded"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="text-sm text-gray-200"
                                >
                                    {surgery.description}
                                </motion.p>
                            ) : (
                                <motion.p
                                    key="collapsed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-sm text-gray-200"
                                >
                                    {`${surgery.description.substring(0, 50)}...`}
                                </motion.p>
                            )}
                        </AnimatePresence>
                        {selectedSurgery?.id === surgery.id && (
                            <motion.button
                                className="text-2xl text-green-500 hover:underline"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleBackClick();
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                ^
                            </motion.button>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ClinicalMedicalHistoryPage;
