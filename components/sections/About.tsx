"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 flex items-center gap-4"
      >
        <span className="label-text text-ink-tertiary">Who Am I</span>
        <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[44fr_56fr]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#090909]">
            <div className="aspect-[4/5] w-full cinematic-grain-overlay bg-cover bg-center" style={{ backgroundImage: "url(/images/portrait.png)" }}>
              {/* Fallback gradient if image not loaded */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_62%_28%,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.02)_34%,rgba(0,0,0,0.92)_73%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.0)_0%,rgba(255,255,255,0.06)_38%,rgba(0,0,0,0.35)_70%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-xl border border-white/[0.1] bg-black/35 px-4 py-3 backdrop-blur-sm">
                  <p className="text-xs tracking-[0.16em] text-white/45">SOTHEARA THOUN</p>
                  <p className="mt-1 text-sm font-medium text-white/80">Full-Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-ink-primary lg:text-5xl">
            Sotheara Thoun.
            <span className="block text-gradient-accent">Full-Stack Problem Solver.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-[1.9] text-ink-secondary lg:text-lg">
            I build high-stakes digital products where performance and clarity are non-negotiable.
            Over 6+ years, I&apos;ve delivered production systems from real-time POS workflows
            to high-conversion e-commerce journeys. My focus is translating complex architecture
            into interfaces that feel simple, trustworthy, and fast under pressure.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Realtime State Orchestration",
              "Critical Path Performance",
              "Accessible System Design",
              "Enterprise UI Reliability",
            ].map((pill) => (
              <div
                key={pill}
                className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3"
              >
                <Sparkles className="h-4 w-4 stroke-[1.65] text-accent/80" />
                <span className="text-sm text-ink-secondary">{pill}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <Quote className="h-5 w-5 stroke-[1.7] text-accent/85" />
            <p className="mt-3 text-lg italic leading-relaxed text-ink-primary/90">
              "Complexity is the engine; simplicity is the steering wheel. I bridge the gap between the two."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
