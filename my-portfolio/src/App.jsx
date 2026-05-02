import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

// Component Imports
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Projects from './components/Project';
import Skills from './components/Skills';
import Experience from './components/Experience';

// SVG Asset Imports
import emailIcon from './assets/mail.svg';
import instagramIcon from './assets/instagram.svg';
import linkedinIcon from './assets/linkedin.svg';
import dribbbleIcon from './assets/dribbble.svg';
import githubIcon from './assets/github.svg';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll once the loader is finished
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
    <div className="bg-neutral-950 min-h-screen text-white selection:bg-blue-500 selection:text-white">
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
            {/* Custom Interactive Cursor */}
            <Cursor />
            
            {/* Visual Grainy Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            {/* Navigation Bar */}
            <nav className="fixed top-0 z-50 w-full p-10 flex justify-between items-center mix-blend-difference">
              <div className="font-bold tracking-tighter text-lg text-white uppercase select-none">
                Amiere Miranda
              </div>
              
              <ul className="flex gap-10 text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400">
                {[
                  { name: 'About', id: 'about' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'Experience', id: 'experience' },
                  { name: 'Projects', id: 'projects' }
                ].map((item) => (
                  <motion.li
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    whileHover={{ scale: 1.1, color: "#ffffff" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="hover:text-white transition-colors cursor-none pointer-events-auto cursor-pointer"
                  >
                    {item.name}
                  </motion.li>
                ))}
                
                <motion.li 
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="hover:text-white transition-colors cursor-none pointer-events-auto"
                >
                  <a 
                    href="https://drive.google.com/file/d/1M4chFwWpbM6A6ssP6nGP6mFwegn5Xzq_/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </motion.li>
              </ul>
            </nav>

            <main className="relative z-10">
              {/* About / Hero Section */}
              <div id="about">
                <Hero />
              </div>

              {/* Transition Statement with Looping Fade-in */}
              <section className="h-screen flex items-center px-12 md:px-32">
                <motion.h2 
                  initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-5xl md:text-7xl max-w-5xl font-medium tracking-tighter leading-[1.1]"
                >
                   Translating complex logic into distinct visual identities that ensure your work is recognized with  
                   <span className="text-neutral-500 italic"> clarity and professional impact.</span>
                </motion.h2>
              </section>

              <div id="skills">
                <Skills />
              </div>

              <div id="experience">
                <Experience />
              </div>

              <div id="projects">
                <Projects />
              </div>
            </main>

            {/* Footer Section with Socials Toggle */}
            <footer className="h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
              <motion.div
                initial={false}
                animate={showSocials ? { y: -20 } : { y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <p className="text-neutral-500 uppercase tracking-[0.3em] text-[10px] mb-6">
                  Have an idea? Click here.
                </p>
                <h2 
                  onClick={() => setShowSocials(!showSocials)}
                  className="text-[12vw] font-black tracking-tighter hover:italic transition-all uppercase leading-none select-none cursor-pointer"
                >
                  Let's Talk
                </h2>
              </motion.div>

              <div className="mt-12 h-20">
                <AnimatePresence>
                  {showSocials && (
                    <motion.div 
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-8 items-center"
                    >
                      {[
                        { src: emailIcon, link: 'mailto:mariabethel.31@gmail.com', name: 'Email' },
                        { src: instagramIcon, link: 'https://www.instagram.com/raneastro/', name: 'Instagram' },
                        { src: linkedinIcon, link: 'https://www.linkedin.com/in/miranda31/', name: 'LinkedIn' },
                        { src: dribbbleIcon, link: 'https://dribbble.com/AmiereMiranda', name: 'Dribbble' },
                        { src: githubIcon, link: 'https://github.com/Alfheim31', name: 'Github' }
                      ].map((social, i) => (
                        <motion.a
                          key={social.name}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.2 }}
                          className="group relative"
                        >
                          <img 
                            src={social.src} 
                            alt={social.name} 
                            className="w-8 h-8 invert transition-all duration-300 
                                       group-hover:invert-[.5] 
                                       group-hover:sepia-[1] 
                                       group-hover:saturate-[10000%] 
                                       group-hover:hue-rotate-[190deg] 
                                       group-hover:brightness-[1.2]" 
                          />
                          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 font-bold">
                            {social.name}
                          </span>
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;