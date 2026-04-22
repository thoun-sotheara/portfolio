"use client";

/**
 * FeaturedWork — "The Signal / Noise Dossier" Layout
 *
 * Structure:
 *   • One full-width "Hero Case File" — horizontal split:
 *       Left  (58%) → Floating browser-framed UI mockup
 *       Right (42%) → Editorial technical brief with numbered Problem/Solution pairs
 *
 *   • Three-column "Secondary Case Files" — each card has two states:
 *       Signal Mode (default)  → polished UI preview + headline metrics
 *       Noise Mode  (hover)    → slides up raw technical details
 *
 * The deliberate tension between Signal and Noise communicates that
 * the visual polish is *earned*, not accidental.
 */

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { PORTFOLIO } from "@/lib/portfolio-data";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface TechBadge {
  label: string;
  category: "frontend" | "backend" | "infra" | "state";
}

interface ProblemSolution {
  index: string;
  problem: string;
  solution: string;
}

interface Project {
  id: string;
  indexLabel: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  screenshot: string;
  metrics: { label: string; value: string }[];
  techStack: TechBadge[];
  problems: ProblemSolution[];
  accentHue: string; // CSS hsl string for accent
  gradientFrom: string;
  gradientTo: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const CATEGORY_COLORS: Record<TechBadge["category"], string> = {
  frontend: "rgba(124,110,224,0.2)",
  backend: "rgba(46,160,120,0.2)",
  infra: "rgba(220,160,60,0.2)",
  state: "rgba(200,80,80,0.2)",
};

const CATEGORY_TEXT: Record<TechBadge["category"], string> = {
  frontend: "rgba(168,158,240,0.9)",
  backend: "rgba(100,210,170,0.9)",
  infra: "rgba(230,180,100,0.9)",
  state: "rgba(230,120,120,0.9)",
};

const projects: Project[] = [
  {
    id: "saas-inventory",
    indexLabel: "01",
    title: "E-commerce Inventory Dashboard",
    subtitle: "Real-time stock management & order fulfillment",
    category: "SaaS / B2B",
    year: "2024",
    screenshot: PORTFOLIO.screenshotPos,
    accentHue: "hsl(250,70%,65%)",
    gradientFrom: "rgba(91,79,207,0.18)",
    gradientTo: "rgba(124,110,224,0.06)",
    metrics: [
      { label: "Performance gain", value: "+312%" },
      { label: "Users", value: "2,500+" },
      { label: "Uptime", value: "99.95%" },
    ],
    techStack: [
      { label: "Next.js 15", category: "frontend" },
      { label: "React Query", category: "state" },
      { label: "Tailwind CSS", category: "frontend" },
      { label: "WebSockets", category: "infra" },
      { label: "Node.js", category: "backend" },
      { label: "PostgreSQL", category: "backend" },
      { label: "Redis", category: "infra" },
    ],
    problems: [
      {
        index: "01",
        problem: "Manual inventory tracking across multiple warehouses caused stockouts and overselling, costing $50K/month in lost revenue.",
        solution: "Built real-time inventory sync with WebSocket pub/sub. Stock levels update instantly across all locations with conflict resolution.",
      },
      {
        index: "02",
        problem: "Order processing took 4-6 hours due to legacy system bottlenecks. Customers demanded same-day fulfillment.",
        solution: "Architected new fulfillment pipeline with optimistic UI updates and service-worker-backed transaction queues. Processing time: 8 minutes.",
      },
      {
        index: "03",
        problem: "Dashboard loading 5-10 seconds with complex inventory reports and stock forecasting.",
        solution: "Shifted aggregations to PostgreSQL materialized views. React Query handles caching with stale-while-revalidate. Instant load times.",
      },
    ],
  },
  {
    id: "ecommerce-platform",
    indexLabel: "02",
    title: "E-commerce Conversion Platform",
    subtitle: "High-performance storefront with real-time personalization",
    category: "E-commerce",
    year: "2023",
    screenshot: PORTFOLIO.screenshotEcom,
    accentHue: "hsl(170,60%,50%)",
    gradientFrom: "rgba(46,160,120,0.15)",
    gradientTo: "rgba(46,160,120,0.04)",
    metrics: [
      { label: "Conversion lift", value: "+42%" },
      { label: "LCP", value: "0.8s" },
      { label: "Revenue/mo", value: "$280K" },
    ],
    techStack: [
      { label: "Next.js App Router", category: "frontend" },
      { label: "Server Components", category: "frontend" },
      { label: "Stripe API", category: "backend" },
      { label: "Tailwind CSS", category: "frontend" },
      { label: "Contentful CMS", category: "infra" },
    ],
    problems: [
      {
        index: "01",
        problem: "Product catalog with 2,000+ SKUs was slow. Filter interactions blocked main thread. Customers bounced before adding to cart.",
        solution: "Moved all filtering server-side via Next.js Server Components. URL-driven state keeps client lightweight. Filter responds in <100ms.",
      },
      {
        index: "02",
        problem: "Cart hydration mismatch between SSR and client caused layout shifts and checkout abandonment.",
        solution: "Decoupled cart state into client-only Zustand store with localStorage. Defer cart UI until hydration complete.",
      },
      {
        index: "03",
        problem: "Checkout page had 28% abandonment due to slow payment processing and unclear error states.",
        solution: "Implemented optimistic Stripe payment flow with real-time confirmation. Clear feedback at every step. Abandonment dropped to 8%.",
      },
    ],
  },
  {
    id: "design-system",
    indexLabel: "03",
    title: "Enterprise Design System",
    subtitle: "Scalable UI component library & brand system",
    category: "Design System",
    year: "2022",
    screenshot: PORTFOLIO.screenshotDesignSystem,
    accentHue: "hsl(35,80%,60%)",
    gradientFrom: "rgba(220,160,60,0.15)",
    gradientTo: "rgba(220,160,60,0.04)",
    metrics: [
      { label: "Components", value: "120+" },
      { label: "Teams using", value: "8" },
      { label: "Dev time saved", value: "-60%" },
    ],
    techStack: [
      { label: "Radix UI", category: "frontend" },
      { label: "Tailwind CSS", category: "frontend" },
      { label: "TypeScript", category: "frontend" },
      { label: "Storybook", category: "infra" },
      { label: "Changesets", category: "infra" },
    ],
    problems: [
      {
        index: "01",
        problem: "8 different teams building different Button, Modal, and Form components. Zero consistency. WCAG compliance audit failed.",
        solution: "Centralized component library on Radix UI primitives with strict TypeScript contracts. All a11y baked in. Single source of truth.",
      },
      {
        index: "02",
        problem: "Every app shipped its own CSS. Total bundle: 540KB. New feature deployments took days to coordinate across teams.",
        solution: "Tree-shakeable named exports, per-component CSS extraction. Bundle: 68KB. Teams ship independently in hours.",
      },
    ],
  },
];

// ─── Shared animation variants ─────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Tech badge ────────────────────────────────────────────────────────────────

function TechBadgeChip({ badge }: { badge: TechBadge }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide"
      style={{
        background: CATEGORY_COLORS[badge.category],
        color: CATEGORY_TEXT[badge.category],
        border: `1px solid ${CATEGORY_COLORS[badge.category].replace("0.2", "0.4")}`,
      }}
    >
      {badge.label}
    </span>
  );
}

