"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const NewXRClient = dynamic(() => import('../components/newxr'), { ssr: false });

const XRMuseum: React.FC = () => {

    return (
        <NewXRClient />
    );
};

export default XRMuseum;