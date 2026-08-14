"use client";

import React, { useState, useEffect } from "react";
import { Terminal as TerminalIcon, Copy, Check, ChevronRight } from "lucide-react";

interface TerminalPanelProps {
  problem: string;
  approach: string;
  result: string;
  projectName: string;
}

export default function TerminalPanel({
  problem,
  approach,
  result,
  projectName,
}: TerminalPanelProps) {
  const [activeTab, setActiveTab] = useState<"problem" | "approach" | "result">("problem");
  const [copied, setCopied] = useState(false);

  const getTraceText = () => {
    switch (activeTab) {
      case "problem":
        return `[TRACE // PROBLEM_IDENTIFIED]\n> ${problem}`;
      case "approach":
        return `[TRACE // AGENT_ARCHITECTURE]\n> ${approach}`;
      case "result":
        return `[TRACE // BENCHMARK_OUTCOME]\n> ${result}`;
    }
  };

  const copyTrace = () => {
    navigator.clipboard.writeText(getTraceText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#0B0F14] border border-[#263340] rounded-lg overflow-hidden font-mono text-xs shadow-inner">
      {/* Terminal Header */}
      <div className="bg-[#131A22] border-b border-[#263340] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-[11px] text-[#8CA0AC]">
            trace://{projectName.toLowerCase().replace(/\s+/g, "_")}.log
          </span>
        </div>

        <button
          onClick={copyTrace}
          className="text-[#8CA0AC] hover:text-[#4FD8E8] transition-colors p-1"
          title="Copy Trace"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Trace Navigation Tabs */}
      <div className="flex border-b border-[#263340] bg-[#0E151D] overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab("problem")}
          className={`px-4 py-2 text-[11px] border-r border-[#263340] transition-colors flex items-center gap-1.5 ${
            activeTab === "problem"
              ? "bg-[#131A22] text-[#F2A65A] border-b-2 border-b-[#F2A65A] font-semibold"
              : "text-[#8CA0AC] hover:text-[#EAF2F5]"
          }`}
        >
          <span>1. PROBLEM</span>
        </button>

        <button
          onClick={() => setActiveTab("approach")}
          className={`px-4 py-2 text-[11px] border-r border-[#263340] transition-colors flex items-center gap-1.5 ${
            activeTab === "approach"
              ? "bg-[#131A22] text-[#4FD8E8] border-b-2 border-b-[#4FD8E8] font-semibold"
              : "text-[#8CA0AC] hover:text-[#EAF2F5]"
          }`}
        >
          <span>2. APPROACH</span>
        </button>

        <button
          onClick={() => setActiveTab("result")}
          className={`px-4 py-2 text-[11px] transition-colors flex items-center gap-1.5 ${
            activeTab === "result"
              ? "bg-[#131A22] text-[#F2A65A] border-b-2 border-b-[#F2A65A] font-semibold"
              : "text-[#8CA0AC] hover:text-[#EAF2F5]"
          }`}
        >
          <span>3. RESULT</span>
        </button>
      </div>

      {/* Content Viewport */}
      <div className="p-4 min-h-[110px] text-[#EAF2F5]/90 leading-relaxed font-mono">
        {activeTab === "problem" && (
          <div className="space-y-1.5">
            <div className="text-[#F2A65A] font-bold text-[11px] flex items-center gap-1">
              <ChevronRight className="w-3.5 h-3.5" />
              STATUS: SYSTEM_BOTTLENECK_DETECTED
            </div>
            <p className="text-[#8CA0AC] text-xs pl-4">{problem}</p>
          </div>
        )}

        {activeTab === "approach" && (
          <div className="space-y-1.5">
            <div className="text-[#4FD8E8] font-bold text-[11px] flex items-center gap-1">
              <ChevronRight className="w-3.5 h-3.5" />
              STATUS: AGENT_PIPELINE_EXECUTED
            </div>
            <p className="text-[#EAF2F5] text-xs pl-4">{approach}</p>
          </div>
        )}

        {activeTab === "result" && (
          <div className="space-y-1.5">
            <div className="text-[#F2A65A] font-bold text-[11px] flex items-center gap-1">
              <ChevronRight className="w-3.5 h-3.5" />
              STATUS: BENCHMARK_SUCCESS_VERIFIED
            </div>
            <p className="text-[#4FD8E8] text-xs pl-4">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}
