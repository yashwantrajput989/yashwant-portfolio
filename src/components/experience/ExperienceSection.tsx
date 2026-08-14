"use client";

import React from "react";
import PipelineCard, { RoleData } from "./PipelineCard";
import { Layers } from "lucide-react";

const ROLES: RoleData[] = [
  {
    id: "mygo",
    role: "Associate Data & AI Lead",
    company: "Mygo Consulting",
    dates: "Jan 2026 – Present",
    location: "Hyderabad, India",
    status: "RUNNING",
    leadMetric: "+40% SYSTEM RELIABILITY | 95%+ GROUNDING ACCURACY",
    bullets: [
      "Architected high-throughput multi-agent systems and stateful workflows using CrewAI & LangGraph, standardizing data orchestration patterns.",
      "Engineered production RAG pipelines with hybrid retrieval (ChromaDB/FAISS), utilizing RAGAS & LLM-as-Judge to eliminate hallucinations.",
      "Optimized system latency and token cost efficiency via LangSmith distributed tracing and FastAPI microservice integration.",
      "Built cross-platform React Native + Expo Go companion app (PWA enabled) and Microsoft Teams agent integrations via Copilot Studio.",
    ],
    techUsed: ["LangGraph", "CrewAI", "FastAPI", "ChromaDB", "RAGAS", "React Native", "Expo Go", "Microsoft Copilot Studio", "LangSmith"],
  },
  {
    id: "yrs",
    role: "Full Stack Gen AI Trainer",
    company: "YRS Training Wala Pvt. Ltd.",
    dates: "Jun 2024 – Dec 2025",
    location: "Visakhapatnam, India",
    status: "COMPLETE",
    leadMetric: "1,000+ PROFESSIONALS UPSKILLED IN GENAI",
    bullets: [
      "Upskilled over 1,000 engineering professionals on GenAI architecture, RAG systems, and full-stack integration with Python & JS.",
      "Delivered hands-on enterprise training modules on Prompt Engineering, LangChain, OpenAI API integration, and production React/Node deployment.",
    ],
    techUsed: ["Python", "LangChain", "OpenAI API", "React.js", "Node.js", "RAG Systems", "Prompt Engineering"],
  },
  {
    id: "tara",
    role: "Full Stack AI Developer",
    company: "Tara Retail AI",
    dates: "Apr 2024 – Sep 2024",
    location: "Bengaluru, India",
    status: "COMPLETE",
    leadMetric: "30% REDUCTION IN INVENTORY TRACKING TIME",
    bullets: [
      "Architected an enterprise AI solution for automated inventory management with real-time KPI visualization.",
      "Designed the data-layer strategy using Supabase & Firebase, building complete React.js infrastructure for conversational inventory UI.",
    ],
    techUsed: ["React.js", "Supabase", "Firebase", "Python", "Conversational UI", "Real-Time Analytics"],
  },
  {
    id: "awe",
    role: "Full Stack Developer",
    company: "AWE Tecks Pvt. Ltd.",
    dates: "Oct 2023 – Mar 2024",
    location: "Visakhapatnam, India",
    status: "COMPLETE",
    leadMetric: "25% FASTER FRONTEND PAGE LOAD SPEEDS",
    bullets: [
      "Scaled full-stack applications across PostgreSQL, MySQL, and Node.js with Git-based version control.",
      "Optimized component rendering and streamlined database queries to boost response times and client UX.",
    ],
    techUsed: ["PostgreSQL", "MySQL", "Node.js", "React.js", "REST APIs", "Git"],
  },
  {
    id: "metasynk",
    role: "Full Stack Developer Intern",
    company: "Metasynk Private Limited",
    dates: "Apr 2023 – Sep 2023",
    location: "Visakhapatnam, India",
    status: "COMPLETE",
    leadMetric: "100% ON-TIME DELIVERY ACROSS 5+ CLIENT PROJECTS",
    bullets: [
      "Developed multiple full-stack applications using React, HTML/CSS, JavaScript, and Python.",
      "Managed client requirement scoping and delivered end-to-end web applications with 100% on-time completion rate.",
    ],
    techUsed: ["React", "Python", "JavaScript", "HTML/CSS", "Client Delivery"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative border-t border-[#263340]/50"
    >
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center space-x-2 font-mono text-xs text-[#F2A65A] bg-[#F2A65A]/10 border border-[#F2A65A]/30 px-3 py-1 rounded-full mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>EXECUTION TIMELINE // PIPELINE_RUNS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#EAF2F5]">
          Pipeline Runs & Leadership
        </h2>
        <p className="mt-3 text-base text-[#8CA0AC] font-body">
          Chronological execution log detailing system deployments, lead metrics, and architectural outcomes across enterprise roles.
        </p>
      </div>

      {/* Timeline List */}
      <div className="space-y-8 relative">
        {/* Timeline connector line for desktop */}
        <div className="hidden md:block absolute left-[15px] top-6 bottom-6 w-0.5 bg-[#263340] z-0"></div>

        {ROLES.map((role, i) => (
          <PipelineCard key={role.id} data={role} index={i} />
        ))}
      </div>
    </section>
  );
}
