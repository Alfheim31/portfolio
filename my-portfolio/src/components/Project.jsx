import { motion, AnimatePresence, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-70%"]);
  const selectedProject = PROJECTS.find((p) => p.id === selectedId);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-12">
          {PROJECTS.map((project) => (
            <motion.div
              layoutId={`card-container-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="project-card group relative h-[520px] w-[420px] flex-shrink-0 cursor-none overflow-hidden rounded-[2.5rem] border border-neutral-800 bg-neutral-900/50 p-10 backdrop-blur-sm flex flex-col justify-end hover:border-blue-500/30 transition-colors"
            >
              <div className="relative z-10 pointer-events-none">
                <p className="font-mono text-xs uppercase tracking-widest text-blue-400 mb-2">{project.tag}</p>
                <motion.h3 layoutId={`title-${project.id}`} className="text-4xl font-bold tracking-tighter text-white uppercase">
                  {project.title}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-neutral-950/95 backdrop-blur-2xl overflow-hidden"
          >
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="relative w-full max-w-5xl h-full max-h-[85vh] bg-neutral-900 rounded-[3rem] border border-neutral-800 overflow-y-auto no-scrollbar shadow-2xl"
            >
              {/* STICKY BACK BUTTON */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(null);
                }}
                className="sticky top-8 left-8 z-[200] flex items-center gap-3 text-white bg-white/5 hover:bg-white/10 p-4 px-6 rounded-full transition-all backdrop-blur-md border border-white/10 group cursor-none pointer-events-auto"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-black">Go Back</span>
              </button>

              {/* MOVED UPWARD: pt-16 and items-start pull the content to the top half */}
              <div className="p-8 md:px-20 pt-16 md:pt-0 min-h-full flex items-start">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full pt-10 md:pt-20">
                  <div className="flex flex-col">
                    <p className="text-blue-400 font-mono text-[10px] mb-4 uppercase tracking-[0.3em]">{selectedProject.tag}</p>
                    <motion.h2 
                      layoutId={`title-${selectedId}`} 
                      className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase leading-none"
                    >
                      {selectedProject.title}
                    </motion.h2>
                    
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
                      {selectedProject.longDescription}
                    </p>
                    
                    <div className="space-y-6">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold">Tech Stack</h4>
                      <div className="flex gap-2 flex-wrap">
                        {selectedProject.tech.map(t => (
                          <span key={t} className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full text-[10px] font-mono text-neutral-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="aspect-video bg-neutral-800/40 rounded-[2rem] border border-neutral-700 flex items-center justify-center">
                      <span className="text-neutral-600 font-mono text-[10px] uppercase tracking-widest">Preview One</span>
                    </div>
                    <div className="aspect-video bg-neutral-800/40 rounded-[2rem] border border-neutral-700 flex items-center justify-center">
                      <span className="text-neutral-600 font-mono text-[10px] uppercase tracking-widest">Preview Two</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const PROJECTS = [
  { id: 1, title: "Visuhand AI", tag: "Machine Learning / React", longDescription: "Developed at PLM to interpret ASL gestures in real-time using computer vision.", tech: ["TensorFlow.js", "React", "MediaPipe"] },
  { id: 2, title: "Soluna", tag: "Compiler Design", longDescription: "A custom programming language with celestial syntax logic: sol, soluna, and luna.", tech: ["C++", "LLVM", "Flex/Bison"] },
  { id: 3, title: "InnOlympics 2026", tag: "Event Management", longDescription: "University-wide hackathon organized for over 200 student innovators at PLM.", tech: ["Leadership", "Branding", "Planning"] },
  { id: 4, title: "Dubai Cookies", tag: "Entrepreneurship", longDescription: "Food-tech boutique venture specializing in pistachio-filled chewy cookies.", tech: ["Inventory", "R&D", "Marketing"] },
  { id: 5, title: "RSG Seminar", tag: "Career Development", longDescription: "A career series helping tech students bridge the gap to professional roles.", tech: ["Public Speaking", "Strategy", "Management"] }
];