"use client";

import { Project } from "@/data/projects.data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Users, Clock, Briefcase, Zap, Download } from "lucide-react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import ProjectNavbar from "@/components/ProjectNavbar";
import Footer from "@/components/Footer";

type Props = {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
};

export default function ProjectDetail({ project, prevProject, nextProject }: Props) {
  const isPDF = project.liveLabel === "Download PDF";

  return (
    <>
      <ProjectNavbar />
      <main className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-16">

        {/* ── Hero banner ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-6xl mx-auto px-6 py-12">

            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm transition-colors duration-200 mb-10 group"
              >
                <ArrowLeft size={15} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
                Back to Projects
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* Left — text */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-center gap-3 mb-5"
                >
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${project.tagColor}`}>
                    {project.tag}
                  </span>
                  <span className="text-[var(--text-muted)] text-sm">· {project.duration}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 }}
                  className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 leading-tight"
                >
                  {project.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8"
                >
                  {project.tagline}
                </motion.p>

                {/* Meta row */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="flex flex-wrap gap-6 mb-8"
                >
                  {[
                    { icon: Briefcase, label: "Role", value: project.role },
                    { icon: Zap, label: "My Contribution", value: project.contribution },
                    { icon: Clock, label: "Duration", value: project.duration },
                    { icon: Users, label: "Team", value: project.team },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                        <Icon size={14} className="text-violet-500" />
                      </div>
                      <div>
                        <p className="text-[var(--text-muted)] text-xs">{label}</p>
                        <p className="text-[var(--text-primary)] text-sm font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-3"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 px-5 py-2.5 text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <FaGithub size={15} /> View Code
                    </span>
                  </a>

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={isPDF ? true : undefined}
                      className="btn-outline flex items-center gap-2 px-5 py-2.5 text-sm"
                    >
                      {isPDF ? <Download size={15} /> : <FaYoutube size={15} />}
                      {project.liveLabel}
                    </a>
                  ) : (
                    <span className="btn-outline flex items-center gap-2 px-5 py-2.5 text-sm opacity-40 cursor-not-allowed">
                      <ExternalLink size={15} /> {project.liveLabel}
                    </span>
                  )}
                </motion.div>
              </div>

              {/* Right — project image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-violet-500/15 to-cyan-400/10 blur-xl" />
                <div className="relative gradient-border-card overflow-hidden rounded-2xl aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Body content ── */}
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Main content — 2 cols */}
            <div className="lg:col-span-2 space-y-10">

              {/* About the project */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-cyan-400" />
                  <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                    About the Project
                  </h2>
                </div>
                <div className="space-y-4">
                  {project.longDescription.map((para, i) => (
                    <p key={i} className="text-[var(--text-secondary)] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Key highlights */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-cyan-400" />
                  <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                    Key Features
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.highlights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      viewport={{ once: true }}
                      className="gradient-border-card p-5 flex gap-4 items-start"
                    >
                      <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Zap size={15} className="text-violet-500" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-[var(--text-primary)] text-sm mb-1">
                          {h.title}
                        </h3>
                        <p className="text-[var(--text-muted)] text-xs leading-relaxed">{h.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar — 1 col */}
            <div className="space-y-6">

              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="gradient-border-card p-6"
              >
                <h3 className="font-display font-semibold text-[var(--text-primary)] text-sm mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="skill-pill text-xs">{t}</span>
                  ))}
                </div>
              </motion.div>

              {/* Quick links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="gradient-border-card p-6"
              >
                <h3 className="font-display font-semibold text-[var(--text-primary)] text-sm mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-500" />
                  Quick Links
                </h3>
                <div className="space-y-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--bg-card)] border border-transparent hover:border-[var(--border)] transition-all duration-200 group"
                  >
                    <FaGithub size={16} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                    <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                      GitHub Repository
                    </span>
                    <ExternalLink size={11} className="ml-auto text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={isPDF ? true : undefined}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--bg-card)] border border-transparent hover:border-[var(--border)] transition-all duration-200 group"
                    >
                      {isPDF ? (
                        <Download size={16} className="text-[var(--text-muted)] group-hover:text-violet-500 transition-colors" />
                      ) : (
                        <FaYoutube size={16} className="text-[var(--text-muted)] group-hover:text-red-500 transition-colors" />
                      )}
                      <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                        {project.liveLabel}
                      </span>
                      <ExternalLink size={11} className="ml-auto text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Project info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
                className="gradient-border-card p-6"
              >
                <h3 className="font-display font-semibold text-[var(--text-primary)] text-sm mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-500" />
                  Project Info
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Role", value: project.role },
                    { label: "My Contribution", value: project.contribution },
                    { label: "Duration", value: project.duration },
                    { label: "Team Size", value: project.team },
                    { label: "Category", value: project.tag },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center text-sm">
                      <span className="text-[var(--text-muted)]">{label}</span>
                      <span className="text-[var(--text-primary)] font-medium text-right max-w-[55%]">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Prev / Next navigation ── */}
        {(prevProject || nextProject) && (
          <section className="max-w-6xl mx-auto px-6 mt-20">
            <div className="border-t border-[var(--border)] pt-10">
              <p className="text-[var(--text-muted)] text-xs tracking-widest uppercase mb-6 text-center">
                More Projects
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {prevProject ? (
                  <Link href={`/projects/${prevProject.slug}`} className="gradient-border-card p-5 flex items-center gap-4 group hover:border-violet-500/30 transition-all duration-200">
                    <ArrowLeft size={16} className="text-[var(--text-muted)] group-hover:text-violet-500 transition-colors shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[var(--text-muted)] text-xs mb-0.5">Previous</p>
                      <p className="font-display font-semibold text-[var(--text-primary)] text-sm truncate group-hover:text-violet-500 transition-colors">
                        {prevProject.title}
                      </p>
                    </div>
                  </Link>
                ) : <div />}

                {nextProject ? (
                  <Link href={`/projects/${nextProject.slug}`} className="gradient-border-card p-5 flex items-center justify-end gap-4 group hover:border-violet-500/30 transition-all duration-200 text-right">
                    <div className="min-w-0">
                      <p className="text-[var(--text-muted)] text-xs mb-0.5">Next</p>
                      <p className="font-display font-semibold text-[var(--text-primary)] text-sm truncate group-hover:text-violet-500 transition-colors">
                        {nextProject.title}
                      </p>
                    </div>
                    <ArrowLeft size={16} className="text-[var(--text-muted)] group-hover:text-violet-500 transition-colors shrink-0 rotate-180" />
                  </Link>
                ) : <div />}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}