"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PORTFOLIO } from "@/lib/portfolio-data";

// ─── Animated cursor-tracking glow (subtle) ────────────────────────────────────
// Removed for simplicity — the CinematicBackground handles all ambient light.

const ROLES = ["Full-stack Developer", "Frontend Architect", "UI/UX Engineer"];

function AnimatedRoles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 1 }}
      className="flex flex-wrap items-center gap-x-3 gap-y-2"
    >
      {ROLES.map((role, i) => (
        <span key={role} className="flex items-center gap-3">
          <span className="text-sm font-medium text-ink-secondary lg:text-base">
            {role}
          </span>
          {i < ROLES.length - 1 && (
            <span
              className="h-1 w-1 rounded-full bg-accent opacity-50"
              aria-hidden="true"
            />
          )}
        </span>
      ))}
    </motion.div>
  );
}

function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
    >
      <span className="label-text text-ink-tertiary">Scroll</span>
      <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/[0.12] p-1">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1 rounded-full bg-accent/50"
        />
      </div>
    </motion.div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const resumeHref = PORTFOLIO.resumeUrl || `mailto:${PORTFOLIO.email}?subject=Request%20Resume`;
  const resumeLabel = PORTFOLIO.resumeUrl ? "Download Resume" : "Request Resume";

  // Parallax the headline upward as user scrolls
  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:px-12"
    >
      <motion.div
        style={{ y: headlineY, opacity }}
        className="relative z-10 flex max-w-5xl flex-col items-start gap-8"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <div className="h-px w-10 bg-accent opacity-60" />
          <span className="label-text text-accent/70">
            Available for full-time and freelance work
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          <span className="text-gradient block">
            I build interfaces
          </span>
          <span className="text-gradient block">
            that ship solutions.
          </span>
        </motion.h1>

        {/* Value proposition */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-balance text-lg leading-relaxed text-ink-secondary lg:text-xl"
        >
          Full-stack engineer specializing in{" "}
          <span className="text-ink-primary">SaaS</span> and{" "}
          <span className="text-ink-primary">E-commerce</span> platforms.
          I design and ship critical product surfaces end-to-end, from frontend
          architecture to the underlying data flows, so each interaction is fast,
          reliable, and intentional.
        </motion.p>

        <AnimatedRoles />

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-accent px-7 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,110,224,0.5)]"
          >
            <span className="relative z-10">View Case Studies</span>
            {/* Hover shimmer */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-7 text-sm font-semibold text-ink-secondary transition-all duration-300 hover:border-white/[0.18] hover:text-ink-primary"
          >
            {resumeLabel}
          </a>
        </motion.div>
      </motion.div>

      {/* Floating stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 w-full sm:absolute sm:bottom-20 sm:right-6 sm:mt-0 sm:w-auto lg:right-12"
      >
        <div className="glass rounded-2xl p-4 sm:p-5">
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {[
              { value: "6+", label: "Years building" },
              { value: "30+", label: "Projects shipped" },
              { value: "5", label: "Live SaaS products" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-lg font-semibold text-ink-primary sm:text-xl">
                  {stat.value}
                </span>
                <span className="label-text text-ink-tertiary">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <ScrollCue />
    </section>
  );
}
