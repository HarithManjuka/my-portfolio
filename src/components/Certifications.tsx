"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

const certifications = [
  {
    title: "AI/ML Engineer - Stage 1",
    issuer: "Faculty of Computing, SLIIT",
    image: "/certificates/ai-ml-stage-1.svg",
  },
  {
    title: "AI/ML Engineer - Stage 2",
    issuer: "Faculty of Computing, SLIIT",
    image: "/certificates/ai-ml-stage-2.svg",
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa (UoM)",
    image: "/certificates/python-for-beginners.svg",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden bg-[var(--bg-secondary)]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-4 w-72 h-72 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Verifications badge */}
          <div className="inline-flex items-center gap-2 glass border border-[var(--border)] px-4 py-2 rounded-full text-sm text-[var(--text-secondary)] mb-5">
            <ShieldCheck size={14} className="text-violet-500" />
            <span className="font-medium tracking-wide">Verifications</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Certifications <span className="gradient-text">Earned</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Selected certifications that validate my learning journey and technical growth.
          </p>
        </motion.div>

        {/* ── Certificate cards ── */}
        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-[var(--bg-primary)]">
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/80">Preview only</p>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <p className="text-violet-500 text-xs uppercase tracking-[0.24em] font-medium">Certificate</p>
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  {cert.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {cert.issuer}
                </p>
                <div className="rounded-2xl bg-[var(--bg-primary)] p-3 text-[var(--text-muted)] text-xs border border-[var(--border)]">
                  Images are rendered as portfolio previews. Any displayed certificate is for verification and not a downloadable asset.
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}