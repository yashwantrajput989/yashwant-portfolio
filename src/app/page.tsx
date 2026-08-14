import React from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/hero/HeroSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import AchievementsSection from "@/components/achievements/AchievementsSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

import CursorFollower from "@/components/common/CursorFollower";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-[#EAF2F5] selection:bg-[#4FD8E8]/20 selection:text-[#4FD8E8] relative overflow-hidden">
      {/* Interactive Cursor Ring & Follower */}
      <CursorFollower />
      {/* Navigation Header */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Sub-Agent Capabilities & Stack */}
      <SkillsSection />

      {/* Execution Timeline // Pipeline Runs */}
      <ExperienceSection />

      {/* Case Studies // Agent Runs */}
      <ProjectsSection />

      {/* Credentials & Honors */}
      <AchievementsSection />

      {/* Contact // Function Invocation */}
      <ContactSection />

      {/* System Telemetry Footer */}
      <Footer />
    </main>
  );
}
