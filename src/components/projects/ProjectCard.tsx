"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import TerminalPanel from "./TerminalPanel";
import { FolderGit2, ExternalLink, ChevronDown, ChevronUp, Zap } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  leadMetric: string;
  techStack: string[];
  problem: string;
  approach: string;
  result: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#131A22] border border-[#263340] hover:border-[#4FD8E8]/50 rounded-xl p-6 transition-all duration-300 shadow-xl flex flex-col justify-between group"
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#4FD8E8]">
            <FolderGit2 className="w-4 h-4" />
            <span>AGENT_RUN // 0{index + 1}</span>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8CA0AC] hover:text-[#4FD8E8] transition-colors flex items-center gap-1 font-mono text-xs"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span className="hidden sm:inline">REPO</span>
          </a>
        </div>

        {/* Lead Metric surfaced big & bold */}
        <div className="bg-[#0B0F14] border border-[#F2A65A]/40 rounded-lg p-3 mb-4">
          <div className="font-mono text-[10px] text-[#8CA0AC] uppercase">PRIMARY BENCHMARK</div>
          <div className="font-mono font-bold text-lg sm:text-xl text-[#F2A65A] amber-text-glow flex items-center gap-1.5 mt-0.5">
            <Zap className="w-4 h-4 text-[#F2A65A]" />
            <span>{project.leadMetric}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl font-bold text-[#EAF2F5] group-hover:text-[#4FD8E8] transition-colors mb-1">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-[#8CA0AC] mb-4">
          {project.subtitle}
        </p>

        {/* Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-[#0B0F14] border border-[#263340] font-mono text-xs text-[#EAF2F5] hover:border-[#4FD8E8] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Expand / Terminal Trace Panel */}
      <div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-2.5 px-4 rounded-lg bg-[#0B0F14] border border-[#263340] hover:border-[#4FD8E8]/40 text-[#4FD8E8] font-mono text-xs flex items-center justify-between transition-colors mb-2"
        >
          <span>{isExpanded ? "HIDE_SYSTEM_TRACE [-]" : "INSPECT_SYSTEM_TRACE [+]"}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3"
          >
            <TerminalPanel
              problem={project.problem}
              approach={project.approach}
              result={project.result}
              projectName={project.title}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
