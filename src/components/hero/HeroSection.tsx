"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import TypewriterStatus from "./TypewriterStatus";
import { ChevronDown, Sparkles, Activity, ShieldCheck, Zap } from "lucide-react";

// Dynamically import 3D canvas with ssr disabled for performance & safety
const OrchestratorScene = dynamic(() => import("./OrchestratorScene"), {
  ssr: false,
});

export default function HeroSection() {
  const scrollToSkills = () => {
    const el = document.getElementById("skills");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-between items-center pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0B0F14] via-[#0D131B] to-[#0B0F14]"
    >
      {/* 3D Background Graph Layer */}
      <OrchestratorScene />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(#4FD8E8 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      ></div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5 sm:space-y-8 pointer-events-auto my-auto">
        {/* Status Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-[#131A22]/90 border border-[#4FD8E8]/30 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-mono text-[#4FD8E8] shadow-[0_0_15px_rgba(79,216,232,0.15)] max-w-full"
        >
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#4FD8E8] shrink-0" />
          <span className="truncate">ASSOCIATE DATA & AI LEAD @ MYGO CONSULTING</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#EAF2F5] leading-[1.15] sm:leading-[1.1]"
        >
          I build the systems that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FD8E8] via-[#EAF2F5] to-[#F2A65A] cyan-text-glow">
            decide what to do next.
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-lg text-[#8CA0AC] max-w-2xl mx-auto font-body leading-relaxed"
        >
          <strong className="text-[#EAF2F5] font-semibold">Yashwant Singh</strong> — Full-Stack Agentic AI Engineer. Architecting multi-agent systems (LangGraph, CrewAI), production RAG pipelines, and enterprise LLMOps observability.
        </motion.p>

        {/* Typewriter Terminal Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-1 sm:pt-2 max-w-full overflow-hidden"
        >
          <TypewriterStatus />
        </motion.div>

        {/* Impact Metrics Quick Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-2 sm:pt-4 max-w-xl mx-auto"
        >
          <div className="bg-[#131A22]/80 border border-[#263340] rounded-lg p-2.5 sm:p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-[#F2A65A] font-mono text-base sm:text-lg font-bold">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>+40%</span>
            </div>
            <div className="font-mono text-[9px] sm:text-[10px] text-[#8CA0AC] mt-0.5">AGENT RELIABILITY</div>
          </div>

          <div className="bg-[#131A22]/80 border border-[#263340] rounded-lg p-2.5 sm:p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-[#4FD8E8] font-mono text-base sm:text-lg font-bold">
              <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>95%+</span>
            </div>
            <div className="font-mono text-[9px] sm:text-[10px] text-[#8CA0AC] mt-0.5">GROUNDING ACCURACY</div>
          </div>

          <div className="bg-[#131A22]/80 border border-[#263340] rounded-lg p-2.5 sm:p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-[#F2A65A] font-mono text-base sm:text-lg font-bold">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>60%</span>
            </div>
            <div className="font-mono text-[9px] sm:text-[10px] text-[#8CA0AC] mt-0.5">SPEC CYCLE SPEEDUP</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative z-10 pt-6 sm:pt-10 flex flex-col items-center cursor-pointer group pointer-events-auto"
        onClick={scrollToSkills}
      >
        <div className="font-mono text-[10px] sm:text-[11px] text-[#8CA0AC] group-hover:text-[#4FD8E8] transition-colors mb-1.5 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#4FD8E8] animate-ping"></span>
          SCROLL TO DISPATCH SUB-AGENTS
        </div>
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#263340] group-hover:border-[#4FD8E8] flex items-center justify-center transition-colors">
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8CA0AC] group-hover:text-[#4FD8E8] animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
