import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const EXPERIENCES = [
  {
    id: 1,
    year: "2025 - 2026",
    title: "Lead - GDGoC PLM",
    desc: "Spearheaded the Google Developer Groups on Campus chapter, managing organizational growth and technical events.",
    align: "left",
  },
  {
    id: 2,
    year: "2026",
    title: "InnOlympics 2026",
    desc: "Organized a university-wide hackathon at PLM, coordinating logistics and technical mentorship for student innovators.",
    align: "right",
  },
  {
    id: 3,
    year: "2025 - 2026",
    title: "CTO - GDSC PLM",
    desc: "Directed technical curriculum and led the development of internal organizational tools and publicity materials.",
    align: "left",
  },
  {
    id: 4,
    year: "2026",
    title: "P!ka Launch",
    desc: "Founded a boutique cookie brand, handling R&D for pistachio-filled recipes and inventory management systems.",
    align: "right",
  },
  {
    id: 5,
    year: "2026",
    title: "RSG Seminar Series",
    desc: "Managed the 'Step Beyond the Uncharted Odyssey' career series to bridge the gap for tech students.",
    align: "left",
  },
  {
    id: 6,
    year: "2025 - 2026",
    title: "Software Projects",
    desc: "Developed Palmingo for sign language recognition and managed inventory systems for fashion clients.",
    align: "right",
  },
  {
    id: 7,
    year: "2024 - 2026",
    title: "Computer Science @ PLM",
    desc: "Maintained academic excellence while developing custom programming languages like Soluna.",
    align: "left",
  }
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={ref} className="relative py-32 bg-neutral-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-32 text-center text-white">
          Journey
        </h2>

        {/* THE VERTICAL LINE */}
        <div className="absolute left-1/2 top-[250px] bottom-0 w-[2px] bg-neutral-900 -translate-x-1/2">
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="w-full h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </div>

        <div className="space-y-40">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center justify-between w-full">
              
              {/* CONTENT BOX */}
              <motion.div 
                initial={{ opacity: 0, x: exp.align === "left" ? -50 : 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`w-[45%] ${exp.align === "left" ? "text-right" : "text-left ml-auto"}`}
              >
                <div className="flex flex-col gap-2">
                  <span className="text-blue-400 font-mono text-xs uppercase tracking-widest">{exp.year}</span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight">{exp.title}</h3>
                  <div className={`h-48 w-full bg-neutral-900/50 rounded-2xl border border-neutral-800 mb-4 overflow-hidden`}>
                     {/* Placeholder for project/event picture */}
                     <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-950 opacity-50 flex items-center justify-center">
                        <span className="text-[10px] uppercase tracking-widest text-neutral-600 italic">Visual Record</span>
                     </div>
                  </div>
                  <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-sm ml-auto mr-0 md:mr-auto">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>

              {/* THE CIRCLE DESTINATION */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <motion.div 
                  initial={{ scale: 0, backgroundColor: "#171717" }}
                  whileInView={{ scale: 1, backgroundColor: "#3b82f6" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, margin: "-150px" }}
                  className="w-4 h-4 rounded-full border-4 border-neutral-950 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}