"use client";
import React from 'react';
import './globals.css';
import Hero from './components/hero';
import Landing from './components/landing';

export default function Home() {
  return (
    <>
      <Hero />  
      <Landing />
    </>
  );
}