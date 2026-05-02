import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

// Component Imports
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Projects from './components/Project';
import Skills from './components/Skills';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize smooth scroll once loader is finished
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

  // Smooth Scroll Navigation Helper
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            {/* Custom Cursor Component */}
            <Cursor />
            
            {/* Cinematic Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            {/* Navigation Bar */}
            <nav className="fixed top-0 z-50 w-full p-10 flex justify-between items-center mix-blend-difference">
              <div className="font-bold tracking-tighter text-lg text-white">Amiere Miranda</div>
              <ul className="flex gap-10 text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400">
                <li onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-none pointer-events-auto">
                  About
                </li>
                <li onClick={() => scrollTo('skills')} className="hover:text-white transition-colors cursor-none pointer-events-auto">
                  Skills
                </li>
                <li onClick={() => scrollTo('experience')} className="hover:text-white transition-colors cursor-none pointer-events-auto">
                  Experience
                </li>
                <li onClick={() => scrollTo('projects')} className="hover:text-white transition-colors cursor-none pointer-events-auto">
                  Projects
                </li>
                <li className="hover:text-white transition-colors cursor-none pointer-events-auto">
                  <a 
                    href="https://drive.google.com/file/d/1M4chFwWpbM6A6ssP6nGP6mFwegn5Xzq_/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </li>
              </ul>
            </nav>

            <main className="relative z-10">
              {/* About Section (Hero) */}
              <div id="about">
                <Hero />
              </div>

              {/* Transition Philosophy Section */}
              <section className="h-screen flex items-center px-12 md:px-32">
                <h2 className="text-5xl md:text-7xl max-w-5xl font-medium tracking-tighter leading-[1.1] text-white">
                   Developing solutions like <span className="text-neutral-500 italic">Visuhand AI.</span>
                </h2>
              </section>

              {/* Skills Section with Dust Fade-in Effect */}
              <div id="skills">
                <Skills />
              </div>

              {/* Experience Placeholder Section */}
              <section id="experience" className="h-screen flex items-center justify-center border-t border-neutral-900">
                 <p className="text-neutral-600 uppercase tracking-widest text-xs italic">Experiences Coming Soon</p>
              </section>

              {/* Projects Section (Horizontal Scroll Cards) */}
              <div id="projects">
                <Projects />
              </div>
            </main>

            {/* Footer Section */}
            <footer className="h-screen flex items-center justify-center">
               <h2 className="text-[12vw] font-black tracking-tighter hover:italic transition-all uppercase text-white">
                 Let's Talk
               </h2>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;