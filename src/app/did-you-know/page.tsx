'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MedicalFact {
    id: number;
    fact: string;
    category: string;
    source?: string;
    likes: number;
    dislikes: number;
}

const medicalFacts: MedicalFact[] = [
    {
        id: 1,
        fact: "The human heart beats about 100,000 times per day and pumps around 2,000 gallons of blood through your body.",
        category: "Cardiology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 2,
        fact: "Your brain uses about 20% of your body's total energy, despite only weighing about 2% of your total body weight.",
        category: "Neurology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 3,
        fact: "The human body contains approximately 37.2 trillion cells, and about 25 million of them die every second.",
        category: "Cell Biology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 4,
        fact: "Your stomach gets an entirely new lining every 3-4 days because stomach acid would otherwise digest it.",
        category: "Gastroenterology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 5,
        fact: "The human eye can distinguish between approximately 10 million different colors.",
        category: "Ophthalmology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 6,
        fact: "Your liver can regenerate itself completely from just 25% of its original tissue within a few months.",
        category: "Hepatology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 7,
        fact: "The smallest bone in the human body is the stapes in your ear, measuring only 2-3 millimeters.",
        category: "Orthopedics",
        likes: 0,
        dislikes: 0
    },
    {
        id: 8,
        fact: "Your kidneys filter about 50 gallons of blood every day, producing 1-2 quarts of urine.",
        category: "Nephrology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 9,
        fact: "The human nose can detect and remember up to 50,000 different scents.",
        category: "Otolaryngology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 10,
        fact: "Your skin completely renews itself every 28 days, meaning you have a entirely new outer layer of skin each month.",
        category: "Dermatology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 11,
        fact: "The human immune system can recognize and remember up to 1 billion different pathogens.",
        category: "Immunology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 12,
        fact: "Your bones are about 31% water and are actually stronger than steel when compared pound for pound.",
        category: "Orthopedics",
        likes: 0,
        dislikes: 0
    },
    {
        id: 13,
        fact: "The human brain contains approximately 86 billion neurons, connected by trillions of synapses.",
        category: "Neurology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 14,
        fact: "Your lungs contain about 300-500 million alveoli, providing a surface area roughly the size of a tennis court.",
        category: "Pulmonology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 15,
        fact: "The human body produces about 25 million new red blood cells every second.",
        category: "Hematology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 16,
        fact: "Your digestive system contains more bacterial cells than human cells - about 39 trillion bacteria.",
        category: "Gastroenterology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 17,
        fact: "The human ear can hear sounds as quiet as 0 decibels and can detect frequency changes as small as 0.2%.",
        category: "Otolaryngology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 18,
        fact: "Your muscles generate heat, and shivering can increase heat production by up to 5 times normal levels.",
        category: "Physiology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 19,
        fact: "The human pancreas produces about 1.5 liters of digestive juices daily, containing powerful enzymes.",
        category: "Endocrinology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 20,
        fact: "Your spinal cord contains about 13.5 million neurons and can transmit signals at speeds up to 120 meters per second.",
        category: "Neurology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 21,
        fact: "The human body contains enough iron to make a 3-inch nail, mostly stored in hemoglobin.",
        category: "Hematology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 22,
        fact: "Your taste buds regenerate every 7-10 days, which is why your taste preferences can change over time.",
        category: "Physiology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 23,
        fact: "The human retina contains about 120 million rod cells and 6 million cone cells for vision.",
        category: "Ophthalmology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 24,
        fact: "Your white blood cells can live for just a few days to several decades, depending on their type.",
        category: "Immunology",
        likes: 0,
        dislikes: 0
    },
    {
        id: 25,
        fact: "The human body temperature is regulated so precisely that a variation of just 7°F can be life-threatening.",
        category: "Physiology",
        likes: 0,
        dislikes: 0
    }
];

