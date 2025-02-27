"use client";
import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ItihasaXRMuseum: React.FC = () => {
  useEffect(() => {
    // Load scripts programmatically to maintain order while avoiding warnings
    const loadScripts = async () => {
      const scripts = [
        'playcanvas/playcanvas-stable.min.js',
        'playcanvas/__settings__.js',
        'playcanvas/__modules__.js',
        'playcanvas/__start__.js',
        'playcanvas/__loading__.js'
      ];
      
      for (const src of scripts) {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.body.appendChild(script);
        // Wait for script to load before loading the next one
        await new Promise(resolve => {
          script.onload = resolve;
          script.onerror = resolve; // Continue even if there's an error
        });
      }
    };
    
    loadScripts();
    
    // Cleanup function to remove scripts if component unmounts
    return () => {
      const scripts = document.querySelectorAll('script[src^="playcanvas/"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta charSet="utf-8" />
        <link rel="stylesheet" type="text/css" href="playcanvas/styles.css" />
        <link rel="manifest" href="playcanvas/manifest.json" />
        <title>ItihasaXR Museum</title>
      </Helmet>
      <div id="application-container">
        {/* PlayCanvas will render in this container */}
      </div>
    </HelmetProvider>
  );
};

export default ItihasaXRMuseum;