"use client";

import { motion } from "framer-motion";

const categories = [
  { title:"Languages", color:"text-violet-500", dot:"bg-violet-500", skills:["JavaScript","TypeScript","Python","Java","SQL","HTML","CSS"] },
  { title:"Frontend", color:"text-cyan-500", dot:"bg-cyan-500", skills:["React","Next.js","Tailwind CSS","Framer Motion","Shadcn UI","Redux"] },
  { title:"Backend", color:"text-blue-500", dot:"bg-blue-500", skills:["Node.js","Express.js","REST APIs","PostgreSQL","MongoDB","Prisma"] },
  { title:"Tools & DevOps", color:"text-pink-500", dot:"bg-pink-500", skills:["Git","GitHub","Docker","Postman","Figma","VS Code","Linux"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-[var(--bg-primary)]">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.6 }} viewport={{ once:true }} className="text-center mb-16">
          <p className="text-cyan-500 font-medium text-sm tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">My Tech <span className="gradient-text">Stack</span></h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">Tools and technologies I use to build high-quality applications</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div key={cat.title} initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.5,delay:catIdx*0.1 }} viewport={{ once:true }} className="gradient-border-card p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2.5 h-2.5 rounded-full ${cat.dot}`} />
                <h3 className={`font-display font-semibold ${cat.color} text-sm tracking-wide uppercase`}>{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.span key={skill} initial={{ opacity:0,scale:0.8 }} whileInView={{ opacity:1,scale:1 }} transition={{ duration:0.3,delay:catIdx*0.08+skillIdx*0.04 }} viewport={{ once:true }} className="skill-pill">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.6,delay:0.4 }} viewport={{ once:true }}
          className="mt-12 gradient-border-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-[var(--text-secondary)] text-sm text-center sm:text-left">
            🚀 Always learning — currently exploring <span className="text-violet-500 font-medium">AWS Cloud</span> &amp; <span className="text-cyan-500 font-medium">System Design</span>
          </p>
          <a href="https://github.com/HarithManjuka" target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2.5 text-sm whitespace-nowrap">
            <span>See My Work →</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
