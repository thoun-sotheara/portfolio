"use client";

import { motion } from "framer-motion";

const METRICS = [
  {
    value: "<2s",
    label: "Typical load speed target",
  },
  {
    value: "+35%",
    label: "Average increase in inbound leads",
  },
  {
    value: "24h",
    label: "Emergency support response",
  },
];

export function BusinessMetrics() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-md lg:p-8"
      >
        <div className="flex items-center gap-4">
          <span className="label-text text-ink-tertiary">Business Impact</span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-4"
            >
              <p className="text-2xl font-semibold tracking-tight text-ink-primary">
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-ink-secondary">{metric.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
