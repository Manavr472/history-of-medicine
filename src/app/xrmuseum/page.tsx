"use client";
import React from 'react';
// import dynamic from 'next/dynamic';
import ItihasaXRMuseum from '../components/playcanvas';

// const NewXRClient = dynamic(() => import('../components/newxr'), { ssr: false });
// const ItihasaXRMuseum = dynamic(() => import('../components/playcanvas'), { ssr: false });

const XRMuseum: React.FC = () => {

    return (
        <ItihasaXRMuseum />
    );
};

export default XRMuseum;