// ─── UI Mockup panel ────────────────────────────────────────────────────────────

function BrowserMockup({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-xl border",
        "border-white/[0.07] bg-surface shadow-2xl",
        className
      )}
      style={{
        boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.06)`,
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-surface-raised px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <div className="mx-3 flex h-5 flex-1 items-center rounded bg-void/60 px-2.5">
          <span className="label-text text-ink-tertiary">
            app.{project.id}.io / dashboard
          </span>
        </div>
      </div>

      {/* Screen content */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at 30% 40%, ${project.gradientFrom}, transparent 60%),
                       radial-gradient(ellipse at 80% 70%, ${project.gradientTo}, transparent 55%),
                       #111111`,
        }}
      >
        <Image
          src={project.screenshot}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-top opacity-90"
          priority={project.indexLabel === "01"}
        />

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(5,5,5,0.04) 0%, rgba(5,5,5,0.12) 40%, rgba(5,5,5,0.38) 100%), radial-gradient(ellipse at 15% 20%, ${project.gradientFrom}, transparent 42%)`,
          }}
        />

        {/* Subtle UI grid lines */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute inset-x-4 top-4 flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/25 px-3 py-2 backdrop-blur-md">
          <div className="h-2 w-2 rounded-full bg-white/30" />
          <div className="h-2 w-2 rounded-full bg-white/18" />
          <div className="h-2 w-2 rounded-full bg-white/12" />
          <div className="ml-2 h-2.5 w-28 rounded-full bg-white/[0.08]" />
        </div>

        <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-white/[0.08] bg-black/28 px-3 py-3 backdrop-blur-md"
            >
              <div className="text-sm font-semibold text-white/90">{metric.value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/45">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Subtle reflection */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1/3"
          style={{
            background: `linear-gradient(to bottom, rgba(255,255,255,0.025), transparent)`,
          }}
        />
      </div>
    </div>
  );
}

// ─── Hero Case File (full-width featured project) ──────────────────────────────

function HeroCaseFile({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-surface"
      style={{
        boxShadow: `0 2px 0 rgba(255,255,255,0.04) inset, 0 40px 120px rgba(0,0,0,0.4)`,
      }}
    >
      {/* Ambient glow behind card */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-40"
        style={{
          background: `radial-gradient(ellipse at 20% 50%, ${project.gradientFrom}, transparent 60%)`,
        }}
      />

      <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-[58fr_42fr]">
        {/* ── Left: Visual panel ── */}
        <motion.div
          variants={itemVariants}
          className="relative flex flex-col justify-center border-b border-white/[0.05] p-8 lg:border-b-0 lg:border-r lg:p-12"
        >
          {/* Category label */}
          <div className="mb-6 flex items-center gap-3">
            <span
              className="label-text"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              {project.category}
            </span>
            <span className="h-px flex-1 bg-white/[0.06]" />
            <span
              className="label-text font-mono"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              {project.year}
            </span>
          </div>

          <BrowserMockup project={project} />

          {/* Metrics row */}
          <div className="mt-6 flex gap-6">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <span
                  className="text-2xl font-semibold tracking-tight"
                  style={{ color: project.accentHue }}
                >
                  {m.value}
                </span>
                <span className="label-text text-ink-tertiary">{m.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: Technical brief ── */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center p-8 lg:p-12"
        >
          {/* Index + title */}
          <div className="mb-8">
            <span
              className="font-mono text-5xl font-bold leading-none tracking-tighter opacity-10"
              style={{ color: project.accentHue }}
            >
              {project.indexLabel}
            </span>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink-primary lg:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-ink-secondary">{project.subtitle}</p>
          </div>

          {/* Tech stack */}
          <div className="mb-8 flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <TechBadgeChip key={t.label} badge={t} />
            ))}
          </div>

          {/* Problem / Solution pairs */}
          <div className="space-y-6">
            {project.problems.map((ps, i) => (
              <motion.div
                key={ps.index}
                variants={itemVariants}
                className="group relative border-l-2 pl-5"
                style={{ borderColor: `${project.accentHue}30` }}
              >
                {/* Connector dot */}
                <div
                  className="absolute -left-[5px] top-1 h-2 w-2 rounded-full transition-all duration-500 group-hover:scale-150"
                  style={{ background: project.accentHue, opacity: 0.6 }}
                />

                <div className="mb-1 flex items-center gap-2">
                  <span
                    className="label-text opacity-40"
                    style={{ color: project.accentHue }}
                  >
                    Problem {ps.index}
                  </span>
                </div>
                <p className="mb-2 text-xs leading-relaxed text-ink-secondary">
                  {ps.problem}
                </p>
                <div className="flex items-start gap-2">
                  <span
                    className="label-text mt-0.5 shrink-0"
                    style={{ color: project.accentHue, opacity: 0.7 }}
                  >
                    →
                  </span>
                  <p className="text-xs leading-relaxed text-ink-primary/80">
                    {ps.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Secondary Case File card (Signal / Noise toggle) ──────────────────────────

function SecondaryCard({ project }: { project: Project }) {
  const [isNoise, setIsNoise] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-surface"
      style={{
        boxShadow: `0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 60px rgba(0,0,0,0.3)`,
      }}
      onMouseEnter={() => setIsNoise(true)}
      onMouseLeave={() => setIsNoise(false)}
    >
      {/* Ambient tint */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${project.gradientFrom.replace("0.18", "0.12")}, transparent 65%)`,
        }}
      />

      {/* Header */}
      <div className="relative flex items-start justify-between border-b border-white/[0.05] p-6">
        <div>
          <span
            className="font-mono text-4xl font-bold leading-none tracking-tighter opacity-[0.08]"
            style={{ color: project.accentHue }}
          >
            {project.indexLabel}
          </span>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-ink-primary">
            {project.title}
          </h3>
          <p className="mt-0.5 text-xs text-ink-tertiary">{project.subtitle}</p>
        </div>
        {/* Mode toggle indicator */}
        <div className="flex flex-col items-end gap-1">
          <span
            className="label-text transition-colors duration-300"
            style={{
              color: isNoise
                ? project.accentHue
                : "rgba(255,255,255,0.18)",
            }}
          >
            {isNoise ? "NOISE" : "SIGNAL"}
          </span>
          <div className="flex gap-1">
            <div
              className="h-1 w-6 rounded-full transition-all duration-300"
              style={{
                background: isNoise
                  ? "rgba(255,255,255,0.15)"
                  : project.accentHue,
                opacity: isNoise ? 0.4 : 0.8,
              }}
            />
            <div
              className="h-1 w-6 rounded-full transition-all duration-300"
              style={{
                background: isNoise
                  ? project.accentHue
                  : "rgba(255,255,255,0.15)",
                opacity: isNoise ? 0.8 : 0.4,
              }}
            />
          </div>
        </div>
      </div>

      {/* Content area — animates between Signal and Noise */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          {!isNoise ? (
            /* SIGNAL MODE — visual preview */
            <motion.div
              key="signal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-6"
            >
              <BrowserMockup project={project} className="mb-5" />

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex flex-col gap-1 rounded-lg border border-white/[0.05] bg-void/40 p-3"
                  >
                    <span
                      className="text-base font-semibold tracking-tight"
                      style={{ color: project.accentHue }}
                    >
                      {m.value}
                    </span>
                    <span className="label-text text-ink-tertiary leading-tight">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* NOISE MODE — technical details */
            <motion.div
              key="noise"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 p-6"
            >
              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((t) => (
                  <TechBadgeChip key={t.label} badge={t} />
                ))}
              </div>

              {/* Problem/Solution pairs */}
              <div className="space-y-4">
                {project.problems.map((ps) => (
                  <div
                    key={ps.index}
                    className="relative border-l-2 pl-4"
                    style={{ borderColor: `${project.accentHue}30` }}
                  >
                    <span
                      className="label-text mb-1 block"
                      style={{ color: project.accentHue, opacity: 0.6 }}
                    >
                      Problem {ps.index}
                    </span>
                    <p className="mb-2 text-xs leading-relaxed text-ink-secondary">
                      {ps.problem}
                    </p>
                    <p className="text-xs leading-relaxed text-ink-primary/75">
                      <span
                        className="mr-1 font-semibold"
                        style={{ color: project.accentHue }}
                      >
                        →
                      </span>
                      {ps.solution}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom border glow on hover */}
      <div
        className="absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentHue}, transparent)`,
        }}
      />
    </motion.div>
  );
}

// ─── Section header ─────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="label-text text-ink-tertiary">{children}</span>
      <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
    </div>
  );
}

// ─── Public component ──────────────────────────────────────────────────────────

export function FeaturedWork() {
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <section
      id="work"
      className="relative mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-40"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <SectionLabel>Selected Work</SectionLabel>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-ink-primary lg:text-5xl">
          Problems solved, visually.
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-secondary">
          Hover any card to switch between{" "}
          <span className="text-ink-primary">Signal</span> — the polished output —
          and{" "}
          <span className="text-ink-primary">Noise</span> — the engineering
          decisions that made it possible.
        </p>
      </motion.div>

      {/* Hero Case File */}
      <div className="mb-8">
        <HeroCaseFile project={featuredProject} />
      </div>

      {/* Secondary grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {secondaryProjects.map((project) => (
          <SecondaryCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
