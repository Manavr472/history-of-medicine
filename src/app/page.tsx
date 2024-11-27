"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './globals.css';
import Hero from './components/hero';
import Landing from './components/landing';
import HistoryPage from './history/page';
import ImplantsPage from './implants/page2';
import UnityPage from './components/models';

export default function Home() {
  return (
    <>
    <Hero />  
    <Landing />
    {/* <UnityPage /> */}
    </>
  );
}