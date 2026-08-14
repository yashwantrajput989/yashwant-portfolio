"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillCluster, { SkillClusterData } from "./SkillCluster";
import {
  Code2,
  Brain,
  Network,
  Database,
  Server,
  Layout,
  Cloud,
  Terminal,
} from "lucide-react";

const SKILL_CLUSTERS: SkillClusterData[] = [
  {
    id: "genai",
    name: "GenAI & LLM Engines",
    category: "AI Core",
    icon: Brain,
    color: "cyan",
    description: "Production LLM fine-tuning, prompt engineering, structured outputs, and token management across frontier models.",
    skills: [
      "GPT-4o",
      "Claude 3.5 Sonnet",
      "Gemini 3.6 Flash",
      "Gemini 3.1 Pro",
      "Llama 3",
      "Gemma 2",
      "Hugging Face",
      "Fine-Tuning",
      "Prompt Engineering",
      "Azure OpenAI",
      "Structured Outputs",
    ],
  },
  {
    id: "frameworks",
    name: "Agent Orchestration",
    category: "Frameworks",
    icon: Network,
    color: "amber",
    description: "Stateful agent graphs, supervisor-subagent architectures, loop engineering, and tool calling via MCP.",
    skills: [
      "LangGraph",
      "CrewAI",
      "LangChain",
      "AutoGen",
      "Copilot Studio",
      "AWS Bedrock",
      "Loop Engineering",
      "n8n Automations",
      "Opal",
      "Pomelli",
      "MCP (Model Context Protocol)",
    ],
  },
  {
    id: "rag",
    name: "RAG, Vector & Eval",
    category: "Retrieval & Metrics",
    icon: Database,
    color: "cyan",
    description: "Hybrid vector search, reranking strategies, chunking pipelines, and automated hallucination evaluation.",
    skills: [
      "ChromaDB",
      "FAISS",
      "Pinecone",
      "Weaviate",
      "Qdrant",
      "pgvector",
      "RAGAS",
      "LLM-as-Judge",
      "DeepEval",
      "Hybrid Retrieval",
    ],
  },
  {
    id: "backend",
    name: "Async Backend Services",
    category: "Infrastructure",
    icon: Server,
    color: "amber",
    description: "High-concurrency microservices, GraphQL & REST APIs, real-time WebSockets, and OAuth2 security bridges.",
    skills: [
      "FastAPI",
      "Python Asyncio",
      "Node.js",
      "GraphQL",
      "REST APIs",
      "SAP BTP APIs",
      "OAuth2",
      "Supabase",
      "Firebase",
    ],
  },
  {
    id: "languages",
    name: "Core Languages",
    category: "Syntax",
    icon: Code2,
    color: "cyan",
    description: "Strongly typed software engineering across asynchronous Python, TypeScript, and high-performance SQL.",
    skills: ["Python", "TypeScript", "JavaScript (ES2024)", "Node.js", "SQL", "HTML5/CSS3"],
  },
  {
    id: "frontend",
    name: "Frontend & Mobile UIs",
    category: "Interface",
    icon: Layout,
    color: "amber",
    description: "Interactive AI dashboards, conversational interfaces, cross-platform mobile companion apps, and PWAs.",
    skills: ["React.js", "Next.js 14", "React Native", "Expo Go", "Tailwind CSS", "PWA"],
  },
  {
    id: "cloud",
    name: "Cloud, MLOps & Infra",
    category: "Operations",
    icon: Cloud,
    color: "cyan",
    description: "LLMOps tracing via LangSmith, containerized microservices, serverless lambdas, and resilient CI/CD pipelines.",
    skills: [
      "AWS (Bedrock, Lambda, S3)",
      "Docker",
      "Kubernetes",
      "LangSmith Tracing",
      "LLMOps",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "CI/CD",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-[#263340]/50"
    >
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center space-x-2 font-mono text-xs text-[#4FD8E8] bg-[#4FD8E8]/10 border border-[#4FD8E8]/30 px-3 py-1 rounded-full mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>CAPABILITIES // CONSTELLATION</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#EAF2F5]">
          Sub-Agent Capabilities & Stack
        </h2>
        <p className="mt-3 text-base text-[#8CA0AC] font-body">
          Every skill acts as a specialized tool module in the agent cluster. Hover or explore any cluster to inspect its technical specification.
        </p>
      </div>

      {/* Grid of 7 Skill Clusters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CLUSTERS.map((cluster, i) => (
          <SkillCluster key={cluster.id} cluster={cluster} index={i} />
        ))}
      </div>
    </section>
  );
}
