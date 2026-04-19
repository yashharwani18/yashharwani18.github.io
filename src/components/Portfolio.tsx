import { SplineScene } from '@/components/ui/splite';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { motion } from 'framer-motion';
import { Magnetic } from '@/components/ui/magnetic';
import { audioEngine } from '@/lib/audio-engine';

export default function Portfolio() {
  return (
    <div className="bg-black text-on-surface-variant dark min-h-screen relative selection:bg-white selection:text-black">
      
      {/* SVG Filters for Liquid Distortions */}
      <svg className="hidden">
        <filter id="liquid-distort">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" />
        </filter>
        <filter id="liquid-distort-hover">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise">
             <animate attributeName="baseFrequency" values="0.02;0.05;0.02" dur="5s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
        </filter>
      </svg>

      <div className="grain-overlay" />
      <CustomCursor />
      
      {/* Fixed 3D Spline Background */}
      <div className="fixed inset-0 z-0 pointer-events-auto flex items-center justify-center">
        <SplineScene 
          className="w-full h-full absolute inset-0 opacity-50 grayscale"
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </div>

      {/* Main Content Overlay - Set to pointer-events-none so mouse reach Spline, then re-enable for links/buttons */}
      <div className="relative z-10 pointer-events-none">
        <header className="top-nav-container pointer-events-auto">
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold tracking-tighter text-white uppercase">Yash Harwani</div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Magnetic><a className="text-white font-bold border-b border-white/40 font-light tracking-wide text-sm" href="#home">Home</a></Magnetic>
            <Magnetic><a className="text-gray-400 font-light hover:text-white transition-colors tracking-wide text-sm" href="#services">Services</a></Magnetic>
            <Magnetic><a className="text-gray-400 font-light hover:text-white transition-colors tracking-wide text-sm" href="#work">Work</a></Magnetic>
            <Magnetic><a className="text-gray-400 font-light hover:text-white transition-colors tracking-wide text-sm" href="https://mail.google.com/mail/?view=cm&to=yashharwani321@gmail.com" target="_blank" rel="noopener noreferrer">Pricing</a></Magnetic>
          </nav>
          <Magnetic>
            <a 
              href="https://mail.google.com/mail/?view=cm&to=yashharwani321@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => audioEngine.play('click')}
              className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:scale-95 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-block"
            >
              Get Started
            </a>
          </Magnetic>
        </header>

        <main>
          <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black/40 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
            <div className="relative z-10 text-center px-4 max-w-6xl pointer-events-none">
              <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif-italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] text-white tracking-tighter leading-[0.85] mb-8 hero-text-glow"
              >
                Building AI That <br />Matters
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto mb-12"
              >
                Specializing in medical computer vision and deep learning automation for industrial environments. Bridging cutting-edge AI research with real-world applications.
              </motion.p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pointer-events-auto">
                <Magnetic>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&to=yashharwani321@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => audioEngine.play('click')}
                    className="px-10 py-4 bg-white text-black rounded-full font-medium hover:opacity-90 transition-opacity inline-block"
                  >
                    Start a Project
                  </a>
                </Magnetic>
                <Magnetic>
                  <a 
                    href="#work"
                    onClick={() => audioEngine.play('click')}
                    className="px-10 py-4 liquid-glass rounded-full text-white font-medium hover:bg-white/10 transition-colors inline-block"
                  >
                    View Portfolio
                  </a>
                </Magnetic>
              </div>
            </div>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white">Scroll</span>
              <span className="material-symbols-outlined animate-bounce">south</span>
            </div>
          </section>

          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onViewportEnter={() => audioEngine.play('reveal')}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1 }}
            className="py-32 bg-transparent border-y border-white/5 relative backdrop-blur-md pointer-events-none"
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="max-w-7xl mx-auto px-8 relative z-10 pointer-events-auto">
              <p className="text-center text-xs uppercase tracking-[0.4em] mb-16 text-outline fluid-text">Powered by advanced stacks</p>
              <div className="flex flex-col gap-8 opacity-40 grayscale">
                <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
                  <span className="text-3xl font-bold tracking-tighter text-white">PyTorch</span>
                  <span className="text-3xl font-bold tracking-tighter text-white">OpenCV</span>
                  <span className="text-3xl font-bold tracking-tighter text-white">CUDA</span>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
                  <span className="text-3xl font-bold tracking-tighter text-white">Transformers</span>
                  <span className="text-3xl font-bold tracking-tighter text-white">Spatial AI</span>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section 
            id="services"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-32 bg-transparent overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10 pointer-events-none">
              <div>
                <h2 className="font-serif-italic text-5xl md:text-7xl text-white mb-12 leading-tight">
                  Engineering intelligent <br />systems.
                </h2>
                <div className="space-y-12">
                  <div className="group liquid-glass p-8 rounded-2xl pointer-events-auto">
                    <span className="text-sm font-bold text-white/40 group-hover:text-white transition-colors">01</span>
                    <h3 className="text-2xl text-white mt-2 mb-4">Medical AI Research</h3>
                    <p className="text-on-surface-variant font-light">Developing robust deep learning models to assist in complex medical diagnostics and healthcare data analysis.</p>
                  </div>
                  <div className="group liquid-glass p-8 rounded-2xl pointer-events-auto">
                    <span className="text-sm font-bold text-white/40 group-hover:text-white transition-colors">02</span>
                    <h3 className="text-2xl text-white mt-2 mb-4">Industrial Automation</h3>
                    <p className="text-on-surface-variant font-light">Integrating advanced vision and predictive models directly into factory environments to optimize real-world workflows.</p>
                  </div>
                  <div className="group liquid-glass p-8 rounded-2xl pointer-events-auto">
                    <span className="text-sm font-bold text-white/40 group-hover:text-white transition-colors">03</span>
                    <h3 className="text-2xl text-white mt-2 mb-4">Spatial Intelligence</h3>
                    <p className="text-on-surface-variant font-light">Translating complex world structures—like architectural floor plans—into semantic, actionable AI systems.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-lg overflow-hidden liquid-glass flex items-center justify-center min-h-[500px] liquid-ripple pointer-events-auto">
                <video autoPlay className="w-full h-full object-cover opacity-60" loop muted playsInline preload="metadata" aria-hidden="true">
                  <source src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A/low.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </motion.section>

          <section id="work" className="bg-transparent relative">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-none"></div>
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 pointer-events-none"
            >
              <div className="w-full h-full overflow-hidden liquid-glass liquid-ripple">
                <div className="aspect-[16/10] lg:aspect-auto lg:h-[819px] bg-surface-container-low transition-transform duration-1000 hover:scale-105 pointer-events-auto">
                  <img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="/floor-plan.png" alt="Industrial Spatial Intelligence floor plan" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="p-12 md:p-24 lg:p-32 pointer-events-auto">
                <div className="flex gap-4 mb-6">
                  <span className="px-3 py-1 liquid-glass rounded-full text-[10px] uppercase tracking-widest text-white">Computer Vision</span>
                  <span className="px-3 py-1 liquid-glass rounded-full text-[10px] uppercase tracking-widest text-white">Spatial AI</span>
                </div>
                <h3 className="font-serif-italic text-5xl text-white mb-6 italic">Industrial Spatial Intelligence</h3>
                <p className="text-on-surface-variant font-light mb-8 text-lg leading-relaxed max-w-md">
                  A high-end, proprietary AI system developed for a leading industrial partner. This project processes complex floor plans using deep learning to optimize factory layouts and spatial efficiency.
                </p>
                <Magnetic>
                  <a 
                    href="/the-journey.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => audioEngine.play('click')}
                    className="flex items-center gap-2 text-white group"
                  >
                    <span className="text-sm font-medium tracking-widest uppercase border-b border-white/20 pb-1">Explore Case Study</span>
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
                  </a>
                </Magnetic>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              onViewportEnter={() => audioEngine.play('reveal')}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 pointer-events-none"
            >
              <div className="order-2 lg:order-1 p-12 md:p-24 lg:p-32 lg:text-right flex flex-col lg:items-end pointer-events-auto">
                <div className="flex gap-4 mb-6">
                  <span className="px-3 py-1 liquid-glass rounded-full text-[10px] uppercase tracking-widest text-white">Deep Learning</span>
                  <span className="px-3 py-1 liquid-glass rounded-full text-[10px] uppercase tracking-widest text-white">Healthcare</span>
                </div>
                <h3 className="font-serif-italic text-5xl text-white mb-6 italic">Diagnostic Neural Networks</h3>
                <p className="text-on-surface-variant font-light mb-8 text-lg leading-relaxed max-w-md fluid-text">
                  Ongoing research and development in medical AI, applying state-of-the-art vision models to enhance diagnostic precision and patient outcomes.
                </p>
                <Magnetic>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&to=yashharwani321@gmail.com&su=Requesting details on Diagnostic Neural Networks project"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => audioEngine.play('click')}
                    className="flex items-center gap-2 text-white group"
                  >
                    <span className="text-sm font-medium tracking-widest uppercase border-b border-white/20 pb-1">Explore Case Study</span>
                    <span className="material-symbols-outlined transition-transform group-hover:-translate-x-2 rotate-180">arrow_forward</span>
                  </a>
                </Magnetic>
              </div>
              <div className="order-1 lg:order-2 w-full h-full overflow-hidden liquid-glass pointer-events-auto liquid-ripple">
                <div className="aspect-[16/10] lg:aspect-auto lg:h-[819px] bg-surface-container-low transition-transform duration-1000 hover:scale-105">
                  <img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="/lung-ai.png" alt="Diagnostic Neural Networks chest scan" loading="lazy" decoding="async" />
                </div>
              </div>
            </motion.div>
          </section>

        <section className="py-48 bg-transparent border-y border-white/5 relative backdrop-blur-[2px]">
          <div className="absolute inset-0 bg-surface-container-lowest/70 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10 pointer-events-none">
            <div className="mb-24 text-center max-w-3xl mx-auto">
              <h2 className="font-serif-italic text-5xl md:text-7xl text-white mb-6 italic pointer-events-auto">The difference is everything</h2>
              <p className="text-on-surface-variant font-light text-xl pointer-events-auto">Precision at every level. We don't settle for "good enough" when the goal is extraordinary.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 pointer-events-auto liquid-glass">
              <div className="bg-black/50 p-12 hover:bg-white/5 transition-colors group">
                <span className="material-symbols-outlined text-4xl text-white mb-8 group-hover:scale-110 transition-transform inline-block">auto_awesome</span>
                <h4 className="text-white text-xl mb-4">AI Integration</h4>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">Native LLM implementation that feels intuitive, not intrusive.</p>
              </div>
              <div className="bg-black/50 p-12 hover:bg-white/5 transition-colors group">
                <span className="material-symbols-outlined text-4xl text-white mb-8 group-hover:scale-110 transition-transform inline-block">blur_on</span>
                <h4 className="text-white text-xl mb-4">Glass Morphism</h4>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">Proprietary layering techniques for unparalleled depth and texture.</p>
              </div>
              <div className="bg-black/50 p-12 hover:bg-white/5 transition-colors group">
                <span className="material-symbols-outlined text-4xl text-white mb-8 group-hover:scale-110 transition-transform inline-block">speed</span>
                <h4 className="text-white text-xl mb-4">Performance</h4>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">Zero-bloat code architecture ensuring sub-second load times.</p>
              </div>
              <div className="bg-black/50 p-12 hover:bg-white/5 transition-colors group">
                <span className="material-symbols-outlined text-4xl text-white mb-8 group-hover:scale-110 transition-transform inline-block">stylus_note</span>
                <h4 className="text-white text-xl mb-4">Editorial Polish</h4>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">Typography-first design that honors the art of digital storytelling.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-64 overflow-hidden pointer-events-none">
          <video autoPlay className="absolute inset-0 w-full h-full object-cover desaturated-video opacity-40 mix-blend-screen" loop muted playsInline preload="metadata" aria-hidden="true">
            <source src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM/low.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center pointer-events-auto">
              <div>
                <div className="font-serif-italic text-7xl text-white mb-2">Core</div>
                <div className="text-xs uppercase tracking-[0.3em] text-outline">PyTorch</div>
              </div>
              <div>
                <div className="font-serif-italic text-7xl text-white mb-2">Vision</div>
                <div className="text-xs uppercase tracking-[0.3em] text-outline">Primary Domain</div>
              </div>
              <div>
                <div className="font-serif-italic text-7xl text-white mb-2">NDA</div>
                <div className="text-xs uppercase tracking-[0.3em] text-outline">Enterprise Projects</div>
              </div>
              <div>
                <div className="font-serif-italic text-7xl text-white mb-2">Med</div>
                <div className="text-xs uppercase tracking-[0.3em] text-outline">Research Focus</div>
              </div>
            </div>
          </div>
        </section>



        <section className="relative py-64 bg-transparent overflow-hidden pointer-events-none">
          <video autoPlay className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-lighten" loop muted playsInline preload="metadata" aria-hidden="true">
            <source src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q/low.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 text-center pointer-events-auto">
            <h2 className="font-serif-italic text-7xl md:text-9xl text-white mb-12 leading-tight drop-shadow-2xl">Let's build the <br />exceptional.</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Magnetic>
                <a 
                  href="https://mail.google.com/mail/?view=cm&to=yashharwani321@gmail.com"
                  onClick={() => audioEngine.play('click')}
                  className="bg-white text-black px-12 py-5 rounded-full font-medium hover:scale-105 transition-transform text-lg shadow-[0_0_40px_rgba(255,255,255,0.4)] inline-block"
                >
                  Secure a Slot
                </a>
              </Magnetic>
              <Magnetic>
                <a 
                  onClick={() => audioEngine.play('click')}
                  className="text-white flex items-center gap-4 group" 
                  href="https://mail.google.com/mail/?view=cm&to=yashharwani321@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xl drop-shadow-md">yashharwani321@gmail.com</span>
                  <span className="material-symbols-outlined p-4 liquid-glass rounded-full group-hover:bg-white/10 transition-colors">north_east</span>
                </a>
              </Magnetic>
            </div>
          </div>
        </section>
      </main>

      <motion.footer className="bg-black w-full relative overflow-hidden border-t border-white/10 pointer-events-auto">
        <div className="w-full max-w-7xl mx-auto px-8 py-20 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <div className="text-2xl font-serif-italic italic text-white">Yash Harwani</div>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <a className="text-gray-500 hover:text-white transition-colors tracking-wide font-light text-sm" href="https://linkedin.com/in/yash-harwani" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="text-gray-400 font-light tracking-wide text-xs">© 2026 Yash Harwani. All rights reserved.</div>
        </div>
      </motion.footer>
      </div>
    </div>
  );
}
