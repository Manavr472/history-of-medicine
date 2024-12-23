import { bootstrapCameraKit, CameraKitSession, Lens } from '@snap/camera-kit';
import { createContext, useEffect, useRef, useState, useContext } from 'react';

const apiToken = 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzM0OTM1MDg5LCJzdWIiOiIwYzQzMDhhYi1hNGFmLTRhZDQtODBhYS1iOTBmOTZlNjFlNTl-U1RBR0lOR34yODU5YmExOC1lZThmLTRhY2QtODNhMy02Zjg5MWRhNmY0YmUifQ.xIDyPV5eZF1yIpCHcguCySzmnxWvzqHR6M2BgOzX1wI';
const lensGroupId = 'e5093c15-440e-4bdb-8476-5555060bc1c0';

export interface CameraKitState {
  session: CameraKitSession;
  lenses: Lens[];
}

export const CameraKitContext = createContext<CameraKitState | null>(null);

export const CameraKit: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isInitialized = useRef<boolean>(false);
  const [session, setSession] = useState<CameraKitSession | null>(null);
  const [lenses, setLenses] = useState<Lens[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure this code runs only on the client side

    const initializeCameraKit = async () => {
      const cameraKit = await bootstrapCameraKit({ apiToken });
      const session = await cameraKit.createSession();
      const { lenses } = await cameraKit.lensRepository.loadLensGroups([
        lensGroupId,
      ]);

      setLenses(lenses);
      setSession(session);
    };

    if (isInitialized.current) return;
    isInitialized.current = true;

    initializeCameraKit();
  }, []);

  return !session ? null : (
    <CameraKitContext.Provider value={{ session, lenses }}>
      {children}
    </CameraKitContext.Provider>
  );
};

export const useCameraKit = () => {
  return useContext(CameraKitContext);
};