"use client"
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <div className="absolute top-8 left-8 z-50">
            <Link href="/" className='flex items-center space-x-2'>
                <img src="/images/hom-logo.png" alt="Logo" className="h-12" />
            </Link>
        </div>
    );
};

export default Header;