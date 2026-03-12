"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "9.35", label: "CGPA", unit: "" },
  { value: "500+", label: "Competitors Beaten", unit: "" },
  { value: "30%", label: "Pipeline Efficiency", unit: "" },
  { value: "90%", label: "Prediction Accuracy", unit: "" },
];

const missionItems = [
  {
    heading: "The Cockpit Mindset",
    body:
      "Every system I build is designed with aviation-grade reliability in mind — no single point of failure, constant error-checking, and graceful degradation under pressure.",
    icon: "✈",
    color: "from-amber-400/20 to-amber-400/0",
    border: "border-amber-400/20 hover:border-amber-400/50",
    glow: "shadow-[0_0_60px_rgba(245,158,11,0.07)]",
  },
  {
    heading: "AI Meets Aviation",
    body:
      "I built SkyCoach — a live ATC transcription and stress analysis platform — because the future of aviation safety lives at the intersection of technology and human judgment.",
    icon: "📡",
    color: "from-sky-400/20 to-sky-400/0",
    border: "border-sky-400/20 hover:border-sky-400/50",
    glow: "shadow-[0_0_60px_rgba(56,189,248,0.07)]",
  },
  {
    heading: "Built for the Long Haul",
    body:
      "Whether it's a 12-hour flight path or a complex ML pipeline — I plan meticulously, execute precisely, and adapt continuously. A CGPA of 9.35 and multiple hackathon wins prove I don't cruise, I climb.",
    icon: "🏔",
    color: "from-cyan-400/20 to-cyan-400/0",
    border: "border-cyan-400/20 hover:border-cyan-400/50",
    glow: "shadow-[0_0_60px_rgba(34,211,238,0.07)]",
  },
];

export const MissionSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Parallax layers
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section ref={ref} className="relative bg-[#060a14] overflow-hidden py-32 px-6 md:px-20">
      {/* Parallax ambient blobs */}
      <motion.div
        style={{ y: blob1Y }}
        className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-sky-400/6 blur-[100px] pointer-events-none"
      />

      {/* Runway grid lines — decorative */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.7) 60px, rgba(255,255,255,0.7) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.7) 60px, rgba(255,255,255,0.7) 61px)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats strip */}
        <motion.div
          style={{ y: textY }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" as const }}
              className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm text-center group hover:border-amber-400/20 transition-all duration-300"
            >
              <div
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-orange-300 mb-2 group-hover:scale-105 transition-transform origin-bottom"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.04em" }}
              >
                {s.value}
              </div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-amber-400 text-sm tracking-[0.3em] uppercase font-semibold mb-3">— Flight Mission</p>
          <h2
            className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30 leading-none"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
          >
            Why I Fly
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missionItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: "easeOut" as const }}
              className={`relative p-7 md:p-8 rounded-[1.5rem] border bg-gradient-to-br ${item.color} ${item.border} ${item.glow} backdrop-blur-sm overflow-hidden group transition-all duration-500`}
            >
              {/* Floating icon */}
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{item.heading}</h3>
              <p className="text-white/55 leading-relaxed text-sm md:text-base">{item.body}</p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/[0.02] rounded-bl-[3rem]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
