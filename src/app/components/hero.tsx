import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Extracted typing animation into its own component
const TypingAnimation = () => {
  const words = ["History", "Itihasa", "Evolution", "Journey"];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [pathAnimating, setPathAnimating] = useState(false);
  const currentWord = words[wordIndex];
  
  useEffect(() => {
    const typingSpeed = isDeleting ? 400 : 350;
    
    if (!isDeleting && displayText === currentWord) {
      // Start the path animation after word is fully typed
      const animationDelay = setTimeout(() => {
        setPathAnimating(true);
      }, 300);
      
      // Wait before starting to delete
      const timeout = setTimeout(() => {
        setIsDeleting(true);
        setPathAnimating(false); // Reset path animation when deleting starts
      }, 2500);
      return () => {
        clearTimeout(timeout);
        clearTimeout(animationDelay);
      };
    }
    
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setAnimationKey(prev => prev + 1);
      return;
    }
    
    const timeout = setTimeout(() => {
      setDisplayText(prev => 
        isDeleting 
        ? prev.substring(0, prev.length - 1)
        : currentWord.substring(0, prev.length + 1)
      );
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord, words.length]); // Added missing dependency
  
  return (
    <>
      <motion.span
        className="twbb-headline-dynamic-wrapper twbb-headline-text-wrapper"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {" "}{displayText}{" "}
      </motion.span>
      <motion.svg
        key={animationKey}
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
          animate={{ pathLength: pathAnimating ? 1 : 0 }}
          transition={{ 
            duration: 3, 
            ease: 'easeInOut'
          }} 
        />
      </motion.svg>
    </>
  );
};

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
            <span> History </span>
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
            <div className="flex justify-center space-x-4 mt-6">
            <button className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-400 dark:from-yellow-200 dark:to-yellow-800 text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-yellow-400 hover:to-yellow-600 transition duration-500 transform hover:scale-105">
                <Link href="https://xr-museum.vercel.app/" target="_blank" rel="noopener noreferrer">Explore Museum</Link>
            </button>
            <button className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-400 dark:from-yellow-200 dark:to-yellow-800 text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-yellow-400 hover:to-yellow-600 transition duration-500 transform hover:scale-105">
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
