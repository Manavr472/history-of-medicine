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
        title: 'Knee Bloodletting', 
        description: 'An ancient medical practice involving the withdrawal of blood specifically from the knee area to treat joint pain or inflammation. This was based on the belief that removing blood could balance bodily humors and alleviate knee-related ailments.' 
    },
    { 
        id: 2, 
        title: 'Knee Trepanation', 
        description: 'A rare surgical intervention where a hole was drilled or scraped into the knee joint. This ancient practice was believed to relieve pressure or treat severe knee injuries by releasing trapped fluids or spirits.' 
    },
    { 
        id: 3, 
        title: 'Knee Cupping Therapy', 
        description: 'An ancient form of alternative medicine where cups were placed around the knee to create suction. This practice was thought to improve blood flow, reduce knee pain, and promote healing in the joint area.' 
    },
    { 
        id: 4, 
        title: 'Knee Herbal Poultice', 
        description: 'A treatment where a mixture of herbs was applied to the knee to reduce swelling and pain. This practice was believed to draw out toxins and promote healing.' 
    },
    { 
        id: 5, 
        title: 'Knee Leech Therapy', 
        description: 'The use of leeches to draw blood from the knee area. This ancient practice was thought to reduce inflammation and improve circulation in the joint.' 
    },
    { 
        id: 6, 
        title: 'Knee Bone Setting', 
        description: 'A traditional practice where dislocated or fractured knee bones were manually adjusted and set back into place by a healer or practitioner.' 
    },
    { 
        id: 7, 
        title: 'Knee Moxibustion', 
        description: 'A therapy involving the burning of mugwort near the knee to stimulate circulation and alleviate pain. This was a common practice in ancient Eastern medicine.' 
    },
    { 
        id: 8, 
        title: 'Knee Acupuncture', 
        description: 'The insertion of fine needles into specific points around the knee to relieve pain and improve joint function. This practice was rooted in traditional Chinese medicine.' 
    },
    { 
        id: 9, 
        title: 'Knee Scarification', 
        description: 'A ritualistic practice where small cuts were made around the knee to release bad spirits or toxins. This was believed to promote healing and ward off ailments.' 
    },
    { 
        id: 10, 
        title: 'Knee Steam Therapy', 
        description: 'The use of steam infused with medicinal herbs directed at the knee to reduce stiffness and improve mobility. This practice was common in ancient spa treatments.' 
    },
];

const PreMedicalHistoryPage: React.FC = () => {
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
                <h1 className="milker text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center">Pre-Medical History</h1>
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

export default PreMedicalHistoryPage;
