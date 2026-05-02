import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [hovered, setHovered] = useState(false);
  
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const scale = useSpring(1, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const moveCursor = (e) => {
      // Offset by 16px to center the 32px (w-8) circle on the pointer
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      // This ensures the cursor shrinks for nav items, projects, and the CV link
      if (e.target.closest("a, button, li, .project-card")) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    // Shrinks to 0.5 when hovering interactive elements
    scale.set(hovered ? 0.5 : 1);
  }, [hovered, scale]);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
        scale: scale,
      }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] 
                 bg-white/10 border border-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      animate={{
        // Visual feedback: gets brighter when shrinking over a button or link
        backgroundColor: hovered ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.1)"
      }}
    />
  );
}