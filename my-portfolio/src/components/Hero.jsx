import { motion } from "framer-motion";
import profilePhoto from "../assets/photo_2025-2026.png";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950">
      
      {/* 1. BACKGROUND TEXT - The Name with Intense Blue Glow */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          // Using a large 18vw to fill the width while keeping it readable
          className="text-[18vw] font-black uppercase leading-[0.75] text-white tracking-[-0.06em] text-center"
          style={{
            textShadow: `
              -1px -1px 0 #3b82f6,  
               1px -1px 0 #3b82f6,
              -1px  1px 0 #3b82f6,
               1px  1px 0 #3b82f6,
               0px  0px 15px rgba(59, 130, 246, 0.8),
               0px  0px 40px rgba(59, 130, 246, 0.4),
               0px  0px 80px rgba(59, 130, 246, 0.2)
            `
          }}
        >
          Amiere <br /> 
          <span className="tracking-[-0.04em]">Miranda</span>
        </motion.h1>
      </div>

      {/* 2. THE OVERLAY PHOTO - Grayscale Portrait */}
      <motion.div 
        initial={{ opacity: 0, y: 40, filter: "grayscale(100%) brightness(0.7)" }}
        animate={{ opacity: 1, y: 0, filter: "grayscale(100%) brightness(0.9)" }}
        transition={{ duration: 1.2, delay: 0.4, ease: "circOut" }}
        className="relative z-10 h-[80vh] md:h-[95vh] flex items-end justify-center"
      >
        <img 
          src={profilePhoto} 
          alt="Amiere Miranda" 
          className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,1)]"
        />
        
        {/* Blending the photo base into the dark floor */}
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
      </motion.div>

      {/* 3. FOREGROUND DETAILS - Strategic UI Placement */}
      <div className="absolute bottom-10 w-full flex justify-between px-10 md:px-28 z-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] block mb-2">Expertise</span>
          <span className="text-[11px] uppercase font-bold text-neutral-400 leading-tight block">
            Frontend Dev & <br /> GDGoC-PLM CCO
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="text-right"
        >
          <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] block mb-2">Location</span>
          <span className="text-[11px] uppercase font-bold text-neutral-400 block">Manila, PH</span>
        </motion.div>
      </div>

      {/* Final Cinematic Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_90%)]" />
    </section>
  );
}