"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if mouse is hovering over interactive elements
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("group"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Cyan Ring */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border border-[#4FD8E8]/60 shadow-[0_0_15px_rgba(79,216,232,0.3)]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? "#F2A65A" : "rgba(79, 216, 232, 0.6)",
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
          mass: 0.1,
        }}
      />

      {/* Inner Glowing Amber Dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-[#F2A65A] shadow-[0_0_10px_rgba(242,166,90,0.8)]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 400,
        }}
      />
    </div>
  );
}
