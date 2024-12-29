import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [currentPage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scale = Math.min(1 + scrollY / 10000, 1.1);
  return (
    <div className='max-w-screen overflow-hidden'>
      <div className="h-screen max-h-full hero-bg flex flex-col" style={{ transform: `scale(${scale})`, maxWidth: '100vw', maxHeight: '100vh' }}>
      <div className="flex flex-col items-center justify-center text-center flex-grow bg-black bg-opacity-50 p-4 md:p-8">
        <span className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">
        Discover the
        <span className="twbb-headline-dynamic-wrapper twbb-headline-text-wrapper relative">
          <span className="twbb-headline-dynamic-wrapper twbb-headline-text-wrapper"> History </span>
          <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 150"
          className="absolute bottom-5 left-0 w-full"
          style={{ top: '0%' }}
          >
          <motion.path
            d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"
            fill="none"
            stroke="yellow"
            strokeWidth="5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          </motion.svg>
        </span>of Implants
        </span>
        <AnimatePresence>
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <p className="text-base md:text-xl text-white max-w-xl md:max-w-2xl text-center">
          Step into the past and explore the fascinating evolution of medical implants. Our virtual museum offers an immersive experience that brings history to life through interactive 3D models.
          </p>
          <button className="bg-yellow-500 text-black font-semibold px-4 py-2 mt-4 md:mt-8 rounded-full hover:bg-yellow-600"><Link href="../xrmuseum">Explore Now</Link></button>
        </motion.div>
        </AnimatePresence>
      </div>
      </div>
    </div>
  );
};

export default Hero;
