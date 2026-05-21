"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Animated cursor-tracking glow (subtle) ────────────────────────────────────
// Removed for simplicity — the CinematicBackground handles all ambient light.

const ROLES = [
  "Senior Web & App Developer",
  "Business Websites",
  "Local Growth Systems",
];

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
            Built for Cambodia local businesses ready to grow online
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
            We Build High-Performance
          </span>
          <span className="text-gradient block">
            Websites That Scale Your Business.
          </span>
        </motion.h1>

        {/* Value proposition */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-balance text-lg leading-relaxed text-ink-secondary lg:text-xl"
        >
          Hi, I&apos;m Sotheara, Founder of Analite Solution. With 6+ years of
          experience, I transform corporate concepts and local businesses into
          lightning-fast digital products. Clean code, premium design,
          delivered fast, and built to convert more customers.
        </motion.p>

        <AnimatedRoles />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-sm leading-relaxed text-ink-tertiary"
        >
          Typical outcomes: faster loading websites, stronger Google visibility,
          and clearer customer journeys that increase calls and bookings.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-accent px-7 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,110,224,0.5)]"
          >
            <span className="relative z-10">Get Free Consultation</span>
            {/* Hover shimmer */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          <a
            href="#services"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-7 text-sm font-semibold text-ink-secondary transition-all duration-300 hover:border-white/[0.18] hover:text-ink-primary"
          >
            View Services
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
