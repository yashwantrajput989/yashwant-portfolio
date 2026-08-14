"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, PlayCircle, Calendar, MapPin, Building2, TrendingUp } from "lucide-react";

export interface RoleData {
  id: string;
  role: string;
  company: string;
  dates: string;
  location: string;
  status: "RUNNING" | "COMPLETE";
  leadMetric: string;
  bullets: string[];
  techUsed: string[];
}

interface PipelineCardProps {
  data: RoleData;
  index: number;
}

export default function PipelineCard({ data, index }: PipelineCardProps) {
  const [isComplete, setIsComplete] = useState(data.status === "COMPLETE");

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Container Panel */}
      <div className="bg-[#131A22] border border-[#263340] hover:border-[#4FD8E8]/50 rounded-xl p-6 transition-all duration-300 shadow-lg group">
        {/* Top Run Status Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#263340]/80 pb-4 mb-4 font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="text-[#8CA0AC]">STAGE_0{index + 1} //</span>
            <span className="text-[#EAF2F5] font-semibold">{data.company}</span>
          </div>

          <div className="flex items-center space-x-3">
            {data.status === "RUNNING" ? (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4FD8E8]/10 text-[#4FD8E8] border border-[#4FD8E8]/40 shadow-[0_0_10px_rgba(79,216,232,0.2)] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#4FD8E8] animate-ping"></span>
                RUNNING ▶
              </span>
            ) : (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2A65A]/10 text-[#F2A65A] border border-[#F2A65A]/40 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                COMPLETE ✓
              </span>
            )}
          </div>
        </div>

        {/* Pipeline Progress Bar */}
        <div className="w-full bg-[#0B0F14] h-1.5 rounded-full overflow-hidden mb-5 border border-[#263340]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`h-full ${data.status === "RUNNING" ? "bg-gradient-to-r from-[#4FD8E8] to-[#F2A65A]" : "bg-[#F2A65A]"}`}
          ></motion.div>
        </div>

        {/* Role Details */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
          <h3 className="font-display text-xl font-bold text-[#EAF2F5] group-hover:text-[#4FD8E8] transition-colors">
            {data.role}
          </h3>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-[#8CA0AC]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#4FD8E8]" />
              {data.dates}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#F2A65A]" />
              {data.location}
            </span>
          </div>
        </div>

        {/* Key Lead Metric Highlight Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#0B0F14] border border-[#F2A65A]/40 text-[#F2A65A] font-mono text-xs font-semibold mb-4">
          <TrendingUp className="w-4 h-4" />
          <span>IMPACT METRIC: {data.leadMetric}</span>
        </div>

        {/* Resume Bullet Points */}
        <ul className="space-y-2.5 mb-5 font-body text-xs text-[#EAF2F5]/90 leading-relaxed">
          {data.bullets.map((bullet, bIdx) => (
            <li key={bIdx} className="flex items-start gap-2.5">
              <span className="text-[#4FD8E8] font-mono mt-0.5">›</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#263340]/60">
          {data.techUsed.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-[#0B0F14] border border-[#263340] font-mono text-[11px] text-[#8CA0AC]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
