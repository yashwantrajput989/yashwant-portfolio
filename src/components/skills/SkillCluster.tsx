"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, Sparkles, ChevronRight } from "lucide-react";

export interface SkillClusterData {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string; // cyan or amber token
  skills: string[];
  description: string;
}

interface SkillClusterProps {
  cluster: SkillClusterData;
  index: number;
}

export default function SkillCluster({ cluster, index }: SkillClusterProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = cluster.icon;
  const isCyan = cluster.color === "cyan";

  const borderColor = isCyan ? "group-hover:border-[#4FD8E8]/60" : "group-hover:border-[#F2A65A]/60";
  const glowShadow = isCyan
    ? "group-hover:shadow-[0_0_20px_rgba(79,216,232,0.15)]"
    : "group-hover:shadow-[0_0_20px_rgba(242,166,90,0.15)]";
  const accentColor = isCyan ? "text-[#4FD8E8]" : "text-[#F2A65A]";
  const bgBadge = isCyan ? "bg-[#4FD8E8]/10 text-[#4FD8E8] border-[#4FD8E8]/30" : "bg-[#F2A65A]/10 text-[#F2A65A] border-[#F2A65A]/30";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative bg-[#131A22] border border-[#263340] rounded-xl p-5 transition-all duration-300 ${borderColor} ${glowShadow}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-lg bg-[#0B0F14] border border-[#263340] flex items-center justify-center ${accentColor}`}>
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <div className="font-mono text-[10px] text-[#8CA0AC] uppercase tracking-wider">
              AGENT_CLUSTER // 0{index + 1}
            </div>
            <h3 className="font-display font-bold text-lg text-[#EAF2F5] group-hover:text-[#EAF2F5]">
              {cluster.name}
            </h3>
          </div>
        </div>

        <span className={`px-2.5 py-1 rounded-full font-mono text-[10px] border ${bgBadge}`}>
          {cluster.skills.length} MODULES
        </span>
      </div>

      <p className="mt-3 font-body text-xs text-[#8CA0AC] leading-relaxed">
        {cluster.description}
      </p>

      {/* Skill Badges / Chips */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {cluster.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded bg-[#0B0F14] border border-[#263340] font-mono text-xs text-[#EAF2F5] group-hover:border-[#263340] hover:!border-[#4FD8E8] hover:!text-[#4FD8E8] transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Status Bar footer */}
      <div className="mt-4 pt-3 border-t border-[#263340]/60 flex items-center justify-between font-mono text-[10px] text-[#8CA0AC]">
        <span className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${isCyan ? "bg-[#4FD8E8]" : "bg-[#F2A65A]"}`}></span>
          STATUS: READY
        </span>
        <span className="text-[#8CA0AC]/70">DISPATCH_CAPABLE</span>
      </div>
    </motion.div>
  );
}
