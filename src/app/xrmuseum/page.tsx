"use client";
import React, { useEffect, useRef } from 'react';

const XRMuseum: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const lensSelectRef = useRef<HTMLSelectElement>(null);
    const [selectedLensIndex, setSelectedLensIndex] = React.useState<number>(0);

    useEffect(() => {
        const initializeCameraKit = async () => {
            const { bootstrapCameraKit } = await import('@snap/camera-kit');

            const cameraKit = await bootstrapCameraKit({
                apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzM1MDQxNDk2LCJzdWIiOiIwYzQzMDhhYi1hNGFmLTRhZDQtODBhYS1iOTBmOTZlNjFlNTl-U1RBR0lOR340YjEyOWViMi0zMDMyLTQzOGQtOWYxYy1kMDFjZTRlNGVkMzUifQ.QlaatCM6la1TNH7EfHlxj3EpG7aHrK6HIqVacLg3_Dc',
            });

            const liveRenderTarget = canvasRef.current;
            if (!liveRenderTarget) return;


            const session = await cameraKit.createSession({ liveRenderTarget });
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });

            await session.setSource(mediaStream);
            await session.play();

            const lensIds = ['43276930875', '43281170875', '43288720877'];
            const lensGroupId = 'e5093c15-440e-4bdb-8476-5555060bc1c0';
            

            const lensSelect = lensSelectRef.current;
            if (!lensSelect) return;
            

            lensSelect.addEventListener('change', async () => {
                const selectedLensIndex = lensSelect.selectedIndex;
                const selectedLensId = lensIds[selectedLensIndex];
                const lens = await cameraKit.lensRepository.loadLens(selectedLensId, lensGroupId);
                await session.applyLens(lens);
            });

            // Set the first lens as default
            const defaultLensId = lensIds[0];
            const defaultLens = await cameraKit.lensRepository.loadLens(defaultLensId, lensGroupId);
            await session.applyLens(defaultLens);
        };

        initializeCameraKit();
    }, []);

    return (
        <div  className='flex flex-col items-center'>
            <div className="flex cursor-pointer space-x-4 mt-4">
                {['Lens 1', 'Lens 2', 'Lens 3'].map((lens, index) => (
                    <div
                        key={index}
                        className={`${
                            selectedLensIndex === index ? 'underline green cursor-pointer text-blue-500' : 'text-black'
                        }`}
                        onClick={() => {
                            setSelectedLensIndex(index);
                            if (lensSelectRef.current) {
                                lensSelectRef.current.selectedIndex = index;
                                const event = new Event('change');
                                lensSelectRef.current.dispatchEvent(event);
                            }
                        }}
                    >
                        {lens}
                    </div>
                ))}
            </div>
            <canvas id="canvas" className="mx-20 h-screen w-2xl" ref={canvasRef}></canvas>
            <select id="lensSelect" className='hidden' ref={lensSelectRef}>
                <option value="0">Lens 1</option>
                <option value="1">Lens 2</option>
                <option value="2">Lens 3</option>
            </select>
        </div>
    );
};

export default XRMuseum;