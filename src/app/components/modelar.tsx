import React from 'react';
import '@google/model-viewer';

const ModelViewerComponent: React.FC = () => {
    return (
        <div>
            <model-viewer src="3d-models/Glucks_First_Model_no_anime.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="neutral" poster="poster.webp" shadow-intensity="1" style={{ width: '100%', height: '500px' }}>
                <div className="progress-bar hide" slot="progress-bar">
                    <div className="update-bar"></div>
                </div>
                <button slot="ar-button" id="ar-button">
                    View in your space
                </button>
            </model-viewer>
        </div>
    );
};

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': any;
        }
    }
}

export default ModelViewerComponent;