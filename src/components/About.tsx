"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Smartphone, Download, Layers, Briefcase, Users } from "lucide-react";

const skills = [
  { icon: Code2, name: "Frontend", tech: "React, Next.js, Tailwind CSS", color: "from-violet-500/20 to-violet-600/5", iconColor: "text-violet-500" },
  { icon: Database, name: "Backend", tech: "Node.js, Express, PostgreSQL", color: "from-cyan-500/20 to-cyan-600/5", iconColor: "text-cyan-500" },
  { icon: Globe, name: "DevOps", tech: "Docker, Git, CI/CD, Linux", color: "from-blue-500/20 to-blue-600/5", iconColor: "text-blue-500" },
  { icon: Smartphone, name: "Mobile", tech: "React Native, Expo", color: "from-pink-500/20 to-pink-600/5", iconColor: "text-pink-500" },
];

const stats = [
  { icon: Layers, value: "3+", label: "Years Coding", color: "text-violet-500" },
  { icon: Briefcase, value: "10+", label: "Projects Built", color: "text-cyan-500" },
  { icon: Users, value: "5+", label: "Technologies", color: "text-pink-500" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-[var(--bg-secondary)]">
      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.6 }} viewport={{ once:true }} className="text-center mb-16">
          <p className="text-violet-500 font-medium text-sm tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">About <span className="gradient-text">Me</span></h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">Passionate software engineer creating impactful digital solutions</p>
        </motion.div>

        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.6,delay:0.1 }} viewport={{ once:true }} className="grid grid-cols-3 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="gradient-border-card p-6 text-center">
              <stat.icon className={`mx-auto mb-2 ${stat.color}`} size={22} />
              <p className={`font-display text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-[var(--text-muted)] text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} transition={{ duration:0.6,delay:0.2 }} viewport={{ once:true }}>
            <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-4">My Journey</h3>
            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
              I&apos;m a third-year <span className="text-violet-500 font-medium">Software Engineering undergraduate</span> with a deep passion for building full-stack applications that solve real-world problems.
            </p>
            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
              Currently expanding my expertise in <span className="text-cyan-500 font-medium">cloud computing</span> and <span className="text-cyan-500 font-medium">system design</span>. I believe great software is fast, accessible, and a joy to use.
            </p>
            <p className="text-[var(--text-muted)] mb-8 leading-relaxed text-sm">
              When I&apos;m not coding, you&apos;ll find me reading technical blogs, contributing to open source, or exploring emerging technologies.
            </p>
            <a href="/resume.pdf" download className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
              <span className="flex items-center gap-2"><Download size={16} /> Download Resume</span>
            </a>
          </motion.div>

          <motion.div initial={{ opacity:0,x:30 }} whileInView={{ opacity:1,x:0 }} transition={{ duration:0.6,delay:0.3 }} viewport={{ once:true }} className="grid grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <motion.div key={i} whileHover={{ y:-4,scale:1.02 }} transition={{ duration:0.2 }} className="gradient-border-card p-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3`}>
                  <skill.icon className={skill.iconColor} size={20} />
                </div>
                <h4 className="font-display font-semibold text-[var(--text-primary)] mb-1">{skill.name}</h4>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed">{skill.tech}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}