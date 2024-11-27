"use client"
import React, { useState } from 'react';
import Link from 'next/link'

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container flex justify-between items-center p-8 h-24 mx-auto relative z-50">
            <div className="text-lg font-bold">Dummy Logo</div>
            <nav className="hidden md:flex space-x-4">
                <Link href="#home" className="text-xl hover:text-yellow-500 font-semibold">Home</Link>
                <Link href="#blog" className="text-xl hover:text-yellow-500 font-semibold">Blog</Link>
                <Link href="#contact" className="text-xl hover:text-yellow-500 font-semibold">Contact</Link>
            </nav>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <nav className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 dark:bg-black md:hidden z-50">
                    <Link href="#home" className="hover:text-yellow-500 font-semibold">Home</Link>
                    <Link href="#blog" className="hover:text-yellow-500 font-semibold">Blog</Link>
                    <Link href="#contact" className="hover:text-yellow-500 font-semibold">Contact</Link>
                </nav>
            )}
        </div>
    );
};

export default Header;
