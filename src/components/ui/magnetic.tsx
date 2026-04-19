'use client';
import { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { audioEngine } from '@/lib/audio-engine';

export function Magnetic({ children, strength = 0.5 }: { children: React.ReactNode, strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const { setMagneticTarget } = useCursor();
  
  const x = useSpring(0, { stiffness: 200, damping: 20, mass: 0.8 });
  const y = useSpring(0, { stiffness: 200, damping: 20, mass: 0.8 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!enabled) return;
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    x.set((clientX - centerX) * strength);
    y.set((clientY - centerY) * strength);
  };

  const handleMouseEnter = () => {
    if (!enabled) return;
    if (ref.current) {
      setMagneticTarget({ element: ref.current });
      audioEngine.play('hover');
    }
  };

  const handleMouseLeave = () => {
    if (!enabled) return;
    x.set(0);
    y.set(0);
    setMagneticTarget(null);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
