import React, { useEffect, useRef } from 'react';
// Keep only one method to import model-viewer
import '@google/model-viewer';

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'model-viewer': React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement> & {
            src?: string;
            alt?: string;
            ar?: boolean;
            'ar-modes'?: string;
            'camera-controls'?: boolean;
            'tone-mapping'?: string;
            poster?: string;
            'shadow-intensity'?: string;
          },
          HTMLElement
        >;
      }
    }
  }

interface ModelViewerElement extends HTMLElement {
  loading: boolean;
}

const ARModelViewerWithScript: React.FC = () => {
  const modelViewerRef = useRef<ModelViewerElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const updateBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove the dynamic script import - we're using the static import instead
    
    // Handle progress bar
    const modelViewer = modelViewerRef.current;
    const progressBar = progressBarRef.current;
    const updateBar = updateBarRef.current;

    if (modelViewer && progressBar && updateBar) {
      const handleProgress = (event: any) => {
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
      
      modelViewer.addEventListener('progress', handleProgress);
      
      // Clean up with proper reference to the handler function
      return () => {
        modelViewer.removeEventListener('progress', handleProgress);
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