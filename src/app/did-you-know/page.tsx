'use client'
import React, { useState } from 'react';

interface MedicalFact {
    id: number;
    fact: string;
    category: string;
    liked: boolean;
    disliked: boolean;
}

const medicalFacts: MedicalFact[] = [
    {
        id: 1,
        fact: "The human heart beats about 100,000 times per day and pumps around 2,000 gallons of blood through your body.",
        category: "Cardiology",
        liked: false,
        disliked: false
    },
    {
        id: 2,
        fact: "Your brain uses about 20% of your body's total energy, despite only weighing about 2% of your total body weight.",
        category: "Neurology",
        liked: false,
        disliked: false
    },
    {
        id: 3,
        fact: "The human body contains approximately 37.2 trillion cells, and about 25 million of them die every second.",
        category: "Cell Biology",
        liked: false,
        disliked: false
    },
    {
        id: 4,
        fact: "Your stomach gets an entirely new lining every 3-4 days because stomach acid would otherwise digest it.",
        category: "Gastroenterology",
        liked: false,
        disliked: false
    },
    {
        id: 5,
        fact: "The human eye can distinguish between approximately 10 million different colors.",
        category: "Ophthalmology",
        liked: false,
        disliked: false
    },
    {
        id: 6,
        fact: "Your liver can regenerate itself completely from just 25% of its original tissue within a few months.",
        category: "Hepatology",
        liked: false,
        disliked: false
    },
    {
        id: 7,
        fact: "The smallest bone in the human body is the stapes in your ear, measuring only 2-3 millimeters.",
        category: "Orthopedics",
        liked: false,
        disliked: false
    },
    {
        id: 8,
        fact: "Your kidneys filter about 50 gallons of blood every day, producing 1-2 quarts of urine.",
        category: "Nephrology",
        liked: false,
        disliked: false
    },
    {
        id: 9,
        fact: "The human nose can detect and remember up to 50,000 different scents.",
        category: "Otolaryngology",
        liked: false,
        disliked: false
    },
    {
        id: 10,
        fact: "Your skin completely renews itself every 28 days, meaning you have a entirely new outer layer of skin each month.",
        category: "Dermatology",
        liked: false,
        disliked: false
    },
    {
        id: 11,
        fact: "The human immune system can recognize and remember up to 1 billion different pathogens.",
        category: "Immunology",
        liked: false,
        disliked: false
    },
    {
        id: 12,
        fact: "Your bones are about 31% water and are actually stronger than steel when compared pound for pound.",
        category: "Orthopedics",
        liked: false,
        disliked: false
    },
    {
        id: 13,
        fact: "The human brain contains approximately 86 billion neurons, connected by trillions of synapses.",
        category: "Neurology",
        liked: false,
        disliked: false
    },
    {
        id: 14,
        fact: "Your lungs contain about 300-500 million alveoli, providing a surface area roughly the size of a tennis court.",
        category: "Pulmonology",
        liked: false,
        disliked: false
    },
    {
        id: 15,
        fact: "The human body produces about 25 million new red blood cells every second.",
        category: "Hematology",
        liked: false,
        disliked: false
    },
    {
        id: 16,
        fact: "Your digestive system contains more bacterial cells than human cells - about 39 trillion bacteria.",
        category: "Gastroenterology",
        liked: false,
        disliked: false
    },
    {
        id: 17,
        fact: "The human ear can hear sounds as quiet as 0 decibels and can detect frequency changes as small as 0.2%.",
        category: "Otolaryngology",
        liked: false,
        disliked: false
    },
    {
        id: 18,
        fact: "Your muscles generate heat, and shivering can increase heat production by up to 5 times normal levels.",
        category: "Physiology",
        liked: false,
        disliked: false
    },
    {
        id: 19,
        fact: "The human pancreas produces about 1.5 liters of digestive juices daily, containing powerful enzymes.",
        category: "Endocrinology",
        liked: false,
        disliked: false
    },
    {
        id: 20,
        fact: "Your spinal cord contains about 13.5 million neurons and can transmit signals at speeds up to 120 meters per second.",
        category: "Neurology",
        liked: false,
        disliked: false
    },
    {
        id: 21,
        fact: "The human body contains enough iron to make a 3-inch nail, mostly stored in hemoglobin.",
        category: "Hematology",
        liked: false,
        disliked: false
    },
    {
        id: 22,
        fact: "Your taste buds regenerate every 7-10 days, which is why your taste preferences can change over time.",
        category: "Physiology",
        liked: false,
        disliked: false
    },
    {
        id: 23,
        fact: "The human retina contains about 120 million rod cells and 6 million cone cells for vision.",
        category: "Ophthalmology",
        liked: false,
        disliked: false
    },
    {
        id: 24,
        fact: "Your white blood cells can live for just a few days to several decades, depending on their type.",
        category: "Immunology",
        liked: false,
        disliked: false
    },
    {
        id: 25,
        fact: "The human body temperature is regulated so precisely that a variation of just 7°F can be life-threatening.",
        category: "Physiology",
        liked: false,
        disliked: false
    },
    {
        id: 26,
        fact: "Adults have 206 bones, but babies are born with around 270 bones that fuse together as they grow.",
        category: "Orthopedics",
        liked: false,
        disliked: false
    },
    {
        id: 27,
        fact: "The average person produces about 1-2 liters of saliva per day, which contains enzymes that begin digestion.",
        category: "Gastroenterology",
        liked: false,
        disliked: false
    },
    {
        id: 28,
        fact: "Your fingernails grow about 3-4 millimeters per month, while toenails grow much slower at 1-2 millimeters.",
        category: "Dermatology",
        liked: false,
        disliked: false
    },
    {
        id: 29,
        fact: "The human bladder can hold up to 500ml of urine, but the urge to urinate typically starts at 150ml.",
        category: "Urology",
        liked: false,
        disliked: false
    },
    {
        id: 30,
        fact: "Your blood makes up about 7-8% of your total body weight and contains over 4,000 different proteins.",
        category: "Hematology",
        liked: false,
        disliked: false
    },
    {
        id: 31,
        fact: "The human tooth enamel is the hardest substance in the human body, even harder than bone.",
        category: "Dentistry",
        liked: false,
        disliked: false
    },
    {
        id: 32,
        fact: "Your appendix, once thought useless, actually helps maintain gut bacteria and supports immune function.",
        category: "Gastroenterology",
        liked: false,
        disliked: false
    },
    {
        id: 33,
        fact: "The human body produces about 1.5 liters of mucus every day to protect and lubricate tissues.",
        category: "Physiology",
        liked: false,
        disliked: false
    },
    {
        id: 34,
        fact: "Your adrenal glands can produce over 50 different hormones, including adrenaline and cortisol.",
        category: "Endocrinology",
        liked: false,
        disliked: false
    },
    {
        id: 35,
        fact: "The cornea is the only part of the human body that has no blood supply - it gets oxygen directly from air.",
        category: "Ophthalmology",
        liked: false,
        disliked: false
    },
    {
        id: 36,
        fact: "Your brain continues to develop until you're about 25 years old, with the prefrontal cortex being last to mature.",
        category: "Neurology",
        liked: false,
        disliked: false
    },
    {
        id: 37,
        fact: "The human heart has its own electrical system and can continue beating even when separated from the body.",
        category: "Cardiology",
        liked: false,
        disliked: false
    },
    {
        id: 38,
        fact: "Your vocal cords are only about 17-25mm long in men and 12.5-17.5mm long in women.",
        category: "Otolaryngology",
        liked: false,
        disliked: false
    },
    {
        id: 39,
        fact: "The human spine has natural curves that act like a spring, absorbing shock and maintaining balance.",
        category: "Orthopedics",
        liked: false,
        disliked: false
    },
    {
        id: 40,
        fact: "Your thyroid gland controls metabolism and can affect every cell in your body through hormone production.",
        category: "Endocrinology",
        liked: false,
        disliked: false
    },
    {
        id: 41,
        fact: "The human body contains about 60,000 miles of blood vessels - enough to circle the Earth twice.",
        category: "Cardiology",
        liked: false,
        disliked: false
    },
    {
        id: 42,
        fact: "Your gallbladder can store up to 50ml of bile and contracts to release it when you eat fatty foods.",
        category: "Gastroenterology",
        liked: false,
        disliked: false
    },
    {
        id: 43,
        fact: "The human placenta during pregnancy acts as lungs, kidneys, and liver for the developing baby.",
        category: "Obstetrics",
        liked: false,
        disliked: false
    },
    {
        id: 44,
        fact: "Your lymphatic system drains about 3 liters of fluid from tissues back into the bloodstream daily.",
        category: "Immunology",
        liked: false,
        disliked: false
    },
    {
        id: 45,
        fact: "The human knee is the largest joint in the body and can support up to 7 times your body weight when running.",
        category: "Orthopedics",
        liked: false,
        disliked: false
    },
    {
        id: 46,
        fact: "Your diaphragm moves about 23,000 times per day to help you breathe, making it one of the most active muscles.",
        category: "Pulmonology",
        liked: false,
        disliked: false
    },
    {
        id: 47,
        fact: "The human brain uses about 20 watts of power - the same as a dim light bulb.",
        category: "Neurology",
        liked: false,
        disliked: false
    },
    {
        id: 48,
        fact: "Your epidermis completely replaces itself every 35-45 days, shedding about 30,000 dead cells per minute.",
        category: "Dermatology",
        liked: false,
        disliked: false
    },
    {
        id: 49,
        fact: "The human jaw can exert a force of up to 200 pounds per square inch when biting down.",
        category: "Dentistry",
        liked: false,
        disliked: false
    },
    {
        id: 50,
        fact: "Your body produces about 2-3 million platelets per second to help with blood clotting.",
        category: "Hematology",
        liked: false,
        disliked: false
    }
];

