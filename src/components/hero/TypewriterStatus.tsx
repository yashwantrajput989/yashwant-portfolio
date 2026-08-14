"use client";

import React, { useState, useEffect } from "react";

interface TypewriterStatusProps {
  text?: string;
  speed?: number;
}

export default function TypewriterStatus({
  text = "> orchestrator.init() — agents: [skills, experience, projects, contact] — status: ready",
  speed = 30,
}: TypewriterStatusProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className="inline-flex items-center space-x-2 bg-[#131A22] border border-[#263340] px-3 sm:px-4 py-2 rounded-lg font-mono text-[10px] sm:text-xs text-[#8CA0AC] max-w-full text-left shadow-inner">
      <span className="text-[#4FD8E8] font-bold shrink-0">$</span>
      <span className="text-[#EAF2F5] break-all sm:whitespace-nowrap">{displayedText}</span>
      <span className="w-1.5 h-3.5 sm:w-2 sm:h-4 bg-[#4FD8E8] animate-pulse inline-block shrink-0"></span>
    </div>
  );
}
