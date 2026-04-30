import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative h-[120vh] flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y, opacity, scale }}
        className="z-10 flex flex-col items-center text-center px-4"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md text-xs tracking-[0.3em] uppercase mb-8 text-blue-400"
        >
          Available for projects
        </motion.span>
        
        <h1 className="text-6xl md:text-[10rem] font-bold leading-[0.8] tracking-tighter">
          CREATIVE <br /> 
          <span className="text-neutral-500">DEVELOPER</span>
        </h1>
      </motion.div>

      {/* Animated Background Spotlight */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
      </div>
    </section>
  );
}