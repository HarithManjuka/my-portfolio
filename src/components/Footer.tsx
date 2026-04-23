"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Heart } from "lucide-react";

const links = [
  { label:"About", href:"#about" },
  { label:"Skills", href:"#skills" },
  { label:"Projects", href:"#projects" },
  { label:"Contact", href:"#contact" },
];

const socials = [
  { icon:FaGithub, href:"https://github.com/HarithManjuka", label:"GitHub" },
  { icon:FaLinkedin, href:"https://www.linkedin.com/in/harith-manjuka-6707792b9", label:"LinkedIn" },
  { icon:Mail, href:"mailto:harithmanjukaabekon11@gmail.com", label:"Email" },
];

export default function Footer() {
  const scrollTo = (href: string) => document.getElementById(href.replace("#",""))?.scrollIntoView({ behavior:"smooth" });

  return (
    <footer className="relative border-t border-[var(--border)] py-12 px-6 overflow-hidden bg-[var(--bg-secondary)]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center font-display font-bold text-white text-xs">HM</div>
              <span className="font-display font-semibold text-[var(--text-primary)]">Harith<span className="gradient-text">.</span></span>
            </div>
            <p className="text-[var(--text-muted)] text-xs">Undergraduate Software Engineer · Sri Lanka</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm transition-colors duration-200">
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex gap-4">
            {socials.map(({ icon:Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-[var(--text-muted)] hover:text-violet-500 transition-colors duration-200 hover:-translate-y-1 transform">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Harith Manjuka. All rights reserved.</p>
          <p className="flex items-center gap-1">Built with <Heart size={11} className="text-violet-500 mx-0.5" fill="currentColor" /> using Next.js &amp; Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
