import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Loader({ setFinished }) {
  
  // SAFETY TIMER: If animation hangs, force show the site after 3.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      setFinished(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, [setFinished]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-950 overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: [0.5, 1.2, 50], 
          opacity: [0, 1, 1],
        }}
        transition={{ 
          duration: 2.5, 
          times: [0, 0.4, 1],
          ease: "circIn" 
        }}
        // Hand-off to main app
        onAnimationComplete={() => setFinished(false)}
        className="w-40 h-40 bg-blue-600 rounded-full blur-[100px]"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2 }}
        className="absolute font-mono text-[10px] tracking-[0.5em] uppercase text-neutral-500"
      >
        Initializing...
      </motion.p>
    </motion.div>
  );
}