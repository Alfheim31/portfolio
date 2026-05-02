import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const EXPERIENCES = [
  { id: 1, year: "2025 - 2026", title: "Lead - GDGoC PLM", desc: "Spearheaded the Google Developer Groups on Campus chapter at PLM.", align: "left" },
  { id: 2, year: "2026", title: "InnOlympics 2026", desc: "Organized the flagship university-wide hackathon in Quezon City.", align: "right" },
  { id: 3, year: "2025 - 2026", title: "CTO - GDSC PLM", desc: "Managed technical curriculum and UI design for student organizations.", align: "left" },
  { id: 4, year: "2026", title: "P!ka Launch", desc: "Founded a boutique cookie brand specializing in pistachio-filled chewy cookies.", align: "right" },
  { id: 5, year: "2026", title: "RSG Seminar Series", desc: "Managed the 'Step Beyond the Uncharted Odyssey' career series.", align: "left" },
  { id: 6, year: "2025 - 2026", title: "Software Projects", desc: "Developed Palmingo for sign language recognition and fashion inventory systems.", align: "right" },
  { id: 7, year: "2024 - 2026", title: "Computer Science @ PLM", desc: "Developed Soluna, a celestial-themed programming language.", align: "left" }
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
    <section id="experience" ref={ref} className="relative py-32 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-32 text-center text-white">Journey</h2>

        {/* LINE: This naturally grows/shrinks with scroll progress */}
        <div className="absolute left-1/2 top-[250px] bottom-0 w-[2px] bg-neutral-900 -translate-x-1/2">
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="w-full h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </div>

        <div className="space-y-40">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative flex items-center justify-between w-full">
              
              <motion.div 
                // Initial state: hidden, blurred, and offset to the side
                initial={{ opacity: 0, x: exp.align === "left" ? -100 : 100, filter: "blur(15px)" }}
                // While in view: fully visible and centered
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                // Transition settings
                transition={{ duration: 0.8, ease: "easeOut" }}
                // IMPORTANT: once: false enables the "reverse" animation when scrolling away
                viewport={{ once: false, amount: 0.4 }}
                className={`w-[45%] ${exp.align === "left" ? "text-right" : "text-left ml-auto"}`}
              >
                <div className="flex flex-col gap-2">
                  <span className="text-blue-400 font-mono text-xs uppercase tracking-widest">{exp.year}</span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight">{exp.title}</h3>
                  <div className="h-48 w-full bg-neutral-900/50 rounded-2xl border border-neutral-800 mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-950 opacity-50" />
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed max-w-sm ml-auto mr-0 md:mr-auto">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>

              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <motion.div 
                  initial={{ scale: 0, backgroundColor: "#171717" }}
                  whileInView={{ scale: 1, backgroundColor: "#3b82f6" }}
                  // once: false ensures the circle disappears when you scroll up past it
                  viewport={{ once: false, amount: 1 }}
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