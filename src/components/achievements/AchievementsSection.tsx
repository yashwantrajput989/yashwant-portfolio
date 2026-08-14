"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star, CheckCircle, ShieldCheck } from "lucide-react";

const HONORS = [
  {
    title: "Winner — Smart India Hackathon 2022",
    issuer: "Government of India (Software Edition)",
    detail: "National-level flagship hackathon winner among 100,000+ applicants nationwide.",
    icon: Trophy,
    highlight: "cyan",
  },
  {
    title: "Winner — SAP Almathon APAC 2026",
    issuer: "SAP APAC Region",
    detail: "First place for building innovative enterprise SAP AI integration solutions.",
    icon: Trophy,
    highlight: "amber",
  },
  {
    title: "Semi-Finalist — SAP Almathon America",
    issuer: "SAP Americas Region",
    detail: "Recognized among top global agentic AI solutions.",
    icon: Medal,
    highlight: "cyan",
  },
  {
    title: "Best Trainer Award",
    issuer: "YRS Training Wala Edtech",
    detail: "Honored for excellence in upskilling 1,000+ enterprise engineers in GenAI.",
    icon: Star,
    highlight: "amber",
  },
  {
    title: "Runner-Up — HackAP Hackathon",
    issuer: "AHUB & Andhra University",
    detail: "2nd position for full-stack AI web solution execution.",
    icon: Medal,
    highlight: "cyan",
  },
  {
    title: "CLAW President",
    issuer: "Computer Science Dept., WISTM",
    detail: "Elected student president leading technical events and coding initiatives.",
    icon: ShieldCheck,
    highlight: "amber",
  },
];

const CERTS = [
  { name: "Gen AI Leader Badge", provider: "Google Skills Boost" },
  { name: "Essentials of AI Badge", provider: "Google Skills Boost" },
  { name: "Full Stack Development Certification", provider: "Skillsuprise & Elite Solutions" },
  { name: "Machine Learning Certification", provider: "Appleton Innovations" },
  { name: "AR/VR Development Certification", provider: "SmartKnower Edtech" },
];

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-[#263340]/50"
    >
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center space-x-2 font-mono text-xs text-[#F2A65A] bg-[#F2A65A]/10 border border-[#F2A65A]/30 px-3 py-1 rounded-full mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>HONORS // CREDENTIALS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#EAF2F5]">
          Achievements & Verified Badges
        </h2>
        <p className="mt-3 text-base text-[#8CA0AC] font-body">
          Recognitions from national competitions, SAP global hackathons, edtech awards, and verified technical badges.
        </p>
      </div>

      {/* Honors Cards Strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {HONORS.map((honor, i) => {
          const Icon = honor.icon;
          const isCyan = honor.highlight === "cyan";

          return (
            <motion.div
              key={honor.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#131A22] border border-[#263340] hover:border-[#4FD8E8]/50 rounded-xl p-5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg bg-[#0B0F14] border border-[#263340] flex items-center justify-center ${
                      isCyan ? "text-[#4FD8E8]" : "text-[#F2A65A]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="font-mono text-[10px] text-[#8CA0AC] uppercase">
                    HONOR // 0{i + 1}
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-[#EAF2F5] group-hover:text-[#4FD8E8] transition-colors mb-1">
                  {honor.title}
                </h3>
                <div className="font-mono text-xs text-[#F2A65A] mb-2 font-medium">
                  {honor.issuer}
                </div>
                <p className="font-body text-xs text-[#8CA0AC] leading-relaxed">
                  {honor.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quiet Certifications List */}
      <div className="bg-[#131A22]/60 border border-[#263340] rounded-xl p-6">
        <h4 className="font-mono text-xs text-[#4FD8E8] uppercase tracking-wider mb-4 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-[#4FD8E8]" />
          <span>VERIFIED TECHNICAL CERTIFICATIONS</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {CERTS.map((cert) => (
            <div
              key={cert.name}
              className="flex items-start space-x-2.5 font-mono text-xs text-[#EAF2F5]"
            >
              <span className="text-[#4FD8E8] font-bold">✓</span>
              <div>
                <div className="text-[#EAF2F5] font-medium">{cert.name}</div>
                <div className="text-[11px] text-[#8CA0AC]">{cert.provider}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
