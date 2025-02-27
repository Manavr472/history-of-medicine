"use client";
import React from 'react';
import dynamic from 'next/dynamic';

// const NewXRClient = dynamic(() => import('../components/newxr'), { ssr: false });
const ModelViewerComponent = dynamic(() => import('../components/modelar'), { ssr: false });

const ModelAR: React.FC = () => {

    return (
        <ModelViewerComponent />
    );
};

export default ModelAR;