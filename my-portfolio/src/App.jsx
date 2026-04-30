import SmoothScroll from "./components/SmoothScroll";
import Hero from "./components/Hero";
import Projects from "./components/Project";

function App() {
  return (
    <SmoothScroll>
      {/* Noise Overlay (Optional but very 'Framer') */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <nav className="fixed top-0 z-50 w-full p-10 flex justify-between items-center">
        <div className="font-bold text-lg tracking-tighter italic">M.R.</div>
        <div className="h-[1px] w-12 bg-neutral-800 hidden md:block" />
        <ul className="flex gap-10 text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400">
          <li className="hover:text-white cursor-pointer transition-colors">Work</li>
          <li className="hover:text-white cursor-pointer transition-colors">About</li>
          <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
        </ul>
      </nav>

      <main className="relative z-10">
        <Hero />
        <div className="h-screen flex items-center px-12 md:px-32">
          <h2 className="text-4xl md:text-6xl max-w-4xl font-medium leading-tight tracking-tight">
            Building digital experiences that combine <span className="text-neutral-500 italic font-serif">technical precision</span> with aesthetic fluidity.
          </h2>
        </div>
        <Projects />
      </main>
      
      <footer className="h-screen flex flex-col items-center justify-center">
        <p className="text-neutral-500 mb-4">Have an idea?</p>
        <h2 className="text-7xl md:text-9xl font-bold hover:italic transition-all cursor-pointer">LET'S TALK.</h2>
      </footer>
    </SmoothScroll>
  );
}

export default App;