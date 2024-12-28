import React, { useEffect } from 'react';
import {
  bootstrapCameraKit,
  CameraKitSession,
  createMediaStreamSource,
  Transform2D,
} from '@snap/camera-kit';

const NewXR: React.FC = () => {
  useEffect(() => {
    const liveRenderTarget = document.getElementById('canvas') as HTMLCanvasElement;
    const flipCamera = document.getElementById('flip');

    let isBackFacing = true;
    let mediaStream: MediaStream;

    async function init() {
      const cameraKit = await bootstrapCameraKit({
        apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzM1MDQxNDk2LCJzdWIiOiIwYzQzMDhhYi1hNGFmLTRhZDQtODBhYS1iOTBmOTZlNjFlNTl-U1RBR0lOR340YjEyOWViMi0zMDMyLTQzOGQtOWYxYy1kMDFjZTRlNGVkMzUifQ.QlaatCM6la1TNH7EfHlxj3EpG7aHrK6HIqVacLg3_Dc',
      });

      const session = await cameraKit.createSession({ liveRenderTarget });
      const { lenses } = await cameraKit.lensRepository.loadLensGroups([
        '1c73b277-a61a-46c8-9973-14e07193f051',
      ]);

      const lensSelect = document.getElementById('lensselect') as HTMLSelectElement;
      lenses.forEach((lens, index) => {
        const option = document.createElement('option');
        option.value = index.toString();
        option.text = lens.name;
        lensSelect.appendChild(option);
      });

      lensSelect.addEventListener('change', (event) => {
        const selectedIndex = (event.target as HTMLSelectElement).value;
        session.applyLens(lenses[parseInt(selectedIndex)]);
      });

      // Apply the first lens by default
      session.applyLens(lenses[0]);

      session.applyLens(lenses[0]);

      bindFlipCamera(session);
    }

    function bindFlipCamera(session: CameraKitSession) {
      if (flipCamera) {
        flipCamera.style.cursor = 'pointer';

        flipCamera.addEventListener('click', () => {
          updateCamera(session);
        });
      }

      updateCamera(session);
    }

    async function updateCamera(session: CameraKitSession) {
      isBackFacing = !isBackFacing;

      if (flipCamera) {
        flipCamera.innerText = isBackFacing
          ? 'Switch to Front Camera'
          : 'Switch to Back Camera';
      }

      if (mediaStream) {
        session.pause();
        mediaStream.getVideoTracks()[0].stop();
      }

      mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: isBackFacing ? 'environment' : 'user',
        },
      });

      const source = createMediaStreamSource(mediaStream, {
        // NOTE: This is important for world facing experiences
        cameraType: isBackFacing ? 'environment' : 'user',
      });

      await session.setSource(source);

      if (!isBackFacing) {
        source.setTransform(Transform2D.MirrorX);
      }

      session.play();
    }

    init();
  }, []);

  return (
    <div>
      <select id="lensselect"></select>
      <canvas id="canvas"></canvas>
      <button id="flip"></button>
    </div>
  );
};

export default NewXR;