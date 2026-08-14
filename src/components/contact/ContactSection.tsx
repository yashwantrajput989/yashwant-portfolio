"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";
import {
  Terminal,
  Mail,
  MapPin,
  Sparkles,
  ExternalLink,
  Send,
  Phone,
  MessageSquare,
  X,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function ContactSection() {
  const [showModal, setShowModal] = useState(false);
  const [visitorData, setVisitorData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Yashwant's Direct Contact Info
  const yashwantPhone = "+91 9876543210"; // Visitors get phone, WhatsApp & call access
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    "Hi Yashwant, I came across your AI Engineer portfolio and would like to connect!"
  )}`;

  const handleRequestContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorData.email) return;

    setIsSubmitting(true);

    const emailServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const emailTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "pRUr0jeE42RTXuz8W";

    try {
      if (emailServiceId && emailTemplateId) {
        await emailjs.send(
          emailServiceId,
          emailTemplateId,
          {
            from_name: visitorData.name || "Portfolio Visitor",
            reply_to: visitorData.email,
            message: `Visitor (${visitorData.email}) unlocked direct contact details (Phone & WhatsApp).`,
          },
          emailPublicKey
        );
      }
    } catch (err) {
      console.log("Email notification logged.");
    }

    setIsSubmitting(false);
    setSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#4FD8E8", "#F2A65A", "#EAF2F5"],
    });
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative border-t border-[#263340]/50"
    >
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center space-x-2 font-mono text-xs text-[#4FD8E8] bg-[#4FD8E8]/10 border border-[#4FD8E8]/30 px-3 py-1 rounded-full mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>DIRECT_ENDPOINTS // GET_IN_TOUCH</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#EAF2F5]">
          Invoke Connection Node
        </h2>
        <p className="mt-3 text-base text-[#8CA0AC] font-body">
          Connect directly for Agentic AI architecture roles, enterprise multi-agent consulting, or production RAG pipeline contracts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Card 1: Direct Mail / Get Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#131A22] border border-[#263340] hover:border-[#4FD8E8]/50 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg"
        >
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#0B0F14] border border-[#263340] flex items-center justify-center text-[#4FD8E8] mb-4 group-hover:border-[#4FD8E8]/50 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div className="font-mono text-[10px] text-[#8CA0AC] uppercase mb-1">EMAIL & PHONE ENDPOINT</div>
            <h3 className="font-display font-bold text-lg text-[#EAF2F5] mb-2">Direct Mail & Phone</h3>
            <p className="font-mono text-xs text-[#8CA0AC] break-all mb-6">
              yashwantrajput989@gmail.com
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="w-full py-2.5 px-4 rounded-lg bg-[#4FD8E8]/10 text-[#4FD8E8] border border-[#4FD8E8]/30 hover:bg-[#4FD8E8]/20 hover:border-[#4FD8E8] font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_12px_rgba(79,216,232,0.15)]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Get Contact Details</span>
          </button>
        </motion.div>

        {/* Card 2: LinkedIn Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#131A22] border border-[#263340] hover:border-[#4FD8E8]/50 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg"
        >
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#0B0F14] border border-[#263340] flex items-center justify-center text-[#4FD8E8] mb-4 group-hover:border-[#4FD8E8]/50 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.49 1.49 0 1 0 0 2.98 1.49 1.49 0 0 0 0-2.98z"/>
              </svg>
            </div>
            <div className="font-mono text-[10px] text-[#8CA0AC] uppercase mb-1">LINKEDIN_ENDPOINT</div>
            <h3 className="font-display font-bold text-lg text-[#EAF2F5] mb-2">LinkedIn Profile</h3>
            <p className="font-mono text-xs text-[#8CA0AC] truncate mb-6">
              linkedin.com/in/yashwant-singh-rajput
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/yashwant-singh-rajput-50a56924b"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-lg bg-[#4FD8E8]/10 text-[#4FD8E8] border border-[#4FD8E8]/30 hover:bg-[#4FD8E8]/20 hover:border-[#4FD8E8] font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2"
          >
            <span>Connect on LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Card 3: GitHub Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#131A22] border border-[#263340] hover:border-[#F2A65A]/50 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg"
        >
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#0B0F14] border border-[#263340] flex items-center justify-center text-[#F2A65A] mb-4 group-hover:border-[#F2A65A]/50 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </div>
            <div className="font-mono text-[10px] text-[#8CA0AC] uppercase mb-1">GITHUB_ENDPOINT</div>
            <h3 className="font-display font-bold text-lg text-[#EAF2F5] mb-2">GitHub Repos</h3>
            <p className="font-mono text-xs text-[#8CA0AC] truncate mb-6">
              github.com/yashwantrajput989
            </p>
          </div>

          <a
            href="https://github.com/yashwantrajput989"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-lg bg-[#F2A65A]/10 text-[#F2A65A] border border-[#F2A65A]/30 hover:bg-[#F2A65A]/20 hover:border-[#F2A65A] font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2"
          >
            <span>View Code Repos</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

      {/* Location & Status Banner */}
      <div className="bg-[#131A22] border border-[#4FD8E8]/30 rounded-xl p-6 cyan-glow flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-lg bg-[#0B0F14] border border-[#263340] flex items-center justify-center text-[#4FD8E8] shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2 text-[#4FD8E8] font-mono text-xs font-bold mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#4FD8E8] animate-ping"></span>
              <span>HYDERABAD, TELANGANA, INDIA</span>
            </div>
            <p className="font-body text-xs text-[#8CA0AC]">
              Open to high-impact Agentic AI Lead roles, enterprise multi-agent architecture consulting, and custom RAG pipeline contracts.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="px-5 py-2.5 rounded-lg bg-[#F2A65A] text-[#0B0F14] font-mono text-xs font-bold hover:bg-[#F2A65A]/90 transition-all shrink-0 shadow-[0_0_15px_rgba(242,166,90,0.4)] cursor-pointer"
        >
          Get Contact Details
        </button>
      </div>

      {/* Get Contact Details Interactive Terminal Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0F14]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#131A22] border border-[#4FD8E8]/40 rounded-xl max-w-lg w-full p-6 shadow-2xl relative font-mono text-xs"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-[#8CA0AC] hover:text-[#4FD8E8] transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-[#4FD8E8] font-bold text-sm mb-4 border-b border-[#263340] pb-3">
                <Lock className="w-4 h-4 text-[#F2A65A]" />
                <span>UNCOVR // DIRECT_CONTACT_ACCESS</span>
              </div>

              {!submitted ? (
                <form onSubmit={handleRequestContact} className="space-y-4">
                  <p className="font-body text-xs text-[#8CA0AC] leading-relaxed">
                    Enter your email to instantly unlock Yashwant&apos;s direct phone number, WhatsApp link, and call access details.
                  </p>

                  <div>
                    <label className="block text-[#4FD8E8] mb-1 font-medium">Your Name (Optional)</label>
                    <input
                      type="text"
                      value={visitorData.name}
                      onChange={(e) => setVisitorData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-[#0B0F14] border border-[#263340] focus:border-[#4FD8E8] rounded-lg px-3.5 py-2.5 text-[#EAF2F5] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#4FD8E8] mb-1 font-medium">Your Email <span className="text-[#F2A65A]">*</span></label>
                    <input
                      type="email"
                      required
                      value={visitorData.email}
                      onChange={(e) => setVisitorData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="sarah@company.com"
                      className="w-full bg-[#0B0F14] border border-[#263340] focus:border-[#4FD8E8] rounded-lg px-3.5 py-2.5 text-[#EAF2F5] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-[#F2A65A] text-[#0B0F14] font-mono font-bold text-xs hover:bg-[#F2A65A]/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(242,166,90,0.4)]"
                  >
                    {isSubmitting ? (
                      <span>UNLOCKING_ACCESS...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Unlock Direct Phone & WhatsApp</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="space-y-5 py-2">
                  <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>ACCESS_GRANTED // CONTACT_UNLOCKED</span>
                  </div>

                  <p className="font-body text-xs text-[#EAF2F5]">
                    Feel free to connect directly through text, phone call, or WhatsApp:
                  </p>

                  <div className="space-y-3 bg-[#0B0F14] border border-[#263340] rounded-lg p-4">
                    {/* Email */}
                    <div className="flex items-center justify-between">
                      <span className="text-[#8CA0AC]">Gmail:</span>
                      <a href="mailto:yashwantrajput989@gmail.com" className="text-[#4FD8E8] hover:underline font-bold">
                        yashwantrajput989@gmail.com
                      </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center justify-between">
                      <span className="text-[#8CA0AC]">WhatsApp / Call:</span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F2A65A] hover:underline font-bold flex items-center gap-1"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full py-2.5 rounded-lg bg-[#131A22] border border-[#263340] text-[#8CA0AC] hover:text-[#EAF2F5] transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
