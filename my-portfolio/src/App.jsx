import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Projects from './components/Project';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run smooth scroll if the loader is finished
    if (!isLoading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      return () => lenis.destroy();
    }
  }, [isLoading]);

  return (
    <div className="bg-neutral-950 min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" setFinished={setIsLoading} />
        ) : (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Cursor />
            
            {/* Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <nav className="fixed top-0 z-50 w-full p-10 flex justify-between items-center mix-blend-difference">
              <div className="font-bold tracking-tighter text-lg text-white">Amiere Miranda</div>
              <ul className="flex gap-10 text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400">
                <li className="hover:text-white transition-colors cursor-none">Work</li>
                <li className="hover:text-white transition-colors cursor-none">About</li>
              </ul>
            </nav>

            <main className="relative z-10">
              <Hero />
              <section className="h-screen flex items-center px-12 md:px-32">
                <h2 className="text-5xl md:text-7xl max-w-5xl font-medium tracking-tighter leading-[1.1]">
                   Developing solutions like <span className="text-neutral-500 italic">Visuhand AI.</span>
                </h2>
              </section>
              <Projects />
            </main>

            <footer className="h-screen flex items-center justify-center">
               <h2 className="text-[12vw] font-black tracking-tighter hover:italic transition-all uppercase">Let's Talk</h2>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;