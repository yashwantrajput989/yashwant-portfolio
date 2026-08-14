import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Yashwant Singh | Full-Stack Agentic AI Engineer & AI Lead",
  description:
    "Portfolio of Yashwant Singh — Associate Data & AI Lead. Architecting multi-agent systems (LangGraph, CrewAI), RAG pipelines, and enterprise LLMOps.",
  keywords: [
    "Yashwant Singh",
    "Agentic AI Engineer",
    "LangGraph",
    "CrewAI",
    "Multi-agent Systems",
    "LLMOps",
    "RAG Pipelines",
    "Full-Stack AI Lead",
  ],
  authors: [{ name: "Yashwant Singh" }],
  openGraph: {
    title: "Yashwant Singh | Full-Stack Agentic AI Engineer",
    description:
      "I build the systems that decide what to do next. Multi-agent architectures, RAG pipelines, and LLMOps.",
    type: "website",
    url: "https://yashwantsingh.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="bg-[#0B0F14] text-[#EAF2F5] antialiased selection:bg-[#4FD8E8]/20 selection:text-[#4FD8E8] min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