const DidYouKnowPage: React.FC = () => {
    const [currentFact, setCurrentFact] = useState<MedicalFact>(medicalFacts[0]);
    const [facts, setFacts] = useState<MedicalFact[]>(medicalFacts);

    const getRandomFact = () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        setCurrentFact(facts[randomIndex]);
    };

    const handleVote = (factId: number, voteType: 'like' | 'dislike') => {
        setFacts(prevFacts => 
            prevFacts.map(fact => 
                fact.id === factId
                    ? {
                        ...fact,
                        liked: voteType === 'like' && !fact.liked ? true : (voteType === 'like' ? false : fact.liked),
                        disliked: voteType === 'dislike' && !fact.disliked ? true : (voteType === 'dislike' ? false : fact.disliked)
                    }
                    : fact
            )
        );

        if (currentFact.id === factId) {
            const newLiked = voteType === 'like' && !currentFact.liked ? true : (voteType === 'like' ? false : currentFact.liked);
            const newDisliked = voteType === 'dislike' && !currentFact.disliked ? true : (voteType === 'dislike' ? false : currentFact.disliked);
            
            setCurrentFact(prev => ({
                ...prev,
                liked: newLiked,
                disliked: newDisliked
            }));

            // If disliked, automatically get a random fact
            if (voteType === 'dislike' && !currentFact.disliked) {
                setTimeout(() => {
                    getRandomFact();
                }, 500); // Small delay for better UX
            }
        }
    };

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="milker text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Did You Know?
                    </h1>
                    <p className="studio-sans text-gray-600 dark:text-gray-300">
                        Medical Facts About the Human Body
                    </p>
                </div>

                {/* Fact Card */}
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6">
                    {/* Category */}
                    <div className="text-center mb-4">
                        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                            {currentFact.category}
                        </span>
                    </div>

                    {/* Fact */}
                    <p className="studio-sans text-lg text-gray-800 dark:text-gray-200 text-center mb-6 leading-relaxed">
                        {currentFact.fact}
                    </p>

                    {/* Voting */}
                    <div className="flex justify-center items-center space-x-6 mb-6">
                        <button
                            onClick={() => handleVote(currentFact.id, 'like')}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                                currentFact.liked 
                                    ? 'bg-green-100 hover:bg-green-200 dark:bg-green-800 dark:hover:bg-green-700 text-green-800 dark:text-green-200' 
                                    : 'bg-green-50 hover:bg-green-100 dark:bg-green-900 dark:hover:bg-green-800 text-green-700 dark:text-green-300'
                            }`}
                        >
                            <span className="text-xl">👍</span>
                            <span>{currentFact.liked ? '1' : '0'}</span>
                        </button>
                        
                        <button
                            onClick={() => handleVote(currentFact.id, 'dislike')}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                                currentFact.disliked 
                                    ? 'bg-red-100 hover:bg-red-200 dark:bg-red-800 dark:hover:bg-red-700 text-red-800 dark:text-red-200' 
                                    : 'bg-red-50 hover:bg-red-100 dark:bg-red-900 dark:hover:bg-red-800 text-red-700 dark:text-red-300'
                            }`}
                        >
                            <span className="text-xl">👎</span>
                            <span>{currentFact.disliked ? '1' : '0'}</span>
                        </button>
                    </div>

                    {/* Random Fact Button */}
                    <div className="text-center">
                        <button
                            onClick={getRandomFact}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                        >
                            🎲 Random Fact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DidYouKnowPage;
