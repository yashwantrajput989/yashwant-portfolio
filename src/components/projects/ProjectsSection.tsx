"use client";

import React from "react";
import ProjectCard, { ProjectData } from "./ProjectCard";
import { FolderGit2 } from "lucide-react";

const PROJECTS: ProjectData[] = [
  {
    id: "yoda",
    title: "YODA-AI Suite for SAP",
    subtitle: "Multi-Agent Orchestration & Natural Language ABAP Spec Pipeline",
    leadMetric: "60% Faster Spec Generation",
    techStack: ["LangGraph", "FastAPI", "GPT-4o", "ChromaDB", "Next.js", "MCP", "Copilot Studio"],
    problem: "SAP specification generation was manual, repetitive, and error-prone, creating major engineering bottlenecks during enterprise S/4HANA migration cycles.",
    approach: "Architected an 8-agent LangGraph supervisor framework for automated spec synthesis. Integrated real-time ABAP/OData schema ingestion, JWT-secured FastAPI REST endpoints, and exposed the agents via Microsoft Copilot Studio inside Teams.",
    result: "Reduced spec generation latency by 60%, standardized ABAP documentation across enterprise teams, and enabled zero-latency natural-language querying for SAP workflows.",
    githubUrl: "https://github.com/yashwantrajput989",
  },
  {
    id: "myforms",
    title: "MyForms AI",
    subtitle: "Enterprise RAG Document Intelligence & Vision Agent Router",
    leadMetric: "95% Extraction Accuracy | -45% Latency",
    techStack: ["LangChain", "FAISS", "FastAPI", "AWS Bedrock", "React.js", "PostgreSQL", "MQTT"],
    problem: "Fragmented data extraction from unstructured PDFs and legacy on-premise documents caused operational delays and human extraction errors.",
    approach: "Engineered a production multi-agent LLM router using AWS Bedrock and Vision Agents for autonomous OCR extraction. Built a secure MQTT-over-TLS pipeline bridge for on-premise document ingestion.",
    result: "Achieved 95% data extraction precision and cut document processing latency by 45%, integrating real-time document feeds into CRM workflows.",
    githubUrl: "https://github.com/yashwantrajput989",
  },
  {
    id: "docsync",
    title: "DocSync AI",
    subtitle: "Agentic Document Ingestion & Self-Healing Pipeline",
    leadMetric: "99.9% Pipeline Reliability",
    techStack: ["Google Gemini", "FastAPI", "React.js", "SAP S/4HANA", "Python", "HITL Workbench"],
    problem: "Mission-critical SAP document ingestion pipelines suffered frequent API timeouts and parsing failures during high-throughput enterprise batch runs.",
    approach: "Architected a self-healing agentic ingestion pipeline with Gemini function calling, stateful error recovery, multi-LLM provider failover, and an interactive Human-in-the-Loop (HITL) validation UI.",
    result: "Delivered 99.9% uptime reliability across millions of ingested records with zero data loss and automated audit traceability.",
    githubUrl: "https://github.com/yashwantrajput989",
  },
  {
    id: "eval-dashboard",
    title: "LLM Eval Dashboard",
    subtitle: "RAG Observability & Automated Hallucination Monitoring",
    leadMetric: "30% Reduction in Hallucinations",
    techStack: ["RAGAS", "DeepEval", "LangSmith", "Scikit-Learn", "XGBoost", "Firebase"],
    problem: "Lack of real-time visibility into RAG context retrieval quality caused silent failures, context drift, and hallucinated answers in production LLMs.",
    approach: "Created a full LLMOps evaluation dashboard tracking RAGAS and DeepEval metrics (Faithfulness, Context Precision, Relevancy) with real-time alerting and LangSmith distributed trace visualization.",
    result: "Cut hallucination rates by 30% through proactive metric tracking and automated continuous evaluation feedback loops.",
    githubUrl: "https://github.com/yashwantrajput989",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-[#263340]/50"
    >
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center space-x-2 font-mono text-xs text-[#4FD8E8] bg-[#4FD8E8]/10 border border-[#4FD8E8]/30 px-3 py-1 rounded-full mb-4">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>CASE STUDIES // AGENT_RUNS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#EAF2F5]">
          Flagship Agent Runs & Case Studies
        </h2>
        <p className="mt-3 text-base text-[#8CA0AC] font-body">
          Detailed system breakdowns structured around Problem → Approach → Result with lead metric benchmarks.
        </p>
      </div>

      {/* Grid of 4 Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
