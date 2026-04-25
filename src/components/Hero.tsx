"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowDown, Sparkles } from "lucide-react";

const roles = [
  "SE Undergraduate",
  "Full Stack Developer",
  "UI Craftsman",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((p) => (p + 1) % roles.length), 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb-1 absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-violet-600/15 dark:bg-violet-600/20 blur-[80px]" />
        <div className="orb-2 absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,100,100,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(100,100,100,0.5) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">

        {/* ── Left column ── */}
        <div>
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass border border-[var(--border)] px-4 py-2 rounded-full text-sm text-[var(--text-secondary)] mb-6 animate-badge"
          >
            <Sparkles size={13} className="text-violet-400" />
            <span>Available for Internship &amp; Collaborative Projects</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[var(--text-muted)] font-medium mb-2 tracking-wide"
          >
            Hi there, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] mb-4 leading-tight"
          >
            Harith<br />
            <span className="gradient-text">Manjuka</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center gap-2 text-xl md:text-2xl font-medium mb-6 h-9 text-[var(--text-secondary)]"
          >
            <span className="text-[var(--text-muted)]">&gt;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
                className="gradient-text font-display"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-[var(--text-secondary)] leading-relaxed max-w-md mb-8 text-base"
          >
            I build thoughtful, scalable digital experiences that solve real-world problems.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://github.com/HarithManjuka"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 px-6 py-3 text-sm"
            >
              <span className="flex items-center gap-2">
                <FaGithub size={16} /> View GitHub
              </span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline flex items-center gap-2 px-6 py-3 text-sm"
            >
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-5 mt-8"
          >
            {[
              { href: "https://github.com/HarithManjuka", icon: FaGithub, label: "GitHub" },
              { href: "https://www.linkedin.com/in/harith-manjuka-6707792b9", icon: FaLinkedin, label: "LinkedIn" },
              { href: "mailto:harithmanjukaabekon11@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-muted)] hover:text-violet-500 hover:border-violet-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Right column — Profile image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center relative"
        >
          <div className="animate-float relative">
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-violet-500/25 to-cyan-400/15 blur-2xl" />

            {/* Outer decorative ring */}
            <div className="absolute -inset-1.5 rounded-full border border-dashed border-violet-500/20 rotate-0" />

            {/* Profile image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-[var(--border)] shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Harith Manjuka — SE Undergraduate & Full Stack Developer"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
                priority
              />
              {/* Subtle inner overlay for depth */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </div>

            {/* Open to Work badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -10, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl text-xs font-medium text-[var(--text-secondary)] flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-400" /> Open to Work
            </motion.div>

            {/* Experience badge — top right */}
            <motion.div
              initial={{ opacity: 0, x: 10, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.0, duration: 0.4 }}
              className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl text-xs font-medium text-[var(--text-secondary)]"
            >
              3+ Years Coding ✨
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[var(--text-muted)] text-xs tracking-widest uppercase">Scroll</span>
        <div className="animate-scroll text-[var(--text-muted)]">
          <ArrowDown size={16} />
        </div>
      </div>
    </section>
  );
}