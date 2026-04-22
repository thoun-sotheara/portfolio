"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProcessStep {
  index: string;
  title: string;
  body: string;
  annotation: string; // short technical aside
}

const STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Decompose the constraint.",
    body: "Every complex feature starts as an ambiguous requirement. Before writing a line of code, I map the constraint space: What does the user actually need? What does the system physically allow? Where do those two surfaces conflict? This gap is the real problem.",
    annotation: "Tools: Figma diagrams, miro, whiteboard sessions with stakeholders",
  },
  {
    index: "02",
    title: "Design the data shape first.",
    body: "UI is a function of data. I design the API contract and data model before touching the component tree. A well-shaped data structure makes the UI fall into place naturally — and prevents the 'it works but it's a mess' pattern that accumulates as tech debt.",
    annotation: "Deliverable: TypeScript interface definitions, API schema, ER diagram",
  },
  {
    index: "03",
    title: "Build the critical path, not the full surface.",
    body: "I prioritize the highest-risk, highest-value interactions first. Real-time sync, optimistic updates, offline queues — these are architectural decisions that become exponentially harder to retrofit. Everything else can be iterated. These cannot.",
    annotation: "Output: Working prototype with edge cases explicitly handled",
  },
  {
    index: "04",
    title: "Measure, then polish.",
    body: "Performance is not a final pass — but it is a measured one. I profile with Lighthouse and Chrome DevTools, establish Core Web Vitals baselines, and optimize the specific bottlenecks. Then, and only then, I apply the craft layer: motion, micro-interactions, spacing.",
    annotation: "Target: LCP < 1.2s, INP < 200ms, CLS < 0.1 before final polish",
  },
];

function Step({ step, index }: { step: ProcessStep; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative grid grid-cols-1 gap-8 border-b border-white/[0.05] py-12 last:border-b-0 lg:grid-cols-[1fr_2fr_1fr]"
    >
      {/* Index */}
      <div className="flex items-start">
        <span className="font-mono text-5xl font-bold leading-none tracking-tighter text-accent/10 transition-colors duration-500 group-hover:text-accent/20">
          {step.index}
        </span>
      </div>

      {/* Main content */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold leading-snug tracking-tight text-ink-primary lg:text-2xl">
          {step.title}
        </h3>
        <p className="text-base leading-[1.8] text-ink-secondary">{step.body}</p>
      </div>

      {/* Technical annotation */}
      <div className="flex items-start">
        <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-4">
          <span className="label-text mb-2 block text-accent/60">
            annotation
          </span>
          <p className="text-xs leading-relaxed text-ink-tertiary">
            {step.annotation}
          </p>
        </div>
      </div>

      {/* Connector line — visible on hover */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-accent/40 to-transparent transition-all duration-700 group-hover:w-full" />
    </motion.div>
  );
}

export function Process() {
  return (
    <section
      id="process"
      className="relative mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-40"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-4 flex flex-col gap-3"
      >
        <div className="flex items-center gap-4">
          <span className="label-text text-ink-tertiary">How I Think</span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
        </div>
        <h2 className="text-4xl font-semibold tracking-tight text-ink-primary lg:text-5xl">
          The problem-solving loop.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-ink-secondary">
          The process behind every complex feature. This is not a waterfall —
          each step informs the previous ones.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="mt-12">
        {STEPS.map((step, i) => (
          <Step key={step.index} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}
