import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SKILLS_DATA = {
  technical: [
    { name: "Frontend", detail: "React, Tailwind CSS, JavaScript" },
    { name: "Backend/DB", detail: "PostgreSQL, Node.js" },
    { name: "Languages", detail: "C++, Python, TypeScript" },
    { name: "Specialized", detail: "Compiler Design, ML (TensorFlow.js)" }
  ],
  soft: [
    { name: "Leadership", detail: "GDGoC Lead & CTO Experience" },
    { name: "Management", detail: "Project & Event Logistics (InnOlympics)" },
    { name: "Creative", detail: "UI/UX Design, Branding" },
    { name: "Entrepreneurship", detail: "Venture Management & Scaling" }
  ]
};

export default function Skills() {
  const [category, setCategory] = useState('technical');

  return (
    <section id="skills" className="min-h-screen py-32 px-12 md:px-32 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12">Skills</h2>
        
        {/* Toggle Buttons */}
        <div className="flex gap-8 mb-16">
          {['technical', 'soft'].map((type) => (
            <button
              key={type}
              onClick={() => setCategory(type)}
              className={`text-[10px] tracking-[0.3em] uppercase font-bold transition-all cursor-none ${
                category === type ? "text-blue-400" : "text-neutral-500 hover:text-white"
              }`}
            >
              {type === 'technical' ? 'Technical Skills' : 'Soft Skills'}
            </button>
          ))}
        </div>

        {/* The Table */}
        <div className="border-t border-neutral-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.8 }}
            >
              {SKILLS_DATA[category].map((skill, index) => (
                <div key={index} className="grid grid-cols-2 py-8 border-b border-neutral-800 hover:bg-white/[0.02] transition-colors group">
                  <span className="text-neutral-500 uppercase text-[10px] tracking-widest font-mono group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xl md:text-2xl font-medium tracking-tight">
                    {skill.detail}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}