const DidYouKnowPage: React.FC = () => {
    const [currentFact, setCurrentFact] = useState<MedicalFact>(medicalFacts[0]);
    const [facts, setFacts] = useState<MedicalFact[]>(medicalFacts);
    const [showAnimation, setShowAnimation] = useState(false);

    const getRandomFact = () => {
        setShowAnimation(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * facts.length);
            setCurrentFact(facts[randomIndex]);
            setShowAnimation(false);
        }, 300);
    };

    const handleVote = (factId: number, voteType: 'like' | 'dislike') => {
        setFacts(prevFacts => 
            prevFacts.map(fact => 
                fact.id === factId
                    ? {
                        ...fact,
                        likes: voteType === 'like' ? fact.likes + 1 : fact.likes,
                        dislikes: voteType === 'dislike' ? fact.dislikes + 1 : fact.dislikes
                    }
                    : fact
            )
        );

        // Update current fact if it's the one being voted on
        if (currentFact.id === factId) {
            setCurrentFact(prev => ({
                ...prev,
                likes: voteType === 'like' ? prev.likes + 1 : prev.likes,
                dislikes: voteType === 'dislike' ? prev.dislikes + 1 : prev.dislikes
            }));
        }
    };

    const getCategoryColor = (category: string) => {
        const colors = {
            'Cardiology': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
            'Neurology': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
            'Cell Biology': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
            'Gastroenterology': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
            'Ophthalmology': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
            'Hepatology': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
            'Orthopedics': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
            'Nephrology': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
            'Otolaryngology': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
            'Dermatology': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
            'Immunology': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
            'Pulmonology': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
            'Hematology': 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
            'Endocrinology': 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200',
            'Physiology': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
        };
        return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
    };

    useEffect(() => {
        getRandomFact();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h1 
                        className="milker text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Did You Know?
                    </motion.h1>
                    <motion.p 
                        className="studio-sans text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Discover fascinating medical facts that will amaze you and expand your knowledge of the human body!
                    </motion.p>
                </div>

                {/* Main Fact Card */}
                <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentFact.id}
                            initial={{ opacity: 0, x: showAnimation ? 100 : 0 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Category Badge */}
                            <div className="flex justify-center mb-6">
                                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(currentFact.category)}`}>
                                    {currentFact.category}
                                </span>
                            </div>

                            {/* Fact Text */}
                            <p className="studio-sans text-xl md:text-2xl text-gray-800 dark:text-gray-200 text-center leading-relaxed mb-8">
                                {currentFact.fact}
                            </p>

                            {/* Voting Section */}
                            <div className="flex items-center justify-center space-x-8 mb-6">
                                <button
                                    onClick={() => handleVote(currentFact.id, 'like')}
                                    className="flex items-center space-x-2 bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 text-green-800 dark:text-green-200 px-4 py-2 rounded-lg transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                                    </svg>
                                    <span className="font-semibold">{currentFact.likes}</span>
                                </button>

                                <button
                                    onClick={() => handleVote(currentFact.id, 'dislike')}
                                    className="flex items-center space-x-2 bg-red-100 hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800 text-red-800 dark:text-red-200 px-4 py-2 rounded-lg transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0011.057 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"/>
                                    </svg>
                                    <span className="font-semibold">{currentFact.dislikes}</span>
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Random Fact Button */}
                    <div className="text-center">
                        <motion.button
                            onClick={getRandomFact}
                            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition-all duration-200 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            🎲 Show Random Fact
                        </motion.button>
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="milker text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
                        Medical Fact Categories
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {Array.from(new Set(facts.map(fact => fact.category))).map(category => (
                            <div key={category} className="text-center">
                                <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center text-white font-bold ${getCategoryColor(category).includes('red') ? 'bg-red-500' : getCategoryColor(category).includes('purple') ? 'bg-purple-500' : getCategoryColor(category).includes('green') ? 'bg-green-500' : getCategoryColor(category).includes('blue') ? 'bg-blue-500' : getCategoryColor(category).includes('orange') ? 'bg-orange-500' : 'bg-gray-500'}`}>
                                    {facts.filter(fact => fact.category === category).length}
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">{category}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DidYouKnowPage;
