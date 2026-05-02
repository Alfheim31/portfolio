// import { motion, useScroll, useSpring } from "framer-motion";
// import { useRef } from "react";

// const EXPERIENCES = [
//   { id: 1, year: "2025 - 2026", title: "Lead - GDGoC PLM", desc: "Spearheaded the Google Developer Groups on Campus chapter at PLM.", align: "left" },
//   { id: 2, year: "2026", title: "InnOlympics 2026", desc: "Organized the flagship university-wide hackathon in Quezon City.", align: "right" },
//   { id: 3, year: "2025 - 2026", title: "CTO - GDSC PLM", desc: "Managed technical curriculum and UI design for student organizations.", align: "left" },
//   { id: 4, year: "2026", title: "P!ka Launch", desc: "Founded a boutique cookie brand specializing in pistachio-filled chewy cookies.", align: "right" },
//   { id: 5, year: "2026", title: "RSG Seminar Series", desc: "Managed the 'Step Beyond the Uncharted Odyssey' career series.", align: "left" },
//   { id: 6, year: "2025 - 2026", title: "Software Projects", desc: "Developed Palmingo for sign language recognition and fashion inventory systems.", align: "right" },
//   { id: 7, year: "2024 - 2026", title: "Computer Science @ PLM", desc: "Developed Soluna, a celestial-themed programming language.", align: "left" }
// ];

// export default function Experience() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start center", "end center"],
//   });

//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   return (
//     <section id="experience" ref={ref} className="relative py-32 bg-neutral-950">
//       <div className="max-w-6xl mx-auto px-4 relative">
//         <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-32 text-center text-white">Journey</h2>

//         {/* LINE: This naturally grows/shrinks with scroll progress */}
//         <div className="absolute left-1/2 top-[250px] bottom-0 w-[2px] bg-neutral-900 -translate-x-1/2">
//           <motion.div 
//             style={{ scaleY, originY: 0 }}
//             className="w-full h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
//           />
//         </div>

//         <div className="space-y-40">
//           {EXPERIENCES.map((exp) => (
//             <div key={exp.id} className="relative flex items-center justify-between w-full">
              
//               <motion.div 
//                 // Initial state: hidden, blurred, and offset to the side
//                 initial={{ opacity: 0, x: exp.align === "left" ? -100 : 100, filter: "blur(15px)" }}
//                 // While in view: fully visible and centered
//                 whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
//                 // Transition settings
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 // IMPORTANT: once: false enables the "reverse" animation when scrolling away
//                 viewport={{ once: false, amount: 0.4 }}
//                 className={`w-[45%] ${exp.align === "left" ? "text-right" : "text-left ml-auto"}`}
//               >
//                 <div className="flex flex-col gap-2">
//                   <span className="text-blue-400 font-mono text-xs uppercase tracking-widest">{exp.year}</span>
//                   <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight">{exp.title}</h3>
//                   <div className="h-48 w-full bg-neutral-900/50 rounded-2xl border border-neutral-800 mb-4 overflow-hidden">
//                     <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-950 opacity-50" />
//                   </div>
//                   <p className="text-neutral-500 text-sm leading-relaxed max-w-sm ml-auto mr-0 md:mr-auto">
//                     {exp.desc}
//                   </p>
//                 </div>
//               </motion.div>

