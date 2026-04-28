"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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

          {/* Name — clean wordmark style */}
          <motion.button
            onClick={() => handleNav("#home")}
            whileHover={{ opacity: 0.8 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-0 group"
          >
            <span className="font-display font-bold text-[var(--text-primary)] text-lg tracking-tight">
              Harith
            </span>
            <span
              className="font-display font-bold text-lg tracking-tight gradient-text"
              style={{ marginLeft: "0.25rem" }}
            >
              Manjuka
            </span>
            {/* Subtle animated underline on hover */}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-violet-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
          </motion.button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {/* Active pill — gradient fill */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                          boxShadow: "0 4px 20px rgba(124,58,237,0.45)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
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

            {/* Hire Me CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
              className="hidden md:inline-flex items-center btn-primary px-5 py-2 text-sm"
            >
              <span>Hire Me</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((p) => !p)}
              className="md:hidden w-9 h-9 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-[68px] left-4 right-4 z-40 rounded-2xl p-3 shadow-2xl shadow-black/20 md:hidden border border-[var(--border)] overflow-hidden"
            style={{ background: "var(--glass-bg)", backdropFilter: "blur(24px)" }}
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = active === id;
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 relative ${
                        isActive
                          ? "text-white"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
                      }`}
                    >
                      {isActive && (
                        <span
                          className="absolute inset-0 rounded-xl"
                          style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </button>
                  </li>
                );
              })}
              <li className="mt-1 pt-2 border-t border-[var(--border)]">
                <button
                  onClick={() => handleNav("#contact")}
                  className="w-full btn-primary px-4 py-3 text-sm text-center"
                >
                  <span>Hire Me</span>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}