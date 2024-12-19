"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggleMenu2 = () => {
        setIsOpen2(!isOpen2);
    };
    const toggleMenu3 = () => {
        setIsOpen3(!isOpen3);
    };

    return (
        <div className="container flex justify-between items-center p-8 h-24 mx-auto relative z-50">
            <Link href="/" className="text-xl hover:text-yellow-500 font-semibold">Dummy Logo</Link>
            <div className="relative">
                <button onClick={toggleMenu} className="text-xl hover:text-yellow-500 font-semibold focus:outline-none">
                    Specialties
                </button>
                {isOpen && (
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <Link href="/specialties/orthopedics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Orthopedics</Link>
                            <Link href="/specialties/neurosurgery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Neurosurgery</Link>
                            <Link href="/specialties/cardiac-surgery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Cardiac Surgery</Link>
                        </div>
                    </div>
                )}
            </div>
            <div className="relative">
                <button onClick={toggleMenu2} className="text-xl hover:text-yellow-500 font-semibold focus:outline-none">
                    Browse
                </button>
                {isOpen2 && (
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <Link href="/browse/channels" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Channels</Link>
                            <Link href="/browse/education" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Education</Link>
                            <Link href="/browse/lecture" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Lecture</Link>
                            <Link href="/browse/playlist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Playlist</Link>
                            <Link href="/browse/workshops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Workshops</Link>
                            <Link href="/browse/videos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Videos</Link>
                            <Link href="/surgeoninfo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Surgeon Info</Link>
                        </div>
                    </div>
                )}
            </div>
            
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button className="absolute right-0 top-0 mt-2 mr-2">
                    <svg className="w-6 h-6 text-gray-500 hover:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>
            <div className="relative">
                <button className="text-xl hover:text-yellow-500 font-semibold focus:outline-none">
                    Favorites
                </button>
            </div>
        
                <div className="relative">
                    <button onClick={toggleMenu3} className="text-xl hover:text-yellow-500 font-semibold focus:outline-none">
                        Profile
                    </button>
                    {isOpen3 && (
                        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <Link href="/profile/watch-later" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Watch Later</Link>
                                <Link href="/profile/saved" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Saved</Link>
                                <Link href="/profile/messages" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Messages</Link>
                                <Link href="/profile/liked" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Liked</Link>
                                <Link href="/profile/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</Link>
                                <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</Link>
                            </div>
                        </div>
                    )}
                </div>
            <div className="md:hidden">
                <button onClick={toggleMenu3} className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <nav className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 dark:bg-black md:hidden z-50">
                    <Link href="/" className="hover:text-yellow-500 font-semibold">Home</Link>
                    <Link href="/surgeoninfo" className="hover:text-yellow-500 font-semibold">Surgeon Info</Link>
                    <Link href="/contact" className="hover:text-yellow-500 font-semibold">Contact</Link>
                </nav>
            )}
        </div>
    );
};

export default Header;