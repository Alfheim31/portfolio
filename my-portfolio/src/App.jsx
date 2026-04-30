import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Projects from './components/Project';

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative">
      <Cursor />
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <nav className="fixed top-0 z-50 w-full p-10 flex justify-between items-center mix-blend-difference">
        <div className="font-bold tracking-tighter text-lg">MIRANDA.</div>
        <ul className="flex gap-8 text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400">
          <li className="hover:text-white transition-colors">Work</li>
          <li className="hover:text-white transition-colors">About</li>
        </ul>
      </nav>

      <main>
        <Hero />
        <div className="h-screen flex items-center px-12 md:px-32">
          <h2 className="text-5xl md:text-7xl max-w-5xl font-medium tracking-tighter leading-[1.1]">
            Transforming complex logic into <span className="text-neutral-500 italic">fluid digital experiences.</span>
          </h2>
        </div>
        <Projects />
        <footer className="h-screen flex items-center justify-center">
          <h2 className="text-[12vw] font-black tracking-tighter hover:italic transition-all">GET IN TOUCH</h2>
        </footer>
      </main>
    </div>
  );
}

export default App;