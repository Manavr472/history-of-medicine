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
        <span className="milker">Discover the</span>
        <span className="milker twbb-headline-dynamic-wrapper twbb-headline-text-wrapper relative">
            <span> History </span>
        </span>
        <span className="milker">of Implants</span>
        </span>
        <AnimatePresence>
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <p className="studio-sans text-base md:text-xl text-white max-w-xl md:max-w-3xl text-center">
          Step into the past and explore the fascinating evolution of medical implants. Our virtual museum offers an immersive experience that brings history to life through interactive 3D models.
          </p>
            <div className="flex justify-center space-x-4 mt-6">
            <button className="studio-sans text-3xl inline-block bg-gradient-to-r from-yellow-600 to-yellow-400 dark:from-yellow-200 dark:to-yellow-800 text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-yellow-400 hover:to-yellow-600 transition duration-500 transform hover:scale-105">
                <Link href="https://xr-museum.vercel.app/" target="_blank" rel="noopener noreferrer">Explore Museum</Link>
            </button>
            <button className="studio-sans text-3xl inline-block bg-gradient-to-r from-yellow-600 to-yellow-400 dark:from-yellow-200 dark:to-yellow-800 text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-yellow-400 hover:to-yellow-600 transition duration-500 transform hover:scale-105">
              <Link href="../modelar">Explore 3D Implants</Link>
            </button>
            </div>
        </motion.div>
        </AnimatePresence>
      </div>
      </div>
    </div>
  );
};

export default Hero;
