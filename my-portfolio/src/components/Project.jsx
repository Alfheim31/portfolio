import { motion, AnimatePresence, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Stop horizontal movement if a project is expanded
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-70%"]);

  // Find the currently selected project details
  const selectedProject = PROJECTS.find((p) => p.id === selectedId);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-12">
          {PROJECTS.map((project) => (
            <motion.div
              layoutId={`card-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="project-card group relative h-[520px] w-[420px] flex-shrink-0 cursor-none overflow-hidden rounded-[2.5rem] border border-neutral-800 bg-neutral-900/50 p-10 backdrop-blur-sm flex flex-col justify-end"
            >
              <div className="relative z-10">
                <p className="font-mono text-xs uppercase tracking-widest text-blue-400">{project.tag}</p>
                <h3 className="text-4xl font-bold tracking-tighter text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Expanded Overlay */}
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 overflow-y-auto bg-neutral-950/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-6xl min-h-[90vh] bg-neutral-900 rounded-[3rem] border border-neutral-800 overflow-hidden"
            >
              {/* Back Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(null);
                }}
                className="absolute top-8 left-8 z-50 flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors backdrop-blur-md border border-white/10 group cursor-none"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs uppercase tracking-widest font-bold">Back</span>
              </button>

              {/* Expanded Content */}
              <div className="p-12 md:p-24 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <p className="text-blue-400 font-mono mb-4">{selectedProject.tag}</p>
                  <h2 className="text-6xl font-bold tracking-tighter mb-8">{selectedProject.title}</h2>
                  <p className="text-neutral-400 text-lg leading-relaxed mb-12">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-sm uppercase tracking-widest text-neutral-500 font-bold">Key Technologies</h4>
                    <div className="flex gap-2 flex-wrap">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-4 py-2 bg-neutral-800 rounded-full text-xs font-mono">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {/* Image Placeholders */}
                  <div className="h-64 bg-neutral-800 rounded-3xl animate-pulse" />
                  <div className="h-64 bg-neutral-800 rounded-3xl animate-pulse" />
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
  {
    id: 1,
    title: "Visuhand AI",
    tag: "Machine Learning / React",
    longDescription: "A specialized sign language recognition system developed for the PLM CS department. It uses computer vision to interpret ASL gestures in real-time, bridging the gap for accessible communication.",
    tech: ["TensorFlow.js", "React", "Tailwind", "MediaPipe"],
  },
  {
    id: 2,
    title: "Soluna",
    tag: "Compiler Design",
    longDescription: "A custom-built programming language designed for the Computer Science Elective. Soluna features a unique syntax where 'sol' handles conditional logic and 'luna' handles fallbacks.",
    tech: ["C++", "LLVM", "Flex/Bison"],
  },
  {
    id: 3,
    title: "InnOlympics 2026",
    tag: "Event Management",
    longDescription: "A massive university-wide hackathon organized for PLM students. Managing branding, sponsorship, and technical logistics for over 200 participants.",
    tech: ["Leadership", "Branding", "Event Planning"],
  },
  {
    id: 4,
    title: "Dubai Cookies",
    tag: "Food Tech / E-Commerce",
    longDescription: "An entrepreneurial venture focused on high-quality specialized desserts. This project involved developing custom recipes for pistachio cream, managing production inventory, and building a streamlined ordering system for the boutique.",
    tech: ["Inventory Management", "Entrepreneurship", "Branding"],
  },
  {
    id: 5,
    title: "RSG Seminar",
    tag: "Career Development",
    longDescription: "The 'Ready, Set, Grow' (RSG) seminar series is a career development initiative designed for tech students. Organized to help peers transition from academia to the professional world, focusing on branding and technical skills.",
    tech: ["Public Speaking", "Strategic Planning", "Project Management"],
  }
];