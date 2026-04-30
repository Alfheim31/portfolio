import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16 px-12">
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id} 
              whileHover={{ y: -20 }}
              className="group relative h-[550px] w-[450px] bg-neutral-900/40 border border-neutral-800 rounded-[2rem] p-8 overflow-hidden backdrop-blur-xl flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60 z-10" />
              
              {/* This is where you put your images */}
              <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700 ease-out z-0" />

              <div className="relative z-20">
                <p className="text-blue-400 font-mono text-sm mb-2">{project.category}</p>
                <h3 className="text-4xl font-semibold tracking-tight">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const PROJECTS = [
  { id: 1, title: "Visuhand AI", category: "Machine Learning" },
  { id: 2, title: "InnOlympics", category: "Event Branding" },
  { id: 3, title: "Soluna Language", category: "Compiler Design" },
  { id: 4, title: "Dubai Cookies", category: "E-Commerce" },
];