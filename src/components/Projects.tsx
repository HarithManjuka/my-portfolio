"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects.data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 relative overflow-hidden bg-[var(--bg-secondary)]"
    >
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-500 font-medium text-sm tracking-widest uppercase mb-3">
            What I&apos;ve built
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            A selection of real-world applications I&apos;ve designed and developed
          </p>
        </motion.div>

        {/* ── Project cards ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="gradient-border-card flex flex-col overflow-hidden group"
            >
              {/* Project image */}
              <div className="relative h-44 overflow-hidden bg-[var(--bg-card)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3">
                  <span className={`glass px-2.5 py-1 rounded-full text-xs font-medium border ${project.tagColor}`}>
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 4).map((t, ti) => (
                    <span key={ti} className="text-xs px-2.5 py-1 rounded-full glass text-[var(--text-muted)] border border-[var(--border)]">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2.5 py-1 rounded-full glass text-[var(--text-muted)] border border-[var(--border)]">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200"
                  >
                    <FaGithub size={14} /> Code
                  </a>

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-violet-500 transition-colors duration-200"
                    >
                      <FaYoutube size={14} /> {project.liveLabel}
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] opacity-40 cursor-not-allowed select-none">
                      <ExternalLink size={14} /> {project.liveLabel}
                    </span>
                  )}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="ml-auto flex items-center gap-1 text-sm text-violet-500 hover:text-violet-400 font-medium transition-colors duration-200 group/link"
                  >
                    Details
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/HarithManjuka"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 px-6 py-3 text-sm"
          >
            <FaGithub size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}