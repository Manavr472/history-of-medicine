"use client";
import React, { useEffect, useRef } from 'react';
import {
    bootstrapCameraKit,
    CameraKitSession,
    createMediaStreamSource,
} from '@snap/camera-kit';

const XRMuseum: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const lensSelectRef = useRef<HTMLSelectElement>(null);
    const [selectedLensIndex, setSelectedLensIndex] = React.useState<number>(0);
    let mediaStream: MediaStream | null = null;

    useEffect(() => {
        const initializeCameraKit = async () => {
            if (typeof window === 'undefined') return;
            const cameraKit = await bootstrapCameraKit({
                apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzM0OTM1MDg5LCJzdWIiOiIwYzQzMDhhYi1hNGFmLTRhZDQtODBhYS1iOTBmOTZlNjFlNTl-UFJPRFVDVElPTklPTn5kOTYzM2JjYS1hMmE5LTQ1ZjMtYWZlYy0xZGQxZTMyNDI3M2QifQ.LLdaLW6QH7b-jbGGzXLsAV_Bh0FMbR7zfXJoZp4OXd0',
            });

            const liveRenderTarget = canvasRef.current;
            if (!liveRenderTarget) return;

            const session = await cameraKit.createSession({ liveRenderTarget });
            await updateCamera(session);

            const lensIds = ['8a6293a3-f546-4121-9d3c-d8502f3ffd66', '84428e1f-8fd2-4571-9815-fe012922ad69'];
            const lensGroupId = '1c73b277-a61a-46c8-9973-14e07193f051';

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

        const updateCamera = async (session: CameraKitSession) => {
            if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
            const facingMode = 'environment';

            if (mediaStream) {
                session.pause();
                mediaStream.getVideoTracks()[0].stop();
            }

            mediaStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode,
                },
            });

            const source = createMediaStreamSource(mediaStream, {
                cameraType: 'environment',
            });

            await session.setSource(source);

            session.play();
        };

        initializeCameraKit();
    }, []);

    return (
        <div className='flex flex-col items-center p-4'>
            <div className="flex cursor-pointer space-x-4 mt-4">
                {['Lens 1', 'Lens 2'].map((lens, index) => (
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
            <canvas id="canvas" className="w-full h-auto max-w-4xl" ref={canvasRef}></canvas>
            <select id="lensSelect" className='hidden' ref={lensSelectRef}>
                <option value="0">Lens 1</option>
                <option value="1">Lens 2</option>
            </select>
        </div>
    );
};

export default XRMuseum;