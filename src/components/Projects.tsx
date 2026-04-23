"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "HealthCare+ System",
    description: "A full-stack healthcare management platform with doctor availability scheduling, patient appointments, prescription management, and role-based dashboards for admins, doctors, and patients.",
    tech: ["Next.js","TypeScript","Node.js","PostgreSQL","Prisma"],
    github: "https://github.com/HarithManjuka",
    live: "#",
    gradient: "from-violet-500/20 to-purple-900/10",
    tag: "Full Stack",
    tagColor: "text-violet-500 bg-violet-500/10 border-violet-500/20",
  },
  {
    title: "AgriHUB-LK",
    description: "Agricultural logistics platform connecting Sri Lankan farmers with transporters. Features real-time trip management, vehicle fleet tracking, and a modern transporter dashboard.",
    tech: ["Next.js","TypeScript","Tailwind CSS","MongoDB","Express"],
    github: "https://github.com/HarithManjuka",
    live: "#",
    gradient: "from-cyan-500/20 to-blue-900/10",
    tag: "Platform",
    tagColor: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    title: "My Portfolio",
    description: "A modern, animated developer portfolio built with cutting-edge web technologies. Features glassmorphism design, smooth animations with Framer Motion, and a fully responsive layout.",
    tech: ["Next.js 16","React 19","Framer Motion","Tailwind v4"],
    github: "https://github.com/HarithManjuka/my-portfolio",
    live: "#",
    gradient: "from-pink-500/20 to-rose-900/10",
    tag: "Design",
    tagColor: "text-pink-500 bg-pink-500/10 border-pink-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-[var(--bg-secondary)]">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.6 }} viewport={{ once:true }} className="text-center mb-16">
          <p className="text-violet-500 font-medium text-sm tracking-widest uppercase mb-3">What I&apos;ve built</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">A selection of real-world applications I&apos;ve designed and developed</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div key={i} initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.55,delay:i*0.12 }} viewport={{ once:true }} whileHover={{ y:-6 }} className="gradient-border-card flex flex-col overflow-hidden">
              <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage:"radial-gradient(circle at 1px 1px,rgba(100,100,100,0.2) 1px,transparent 0)", backgroundSize:"20px 20px" }} />
                <div className={`glass px-3 py-1.5 rounded-full text-xs font-medium border ${project.tagColor}`}>{project.tag}</div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2">{project.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, ti) => (
                    <span key={ti} className="text-xs px-2.5 py-1 rounded-full glass text-[var(--text-muted)] border border-[var(--border)]">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4 border-t border-[var(--border)]">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                    <FaGithub size={15} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-violet-500 transition-colors">
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.5,delay:0.3 }} viewport={{ once:true }} className="text-center mt-12">
          <a href="https://github.com/HarithManjuka" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2 px-6 py-3 text-sm">
            <FaGithub size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}