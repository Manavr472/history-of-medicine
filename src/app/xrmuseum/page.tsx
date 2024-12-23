"use client";
import React from 'react';
import Museum from '../components/museum';
import { CameraKit } from '../contexts/CameraKitContext';

const Page = () => (
  <CameraKit>
    <Museum />
  </CameraKit>
);

export default Page;