//               <div className="absolute left-1/2 -translate-x-1/2 z-10">
//                 <motion.div 
//                   initial={{ scale: 0, backgroundColor: "#171717" }}
//                   whileInView={{ scale: 1, backgroundColor: "#3b82f6" }}
//                   // once: false ensures the circle disappears when you scroll up past it
//                   viewport={{ once: false, amount: 1 }}
//                   className="w-4 h-4 rounded-full border-4 border-neutral-950 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Campus Journalism Associate Editor",
    company: "The Josephian Diadem",
    period: "August 2020 - May 2021",
    description: "Assisted the Editor-in-Chief in overseeing the daily operations of the publication, ensuring a consistent workflow and timely delivery of content across all sections.",
  },
  {
    title: "Campus Journalism Editor-in-Chief",
    company: "The Josephian Diadem",
    period: "August 2021 - May 2022",
    description: "Directed the overall editorial vision and content strategy for The Josephian Diadem, overseeing the successful production and publication of print and digital editions.",
  },
  {
    title: "UI/UX Volunteer (Googler)",
    company: "Google Developer Groups on Campus - PLM Chapter",
    period: "August 2022 - May 2023",
    description: "Contributed to and utilized comprehensive design systems, ensuring consistent typography, iconography, and component usage across multiple project modules.",
  },
  {
    title: "Multimedia Volunteer (Googler)",
    company: "Google Developer Groups on Campus - PLM Chapter",
    period: "August 2023 - May 2024",
    description: "Produced diverse multimedia assets that adhered to established organizational branding, ensuring a professional and cohesive look for all video and digital materials.",
  },
  {
    title: "Lead Designer",
    company: "Microsoft Student Community PLM",
    period: "August 2024 - May 2025",
    description: "Spearheaded the visual identity for the community chapter, ensuring all digital and print assets strictly adhered to Microsoft’s global brand standards",
  },
  {
    title: "Design and Branding Lead",
    company: "Google Developer Groups on Campus - PLM Chapter",
    period: "August 2024 - May 2025",
    description: "Conceptualized and executed high-impact visual assets for large-scale events, including social media graphics, promotional videos, and environmental signage.",
  }, 
  {
    title: "Design Head",
    company: "InnOlympics 2025 Hackathon: Hack your Way through Progress",
    period: "January 2025",
    description: "Established the comprehensive visual identity for the 'Hack Your Way Through Progress' theme, creating a cohesive design system that balanced professional technical standards with an energetic, competitive aesthetic.",
  },
  {
    title: "Speaker",
    company: "GDGoC-PLM’s Everything, Everywhere All at Once: Unlocking the Creative Multiverse",
    period: "March 2025",
    description: "Facilitated a technical session titled 'The Anatomy of Popstron,' focusing on the intersection of graphic design and strategic visual frameworks for cohesive brand building.",
  },
  {
    title: "Chief Creative Officer (CCO)",
    company: "Google Developer Groups on Campus - PLM Chapter",
    period: "August 2025 - Present",
    description: "Directed the overarching visual identity and creative direction for the organization, ensuring all digital and physical assets aligned with core branding guidelines.",
  },
  {
    title: "Project Head",
    company: "Ready, Set, Grow 2026: Step Beyond the Uncharted Odyssey",
    period: "April 2026",
    description: "Orchestrated the end-to-end planning and execution of a comprehensive career seminar series, managing project timelines and department milestones to ensure a high-impact experience for participants.",
  },
  {
    title: "Project Co-Head | Creatives Department Head",
    company: "InnOlympics 2026 Hackathon: To Let Filipinos Dream Without Compromise",
    period: "April 2026",
    description: "Co-led the end-to-end planning and execution of a 48-hour hackathon, managing a multi-disciplinary team to deliver a seamless experience for participants, sponsors, and judges.",
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="py-32 relative bg-neutral-950">
      <div className="max-w-6xl mx-auto px-12 md:px-24">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-24"
        >
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.5em] block mb-4">Journey</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* THE TIMELINE LINE */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-0 top-0 w-[1px] h-full bg-blue-500 origin-top hidden md:block"
          />

          {/* EXPERIENCE ITEMS */}
          <div className="space-y-32">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative pl-0 md:pl-16 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] top-3 w-2 h-2 rounded-full bg-blue-500 hidden md:block group-hover:scale-150 transition-transform duration-300" />

                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <span className="text-neutral-500 font-mono text-xs mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4">
                  {exp.company}
                </p>

                <p className="text-neutral-400 text-lg md:text-xl max-w-3xl leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}