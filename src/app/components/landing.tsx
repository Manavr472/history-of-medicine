import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const Landing: React.FC = () => {
    const controls = useAnimation();
    const controls1 = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
    const [ref1, inView1] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    useEffect(() => {
        if (inView1) {
            controls1.start('visible');
        }
    }, [controls1, inView1]);

    const textVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const articlesVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
    };

    return (
        <>
            <div ref={ref} className="container flex flex-col md:flex-row items-center justify-between text-center px-4 sm:px-8 md:px-12 lg:px-20 py-8 mt-10 md:mt-16 lg:mt-20 mx-auto">
                <motion.div
                    className="landing-text"
                    initial="hidden"
                    animate={controls}
                    variants={textVariants}
                >
                    <h2 className="text-4xl milker font-bold mb-4">Discover ItihasaXR</h2>
                    <p className="studio-sans text-xl mb-6">ItihasaXR is committed to revolutionizing education in the medical field by showcasing the history of implants through augmented reality. Our platform allows users to engage with 3D models, making learning interactive and accessible.</p>
                    <p className="studio-sans text-xl mb-6">Explore our detailed timeline to understand the evolution of medical implants and their impact on healthcare. Our timeline feature provides a chronological view of significant milestones and advancements in the field.</p>
                    <div className="studio-sans text-2xl text-center mt-6">
                        <Link href="/timeline">
                            <motion.p
                                className="inline-block bg-gradient-to-r from-gray-200 to-teal-400 dark:from-teal-600 dark:to-gray-800 text-yellow px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-beach-600 hover:to-teal-600 transition duration-300 transform hover:scale-105"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore Timeline
                            </motion.p>
                        </Link>
                    </div>
                </motion.div>
            </div>
            <div ref={ref1} className="container mx-auto mt-20 p-8">
                <motion.div
                    initial="hidden"
                    animate={controls1}
                    variants={articlesVariants}
                >
                    <h2 className="milker text-4xl font-bold mb-8 text-center">Latest Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="article flex flex-col md:flex-row mt-8 p-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
                            <div className="w-full md:w-1/3 overflow-hidden rounded-lg">
                                <img src="https://i.ibb.co/QH0rs5P/TKA-timeline.png" alt="Article 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full md:w-2/3 mt-4 md:mt-0 md:pl-4">
                                <h3 className="milker text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">The History of Total Knee Arthroplasty</h3>
                                <p className="minigap text-sm text-gray-700 dark:text-gray-300">Total knee arthroplasty (TKA), commonly known as total knee replacement, has become one of the most successful surgical procedures in modern medicine.</p>
                                <p className="text-sm text-blue-500 text-right mt-4"><Link href="/articles/The_History_of_Total_Knee_Arthroplasty">Read more &gt;&gt;</Link></p>
                            </div>
                        </div>
                        <div className="article flex flex-col md:flex-row mt-8 p-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
                            <div className="w-full md:w-1/3 overflow-hidden rounded-lg">
                                <img src="https://i.ibb.co/D4dN1Rf/knee-society.png" alt="Article 2" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full md:w-2/3 mt-4 md:mt-0 md:pl-4">
                                <h3 className="milker text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">The Knee Society: A Driving Force in the Evolution of Total Knee Arthroplasty</h3>
                                <p className="minigap text-sm text-gray-700 dark:text-gray-300">Founded in 1983 amidst a burgeoning era of TKA innovation, the Society emerged from a recognized need: to bring order and scientific rigor to a field rapidly expanding with new implant designs and surgical techniques.</p>
                                <p className="text-sm text-blue-500 text-right mt-4"><Link href="/articles/The_Knee_Society">Read more &gt;&gt;</Link></p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Landing;
