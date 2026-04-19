'use client';
import { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

export function CustomCursor() {
  const { magneticTarget } = useCursor();
  const isInteractivePointer =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const mouseX = useSpring(0, { stiffness: 1000, damping: 100, mass: 0.5 });
  const mouseY = useSpring(0, { stiffness: 1000, damping: 100, mass: 0.5 });

  const width = useSpring(32, { stiffness: 250, damping: 25 });
  const height = useSpring(32, { stiffness: 250, damping: 25 });
  const borderRadius = useSpring(100, { stiffness: 250, damping: 25 });

  useEffect(() => {
    if (!isInteractivePointer) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!magneticTarget) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      } else {
        const { left, top, width: tWidth, height: tHeight } = magneticTarget.element.getBoundingClientRect();
        mouseX.set(left + tWidth / 2);
        mouseY.set(top + tHeight / 2);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, magneticTarget, isInteractivePointer]);

  useEffect(() => {
    if (magneticTarget) {
      const { width: tWidth, height: tHeight } = magneticTarget.element.getBoundingClientRect();
      width.set(tWidth + 20);
      height.set(tHeight + 20);
      borderRadius.set(12); // Square-ish with rounded corners to fit buttons
    } else {
      width.set(32);
      height.set(32);
      borderRadius.set(100);
    }
  }, [magneticTarget, width, height, borderRadius]);

  if (!isInteractivePointer) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[99999] flex items-center justify-center p-0"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
        width,
        height,
      }}
    >
      <motion.div
        className="w-full h-full bg-white mix-blend-difference"
        style={{ borderRadius }}
      />
    </motion.div>
  );
}
