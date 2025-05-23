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
        title: 'Physiotherapy', 
        description: 'Physiotherapy is a treatment to restore, maintain, and make the most of a patient\'s mobility and function. It involves exercises, manual therapy, and other techniques to improve physical well-being. This therapy is often used to recover from injuries, surgeries, or chronic conditions, helping patients regain independence and quality of life.' 
    },
    { 
        id: 2, 
        title: 'Occupational Therapy', 
        description: 'Occupational therapy helps people participate in the activities of everyday life. It focuses on enabling individuals to perform tasks that are meaningful and necessary for their daily living. This therapy is particularly beneficial for individuals recovering from physical or mental health challenges, as it promotes independence and enhances their ability to engage in daily routines.' 
    },
    { 
        id: 3, 
        title: 'Speech Therapy', 
        description: 'Speech therapy is a treatment to improve communication and swallowing disorders. It helps individuals develop or regain their ability to speak and understand language effectively. This therapy is essential for children with speech delays, stroke survivors, and individuals with conditions like autism or Parkinson\'s disease.' 
    },
    { 
        id: 4, 
        title: 'Chiropractic Care', 
        description: 'Chiropractic care is a form of alternative medicine focused on the diagnosis and treatment of mechanical disorders of the musculoskeletal system, especially the spine. It emphasizes spinal adjustments and manipulations to alleviate pain, improve posture, and enhance overall physical function.' 
    },
    { 
        id: 5, 
        title: 'Acupuncture', 
        description: 'Acupuncture is a traditional Chinese medicine practice involving the insertion of thin needles into the body. It is used to alleviate pain and treat various physical and mental conditions. This ancient practice is believed to balance the body\'s energy flow, promoting healing and relaxation.' 
    },
    { 
        id: 6, 
        title: 'Massage Therapy', 
        description: 'Massage therapy involves the manipulation of soft tissues in the body to relieve tension, reduce pain, and promote relaxation and overall well-being. It is widely used for stress relief, injury recovery, and improving circulation, making it a popular choice for holistic health care.' 
    },
    { 
        id: 7, 
        title: 'Dietary Counseling', 
        description: 'Dietary counseling provides guidance on nutrition and diet to improve health, manage conditions, and support overall wellness through personalized dietary plans. It is particularly helpful for individuals managing chronic diseases like diabetes, heart conditions, or obesity, as well as those seeking to adopt healthier eating habits.' 
    },
    { 
        id: 8, 
        title: 'Rehabilitation Therapy', 
        description: 'Rehabilitation therapy aims to enable recovery from injury, illness, or surgery. It focuses on restoring physical, mental, and emotional well-being. This therapy often involves a multidisciplinary approach, combining physical therapy, counseling, and other treatments to help patients regain independence.' 
    },
    { 
        id: 9, 
        title: 'Hydrotherapy', 
        description: 'Hydrotherapy involves the use of water in the treatment of various conditions, including arthritis and joint pain. It promotes relaxation and improves physical function. This therapy is often conducted in pools or baths, utilizing the buoyancy and warmth of water to reduce stress on joints and muscles.' 
    },
    { 
        id: 10, 
        title: 'Respiratory Therapy', 
        description: 'Respiratory therapy provides care for patients with breathing or cardiopulmonary disorders. It includes techniques and treatments to improve lung function and overall respiratory health. This therapy is crucial for individuals with conditions like asthma, COPD, or post-surgical recovery, ensuring better oxygenation and quality of life.' 
    },
];

const ParaMedicalHistoryPage: React.FC = () => {
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
                <h1 className="milker text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center">Para-Medical History</h1>
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

export default ParaMedicalHistoryPage;