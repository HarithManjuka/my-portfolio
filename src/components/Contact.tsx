"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Status = "idle" | "loading" | "success" | "error";

const contactInfo = [
  { icon: Mail,   label: "Email",    value: "harithmanjukaabekon11@gmail.com", href: "mailto:harithmanjukaabekon11@gmail.com", color: "text-violet-500", bg: "bg-violet-500/10" },
  { icon: Phone,  label: "Phone",    value: "+94 71 989 8544",                href: "tel:+94719898544",                       color: "text-cyan-500",   bg: "bg-cyan-500/10"   },
  { icon: MapPin, label: "Location", value: "Bibile, Sri Lanka",               href: null,                                     color: "text-pink-500",   bg: "bg-pink-500/10"   },
];

const socials = [
  { icon: FaGithub,   label: "GitHub",   href: "https://github.com/HarithManjuka" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/harith-manjuka-6707792b9" },
  { icon: Mail,       label: "Email",    href: "mailto:harithmanjukaabekon11@gmail.com" },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xjgjjolv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-[var(--bg-primary)]">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-violet-500 font-medium text-sm tracking-widest uppercase mb-3">Let&apos;s connect</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">Open to internship roles, freelance projects, and exciting collaborations.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — contact info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="space-y-4">
            {contactInfo.map((item, i) => (
              <div key={i} className="gradient-border-card p-5 flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                  <item.icon className={item.color} size={20} />
                </div>
                <div>
                  <p className="text-[var(--text-muted)] text-xs mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
                      rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="text-[var(--text-primary)] text-sm font-medium hover:text-violet-500 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[var(--text-primary)] text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="gradient-border-card p-5">
              <p className="text-[var(--text-muted)] text-xs mb-3">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? "_self" : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    aria-label={label}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-all duration-200 hover:-translate-y-1 hover:border-violet-500/40"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="gradient-border-card p-8 space-y-5">

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-sm font-medium"
                  >
                    <CheckCircle2 size={18} className="shrink-0" />
                    Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-600 dark:text-red-400 text-sm font-medium"
                  >
                    <AlertCircle size={18} className="shrink-0" />
                    Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="text-[var(--text-muted)] text-xs mb-1.5 block">Your Name</label>
                  <input id="contact-name" type="text" name="name" placeholder="Your name" required className="form-input" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-[var(--text-muted)] text-xs mb-1.5 block">Your Email</label>
                  <input id="contact-email" type="email" name="email" placeholder="your@example.com" required className="form-input" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="text-[var(--text-muted)] text-xs mb-1.5 block">Subject</label>
                <input id="contact-subject" type="text" name="subject" placeholder="Internship Opportunity" className="form-input" />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-[var(--text-muted)] text-xs mb-1.5 block">Message</label>
                <textarea id="contact-message" name="message" placeholder="Tell me about your project or opportunity..." rows={5} required className="form-input resize-none" />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="flex items-center gap-2">
                  {status === "loading" ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending…</>
                  ) : status === "success" ? (
                    <><CheckCircle2 size={16} /> Sent!</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}