'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ({ velocity }: { velocity: number }) => {
      // Inject scroll velocity into CSS variables for fluid typography
      // We normalize the velocity (abs) and cap it for a subtle effect
      const normalizedVelocity = Math.min(Math.abs(velocity) / 20, 1);
      document.documentElement.style.setProperty('--scroll-velocity', normalizedVelocity.toString());
    });

    let rafId = 0;

    function raf(time: number) {
      if (!document.hidden) {
        lenis.raf(time);
      }
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
