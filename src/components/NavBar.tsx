"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Terminal, Layers, FolderGit2, Award } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "system.init()", icon: Terminal },
  { id: "skills", label: "capabilities", icon: Cpu },
  { id: "experience", label: "pipeline_runs", icon: Layers },
  { id: "projects", label: "agent_runs", icon: FolderGit2 },
  { id: "achievements", label: "credentials", icon: Award },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F14]/85 backdrop-blur-md border-b border-[#263340] py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand/Monogram */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center space-x-3 group text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-md bg-[#131A22] border border-[#4FD8E8]/40 flex items-center justify-center font-mono font-bold text-[#4FD8E8] group-hover:border-[#4FD8E8] group-hover:shadow-[0_0_12px_rgba(79,216,232,0.4)] transition-all">
            YS
          </div>
          <div>
            <div className="font-display font-bold text-sm tracking-wide text-[#EAF2F5] group-hover:text-[#4FD8E8] transition-colors">
              Yashwant Singh
            </div>
            <div className="font-mono text-[10px] text-[#8CA0AC] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4FD8E8] animate-pulse"></span>
              ORCHESTRATOR // ONLINE
            </div>
          </div>
        </button>

        {/* Nav Links */}
        <nav className="flex items-center space-x-1 bg-[#131A22]/90 border border-[#263340] rounded-full px-3 py-1.5 backdrop-blur-md overflow-x-auto max-w-[55vw] sm:max-w-none scrollbar-none">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-full font-mono text-xs transition-all flex items-center space-x-1.5 shrink-0 whitespace-nowrap ${
                  isActive
                    ? "bg-[#4FD8E8]/10 text-[#4FD8E8] border border-[#4FD8E8]/40 font-medium shadow-[0_0_10px_rgba(79,216,232,0.2)]"
                    : "text-[#8CA0AC] hover:text-[#EAF2F5] hover:bg-[#263340]/40 border border-transparent"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#4FD8E8]" : "text-[#8CA0AC]"}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
