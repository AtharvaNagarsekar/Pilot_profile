"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, ElementType } from "react";
import { 
  ShieldCheck, Crosshair, Users, Wifi, 
  Lightbulb, LineChart, BrainCircuit, Handshake, 
  Activity, Target, Timer, MessageSquare,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" as const },
  }),
};

interface ItemProp {
  icon: ElementType;
  label: string;
  desc: string;
  color: string;
  border: string;
  glow: string;
}

// --- SKILL CARD (EXPAND) ---
const SkillCard = ({ q, i }: { q: ItemProp; i: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={i}
      layout
      variants={fadeUp}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`relative w-full cursor-pointer group rounded-2xl overflow-hidden transition-all duration-500 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 ${q.border} ${q.glow} ${isExpanded ? 'ring-1 ring-sky-500/30' : ''}`}
    >
      <div className="p-4 md:p-5">
        <div className="flex items-center gap-4">
          <div className={`p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] ${q.color} group-hover:scale-105 transition-transform duration-300`}>
            <q.icon size={20} />
          </div>
          <h4 className="font-bold text-sm md:text-base dark:text-white text-slate-800 leading-tight">{q.label}</h4>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 mt-4">
                <p className="text-xs dark:text-white/50 text-slate-500 leading-relaxed font-medium">
                  {q.desc}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// --- QUALITY CARD (ELONGATE / EXPAND) ---
const QualityCard = ({ q, i }: { q: ItemProp; i: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={i}
      layout
      variants={fadeUp}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`relative w-full cursor-pointer group rounded-2xl overflow-hidden transition-all duration-500 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 ${q.border} ${q.glow} ${isExpanded ? 'ring-1 ring-sky-500/30' : ''}`}
    >
      <div className="p-4 md:p-5">
        <div className="flex items-center gap-4">
          <div className={`p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] ${q.color} group-hover:scale-105 transition-transform duration-300`}>
            <q.icon size={20} />
          </div>
          <h4 className="font-bold text-sm md:text-base dark:text-white text-slate-800 leading-tight">{q.label}</h4>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 mt-4">
                <p className="text-xs dark:text-white/50 text-slate-500 leading-relaxed font-medium text-left">
                  {q.desc}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const Qualities = () => {
  const skills: ItemProp[] = [
    { icon: Crosshair, label: "Decision-Making", desc: "Calm, precise execution in high-stakes environments.", color: "text-sky-500", border: "hover:border-sky-500/30", glow: "hover:shadow-[0_0_20px_rgba(56,189,248,0.1)]" },
    { icon: Users, label: "Leadership", desc: "Guiding teams with clear direction and shared mission focus.", color: "text-emerald-500", border: "hover:border-emerald-500/30", glow: "hover:shadow-[0_0_20px_rgba(52,211,153,0.1)]" },
    { icon: Target, label: "CRM", desc: "Maximizing efficiency and safety through effective crew communication.", color: "text-amber-500", border: "hover:border-amber-500/30", glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.1)]" },
    { icon: Lightbulb, label: "Problem Solving", desc: "Deconstructing complex challenges into actionable plans.", color: "text-rose-500", border: "hover:border-rose-500/30", glow: "hover:shadow-[0_0_20px_rgba(244,63,94,0.1)]" },
    { icon: MessageSquare, label: "Corporate Comms", desc: "Clear, professional articulation across all stakeholders.", color: "text-purple-500", border: "hover:border-purple-500/30", glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
    { icon: Timer, label: "Time Mgt.", desc: "Strict adherence to timelines without sacrificing quality.", color: "text-indigo-500", border: "hover:border-indigo-500/30", glow: "hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]" },
    { icon: LineChart, label: "Data Storytelling", desc: "Translating data into compelling narratives for strategy.", color: "text-cyan-500", border: "hover:border-cyan-500/30", glow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]" },
    { icon: ShieldCheck, label: "Precision", desc: "Meticulous accuracy and high operational standards.", color: "text-blue-500", border: "hover:border-blue-500/30", glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
  ];

  const personalQualities: ItemProp[] = [
    { icon: Handshake, label: "Team Work", desc: "Fostering collaboration where shared expertise leads to high-impact results for the whole crew.", color: "text-amber-500", border: "hover:border-amber-500/30", glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]" },
    { icon: BrainCircuit, label: "Critical Thinking", desc: "Applying rigorous, data-driven analysis to evaluate situations and identify the safest, most efficient pathways forward.", color: "text-cyan-500", border: "hover:border-cyan-500/30", glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]" },
    { icon: ShieldCheck, label: "Safety First", desc: "An uncompromising commitment to discipline and the highest standards of aviation safety in every operation.", color: "text-rose-500", border: "hover:border-rose-500/30", glow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.1)]" },
    { icon: Activity, label: "Adaptability", desc: "Thriving in dynamic environments by quickly mastering new tech and navigating unforeseen challenges with ease.", color: "text-emerald-500", border: "hover:border-emerald-500/30", glow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.1)]" },
    { icon: Wifi, label: "Situational Awareness", desc: "Maintaining a constant environmental scan and proactive threat management to ensure mission success.", color: "text-indigo-500", border: "hover:border-indigo-500/30", glow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]" },
  ];

  return (
    <div className="relative bg-slate-50 dark:bg-[#0a0f1e] py-24 px-6 md:px-20 text-slate-900 dark:text-white z-20 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="mb-20 text-center">
          <p className="text-sky-500 dark:text-sky-400 text-sm tracking-[0.3em] uppercase font-semibold mb-4">
            — Capabilities
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 dark:text-transparent"
            style={{ background: "var(--about-header-bg, linear-gradient(135deg, #1e293b 0%, #475569 100%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "var(--about-header-fill, transparent)" }}>
            Skills & Qualities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          
          {/* LEFT: PROFESSIONAL SKILLS (FLIP) */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
              <h3 className="text-xs font-bold tracking-[0.4em] text-slate-400 uppercase">Professional Skills</h3>
              <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-5">
              {skills.map((s, i) => (
                <SkillCard key={s.label} q={s} i={i} />
              ))}
            </div>
          </div>

          {/* RIGHT: PERSONAL QUALITIES (EXPAND) */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
              <h3 className="text-xs font-bold tracking-[0.4em] text-slate-400 uppercase">Personal Qualities</h3>
              <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {personalQualities.map((q, i) => (
                <QualityCard key={q.label} q={q} i={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
