import { motion, AnimatePresence, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, X } from "lucide-react";

// Image Imports
import palmingo1 from "../assets/1.1.palmingo.png";
import palmingo2 from "../assets/1.2.palmingo.png";
import soluna1 from "../assets/2.1.soluna.png";
import soluna2 from "../assets/2.2.soluna.png";
import mm1 from "../assets/3.1.mm.png";
import mm2 from "../assets/3.2.mm.png";
import gk1 from "../assets/4.1.gk.png";
import gk2 from "../assets/4.2.gk.png";
import contain1 from "../assets/5.1.contain.png";
import contain2 from "../assets/5.2.contain.png";

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null); // New state for lightbox
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-70%"]);
  const selectedProject = PROJECTS.find((p) => p.id === selectedId);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedId]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-12">
          {PROJECTS.map((project) => (
            <motion.div
              layoutId={`card-container-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="project-card group relative h-[520px] w-[420px] flex-shrink-0 cursor-none overflow-hidden rounded-[2.5rem] border border-neutral-800 bg-neutral-900 flex flex-col justify-end hover:border-blue-500/30 transition-colors"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.previews[0]} 
                  alt={project.title} 
                  className="h-full w-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              </div>

              <div className="relative z-10 p-10 pointer-events-none">
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-neutral-950/95 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="relative w-full max-w-5xl bg-neutral-900 rounded-[3rem] border border-neutral-800 shadow-2xl flex flex-col overflow-hidden"
              style={{ height: "85vh" }}
            >
              {/* MODAL HEADER */}
              <div className="flex-shrink-0 px-8 pt-8 pb-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(null);
                  }}
                  className="flex items-center gap-3 text-white bg-white/5 hover:bg-white/10 p-4 px-6 rounded-full transition-all backdrop-blur-md border border-white/10 group cursor-none"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black">Go Back</span>
                </button>
              </div>

              {/* MODAL CONTENT */}
              <div
                className="px-8 md:px-20 pb-16 scroll-smooth"
                data-lenis-prevent
                style={{ overflowY: "auto", flex: "1 1 0", minHeight: 0 }}
              >
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
                        {selectedProject.tech.map((t) => (
                          <span key={t} className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full text-[10px] font-mono text-neutral-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* PREVIEW IMAGES GRID */}
                  <div className="flex flex-col gap-6 relative">
                    {selectedProject.previews.map((img, idx) => (
                      <motion.div 
                        key={idx} 
                        layoutId={`preview-${selectedId}-${idx}`}
                        onClick={() => setZoomedImage(img)}
                        className="relative rounded-[2rem] border border-neutral-700 bg-neutral-800/20 overflow-hidden cursor-zoom-in group"
                      >
                         <img 
                            src={img} 
                            alt="Project Preview" 
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                         />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* LIGHTBOX OVERLAY (Inside the card container) */}
              <AnimatePresence>
                {zoomedImage && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-[110] bg-neutral-950 p-4 md:p-12 flex items-center justify-center"
                  >
                    <button 
                      onClick={() => setZoomedImage(null)}
                      className="absolute top-8 left-8 z-[120] flex items-center gap-3 text-white bg-white/10 hover:bg-white/20 p-4 px-6 rounded-full transition-all backdrop-blur-xl border border-white/10 group"
                    >
                      <X size={18} />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-black">Close Zoom</span>
                    </button>
                    
                    <motion.img 
                      src={zoomedImage}
                      initial={{ scale: 0.9, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.9, y: 20 }}
                      className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const PROJECTS = [
  { id: 1, title: "Palmingo", tag: "Machine Learning / React", longDescription: "A sign language recognition system interpreting gestures in real-time.", tech: ["Python", "TensorFlow.js", "React", "MediaPipe", "Vite", "Tailwind CSS"], previews: [palmingo1, palmingo2] },
  { id: 2, title: "Soluna", tag: "Compiler Design", longDescription: "A custom programming language with celestial keywords (sol, soluna, luna), derived from Lua.", tech: ["Python", "React", "JavaScript", "Vite", "Tailwind CSS"], previews: [soluna1, soluna2] },
  { id: 3, title: "Matthew & Melka Inventory", tag: "Inventory System", longDescription: "Web-based inventory management for fashion companies Matthew&Melka and Ken Samudio.", tech: ["React", "JavaScript", "PostgreSQL", "Tailwind CSS", "Websocket"], previews: [mm1, mm2] },
  { id: 4, title: "Graph Knight", tag: "Freelance Project", longDescription: "A freelance platform, creating distinct, intuitive workflows for both independent artists and potential employers.", tech: ["Figma"], previews: [gk1, gk2] },
  { id: 5, title: "Contain", tag: "Hackathon Project", longDescription: "A high-performance mobile application using modern frameworks, tailored to help businesses manage and monitor plastic waste collection logistics.", tech: ["React", "JavaScript", "HTML5", "CSS", "Google Maps API"], previews: [contain1, contain2] }
];