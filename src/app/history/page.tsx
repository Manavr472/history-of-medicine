"use client"
import React from 'react';
import Link from 'next/link';



const HistoryPage = () => {

    const categories = [
        { name: 'Preclinical', path: '/history/preClinical' },
        { name: 'Paraclinical', path: '/history/paraClinical' },
        { name: 'Clinical', path: '/history/clinical' },
        { name: 'Orthopaedics', path: '/history/orthopaedics' },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">Medical History Categories</h1>
            
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                    <Link href={category.path} key={category.name}>
                        <button 
                            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 text-lg font-medium"
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