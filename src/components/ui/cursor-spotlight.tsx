'use client';
import { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CursorSpotlight() {
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div className="pointer-events-none fixed inset-0 z-[9999]">
      <motion.div 
        style={{
          position: 'absolute',
          left: mouseX,
          top: mouseY,
          width: '400px',
          height: '400px',
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          borderRadius: '100%',
          filter: 'blur(40px)',
          opacity: 0.5,
        }}
      />
    </motion.div>
  );
}
