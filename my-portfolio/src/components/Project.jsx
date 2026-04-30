import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const targetRef = useRef(null);
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Maps the vertical scroll (0 to 1) to a horizontal translation
  // "-70%" moves the row to the left as you scroll down
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-transparent">
      {/* Sticky container keeps the gallery in view while scrolling the 400vh height */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-12">
          {PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card group relative h-[520px] w-[420px] flex-shrink-0 overflow-hidden rounded-[2.5rem] border border-neutral-800 bg-neutral-900/50 p-10 backdrop-blur-sm transition-colors duration-500 hover:border-blue-500/50 flex flex-col justify-end">
      
      {/* Background Decoration/Image Placeholder */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Subtle Grid Pattern for that 'Tech' look */}
      <div className="absolute inset-0 opacity-[0.03] z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-3 block font-mono text-xs uppercase tracking-widest text-blue-400"
        >
          {project.tag}
        </motion.span>
        
        <h3 className="text-4xl font-bold tracking-tighter text-white md:text-5xl">
          {project.title}
        </h3>
        
        <p className="mt-4 text-sm leading-relaxed text-neutral-400 opacity-0 transition-all duration-500 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
          {project.description}
        </p>
      </div>
    </div>
  );
};

// Data based on your current endeavors
const PROJECTS = [
  {
    id: 1,
    title: "Visuhand AI",
    tag: "Machine Learning / React",
    description: "Basic Sign Language Recognition using ASL gestures and web camera integration."
  },
  {
    id: 2,
    title: "Soluna",
    tag: "Compiler Design",
    description: "A custom programming language featuring unique keywords like 'sol' and 'luna'."
  },
  {
    id: 3,
    title: "InnOlympics 2026",
    tag: "Event Management",
    description: "Organizing a university-wide hackathon focused on innovation and student tech talent."
  },
  {
    id: 4,
    title: "Dubai Cookies",
    tag: "E-Commerce / Food Tech",
    description: "Managing orders and pistachio cream recipes for a specialized cookie boutique."
  },
  {
    id: 5,
    title: "RSG Seminar",
    tag: "Leadership",
    description: "The Ready, Set, Grow career series focusing on professional development for tech students."
  }
];