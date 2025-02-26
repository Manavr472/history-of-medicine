import React from 'react';
import '@google/model-viewer';

const ModelViewerComponent: React.FC = () => {
    return (
        <>
        <html lang="en">
        <script src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" async />
            <model-viewer src="3d-models/Glucks_First_Model_no_anime.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="neutral" poster="poster.webp" shadow-intensity="1" style={{ width: '100%', height: '500px' }}>
                    <div className="progress-bar hide" slot="progress-bar">
                        <div className="update-bar"></div>
                    </div>
                    <button slot="ar-button" id="ar-button">
                        View in your space
                    </button>
            </model-viewer>
        </html>
        </>
    );
};

export default ModelViewerComponent;