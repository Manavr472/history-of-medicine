"use client";
import React from 'react';
import Museum from '../components/museum';
import { CameraKit } from '../contexts/CameraKitContext';


const XRmuseum: React.FC = () => {
    return (
        <CameraKit>
            <Museum />
        </CameraKit>
    );
};

export default XRmuseum;
