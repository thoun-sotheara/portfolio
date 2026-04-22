"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface Experiment {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  status: "live" | "archived" | "wip";
}

const EXPERIMENTS: Experiment[] = [
  {
    id: "morphing-buttons",
    title: "Morphing Button States",
    description:
      "Smooth shape-shifting buttons that morph between idle, hover, and active states using SVG path interpolation. Demonstrates advanced Framer Motion SVG capabilities.",
    tags: ["Framer Motion", "SVG", "Interaction Design"],
    status: "live",
  },
  {
    id: "scroll-parallax-text",
    title: "Scroll-Triggered Parallax Typography",
    description:
      "Text that responds to scroll velocity and viewport position. Each letter has independent depth and optical weight based on scroll acceleration.",
    tags: ["GSAP", "Web API", "Typography"],
    status: "live",
  },
  {
    id: "glassmorphism-card",
    title: "Multi-Layer Glassmorphism",
    description:
      "Nested glass-effect cards with realistic depth, light refraction simulation, and backdrop blur layering. Explores the limits of CSS backdrop-filter.",
    tags: ["CSS", "Design System", "Glass UI"],
    status: "live",
  },
  {
    id: "data-viz",
    title: "Real-Time Data Visualization",
    description:
      "Canvas-based animated charts that sync with live WebSocket data. Maintains 60fps while rendering 1000+ data points per frame.",
    tags: ["Canvas", "WebSockets", "Performance"],
    status: "live",
  },
  {
    id: "micro-interactions",
    title: "500+ Micro-Interaction Library",
    description:
      "Reusable motion primitives: hover states, loading spinners, success confirmations, and error patterns. All tuned for human perception and delight.",
    tags: ["Component Library", "Motion Design", "Accessibility"],
    status: "live",
  },
  {
    id: "ai-chat-ui",
    title: "AI Chat Interface Prototype",
    description:
      "Streaming message UI with typing indicators, code block highlighting, and markdown rendering. Explores optimal UX for conversational AI.",
    tags: ["UI/UX", "React", "Streaming"],
    status: "wip",
  },
];

const STATUS_COLOR = {
  live: "rgba(100,210,170,0.15)",
  archived: "rgba(200,160,80,0.12)",
  wip: "rgba(200,120,180,0.15)",
};

const STATUS_TEXT = {
  live: "rgba(150,255,200,0.85)",
  archived: "rgba(230,180,100,0.7)",
  wip: "rgba(230,180,220,0.8)",
};

function ExperimentCard({ exp, index }: { exp: Experiment; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: (index % 3) * 0.08,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-surface transition-all duration-500 hover:border-accent/30"
    >
      {/* Ambient glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at 60% 30%, rgba(124,110,224,0.1), transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative flex flex-1 flex-col gap-4 p-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-base font-semibold tracking-tight text-ink-primary">
              {exp.title}
            </h3>
          </div>
          {exp.link && (
            <motion.div
              className="ml-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              whileHover={{ x: 3, y: -3 }}
            >
              <ArrowUpRight className="h-4 w-4 stroke-[2] text-accent/60" />
            </motion.div>
          )}
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed text-ink-secondary">
          {exp.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium tracking-wide border border-white/[0.08]"
              style={{
                background: "rgba(255,255,255,0.03)",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: Status badge */}
      <div
        className="flex items-center gap-2 border-t px-6 py-3"
        style={{ borderColor: "rgba(255,255,255,0.04)" }}
      >
        <div
          className="h-2 w-2 rounded-full"
          style={{ background: STATUS_TEXT[exp.status] }}
        />
        <span
          className="label-text text-[9px] capitalize"
          style={{ color: STATUS_TEXT[exp.status] }}
        >
          {exp.status === "wip" ? "Work in Progress" : exp.status}
        </span>
      </div>

      {/* Link overlay (if provided) */}
      {exp.link && (
        <a
          href={exp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`View ${exp.title}`}
        />
      )}
    </motion.div>
  );
}

export function Lab() {
  return (
    <section
      id="lab"
      className="relative mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-40"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 flex flex-col gap-3"
      >
        <div className="flex items-center gap-4">
          <span className="label-text text-ink-tertiary">Creative Experiments</span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
        </div>
        <h2 className="text-4xl font-semibold tracking-tight text-ink-primary lg:text-5xl">
          Building in the open.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-ink-secondary">
          A collection of pure UI explorations, motion studies, and custom
          components. These are the ideas I prototype to stay sharp and push
          the boundaries of what's possible on the web.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERIMENTS.map((exp, i) => (
          <ExperimentCard key={exp.id} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
