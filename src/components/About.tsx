"use client";

import { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Globe2, Layers, Briefcase, Trophy, Star } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Parallax elements
  const blob1Y  = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const blob2Y  = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const headerY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-6%"]);
  const lineY   = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const languages = ["English", "Hindi", "Marathi", "Konkani"];

  const education = [
    { degree: "B.Tech in AI & Data Science", inst: "Dwarkadas J Sanghvi College of Engineering", year: "2022–2026", grade: "CGPA: 9.35", active: true },
    { degree: "Grade 12 (HSC)",               inst: "Sathaye College",                            year: "2022",       grade: "82.67%",    active: false },
    { degree: "Grade 10 (ICSE)",              inst: "Parle Tilak Vidyalaya",                      year: "2020",       grade: "97.4%",     active: false },
  ];

  const achievements = [
    {
      icon: Trophy, title: "S4DS DataThon — Finalist",
      desc: "Led a team of 4 to design and develop a working RL model prototype under tight deadlines. Guided team to the finalist stage among 500+ participants.",
      tag: "Hackathon", color: "from-amber-400/10 to-orange-400/5 border-amber-400/20", iconColor: "text-amber-400",
    },
    {
      icon: Star, title: "Best Intelligent System — AITA 2025",
      desc: "Led research on LLMs, TTS, and image generation for VidGyan — automated educational video creation. Won Best Paper in the Intelligent Systems track.",
      tag: "Research Award", color: "from-sky-400/10 to-cyan-400/5 border-sky-400/20", iconColor: "text-sky-400",
    },
  ];

  return (
    <div ref={ref} id="about" className="relative bg-white dark:bg-[#0a0f1e] py-28 px-6 md:px-20 text-slate-900 dark:text-white z-20 border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-300">

      {/* ── Parallax ambient blobs ── */}
      <motion.div style={{ y: blob1Y }}
        className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-sky-400/[0.04] blur-[130px] pointer-events-none" />
      <motion.div style={{ y: blob2Y }}
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-amber-400/[0.04] blur-[110px] pointer-events-none" />

      {/* ── Vertical accent line (parallax) ── */}
      <motion.div style={{ y: lineY }}
        className="absolute left-6 md:left-14 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sky-400/20 to-transparent pointer-events-none" />

      {/* ── Section header ── */}
      <motion.div style={{ y: headerY }} className="max-w-7xl mx-auto mb-20">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="text-sky-500 dark:text-sky-400 text-sm tracking-[0.3em] uppercase font-semibold mb-4">
          — The Pilot
        </motion.p>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-transparent"
          style={{ background: "var(--about-header-bg, linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.35) 100%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "var(--about-header-fill, transparent)" }}>
          About Me
        </motion.h2>
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">

        {/* ════ LEFT COLUMN ════ */}
        <div className="md:w-1/2 space-y-14">

          {/* Bio */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="relative pl-6 border-l border-sky-400/20">
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.7)]" />
            <div className="text-lg text-white/65 leading-[1.95] font-light space-y-5">
              <p>
                I&apos;m a highly motivated aspiring commercial pilot with a strong commitment to aviation safety
                and operational discipline. I excel in high-responsibility environments requiring calm
                decision-making, effective communication, and strong situational awareness.
              </p>
              <p>
                Alongside my pursuit of wings, I&apos;m completing a B.Tech in Artificial Intelligence &
                Data Science at DJSCE (CGPA 9.35) — positioning me as the next-generation aviator who
                can harness AI to redefine how pilots train, communicate, and operate.
              </p>
              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  download="Atharva_Nagarsekar_CV.pdf"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-500/10 text-sky-400 border border-sky-500/20 hover:bg-sky-500/20 hover:border-sky-500/40 rounded-full font-medium transition-all duration-300 shadow-[0_4px_14px_0_rgba(56,189,248,0.1)] hover:shadow-[0_6px_20px_rgba(56,189,248,0.2)]"
                >
                  <Briefcase size={16} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </motion.div>



          {/* Experience */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-white/30 uppercase mb-6">
              <Briefcase size={14} /> Experience
            </h3>
            <div className="space-y-8">
              {[
                {
                  title: "Data Science Intern",
                  company: "Next24Tech Technology & Services · Nagpur",
                  period: "Jun–Aug 2024",
                  dotColor: "bg-sky-400",
                  glow: "shadow-[0_0_12px_rgba(56,189,248,0.6)]",
                  lineColor: "border-sky-400/30 hover:border-sky-400/60",
                  textColor: "text-sky-400/80",
                  bullets: [
                    "E-commerce recommendation system via collaborative filtering (+15% CTR)",
                    "Optimized data pipeline, cutting model training time by 30%",
                  ],
                },
                {
                  title: "Volunteer — Project Lead",
                  company: "Rishmita Foundations NGO · Mumbai",
                  period: "",
                  dotColor: "bg-emerald-400",
                  glow: "shadow-[0_0_10px_rgba(52,211,153,0.4)]",
                  lineColor: "border-white/10 hover:border-white/20",
                  textColor: "text-emerald-400/80",
                  bullets: [
                    "Led community e-waste collection initiative in Mumbai",
                    "Supported elderly welfare outreach and community healthcare",
                  ],
                },
              ].map((exp, i) => (
                <div key={i} className={`border-l-2 pl-6 relative transition-colors duration-300 ${exp.lineColor}`}>
                  <div className={`absolute w-2.5 h-2.5 rounded-full -left-[7px] top-1.5 ${exp.dotColor} ${exp.glow}`} />
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <h4 className="text-base font-medium">{exp.title}</h4>
                    {exp.period && <span className="text-xs text-white/35 bg-white/5 px-3 py-1 rounded-full">{exp.period}</span>}
                  </div>
                  <p className={`${exp.textColor} text-sm mb-2 font-medium`}>{exp.company}</p>
                  <ul className="list-none space-y-1">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-white/50 leading-relaxed">→ {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════ RIGHT COLUMN ════ */}
        <div className="md:w-1/2 space-y-14">



          {/* Languages */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-white/30 uppercase mb-5">
              <Layers size={14} /> Languages
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {languages.map((lang) => (
                <span key={lang} className="bg-white/[0.04] border border-white/8 px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/10 hover:scale-105 transition-all duration-200 cursor-default">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-white/30 uppercase mb-6">
              <Globe2 size={14} /> Education
            </h3>
            <div className="space-y-7">
              {education.map((edu, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" as const }}
                  className={`border-l-2 pl-6 relative transition-all duration-300 ${edu.active ? "border-sky-400/60 hover:border-sky-400" : "border-white/10 hover:border-white/20"}`}>
                  <div className={`absolute w-2.5 h-2.5 rounded-full -left-[7px] top-1.5 ${edu.active ? "bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.6)]" : "bg-white/20"}`} />
                  <h4 className="text-base font-medium">{edu.degree}</h4>
                  <p className="text-white/45 text-sm mt-0.5 mb-2">{edu.inst} · {edu.year}</p>
                  <div className={`inline-block px-3 py-1 rounded font-mono text-sm ${edu.active ? "bg-sky-400/10 text-sky-300" : "bg-white/5 text-white/50"}`}>
                    {edu.grade}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-white/30 uppercase mb-6">
              <Trophy size={14} /> Achievements
            </h3>
            <div className="space-y-5">
              {achievements.map((a, i) => (
                <motion.div key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                  className={`relative p-6 rounded-2xl bg-gradient-to-br ${a.color} border backdrop-blur-sm overflow-hidden group hover:scale-[1.02] transition-all duration-300`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`mt-1 ${a.iconColor} group-hover:scale-110 transition-transform`}>
                      <a.icon size={22} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h4 className="font-semibold text-sm md:text-base">{a.title}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${a.iconColor} border-current bg-current/10`}>{a.tag}</span>
                      </div>
                      <p className="text-xs md:text-sm text-white/50 leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
