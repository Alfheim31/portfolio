import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [hovered, setHovered] = useState(false);
  
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  // Add a spring for the scale for that bouncy feel
  const scale = useSpring(1, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    // Global listeners to check what the mouse is over
    const handleMouseOver = (e) => {
      // Logic: if the element (or its parent) is a link or button, shrink
      if (e.target.closest("a, button, .project-card")) {
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

  // Update scale based on hover state
  useEffect(() => {
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
                 bg-white/10 border border-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)]
                 transition-colors duration-300"
      // Optional: Change color when hovering
      animate={{
        backgroundColor: hovered ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.1)"
      }}
    />
  );
}