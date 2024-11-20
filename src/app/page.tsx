"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './globals.css';
import HistoryPage from './history/page';
import ImplantsPage from './implants/page2';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('history');

  const renderPage = () => {
    switch (currentPage) {
      case 'history':
        return <HistoryPage />;
      case 'implants':
        return <ImplantsPage />;
      default:
        return <HistoryPage />;
    }
  };

  return (
    <>
    <div className="min-h-screen hero-bg flex flex-col">
      <div className="flex flex-col items-center justify-center flex-grow bg-black bg-opacity-50 p-8">
        <h1 className="text-5xl font-bold text-white mb-4">ITIHASA XR</h1>
        <p className="text-xl text-white">Experience the past like never before</p>
      </div>
    </div>
      <div className="flex space-x-4 mt-4 mb-4 items-center justify-center">
        {['history', 'implants'].map((page) => (
                    <div
                    key={page}
                    className={`relative px-4 py-2 transition-colors duration-300 text-2xl ${currentPage === page ? 'text-green-300 neon-glow' : 'text-gray-500 hover:text-white'}`}
                    onClick={() => setCurrentPage(page)}
                    >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                    {currentPage === page && (
                      <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-green-300"
                      layoutId="underline"
                      transition={{ duration: 0.3 }}
                      />
                    )}
                    </div>
        ))}
      </div>
      <div className="p-8 flex-grow">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}