"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Smartphone, Download, Layers, Briefcase, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    name: "Frontend",
    tech: "Next.js, React, Tailwind CSS",
    color: "from-violet-500/20 to-violet-600/5",
    iconColor: "text-violet-500",
  },
  {
    icon: Database,
    name: "Backend",
    tech: "Node.js, Express, Java, PHP",
    color: "from-cyan-500/20 to-cyan-600/5",
    iconColor: "text-cyan-500",
  },
  {
    icon: Globe,
    name: "DevOps",
    tech: "Docker, Kubernetes, Git, CI/CD",
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-500",
  },
  {
    icon: Smartphone,
    name: "Mobile",
    tech: "Kotlin, Java",
    color: "from-pink-500/20 to-pink-600/5",
    iconColor: "text-pink-500",
  },
];

const stats = [
  { icon: Layers,   value: "3+",  label: "Years Coding",    color: "text-violet-500" },
  { icon: Briefcase, value: "10+", label: "Projects Built",  color: "text-cyan-500"   },
  { icon: Users,    value: "5+",  label: "Technologies",    color: "text-pink-500"   },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 relative overflow-hidden bg-[var(--bg-secondary)]"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-500 font-medium text-sm tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Software Engineering undergraduate passionate about building real-world solutions,
            learning continuously, and growing through practical experience.
          </p>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="gradient-border-card p-6 text-center">
              <stat.icon className={`mx-auto mb-2 ${stat.color}`} size={22} />
              <p className={`font-display text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-[var(--text-muted)] text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Main content ── */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — journey text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Section label */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-cyan-400" />
              <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                My Journey
              </h3>
            </div>

            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                I&apos;m a third-year{" "}
                <span className="text-violet-500 font-medium">
                  Software Engineering undergraduate at SLIIT, Sri Lanka
                </span>
                , passionate about building full-stack applications that solve real-world problems.
              </p>
              <p>
                Currently expanding my expertise in{" "}
                <span className="text-cyan-500 font-medium">cloud computing</span> and{" "}
                <span className="text-cyan-500 font-medium">system design</span>{" "}while exploring
                AI-assisted development, scalable architectures, and modern full-stack technologies.
                Alongside this, I&apos;m gaining hands-on experience with{" "}
                <span className="text-blue-400 font-medium">DevOps practices</span> and security to
                build production-ready applications.
              </p>
              <p>
                I believe great software is fast, accessible, secure, and a joy to use.
              </p>
              <p className="text-[var(--text-muted)] text-sm">
                When I&apos;m not coding, you&apos;ll find me exploring emerging technologies and
                reading technical blogs.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="/Harith_Manjuka_Resume_2026.pdf"
                download
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm"
              >
                <span className="flex items-center gap-2">
                  <Download size={16} /> Download Resume
                </span>
              </a>
              <a
                href="/Harith_Manjuka_Academic_status.pdf"
                download
                className="btn-outline inline-flex items-center gap-2 px-6 py-3 text-sm"
              >
                <span className="flex items-center gap-2">
                  <Download size={16} /> Academic Status
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right — skill cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {/* Section label */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-cyan-400" />
              <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                What I Work With
              </h3>
            </div>

            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="gradient-border-card p-4 flex items-center gap-4"
              >
                {/* Icon badge */}
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shrink-0`}
                >
                  <skill.icon className={skill.iconColor} size={20} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-semibold text-[var(--text-primary)] text-sm mb-0.5">
                    {skill.name}
                  </h4>
                  <p className="text-[var(--text-muted)] text-xs leading-relaxed truncate">
                    {skill.tech}
                  </p>
                </div>

                {/* Subtle arrow */}
                <span className="text-[var(--text-muted)] text-xs opacity-40 shrink-0">→</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}