"use client"
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="container flex justify-between items-center p-8 h-24 mx-auto relative z-50">
            <div className="text-lg font-bold">Dummy Logo</div>
            <nav className="hidden md:flex space-x-4">
                <a href="/" className="text-xl hover:text-yellow-500 font-semibold">Home</a>
                <a href="/blog" className="text-xl hover:text-yellow-500 font-semibold">Blog</a>
                <a href="#contact" className="text-xl hover:text-yellow-500 font-semibold">Contact</a>
            </nav>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <nav className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50">
                    <a href="/" className="hover:text-yellow-500 font-semibold">Home</a>
                    <a href="/blog" className="hover:text-yellow-500 font-semibold">Blog</a>
                    <a href="#contact" className="hover:text-yellow-500 font-semibold">Contact</a>
                </nav>
            )}
        </header>
    );
};

export default Header;
