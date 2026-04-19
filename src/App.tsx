import Portfolio from './components/Portfolio';
import { SmoothScroll } from './components/ui/smooth-scroll';
import { CursorProvider } from './context/CursorContext';
import { audioEngine } from './lib/audio-engine';
import { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    let hasInteracted = false;

    const handleFirstInteraction = () => {
      if (hasInteracted) return;
      hasInteracted = true;
      audioEngine.init();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchend', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchend', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchend', handleFirstInteraction);
    };
  }, []);

  return (
    <CursorProvider>
      <SmoothScroll>
        <Portfolio />
      </SmoothScroll>
    </CursorProvider>
  );
}

export default App;
