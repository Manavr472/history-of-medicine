import React, { useEffect, useRef } from 'react';
import '@google/model-viewer';
// Import the types from the declaration file
import { ModelViewerElement, ModelViewerProgressEvent } from '../../../modelar';

const ARModelViewerWithScript: React.FC = () => {
  const modelViewerRef = useRef<ModelViewerElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const updateBarRef = useRef<HTMLDivElement>(null);

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

  // Rest of the component remains the same
  return (
    // Existing JSX...
    <div className="relative w-full h-96 md:h-screen md:max-h-[600px] overflow-hidden">
        <model-viewer 
          ref={modelViewerRef}
          src="3d-models/Glucks_First_Model_no_anime.glb" 
          alt="3D model display"
          ar 
          ar-modes="webxr scene-viewer quick-look" 
          camera-controls 
          tone-mapping="neutral"
          shadow-intensity="1" 
          style={{ width: '100%', height: '100%' }}
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