import React, { useEffect, useRef, useState } from 'react';
import '@google/model-viewer';
// Import the types from the declaration file
import { ModelViewerElement, ModelViewerProgressEvent } from '../../../modelar';

const ARModelViewerWithScript: React.FC = () => {
  const modelViewerRef = useRef<ModelViewerElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const updateBarRef = useRef<HTMLDivElement>(null);
  const [selectedModelIndex, setSelectedModelIndex] = useState<number>(0);
  
  // Define available models with descriptions
const models = [
    { 
        name: "Glucks Model", 
        path: "3d-models/Glucks_Final_Branded.glb",
        description: "This model represents the Glucks prosthesis, featuring detailed anatomical structures and realistic proportions for an immersive AR experience."
    },
    { 
        name: "Insall Burstein Model", 
        path: "3d-models/insall-burstein_1.glb",
        description: "The Insall Burstein model showcases a detailed representation of a knee prosthesis, highlighting its historical significance and intricate design elements."
    },
    { 
        name: "Smith Nephew Model",    
        path: "3d-models/smith_nephew_branded.glb",
        description: "This model by Smith Nephew illustrates advanced prosthetic engineering, providing a comprehensive view of its structural and functional features."
    },
    { 
        name: "Depuy Attune Model", 
        path: "3d-models/depuy_attune.glb",
        description: "The Depuy Attune model demonstrates innovative prosthetic design and functionality, reflecting the latest advancements in orthopedic technology."
    },
];

  // Handle model selection
  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(event.target.value);
    setSelectedModelIndex(index);
  };

  useEffect(() => {
    // Handle progress bar
    const modelViewer = modelViewerRef.current;
    const progressBar = progressBarRef.current;
    const updateBar = updateBarRef.current;

    if (modelViewer && progressBar && updateBar) {
      const handleProgress = (event: ModelViewerProgressEvent) => {
        const progress = event.detail.totalProgress;
        updateBar.style.width = `${progress * 100}%`;
        
        if (progress === 1) {
          progressBar.classList.add('opacity-0');
          setTimeout(() => {
            progressBar.classList.add('hidden');
          }, 300);
        } else {
          progressBar.classList.remove('hidden');
          progressBar.classList.remove('opacity-0');
        }
      };
      
      modelViewer.addEventListener('progress', handleProgress as EventListener);
      
      return () => {
        modelViewer.removeEventListener('progress', handleProgress as EventListener);
      };
    }
  }, []);

  return (
    <div className="relative w-full h-screen md:h-screen md:max-h-[800px] overflow-hidden">
        {/* Model Selection and Description Panel */}
        <div className="relative top-4 left-4 z-10 bg-white/80 dark:bg-gray-800 backdrop-blur-sm rounded-md p-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg md:top-4 md:left-4">
          <div className="mb-3">
            <label htmlFor="model-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Select Model
            </label>
            <select 
              id="model-select"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"
              value={selectedModelIndex} 
              onChange={handleModelChange}
            >
              {models.map((model, index) => (
            <option key={index} value={index}>
              {model.name}
            </option>
              ))}
            </select>
          </div>
          
          {/* Model Description */}
          <div className="mt-3 mb-2">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-300">About this model</h3>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
              {models[selectedModelIndex].description}
            </p>
          </div>
        </div>
        
        <model-viewer 
          ref={modelViewerRef}
          src={models[selectedModelIndex].path}
          alt="3D model display"
          ar 
          ar-modes="webxr scene-viewer quick-look" 
          camera-controls 
          tone-mapping="neutral"
          shadow-intensity="1" 
          style={{ width: '100%', height: '75%', marginTop: '-10%' }}
        >
            <div className="progress-bar hide" slot="progress-bar" ref={progressBarRef}>
            <div className="update-bar" ref={updateBarRef}></div>
            </div>
            <button className="slot ar-button" id="slot ar-button"></button>
        </model-viewer>
    </div>
  );
};

export default ARModelViewerWithScript;