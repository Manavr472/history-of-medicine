"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const useInView = (options: IntersectionObserverInit) => {
    const ref = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, inView] as const;
};

const Article2: React.FC = () => {
    const [headerRef, headerInView] = useInView({ threshold: 0.1 });
    const [section1Ref, section1InView] = useInView({ threshold: 0.1 });
    const [section2Ref, section2InView] = useInView({ threshold: 0.1 });
    const [section3Ref, section3InView] = useInView({ threshold: 0.1 });

    return (
        <>
        <motion.article 
            className="container p-6 max-w-4xl mx-auto text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.header 
            ref={headerRef}
            className="mb-0"
            initial={{ y: -50, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            >
            <h1 className="text-4xl font-bold mb-4">The Knee Society: A Driving Force in the Evolution of Total Knee Arthroplasty</h1>
            <p>
            The Knee Society isn&apos;t just an organization; it&apos;s a catalyst for progress, a testament to the transformative power of collaboration in the ever-evolving field of total knee arthroplasty (TKA). Founded in 1983 amidst a burgeoning era of TKA innovation, the Society emerged from a recognized need: to bring order and scientific rigor to a field rapidly expanding with new implant designs and surgical techniques. Pioneering surgeons, recognizing that the future of TKA hinged on collaboration and data sharing, came together to create a platform for advancing the science and art of knee replacement. This collective of leaders, including founding members like Dr. Chitranjan Ranawat, envisioned a future where evidence-based practice, rather than individual opinion, would guide the treatment of patients and drive innovation.
            </p>
            <div className='max-w-full mx-auto flex flex-wrap justify-center'>
                <motion.div 
                className='w-full p-4 text-center mb-4'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={headerInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                >
                <img className='w-full h-full' src="https://i.ibb.co/D4dN1Rf/knee-society.png" alt="Hip Replacement Timeline" />
                <p className='text-m mt-2'>The Knee Society</p>
                </motion.div>
            </div>
            </motion.header>
            <motion.section 
            ref={section1Ref}
            className="mt-8"
            initial={{ x: -50, opacity: 0 }}
            animate={section1InView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            >
            <p>
            Central to The Knee Society&apos;s mission was the development of standardized outcome measures. In the early days of TKA, evaluating surgical success was often subjective and inconsistent, making it difficult to compare the effectiveness of different implants and techniques. The Society recognized that meaningful progress required a universal language for assessing outcomes, a common yardstick for measuring success. This led to the creation of The Knee Society Score, a comprehensive scoring system that evaluates pain, range of motion, function, and patient satisfaction after TKA. This groundbreaking achievement transformed the field, providing a standardized tool for research and enabling surgeons worldwide to compare their results, identify best practices, and track the long-term performance of different TKA approaches. The Knee Society Score has become an indispensable tool for clinical research and a cornerstone of evidence-based practice in TKA.
            </p>
            <div className='max-w-full mx-auto flex flex-wrap justify-between'>
                <motion.div 
                className='w-full sm:w-1/2 p-4 text-center mb-4'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={section1InView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                >
                <img className='w-full h-full' src="https://i.ibb.co/3Wn9X67/kss.jpg" alt="kss" />
                <p className='text-m mt-2'>Objective Knee Score</p>
                </motion.div>
                <motion.div 
                className='w-full sm:w-1/2 p-4 text-center mb-4'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={section1InView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                >
                <img className='w-full h-full' src="https://i.ibb.co/yyd3V1m/kss-2.jpg" alt="kss-2" />
                <p className='text-m mt-2'>Function Score</p>
                </motion.div>
            </div>
            </motion.section>
            <motion.section 
            ref={section2Ref}
            className="mt-8"
            initial={{ x: 50, opacity: 0 }}
            animate={section2InView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            >
            <p>
            Beyond outcome measures, The Knee Society serves as a vital hub for education and research. Its annual meetings have become legendary gatherings of leading knee surgeons, researchers, and industry partners from across the globe. These meetings aren&apos;t just conferences; they are dynamic forums for the exchange of ideas, where cutting-edge research is presented, innovative surgical techniques are demonstrated, and spirited debates on controversial topics shape the future of knee surgery. The Society also actively supports research through grants and fellowships, nurturing the next generation of orthopedic innovators and ensuring that the quest for better TKA outcomes continues. This commitment to fostering a vibrant research community has led to countless advancements in implant design, surgical techniques, and patient care.
            </p>
            <div className='max-w-full mx-auto flex flex-wrap justify-center'>
                <motion.div 
                className='w-full sm:w-1/2 p-4 text-center mb-4'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={section2InView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                >
                <img className='w-full h-full' src="https://i.ibb.co/BL7rJFJ/lab-test.webp" alt="lab-test" />
                <p className='text-m mt-2'>Biomechanics Lab</p>
                </motion.div>
            </div>
            </motion.section>
            <motion.section 
            ref={section3Ref}
            className="mt-8"
            initial={{ x: -50, opacity: 0 }}
            animate={section3InView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            >
            <p>
            The influence of The Knee Society extends far beyond the walls of academic institutions and operating rooms. By championing evidence-based practice and standardized outcome measures, the Society has played a crucial role in elevating the quality of care for millions of patients undergoing TKA worldwide. Its dedication to data collection and analysis has provided invaluable insights into the long-term performance of different implants and surgical techniques, enabling surgeons to make more informed decisions and personalize treatment plans for their patients. Through its tireless efforts to promote collaboration, education, and research, The Knee Society continues to shape the trajectory of TKA, ensuring a brighter, more mobile future for those seeking relief from the debilitating effects of knee arthritis.
            </p>
            </motion.section>
        </motion.article>
        </>
    );
};

export default Article2;