"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "🏡 Real Estate Platforms",
    description:
      "Advanced property listings, interactive maps, dynamic filtration engines, and clean lead-capture layouts built specifically for agents and agencies looking to dominate the market.",
  },
  {
    title: "☕ E-Commerce & F&B Solutions",
    description:
      "Sleek, lightning-fast digital menus, ordering workflows, and beautiful gallery showcases designed to turn online visitors into paying customers for cafes and restaurants.",
  },
  {
    title: "🛠️ Custom Web Apps & Audits",
    description:
      "Comprehensive code inspection, bug crushing, database speed optimization, and performance tuning to ensure your software works flawlessly under heavy user traffic.",
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
          </motion.article>
        ))}
      </div>
    </section>
  );
}
