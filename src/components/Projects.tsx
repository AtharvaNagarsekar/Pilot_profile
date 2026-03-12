"use client";

import { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Plane, Mail, Linkedin } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

const projects = [
  {
    title: "VidGyan",
    subtitle: "NLP · Generative AI · Research",
    description: "Automated educational video pipeline using LLMs, TTS, and image generation. Reduced content creation time by 80%, improved script coherence to 95% with Gemini API. Won Best Paper Award at AITA 2025.",
    tags: ["LLM", "TTS", "Gemini API", "NLP"],
    link: "#", github: "https://github.com/AtharvaNagarsekar",
    period: "Dec 2023 – Jun 2025",
    accent: "sky",
  },
  {
    title: "Nyaya Mitra",
    subtitle: "Agentic AI · CrewAI · NLP",
    description: "Multi-agent legal assistant for research, contract drafting, and case prediction. Processed 10,000+ legal documents with NLP pipelines; improved retrieval precision by 30% using semantic search.",
    tags: ["CrewAI", "Semantic Search", "NLP", "Agents"],
    link: "#", github: "https://github.com/AtharvaNagarsekar",
    period: "Feb 2025 – Present",
    accent: "cyan",
  },
  {
    title: "Fin-AI-lytics",
    subtitle: "Machine Learning · AWS · Finance",
    description: "AI-powered financial advisor with live stock integration — 90% prediction accuracy. Portfolio optimizer with 12% improved simulated returns.",
    tags: ["AWS", "ML", "Finance AI"],
    link: "#", github: "https://github.com/AtharvaNagarsekar",
    period: "Sep 2024 – Dec 2024",
    accent: "emerald",
  },
  {
    title: "TasteTrail",
    subtitle: "Deep Learning · EDA",
    description: "Food recommendation engine with 85% user satisfaction in pilot testing. Enhanced personalization with calorie/budget filters, increasing adoption by 20%.",
    tags: ["Deep Learning", "EDA", "Personalization"],
    link: "#", github: "https://github.com/AtharvaNagarsekar",
    period: "Aug 2024 – Oct 2024",
    accent: "rose",
  },
  {
    title: "StyleGen",
    subtitle: "Computer Vision · CGAN",
    description: "Web app generating unique fashion outfits via Conditional GANs. Applied adversarial training in PyTorch with garment mask-guided structured outputs.",
    tags: ["PyTorch", "CGAN", "Computer Vision"],
    link: "#", github: "https://github.com/AtharvaNagarsekar",
    period: "Jan – Mar 2025",
    accent: "purple",
  },
];

const accentMap: Record<string, { tag: string; line: string; dot: string; glow: string }> = {
  sky:     { tag: "border-sky-400/20 bg-sky-400/5 text-sky-300/80",     line: "border-sky-400/30 hover:border-sky-400/60",     dot: "bg-sky-400/80",     glow: "hover:shadow-[0_0_50px_rgba(56,189,248,0.08)]" },
  cyan:    { tag: "border-cyan-400/20 bg-cyan-400/5 text-cyan-300/80",   line: "border-cyan-400/30 hover:border-cyan-400/60",   dot: "bg-cyan-400/80",    glow: "hover:shadow-[0_0_50px_rgba(34,211,238,0.08)]" },
  emerald: { tag: "border-emerald-400/20 bg-emerald-400/5 text-emerald-300/80", line: "border-emerald-400/30 hover:border-emerald-400/60", dot: "bg-emerald-400/80", glow: "hover:shadow-[0_0_50px_rgba(52,211,153,0.08)]" },
  rose:    { tag: "border-rose-400/20 bg-rose-400/5 text-rose-300/80",   line: "border-rose-400/30 hover:border-rose-400/60",   dot: "bg-rose-400/80",    glow: "hover:shadow-[0_0_50px_rgba(251,113,133,0.08)]" },
  purple:  { tag: "border-purple-400/20 bg-purple-400/5 text-purple-300/80", line: "border-purple-400/30 hover:border-purple-400/60", dot: "bg-purple-400/80", glow: "hover:shadow-[0_0_50px_rgba(192,132,252,0.08)]" },
};

