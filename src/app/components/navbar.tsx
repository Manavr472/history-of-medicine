"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    // const [isOpen3, setIsOpen3] = useState(false);

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };
    const toggleMenu2 = () => {
        setIsOpen2(!isOpen2);
    };
    // const toggleMenu3 = () => {
    //     setIsOpen3(!isOpen3);
    // };

    return (
        <div className="container flex items-center justify-between p-8 h-24 mx-auto relative z-50">
            <Link href="/" className='flex items-center space-x-2'>
                {/* <img src="https://i.ibb.co/Px3h5MJ/Untitled-design.png" alt="Untitled-design" className="h-12" /> */}
                <p className="text-left typographica text-4xl">ItihasaXR.</p>
            </Link>
            
            <div className='hidden md:flex space-x-20'>
                {/* <div
                    className="relative"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <button onClick={toggleMenu} className="text-xl hover:text-yellow-500 font-semibold focus:outline-none">
                        Specialties
                    </button>
                    {isOpen && (
                        <div
                            className="absolute w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dark:bg-black"
                            onMouseEnter={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}
                        >
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <Link href="/specialties/orthopedics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">Orthopedics</Link>
                                <Link href="/specialties/neurosurgery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">Neurosurgery</Link>
                                <Link href="/specialties/cardiac-surgery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">Cardiac Surgery</Link>
                            </div>
                        </div>
                    )}
                </div> */}
                <div className="relative">
                    <Link href="/surgeoninfo" className="minigap text-2xl hover:text-yellow-500 font-semibold focus:outline-none">
                        Surgeon Info
                    </Link>
                </div>

                <div className="relative">
                    <Link href="https://xr-museum.vercel.app/" target="_blank" rel="noopener noreferrer" className="minigap text-2xl hover:text-yellow-500 font-semibold focus:outline-none">
                        XR Museum
                    </Link>
                </div>
                
                <div className="relative">
                    <Link href="/modelar" className="minigap text-2xl hover:text-yellow-500 font-semibold focus:outline-none">
                        3D Implants
                    </Link>
                </div>

                {/* <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                    <button className="absolute right-0 top-0 mt-2 mr-2">
                        <svg className="w-6 h-6 text-gray-500 hover:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </button>
                </div> */}
            <div className="relative">
                    <Link href="/timeline" className="minigap text-2xl hover:text-yellow-500 font-semibold focus:outline-none">
                        Timeline
                    </Link>
                </div>
                {/* <div
                    className="relative"
                    onMouseEnter={() => setIsOpen3(true)}
                    onMouseLeave={() => setIsOpen3(false)}
                >
                    <button onClick={toggleMenu3} className="text-xl hover:text-yellow-500 font-semibold focus:outline-none">
                        Profile
                    </button>
                    {isOpen3 && (
                        <div className="absolute w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dark:bg-black"
                        onMouseEnter={() => setIsOpen3(true)}
                        onMouseLeave={() => setIsOpen3(false)}>
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <Link href="/profile/saved" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">Saved</Link>
                                <Link href="/profile/messages" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">Messages</Link>
                                <Link href="/profile/liked" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">Liked</Link>
                                <Link href="/profile/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">Settings</Link>
                                <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">Logout</Link>
                            </div>
                        </div>
                    )}
                </div> */}
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu2} className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {isOpen2 && (
                <nav className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 dark:bg-black md:hidden z-50">
                    <Link href="/" className="minigap text-xl hover:text-yellow-500 font-semibold" onClick={() => setIsOpen2(false)}>Home</Link>
                    {/* <div className="relative">
                        <button onClick={toggleMenu} className="w-full flex items-center justify-between hover:text-yellow-500 font-semibold focus:outline-none">
                            Specialties
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {isOpen && (
                            <div className="w-full mt-2 bg-white flex flex-col items-center space-y-4 dark:bg-black">
                                <Link href="/specialties/orthopedics" className="hover:text-yellow-500 font-semibold" onClick={() => setIsOpen2(false)}>Orthopedics</Link>
                                <Link href="/specialties/neurosurgery" className="hover:text-yellow-500 font-semibold" onClick={() => setIsOpen2(false)}>Neurosurgery</Link>
                                <Link href="/specialties/cardiac-surgery" className="hover:text-yellow-500 font-semibold" onClick={() => setIsOpen2(false)}>Cardiac Surgery</Link>
                            </div>
                        )}<hr/>
                    </div> */}
                    <Link href="/surgeoninfo" className="minigap text-xl hover:text-yellow-500 font-semibold" onClick={() => setIsOpen2(false)}>Surgeon Info</Link>
                    <Link href="https://xr-museum.vercel.app/" className="minigap text-xl hover:text-yellow-500 font-semibold" onClick={() => setIsOpen2(false)}>XR Museum</Link>
                    <Link href="/modelar" className="minigap text-xl hover:text-yellow-500 font-semibold" onClick={() => setIsOpen2(false)}>3D Implants</Link>
                    <Link href="/timeline" className=" minigap text-xl hover:text-yellow-500 font-semibold" onClick={() => setIsOpen2(false)}>Timeline</Link>
                    {/* <div className="relative">
                        <button onClick={toggleMenu3} className="w-full flex items-center justify-between hover:text-yellow-500 font-semibold focus:outline-none">
                            Profile
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {isOpen3 && (
                            <div className="w-full mt-2 bg-white flex flex-col items-center space-y-4 dark:bg-black">
                                <Link href="/profile/saved" className="hover:text-yellow-500 font-semibold" onClick={() => setIsOpen2(false)}>Saved</Link>
                                <Link href="/profile/messages" className="hover:text-yellow-500 font-semibold" onClick={() => setIsOpen2(false)}>Messages</Link>
                                <Link href="/profile/liked" className="hover:text-yellow-500 font-semibold" onClick={() => setIsOpen2(false)}>Liked</Link>
                                <Link href="/profile/settings" className="hover:text-yellow-500 font-semibold" onClick={() => setIsOpen2(false)}>Settings</Link>
                                <Link href="/logout" className="hover:text-yellow-500 font-semibold" onClick={() => setIsOpen2(false)}>Logout</Link>
                            </div>
                        )}<hr/>
                    </div> */}
                </nav>
            )}
        </div>
    );
};

export default Header;