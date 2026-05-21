"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Ultra-Fast Loading Speeds",
    description:
      "Sites that load under 2 seconds so you never lose a mobile customer.",
    outcome: "Best for: local businesses that depend on mobile traffic.",
  },
  {
    title: "Automated Business Systems",
    description:
      "Connect your website directly to your Telegram, WhatsApp, or POS system.",
    outcome: "Best for: teams that want fewer manual follow-ups.",
  },
  {
    title: "Google Maps & Search Visibility",
    description:
      "Get your business found easily by local customers on Google.",
    outcome: "Best for: owners who want more nearby customer discovery.",
  },
  {
    title: "Website Rescue & Bug Fixing",
    description:
      "Is your current website slow, broken on mobile, or glitching? I offer 24-hour emergency support to patch your bugs and get your business back online fast.",
    outcome: "Best for: urgent fixes that cannot wait.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 flex flex-col gap-3"
      >
        <div className="flex items-center gap-4">
          <span className="label-text text-ink-tertiary">Services We Offer</span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
        </div>
        <h2 className="text-4xl font-semibold tracking-tight text-ink-primary lg:text-5xl">
          Built for local business growth.
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-ink-secondary">
          Premium digital systems engineered to convert more customers, run faster,
          and scale your operations with confidence.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-tertiary">
          Every project is delivery-focused: clear timeline, measurable KPI targets,
          and handover-ready code your team can maintain.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors duration-300 hover:border-accent/40"
          >
            <div className="mb-4 h-10 w-10 rounded-xl border border-white/15 bg-white/5" />
            <h3 className="text-lg font-semibold tracking-tight text-ink-primary">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink-secondary">
              {service.description}
            </p>
            <p className="mt-3 text-xs text-ink-tertiary">{service.outcome}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
