import React, { useEffect, useRef } from 'react';
import '@google/model-viewer';

// Create proper type definitions for model-viewer
type ModelViewerAttributes = {
  src?: string;
  alt?: string;
  ar?: boolean;
  'ar-modes'?: string;
  'camera-controls'?: boolean;
  'tone-mapping'?: string;
  poster?: string;
  'shadow-intensity'?: string;
};

// Extend HTMLElement with required model-viewer props
interface ModelViewerElement extends HTMLElement {
  loading: boolean;
}

// Define the progress event interface
interface ModelViewerProgressEvent extends Event {
  detail: {
    totalProgress: number;
  };
}

// Augment the JSX namespace
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & ModelViewerAttributes,
        HTMLElement
      >;
    }
  }
}

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

  return (
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
            <button slot="ar-button" id="ar-button">
                View in your space
            </button>
            <div id="ar-prompt">
                <img src="https://modelviewer.dev/shared-assets/icons/hand.png" alt="AR interaction hand icon" />
            </div>
        </model-viewer>
    </div>
  );
};

export default ARModelViewerWithScript;