"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const HistoryPage = () => {
    const pathname = usePathname();

    const categories = [
        { name: 'Preclinical', path: '/history/preClinical' },
        { name: 'Paraclinical', path: '/history/paraClinical' },
        { name: 'Clinical', path: '/history/clinical' },
        { name: 'Orthopaedics', path: '/history/orthopaedics' },
    ];

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                    <Link href={category.path} key={category.name}>
                        <button 
                            className={`px-6 py-3 transition-colors duration-300 text-lg font-medium rounded-md
                                ${pathname === category.path 
                                    ? 'border-b-2 border-green-500' 
                                    : 'hover:text-green-200'}`}
                        >
                            {category.name}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HistoryPage;
