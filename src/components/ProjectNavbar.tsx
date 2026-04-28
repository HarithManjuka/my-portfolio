"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, ArrowLeft } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";
import Link from "next/link";

const navLinks = [
  { label: "Home",           href: "/"                  },
  { label: "About",          href: "/#about"            },
  { label: "Skills",         href: "/#skills"           },
  { label: "Projects",       href: "/#projects"         },
  { label: "Certifications", href: "/#certifications"   },
  { label: "Contact",        href: "/#contact"          },
];

export default function ProjectNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-secondary)]/80 backdrop-blur-xl border-b border-[var(--border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Back button + wordmark */}
        <div className="flex items-center gap-4">
          <Link
            href="/#projects"
            className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm transition-colors duration-200 group"
          >
            <ArrowLeft size={15} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            <span className="hidden sm:inline">Back</span>
          </Link>

          <div className="w-px h-4 bg-[var(--border)]" />

          <Link href="/" className="flex items-center">
            <span className="font-display font-bold text-[var(--text-primary)] text-lg tracking-tight">
              Harith
            </span>
            <span className="font-display font-bold text-lg tracking-tight gradient-text ml-1">
              Manjuka
            </span>
          </Link>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-all duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme toggle + hire me */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-violet-500/40 transition-all duration-200"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center btn-primary px-5 py-2 text-sm"
          >
            <span>Hire Me</span>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}