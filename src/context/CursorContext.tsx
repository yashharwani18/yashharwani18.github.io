/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

type MagneticTarget = {
  element: HTMLElement;
  strength?: number;
} | null;

interface CursorContextType {
  magneticTarget: MagneticTarget;
  setMagneticTarget: (target: MagneticTarget) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [magneticTarget, setMagneticTarget] = useState<MagneticTarget>(null);

  return (
    <CursorContext.Provider value={{ magneticTarget, setMagneticTarget }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
}
