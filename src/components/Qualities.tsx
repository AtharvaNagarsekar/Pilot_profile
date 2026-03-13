"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, ElementType } from "react";
import {
  ShieldCheck, Crosshair, Users, Wifi,
  Lightbulb, BrainCircuit,
  Activity, Target, Timer, MessageSquare, Zap, Layers
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
      className={`relative w-full cursor-pointer group rounded-[1.5rem] overflow-hidden transition-all duration-500 bg-white dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-sky-500/5 ${q.border} ${q.glow} ${isExpanded ? 'ring-2 ring-sky-500/20 bg-slate-50/50' : ''}`}
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
      className={`relative w-full cursor-pointer group rounded-[1.5rem] overflow-hidden transition-all duration-500 bg-white dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-sky-500/5 ${q.border} ${q.glow} ${isExpanded ? 'ring-2 ring-sky-500/20 bg-slate-50/50' : ''}`}
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
    { icon: Users, label: "Leadership", desc: "I believe the best way to lead is by example—setting high standards and maintaining integrity in every task. By creating a focused and supportive environment, teams naturally perform at their best.", color: "text-emerald-500", border: "hover:border-emerald-500/30", glow: "hover:shadow-[0_0_20px_rgba(52,211,153,0.1)]" },
    { icon: Crosshair, label: "Decision-Making", desc: "I approach decisions with a balance of analysis and intuition, especially when time is limited. Staying calm and evaluating options logically helps me choose the safest and most effective path forward.", color: "text-sky-500", border: "hover:border-sky-500/30", glow: "hover:shadow-[0_0_20px_rgba(56,189,248,0.1)]" },
    { icon: MessageSquare, label: "Corporate Communication", desc: "I value clear, respectful communication that ensures everyone is aligned and informed. Whether presenting ideas or discussing solutions, I focus on clarity and purpose.", color: "text-purple-500", border: "hover:border-purple-500/30", glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
    { icon: Wifi, label: "CRM", desc: "I believe strong teamwork and open communication are essential in high-responsibility environments. Listening actively and sharing information clearly helps teams operate safely and efficiently.", color: "text-amber-500", border: "hover:border-amber-500/30", glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.1)]" },
    { icon: Lightbulb, label: "Problem Solving", desc: "I enjoy breaking down complex challenges and approaching them step by step. Finding structured solutions helps me stay focused even when problems are unfamiliar.", color: "text-rose-500", border: "hover:border-rose-500/30", glow: "hover:shadow-[0_0_20px_rgba(244,63,94,0.1)]" },
    { icon: Timer, label: "Time Management", desc: "I prioritize preparation and disciplined planning to stay ahead of responsibilities. Managing time effectively allows me to maintain consistency and quality in everything I do.", color: "text-indigo-500", border: "hover:border-indigo-500/30", glow: "hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]" },
    { icon: Layers, label: "Multi-tasking", desc: "I am comfortable managing multiple inputs while maintaining focus on the bigger picture. Balancing several tasks simultaneously helps me stay aware and responsive.", color: "text-blue-500", border: "hover:border-blue-500/30", glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
    { icon: Activity, label: "Stress Management", desc: "I focus on staying composed and maintaining clear thinking during demanding situations. Calmness under pressure helps me perform consistently and make better decisions.", color: "text-rose-500", border: "hover:border-rose-500/30", glow: "hover:shadow-[0_0_20px_rgba(244,63,94,0.1)]" },
  ];

  const personalQualities: ItemProp[] = [
    { icon: ShieldCheck, label: "Safety First", desc: "I believe safety should guide every action and decision in aviation. No objective is more important than protecting people and maintaining responsible operations.", color: "text-rose-500", border: "hover:border-rose-500/30", glow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.1)]" },
    { icon: BrainCircuit, label: "Critical Thinking", desc: "I like to question assumptions and evaluate situations from multiple perspectives. Thinking critically helps me understand problems deeper before acting.", color: "text-cyan-500", border: "hover:border-cyan-500/30", glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]" },
    { icon: Activity, label: "Resilient", desc: "Challenges motivate me to improve rather than discourage me. Every setback becomes an opportunity to grow stronger and more prepared.", color: "text-indigo-500", border: "hover:border-indigo-500/30", glow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]" },
    { icon: Zap, label: "Adaptable", desc: "I am comfortable adjusting to new environments and unexpected changes. Flexibility allows me to remain effective even when conditions shift quickly.", color: "text-emerald-500", border: "hover:border-emerald-500/30", glow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.1)]" },
    { icon: Target, label: "Precision", desc: "I naturally pay attention to small details and strive for accuracy in my work. Consistency and precision help ensure reliability in everything I do.", color: "text-blue-500", border: "hover:border-blue-500/30", glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]" },
    { icon: ShieldCheck, label: "Discipline", desc: "I believe discipline is the foundation of long-term success. Consistent effort, preparation, and focus help turn ambition into progress.", color: "text-slate-500", border: "hover:border-slate-500/30", glow: "hover:shadow-[0_0_30px_rgba(100,116,139,0.1)]" },
    { icon: BrainCircuit, label: "Calm Under Pressure", desc: "I make a conscious effort to remain calm and focused during high-pressure moments. Clear thinking in demanding situations allows better judgement and control.", color: "text-sky-500", border: "hover:border-sky-500/30", glow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]" },
    { icon: Users, label: "Responsible", desc: "I take ownership of my actions and the outcomes they produce. Responsibility drives me to maintain high standards and earn the trust of others.", color: "text-emerald-500", border: "hover:border-emerald-500/30", glow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.1)]" },
  ];

  return (
    <div className="relative bg-slate-50 dark:bg-[#0a0f1e] py-24 px-6 md:px-20 text-slate-900 dark:text-white z-20 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="mb-20 text-center">
          <p className="text-sky-600 dark:text-sky-400 text-sm tracking-[0.4em] uppercase font-bold mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-sky-600/30" />
            Capabilities
            <span className="w-8 h-px bg-sky-600/30" />
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-white dark:to-white/40 mb-6" style={{ fontFamily: "var(--font-bebas)" }}>
            Skills & Qualities
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-sky-500 to-amber-500 mx-auto rounded-full opacity-80" />
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