export const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const blob1Y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const headerY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-5%"]);

  return (
    <div ref={ref} className="relative min-h-screen bg-[#060a14] py-28 px-6 md:px-20 text-white z-20 overflow-hidden">

      {/* ── Parallax ambient blobs ── */}
      <motion.div style={{ y: blob1Y }}
        className="absolute top-0 -left-40 w-[700px] h-[700px] rounded-full bg-amber-400/[0.04] blur-[140px] pointer-events-none" />
      <motion.div style={{ y: blob2Y }}
        className="absolute bottom-0 -right-40 w-[600px] h-[600px] rounded-full bg-sky-400/[0.05] blur-[120px] pointer-events-none" />

      {/* ── Runway centerline dashes ── */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px pointer-events-none opacity-[0.04]"
        style={{ background: "repeating-linear-gradient(180deg, white 0px, white 30px, transparent 30px, transparent 60px)" }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section header ── */}
        <motion.div style={{ y: headerY }} className="mb-20">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-amber-400 text-sm tracking-[0.3em] uppercase font-semibold mb-4">
            — Flight Log
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/8 pb-8 gap-6">
            <div className="max-w-2xl">
              <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em", background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.3) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Selected Works
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg md:text-xl text-white/40 font-light">
                Projects at the intersection of aviation, intelligence, and impact.
              </motion.p>
            </div>
            <a href="https://github.com/AtharvaNagarsekar" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 group text-sm font-semibold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
              All on GitHub <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={16} />
            </a>
          </div>
        </motion.div>

        {/* ── FEATURED: SkyCoach ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative rounded-[2.5rem] border border-amber-400/20 bg-gradient-to-br from-amber-400/6 via-orange-400/[0.03] to-transparent p-8 md:p-14 mb-14 overflow-hidden backdrop-blur-xl hover:border-amber-400/40 hover:shadow-[0_0_100px_rgba(245,158,11,0.1)] transition-all duration-700 cursor-pointer"
        >
          {/* Background radial glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-400/[0.06] blur-[100px] pointer-events-none group-hover:bg-amber-400/[0.1] transition-all duration-700" />

          {/* Rotating ring decoration */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-amber-400/10 animate-spin-slow pointer-events-none" />
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border border-amber-400/5 animate-spin-slow pointer-events-none" style={{ animationDirection: "reverse" }} />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs tracking-widest uppercase font-bold">
                <Plane size={12} className="animate-float" />
                Flagship Project
              </div>
              <span className="text-white/25 text-xs tracking-widest">2024–2026</span>
              <div className="flex items-center gap-1.5 ml-auto">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Live</span>
              </div>
            </div>

            <h3 className="text-shimmer text-7xl md:text-[9rem] mb-4 leading-none"
              style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}>
              SkyCoach
            </h3>

            <p className="text-white/40 text-sm md:text-base mb-6 tracking-widest uppercase">
              Aviation · Whisper LLM · Real-time NLP · Audio DSP
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { label: "ATC Transcription", desc: "Live Whisper + LLM pipeline with readback validation and airport context adaptation" },
                { label: "Voice Stress Analyzer", desc: "FFT-based audio DSP to flag rushed or degraded pilot communication in real time" },
                { label: "ATC Radio Simulator", desc: "Realistic radio effects, variable controller behavior, high-workload interruption logic" },
              ].map((f, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-400/20 transition-colors">
                  <h4 className="text-amber-400/90 text-xs font-bold uppercase tracking-widest mb-2">{f.label}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Whisper", "LLM", "FFT Audio", "ATC Sim", "NLP", "Python", "Flask"].map((tag) => (
                <span key={tag} className="text-sm font-medium px-4 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-300/75">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <a href="https://github.com/AtharvaNagarsekar" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-sm font-semibold hover:bg-amber-400/20 hover:border-amber-400/60 transition-all duration-200 hover:scale-105">
                <Github size={16} /> GitHub
              </a>
              <a href="#"
                className="flex items-center gap-2 px-7 py-3 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm font-semibold hover:bg-white/10 hover:text-white transition-all duration-200 hover:scale-105">
                Live Demo <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Other projects grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const acc = accentMap[project.accent] || accentMap.sky;
            return (
              <motion.div key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx} variants={fadeUp}
                className={`card-3d group relative rounded-[1.5rem] border border-white/5 glass p-7 transition-all duration-500 hover:border-white/10 ${acc.glow} overflow-hidden flex flex-col cursor-pointer`}>

                {/* Ambient inner gradient reveal */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className={`h-px flex-1 bg-gradient-to-r from-transparent ${acc.dot.replace("bg-", "to-").replace("/80", "/40")} transition-all duration-500`} />
                    <ArrowUpRight className="text-white/15 group-hover:text-white/60 ml-3 rotate-45 group-hover:rotate-0 transition-all duration-400" size={18} />
                  </div>

                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-2 group-hover:text-white/50 transition-colors">{project.subtitle}</p>
                  <h3 className="text-2xl font-semibold mb-3 tracking-tight">{project.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-6 group-hover:text-white/60 transition-colors duration-300 flex-1">{project.description}</p>

                  <div className="mt-auto">
                    <div className="flex gap-2 flex-wrap mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`text-xs font-medium px-3 py-1 rounded-full border ${acc.tag}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/20">{project.period}</span>
                      <div className="flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="p-2 rounded-full border border-white/10 bg-black/40 text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                          <Github size={14} />
                        </a>
                        <a href={project.link}
                          className="p-2 rounded-full border border-white/10 bg-black/40 text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Contact / Footer ── */}
        <div id="contact" className="mt-40 relative">
          {/* Horizon line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 text-sm tracking-[0.3em] uppercase font-semibold mb-4">— Open a Channel</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
              style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em", background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.3) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Let's Connect
            </h2>
            <p className="text-white/40 text-lg font-light max-w-xl mx-auto">
              Whether it's about aviation, AI systems, or a shared passion for flight — I'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a href="mailto:nagarsekaratharva@gmail.com"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 hover:scale-105 transition-all duration-200 shadow-[0_0_40px_rgba(245,158,11,0.3)]">
              <Mail size={18} /> nagarsekaratharva@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/atharva-nagarsekar-9699a9207/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-sky-400/30 text-sky-400 text-sm font-semibold hover:bg-sky-400/10 hover:border-sky-400/60 hover:scale-105 transition-all duration-200">
              <Linkedin size={18} /> LinkedIn
            </a>
          </motion.div>

          {/* Footer strip */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-white/25 text-xs gap-4">
            <p>© 2026 Atharva Nagarsekar · Mumbai, India · Aspiring Future Captain</p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/atharva-nagarsekar-9699a9207/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">LinkedIn</a>
              <a href="mailto:nagarsekaratharva@gmail.com" className="hover:text-white transition-colors">Email</a>
              <a href="https://github.com/AtharvaNagarsekar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
