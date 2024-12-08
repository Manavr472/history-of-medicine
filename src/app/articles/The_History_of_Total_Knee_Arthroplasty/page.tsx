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

const Article1: React.FC = () => {
    const [headerRef, headerInView] = useInView({ threshold: 0.1 });
    const [section1Ref, section1InView] = useInView({ threshold: 0.1 });
    const [section2Ref, section2InView] = useInView({ threshold: 0.1 });
    const [section3Ref, section3InView] = useInView({ threshold: 0.1 });
    const [section4Ref, section4InView] = useInView({ threshold: 0.1 });

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
            <h1 className="text-4xl font-bold mb-4">The History of Total Knee Arthroplasty</h1>
            <p>
            Total knee arthroplasty (TKA), commonly known as total knee replacement, has become one of the most successful surgical procedures in modern medicine. Its evolution, spanning several decades, reflects a continuous quest to alleviate the debilitating pain and disability caused by severe knee arthritis. This journey is marked by innovative surgeons, groundbreaking biomechanical research, and advancements in materials science, ultimately transforming TKA from a risky last resort to a reliable and life-changing intervention.
            </p>
            <div className='max-w-full mx-auto flex flex-wrap justify-center'>
                <motion.div 
                className='w-full p-4 text-center mb-4'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={headerInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                >
                <img className='w-full h-full' src="https://i.ibb.co/QH0rs5P/TKA-timeline.png" alt="TKA-timeline" />
                <p className='text-m mt-2'>Timeline of Total Knee Antroplasty Evolution</p>
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
            <h2 className="text-3xl font-semibold mb-2">Early Attempts and the Challenges of Reconstruction:</h2>
            <p>
                The early history of TKA is characterized by the challenges of replicating the complex biomechanics of the knee joint. Before the mid-20th century, treatment options for severe knee arthritis were limited. Surgeons experimented with various forms of resection arthroplasty, removing damaged bone and cartilage, but these procedures often resulted in instability and poor long-term outcomes. Interposition arthroplasty, inserting materials like fascia or other tissues between the bone surfaces, also yielded inconsistent results. The development of hemiarthroplasties, replacing only one side of the joint (either the femoral or tibial component), offered some improvement but still struggled with issues of wear and loosening. A crucial limitation during this period was a lack of understanding of the knee&apos;s intricate kinematics, leading to designs that failed to adequately replicate natural movement and often resulted in pain and dysfunction.
            </p>
            <div className='max-w-full mx-auto flex flex-wrap justify-between'>
                <motion.div 
                className='w-full sm:w-1/2 p-4 text-center mb-4'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={section1InView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                >
                <img className='w-full h-full' src="https://i.ibb.co/YQBPB1y/Gluck-ivory.png" alt="Gluck-ivory" />
                <p className='text-m mt-2'>Gluck Ivory Prosthesis</p>
                </motion.div>
                <motion.div 
                className='w-full sm:w-1/2 p-4 text-center mb-4'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={section1InView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                >
                <img className='w-full h-full' src="https://i.ibb.co/FshJK62/Frank-Gunston-s-implant.png" alt="Frank-Gunston-s-implant" />
                <p className='text-m mt-2'>Frank Gunston&apos;s Implant</p>
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
            <h2 className="text-3xl font-semibold mb-2">The Rise of TKA and the Charnley Influence:</h2>
            <p>
            The mid-20th century witnessed the emergence of true TKA, marked by significant advancements in both implant design and surgical technique. Sir John Charnley&apos;s pioneering work on low-friction arthroplasty of the hip in the 1960s had a profound impact on the development of TKA. His principles of low-friction bearings and the use of polymethylmethacrylate (PMMA) cement for fixation were adapted and applied to the knee, paving the way for more durable and functional implants. Early TKA designs, such as the hinged knee replacements (e.g., Walldius, Guepar), offered stability in cases with severe deformity, but long-term outcomes were often compromised by loosening, infection, and problems with the patellofemoral joint.
            </p>
            <div className='max-w-full mx-auto flex flex-wrap justify-center'>
                <motion.div 
                className='w-full sm:w-1/2 p-4 text-center mb-4'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={section2InView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                >
                <img className='w-full h-full' src="https://i.ibb.co/Jt8yBbJ/xray-TKA.png" alt="xray-TKA" />
                <p className='text-m mt-2'>Early TKA X-ray</p>
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
            <h2 className="text-3xl font-semibold mb-2">The Era of the Condylar Knee and Refinements:</h2>
            <p>
            The 1970s marked a pivotal era in TKA history with the introduction of condylar knee replacements. These designs aimed to replicate the anatomical contours of the knee joint and allow for more natural movement. The Gunston polycentric knee and the Freeman-Swanson knee (developed at Imperial College London Hospital) were influential early condylar designs, though they faced challenges related to wear and stability. A major breakthrough came with the work of surgeons like John Insall and Chitranjan Ranawat at the Hospital for Special Surgery (HSS) in New York. They developed the total condylar knee and later the posterior stabilized designs (Insall-Burstein), which became widely adopted standards and significantly improved TKA outcomes. These designs incorporated features like metal-backed tibial components, improved fixation methods, and more anatomical articular surfaces, enhancing stability and durability.
            </p>
            <div className='max-w-full mx-auto flex flex-wrap justify-between'>
                <motion.div 
                className='w-full sm:w-1/2 p-4 text-center mb-4'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={section3InView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                >
                <img className='w-full h-full' src="https://i.ibb.co/Trc6Yws/Duapatella-knee.png" alt="Duapatella-knee"/>
                <p className='text-m mt-2'>Duapatella Knee</p>
                </motion.div>
                <motion.div 
                className='w-full sm:w-1/2 p-4 text-center mb-4'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={section3InView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                >
                <img className='w-full h-full' src="https://i.ibb.co/qBFy7LP/Insall-Burstein.png" alt="Insall-Burstein"/>
                <p className='text-m mt-2'>Insall-Burstein Total Knee</p>
                </motion.div>
            </div>
            </motion.section>
            <motion.section 
            ref={section4Ref}
            className="mt-8"
            initial={{ x: 50, opacity: 0 }}
            animate={section4InView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            >
            <h2 className="text-3xl font-semibold mb-2">Ongoing Advancements and the Future of TKA:</h2>
            <p>
            The late 20th and early 21st centuries have seen continuous refinements in TKA design and surgical technique. The development of mobile-bearing knees aimed to further reduce wear and improve range of motion. Unicompartmental knee replacements, designed for patients with isolated arthritis in one compartment of the knee, offered a less invasive option with faster recovery times. Advancements in materials science, including improved polyethylene formulations and the use of ceramics, have enhanced the durability and wear resistance of TKA implants. The introduction of computer-assisted surgery and patient-specific instrumentation has allowed for greater precision in surgical planning and execution, further improving outcomes and patient satisfaction.
            </p><br></br>
            <p>
            The future of TKA is promising, with ongoing research focusing on further enhancing implant longevity, improving functionality, and personalizing treatment. Biodegradable implants, advanced bearing surfaces, and minimally invasive surgical techniques are all areas of active investigation. The remarkable journey of TKA, driven by the dedication and ingenuity of countless surgeons, engineers, and researchers, has dramatically improved the lives of millions of individuals affected by knee arthritis, and the quest for even better solutions continues.
            </p>
            <div className='max-w-full mx-auto flex flex-wrap justify-center'>
                <motion.div 
                className='w-full sm:w-1/2 p-4 text-center mb-4'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={section4InView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                >
                <img className='w-full h-auto' src="https://i.ibb.co/r35yhd9/knee-surgery-implants.jpg" alt="knee-surgery-implants" />
                <p className='text-m mt-2 text-center'>Knee Surgery Implants</p>
                </motion.div>
            </div>
            </motion.section>
        </motion.article>
        </>
    );
};

export default Article1;