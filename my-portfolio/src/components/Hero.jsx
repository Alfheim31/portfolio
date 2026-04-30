import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[120vh] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="z-10 text-center px-4">
        <span className="px-4 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-[10px] tracking-widest uppercase mb-6 inline-block text-blue-400">
          Full Stack Web Developer
        </span>
        <h1 className="text-7xl md:text-[9rem] font-bold leading-[0.8] tracking-tighter uppercase">
          Amiere <br /> <span className="text-neutral-500">Miranda</span>
        </h1>
      </motion.div>
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[400px] w-[400px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}