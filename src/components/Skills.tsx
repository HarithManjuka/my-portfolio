"use client";

import { motion } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss, SiPhp,
  SiCplusplus, SiKotlin, SiDotnet,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGit, SiGithub, SiDocker, SiPostman, SiFigma, SiVscodium, SiLinux,
  SiPrisma, SiAndroidstudio,
} from "react-icons/si";
import { FaJava, FaDatabase, FaC } from "react-icons/fa6";

const categories = [
  {
    title: "Languages",
    color: "text-violet-500",
    dot: "bg-violet-500",
    borderAccent: "hover:border-violet-500/30",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400"  },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400"    },
      { name: "Python",     icon: SiPython,     color: "text-sky-400"     },
      { name: "Java",       icon: FaJava,       color: "text-orange-400"  },
      { name: "C",          icon: FaC,          color: "text-blue-300"    },
      { name: "C++",        icon: SiCplusplus,  color: "text-blue-500"    },
      { name: "C#",         icon: SiDotnet,     color: "text-purple-400"  },
      { name: "Kotlin",     icon: SiKotlin,     color: "text-violet-400"  },
      { name: "PHP",        icon: SiPhp,        color: "text-indigo-400"  },
      { name: "SQL",        icon: FaDatabase,   color: "text-emerald-400" },
      { name: "HTML",       icon: SiHtml5,      color: "text-orange-500"  },
      { name: "CSS",        icon: SiCss,        color: "text-blue-500"    },
    ],
  },
  {
    title: "Frontend",
    color: "text-cyan-500",
    dot: "bg-cyan-500",
    borderAccent: "hover:border-cyan-500/30",
    skills: [
      { name: "React",        icon: SiReact,       color: "text-cyan-400" },
      { name: "Next.js",      icon: SiNextdotjs,   color: "text-[var(--text-primary)]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
    ],
  },
  {
    title: "Backend & DB",
    color: "text-blue-500",
    dot: "bg-blue-500",
    borderAccent: "hover:border-blue-500/30",
    skills: [
      { name: "Node.js",    icon: SiNodedotjs, color: "text-green-500"  },
      { name: "Express.js", icon: SiExpress,   color: "text-[var(--text-primary)]" },
      { name: "REST APIs",  icon: FaDatabase,  color: "text-violet-400" },
      { name: "MongoDB",    icon: SiMongodb,   color: "text-green-400"  },
      { name: "MySQL",      icon: SiMysql,     color: "text-blue-400"   },
      { name: "SQL Server", icon: FaDatabase,            color: "text-red-400"                },
      { name: "Prisma",     icon: SiPrisma,    color: "text-sky-300"    },
    ],
  },
  {
    title: "Tools & DevOps",
    color: "text-pink-500",
    dot: "bg-pink-500",
    borderAccent: "hover:border-pink-500/30",
    skills: [
      { name: "Git",            icon: SiGit,           color: "text-orange-500" },
      { name: "GitHub",         icon: SiGithub,        color: "text-[var(--text-primary)]" },
      { name: "Docker",         icon: SiDocker,        color: "text-blue-400"   },
      { name: "Linux",          icon: SiLinux,         color: "text-yellow-500" },
      { name: "Android Studio", icon: SiAndroidstudio, color: "text-green-400"  },
      { name: "Postman",        icon: SiPostman,       color: "text-orange-400" },
      { name: "Figma",          icon: SiFigma,         color: "text-pink-400"   },
      { name: "VS Code",        icon: SiVscodium,      color: "text-blue-500"   },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 relative overflow-hidden bg-[var(--bg-primary)]"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-500 font-medium text-sm tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            My Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Tools and technologies I use to build high-quality applications
          </p>
        </motion.div>

        {/* ── Skill category cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              className={`gradient-border-card p-6 transition-all duration-300 ${cat.borderAccent}`}
            >
              {/* Card header */}
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2.5 h-2.5 rounded-full ${cat.dot}`} />
                <h3 className={`font-display font-semibold ${cat.color} text-sm tracking-wide uppercase`}>
                  {cat.title}
                </h3>
              </div>

              {/* Skill pills with icons */}
              <div className="grid grid-cols-2 gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: catIdx * 0.08 + skillIdx * 0.04 }}
                    viewport={{ once: true }}
                    className="skill-pill justify-start text-xs"
                  >
                    <skill.icon size={13} className={`${skill.color} shrink-0`} />
                    <span className="truncate">{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 gradient-border-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-[var(--text-secondary)] text-sm text-center sm:text-left">
            🚀 Always evolving, currently exploring{" "}
            <span className="text-violet-500 font-medium">system design</span> and{" "}
            <span className="text-cyan-500 font-medium">scalable architectures</span>
          </p>
          <a
            href="https://github.com/HarithManjuka"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-5 py-2.5 text-sm whitespace-nowrap"
          >
            <span>See My Work</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}