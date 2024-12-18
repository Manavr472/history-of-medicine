import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Link from 'next/link';

const Landing: React.FC = () => {
    const controls = useAnimation();
    const controls1 = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
    const [ref1, inView1] = useInView({ triggerOnce: true });
    const { ref: usersRef, inView: usersInView } = useInView({ triggerOnce: true });
    const { ref: modelsRef, inView: modelsInView } = useInView({ triggerOnce: true });
    const { ref: yearsRef, inView: yearsInView } = useInView({ triggerOnce: true });
    const { ref: articlesRef, inView: articlesInView } = useInView({ triggerOnce: true });

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

    const imageVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const articles = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
    }

    return (
        <>
        <div ref={ref} className="container flex flex-col md:flex-row items-center justify-between text-center p-8 mt-20 mx-auto">
            <motion.div
                className="landing-text md:w-1/2 text-left"
                initial="hidden"
                animate={controls}
                variants={textVariants}
            >
                <h2 className="text-4xl font-bold mb-4">Discover ItihisaXR</h2>
                <p className="text-lg mb-6">ItihisaXR is committed to revolutionizing education in the medical field by showcasing the history of implants through augmented reality. Our platform allows users to engage with 3D models, making learning interactive and accessible.</p>
                <div className="counters grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div ref={usersRef} className="counter text-center mt-3">
                        <h3 className="text-3xl text-left font-semibold">{usersInView && <CountUp end={1000} duration={5} />} Users</h3>
                        <p className="text-s text-left mt-3">Since our inception, we have reached over 5000 users, providing them with a unique learning experience that bridges technology and education.</p>
                    </div>
                    <div ref={modelsRef} className="counter text-center mt-3">
                        <h3 className="text-3xl text-left font-semibold">{modelsInView && <CountUp end={500} duration={5} />} 3D Models</h3>
                        <p className="text-s text-left mt-3">Our extensive library features over 100 3D models of medical implants, allowing users to explore their history and significance in healthcare.</p>
                    </div>
                    <div ref={yearsRef} className="counter text-center mt-3">
                        <h3 className="text-3xl text-left font-semibold">{yearsInView && <CountUp end={14} duration={5} />} Years</h3>
                        <p className="text-s text-left mt-3">With a decade of experience, our team is dedicated to providing accurate and engaging content about the evolution of medical implants.</p>
                    </div>
                    <div ref={articlesRef} className="counter text-center mt-3">
                        <h3 className="text-3xl text-left font-semibold">{articlesInView && <CountUp end={300} duration={5} />} Articles</h3>
                        <p className="text-s text-left mt-3">We have published over 200 articles and insights, fostering a community of learning and keeping our users informed about the latest trends in medical technology.</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="text-center md:w-1/2 flex text-center justify-center md:justify-center text-center mt-8 md:mt-0"
                initial="hidden"
                animate={controls}
                variants={imageVariants}
            >
                <div className="object-contain max-w-xl rounded-lg overflow-hidden">
                    <img src="https://10web-site.ai/133/wp-content/uploads/sites/145/2024/11/tenweb_media_fIxN9qY0.webp" alt="ItihisaXR" className="w-full h-full object-cover" />
                </div>
            </motion.div>
        </div>
        <div ref={ref1} className="container mx-auto mt-20 pd-8">
            <motion.div
                initial="hidden"
                animate={controls1}
                variants={articles}
            >
                <h2 className="text-4xl font-bold mb-8 text-center">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="article flex mt-8 pl-4">
                        <div className="w-1/3 overflow-hidden">
                            <img src="https://i.ibb.co/QH0rs5P/TKA-timeline.png" alt="Article 1" className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-110" />
                        </div>
                        <div className="w-2/3 pl-4 ml-4 mr-8">
                            <h3 className="text-2xl font-semibold mb-2">The History of Total Knee Arthroplasty</h3>
                            <p className="text-sm">Total knee arthroplasty (TKA), commonly known as total knee replacement, has become one of the most successful surgical procedures in modern medicine.</p><br/> 
                            <p className="text-sm text-blue-500 text-right"><Link href="/articles/The_History_of_Total_Knee_Arthroplasty" >Read more &gt;&gt;</Link></p>
                        </div>
                    </div>
                    <div className="article flex mt-8 pl-4">
                        <div className="w-1/3 overflow-hidden">
                            <img src="https://i.ibb.co/D4dN1Rf/knee-society.png" alt="Article 2" className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-110" />
                        </div>
                        <div className="w-2/3 pl-4 ml-4 mr-4">
                            <h3 className="text-2xl font-semibold mb-2">The Knee Society: A Driving Force in the Evolution of Total Knee Arthroplasty</h3>
                            <p className="text-sm">Founded in 1983 amidst a burgeoning era of TKA innovation, the Society emerged from a recognized need: to bring order and scientific rigor to a field rapidly expanding with new implant designs and surgical techniques.</p><br/>
                            <p className="text-sm text-blue-500 text-right"><a href="/articles/The_Knee_Society" >Read more &gt;&gt;</a></p>
                        </div>
                    </div>
                    <div className="article flex mt-8 pl-4">
                        <div className="w-1/3 overflow-hidden">
                            <img src="https://10web-site.ai/133/wp-content/uploads/sites/145/2024/11/tenweb_media_qtDPWtT1.webp" alt="Article 3" className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-110" />
                        </div>
                        <div className="w-2/3 pl-4 ml-4 mr-8">
                            <h3 className="text-2xl font-semibold mb-2">The Importance of Biocompatibility in Implants</h3>
                            <p className="text-sm">Learn why biocompatibility is crucial for the success of medical implants.</p><br/>
                            <p className="text-sm text-blue-500 text-right"><a href="#" >Read more &gt;&gt;</a></p>
                        </div>
                    </div>
                    <div className="article flex mt-8 pl-4">
                        <div className="w-1/3 overflow-hidden">
                            <img src="https://10web-site.ai/133/wp-content/uploads/sites/145/2024/11/tenweb_media_vvX7EJad.webp" alt="Article 4" className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-110" />
                        </div>
                        <div className="w-2/3 pl-4 ml-4 mr-4">
                            <h3 className="text-2xl font-semibold mb-2">Future Trends in Medical Implants</h3>
                            <p className="text-sm">Explore the emerging trends shaping the future of medical implants.</p><br/>
                            <p className="text-sm text-blue-500 text-right text-bottom"><a href="#" >Read more &gt;&gt;</a></p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </>
    );
};

export default Landing;