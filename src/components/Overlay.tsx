"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

/**
 * Apple-style Parallax Overlay
 *
 * Each panel has 3 independent depth layers at different scroll rates:
 *  • Background  (slow  — 0.3× speed) e.g. label/tag
 *  • Midground   (mid   — 1.0× speed) e.g. headline
 *  • Foreground  (fast  — 1.6× speed) e.g. subtext — exits first
 *
 * Mimics how Apple's product pages create genuine depth via staggered
 * parallax, scale zoom, directional shear, and blur-on-exit.
 */

const displayFont = "var(--font-bebas)";

export const Overlay = ({ progress }: { progress: MotionValue<number> }) => {

  // ─── PANEL 1  (0 → 22%)  HERO NAME ────────────────────────────────────────
  const p1BgOpacity  = useTransform(progress, [0, 0.04, 0.17, 0.22], [0, 1, 1, 0]);
  const p1BgY        = useTransform(progress, [0, 0.22], ["0px", "-40px"]);

  const p1MidOpacity = useTransform(progress, [0, 0.03, 0.16, 0.22], [0, 1, 1, 0]);
  const p1MidY       = useTransform(progress, [0, 0.22], ["0px", "-80px"]);
  const p1MidScale   = useTransform(progress, [0, 0.22], [1.06, 0.94]);

  const p1FgOpacity  = useTransform(progress, [0, 0.04, 0.14, 0.22], [0, 1, 1, 0]);
  const p1FgY        = useTransform(progress, [0, 0.22], ["0px", "-130px"]);
  const p1FgBlur     = useTransform(progress, [0.10, 0.22], [0, 8]);

  const hintOpacity  = useTransform(progress, [0, 0.05, 0.09], [1, 1, 0]);

  // ─── PANEL 2  (26 → 52%)  "CLEARED FOR TAKEOFF" ──────────────────────────
  const p2BgOpacity  = useTransform(progress, [0.26, 0.31, 0.46, 0.52], [0, 1, 1, 0]);
  const p2BgY        = useTransform(progress, [0.26, 0.52], ["30px", "-30px"]);

  const p2MidOpacity = useTransform(progress, [0.27, 0.33, 0.47, 0.52], [0, 1, 1, 0]);
  const p2MidY       = useTransform(progress, [0.27, 0.52], ["60px", "-60px"]);
  const p2MidScale   = useTransform(progress, [0.27, 0.52], [0.96, 1.04]);

  const p2FgOpacity  = useTransform(progress, [0.30, 0.36, 0.47, 0.52], [0, 1, 1, 0]);
  const p2FgY        = useTransform(progress, [0.30, 0.52], ["90px", "-90px"]);

  // Horizontal shear — "Cleared" from left, "Takeoff" from right
  const p2LeftX      = useTransform(progress, [0.27, 0.38], ["-50px", "0px"]);
  const p2RightX     = useTransform(progress, [0.27, 0.38], ["50px", "0px"]);

  // ─── PANEL 3  (54 → 79%)  "SKY IS NOT THE LIMIT" ─────────────────────────
  const p3BgOpacity  = useTransform(progress, [0.54, 0.60, 0.72, 0.79], [0, 1, 1, 0]);
  const p3BgY        = useTransform(progress, [0.54, 0.79], ["30px", "-30px"]);

  const p3MidOpacity = useTransform(progress, [0.55, 0.62, 0.73, 0.79], [0, 1, 1, 0]);
  const p3MidY       = useTransform(progress, [0.55, 0.79], ["60px", "-60px"]);
  const p3MidScale   = useTransform(progress, [0.55, 0.79], [0.96, 1.05]);

  const p3FgOpacity  = useTransform(progress, [0.58, 0.64, 0.71, 0.79], [0, 1, 1, 0]);
  const p3FgY        = useTransform(progress, [0.58, 0.79], ["90px", "-90px"]);

  // Opposite shear — "Sky is" from right, "not the limit" from left
  const p3RightX     = useTransform(progress, [0.55, 0.67], ["60px", "0px"]);
  const p3LeftX      = useTransform(progress, [0.55, 0.67], ["-60px", "0px"]);

  // ─── PANEL 4  (81 → 100%)  SKYCOACH REVEAL ────────────────────────────────
  const p4BgOpacity  = useTransform(progress, [0.81, 0.87, 0.97, 1], [0, 1, 1, 1]);
  const p4BgY        = useTransform(progress, [0.81, 0.97], ["24px", "0px"]);
  const p4BgScale    = useTransform(progress, [0.81, 0.96], [0.94, 1]);

  // Camera-pullback: title grows from 0.88 → 1 as it rises
  const p4MidOpacity = useTransform(progress, [0.82, 0.89, 0.98, 1], [0, 1, 1, 1]);
  const p4MidY       = useTransform(progress, [0.82, 0.97], ["60px", "0px"]);
  const p4MidScale   = useTransform(progress, [0.82, 0.97], [0.88, 1.0]);

  const p4FgOpacity  = useTransform(progress, [0.87, 0.94, 1], [0, 1, 1]);
  const p4FgY        = useTransform(progress, [0.87, 0.97], ["40px", "0px"]);

  const vignetteOp   = useTransform(progress, [0, 0.15, 0.5], [0.6, 0.4, 0.65]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">

      {/* Vignette — top/bottom + sides */}
      <motion.div style={{ opacity: vignetteOp }}
        className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/70 via-transparent to-[#0a0f1e]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/40 via-transparent to-[#0a0f1e]/40" />


      {/* ═══════════ PANEL 1  —  NAME ═══════════ */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        {/* BG — location tag (slowest) */}
        <motion.div style={{ opacity: p1BgOpacity, y: p1BgY }}
          className="absolute top-[28%] flex flex-col items-center gap-1">
          <p className="text-sky-400/80 text-xs md:text-sm font-bold tracking-[0.55em] uppercase">
            Mumbai · India
          </p>
          <div className="w-10 h-px bg-sky-400/30" />
        </motion.div>

        {/* MID — name (normal speed + scale) */}
        <motion.div style={{ opacity: p1MidOpacity, y: p1MidY, scale: p1MidScale }}
          className="absolute flex flex-col items-center select-none">
          <h1 className="leading-[0.88] tracking-wider text-white uppercase drop-shadow-2xl"
            style={{ fontFamily: displayFont, fontSize: "clamp(4rem, 14vw, 12rem)" }}>
            Atharva
          </h1>
          <h1 className="leading-[0.88] tracking-wider uppercase drop-shadow-2xl"
            style={{
              fontFamily: displayFont,
              fontSize: "clamp(4rem, 14vw, 12rem)",
              background: "linear-gradient(135deg, #38bdf8 0%, #67e8f9 50%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Nagarsekar
          </h1>
        </motion.div>

        {/* FG — subtitle + hint (fastest + blurs out) */}
        <motion.div
          style={{
            opacity: p1FgOpacity,
            y: p1FgY,
            filter: useTransform(p1FgBlur, (v) => `blur(${v}px)`),
          }}
          className="absolute bottom-[16%] flex flex-col items-center gap-5">
          <p className="text-xl md:text-2xl font-light text-white/75 tracking-[0.3em] uppercase">
            Aspiring Future Captain
          </p>
          <motion.div style={{ opacity: hintOpacity }} className="flex flex-col items-center gap-2">
            <span className="text-white/30 text-xs tracking-[0.4em] uppercase">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-2">
              <div className="w-0.5 h-2 bg-white/40 rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>


      {/* ═══════════ PANEL 2  —  CLEARED FOR TAKEOFF ═══════════ */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:pl-24">

        {/* BG — label (slow) */}
        <motion.p style={{ opacity: p2BgOpacity, y: p2BgY }}
          className="text-amber-400 text-xs font-bold tracking-[0.45em] uppercase mb-4">
          — Flight Philosophy
        </motion.p>

        {/* MID — headline with horizontal word shear */}
        <motion.div style={{ opacity: p2MidOpacity, y: p2MidY, scale: p2MidScale }}>
          <div className="overflow-hidden leading-none">
            <motion.span 
              className="text-white uppercase"
              style={{ x: p2LeftX, display: "inline-block", fontFamily: displayFont, fontSize: "clamp(3.5rem, 10vw, 9rem)" }}>
              Cleared{" "}
            </motion.span>
            <motion.span 
              style={{
                x: p2RightX, 
                display: "inline-block",
                fontFamily: displayFont,
                fontSize: "clamp(3.5rem, 10vw, 9rem)",
                background: "linear-gradient(135deg, #f59e0b 0%, #fb923c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              for Takeoff.
            </motion.span>
          </div>
        </motion.div>

        {/* FG — subtext (fastest) */}
        <motion.p style={{ opacity: p2FgOpacity, y: p2FgY }}
          className="mt-6 text-lg md:text-xl text-white/50 font-light max-w-xl leading-relaxed">
          A pilot&apos;s mindset. An engineer&apos;s edge.<br />
          <span className="text-white/30">Precision, discipline, situational awareness —</span><br />
          in the cockpit and in code.
        </motion.p>
      </div>


      {/* ═══════════ PANEL 3  —  SKY IS NOT THE LIMIT ═══════════ */}
      <div className="absolute inset-0 flex flex-col justify-center items-end text-right px-8 md:pr-24">

        {/* BG — label (slow) */}
        <motion.p style={{ opacity: p3BgOpacity, y: p3BgY }}
          className="text-sky-400 text-xs font-bold tracking-[0.45em] uppercase mb-4">
          Vision —
        </motion.p>

        {/* MID — headline with reverse horizontal shear */}
        <motion.div style={{ opacity: p3MidOpacity, y: p3MidY, scale: p3MidScale }}>
          <div className="overflow-hidden leading-none text-right">
            <motion.span 
              className="text-white uppercase"
              style={{ x: p3RightX, display: "inline-block", fontFamily: displayFont, fontSize: "clamp(3.5rem, 10vw, 9rem)" }}>
              Sky is
            </motion.span>
          </div>
          <div className="overflow-hidden leading-none">
            <motion.span 
              style={{
                x: p3LeftX, 
                display: "inline-block",
                fontFamily: displayFont,
                fontSize: "clamp(3.5rem, 10vw, 9rem)",
                background: "linear-gradient(135deg, #38bdf8 0%, #67e8f9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              not the limit.
            </motion.span>
          </div>
        </motion.div>

        {/* FG — subtext */}
        <motion.p style={{ opacity: p3FgOpacity, y: p3FgY }}
          className="mt-6 text-lg md:text-xl text-white/50 font-light max-w-xl leading-relaxed">
          Building AI tools that will define<br />
          <span className="text-white/30">the future of aviation —</span><br />
          one system at a time.
        </motion.p>
      </div>


      {/* ═══════════ PANEL 4  —  SKYCOACH (camera-pullback reveal) ═══════════ */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        {/* BG — badge chip (slowest, first) */}
        <motion.div style={{ opacity: p4BgOpacity, y: p4BgY, scale: p4BgScale }}
          className="mb-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs tracking-[0.35em] uppercase font-bold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Flagship Project
          </div>
        </motion.div>

        {/* MID — title grows from 0.88→1, rises from below (camera pullback) */}
        <motion.div style={{ opacity: p4MidOpacity, y: p4MidY, scale: p4MidScale }}>
          <span
            className="text-shimmer block leading-none"
            style={{
              fontFamily: displayFont,
              fontSize: "clamp(5rem, 18vw, 16rem)",
              letterSpacing: "0.03em",
            }}>
            SkyCoach
          </span>
        </motion.div>

        {/* FG — tagline pops in last */}
        <motion.p style={{ opacity: p4FgOpacity, y: p4FgY }}
          className="mt-8 text-sm md:text-lg text-white/45 font-light max-w-2xl leading-relaxed tracking-wide">
          Live ATC transcription
          <span className="mx-3 text-white/20">·</span>
          Voice stress analysis
          <span className="mx-3 text-white/20">·</span>
          ATC radio simulator
        </motion.p>
      </div>

    </div>
  );
};
