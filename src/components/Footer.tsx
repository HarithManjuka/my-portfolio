"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/HarithManjuka", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/harith-manjuka-6707792b9", label: "LinkedIn" },
  { icon: Mail, href: "mailto:harithmanjukaabekon11@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollTo = (href: string) =>
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-[var(--border)] pt-14 pb-8 px-6 overflow-hidden bg-[var(--bg-secondary)]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      {/* Subtle background orb */}
      <div className="absolute bottom-0 right-0 w-72 h-48 bg-violet-600/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Main footer body */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10">

          {/* Brand + bio */}
          <div className="flex flex-col gap-3 max-w-xs">
            {/* Wordmark — matches Navbar style */}
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-0 w-fit group"
            >
              <span className="font-display font-bold text-[var(--text-primary)] text-xl tracking-tight">
                Harith
              </span>
              <span
                className="font-display font-bold text-xl tracking-tight gradient-text"
                style={{ marginLeft: "0.25rem" }}
              >
                Manjuka
              </span>
            </button>

            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Undergraduate Software Engineer ·{" "}
              <span className="text-[var(--text-secondary)]">
                SLIIT, Sri Lanka
              </span>
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-muted)] hover:text-violet-500 hover:border-violet-500/40 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Divider — vertical on desktop */}
          <div className="hidden md:block w-px h-24 bg-[var(--border)]" />

          {/* Nav links */}
          <div className="flex flex-col gap-2">
            <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest uppercase mb-1">
              Navigation
            </p>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Divider — vertical on desktop */}
          <div className="hidden md:block w-px h-24 bg-[var(--border)]" />

          {/* CTA */}
          <div className="flex flex-col gap-3">
            <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest uppercase mb-1">
              Open To Work
            </p>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-[200px]">
              Undergraduate Software Engineering student open to internships &amp; collaborative projects.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="btn-primary inline-flex items-center justify-center px-5 py-2.5 text-sm w-fit"
            >
              <span>Get In Touch</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Harith Manjuka. All rights reserved.</p>
          <p className="text-[var(--text-muted)]/60">
            Designed &amp; developed by Harith Manjuka
          </p>
        </div>

      </div>
    </footer>
  );
}