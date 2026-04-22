"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Zap } from "lucide-react";

interface CaseStudy {
  project: string;
  challenge: string;
  approach: string;
  result: string;
  metric: string;
  codeSnippet: string;
  language: string;
}

const DEEP_DIVES: CaseStudy[] = [
  {
    project: "POS SaaS — Real-Time Terminal Sync",
    challenge:
      "200+ simultaneous point-of-sale terminals updating inventory in real-time caused race conditions and stale UI states during peak transaction bursts (50+ events/sec per terminal).",
    approach:
      "Implemented optimistic UI updates with a conflict-resolution queue using Redis pub/sub. Client state updates immediately via Zustand while server reconciles in background. If conflict detected, automatic rollback with zero user friction.",
    result:
      "Eliminated 99.7% of state inconsistencies. Maintained 60fps UI even under 10,000 concurrent events/sec across all terminals.",
    metric: "60fps sustained, <16ms frame budget",
    codeSnippet: `// Optimistic update + server reconciliation
const updateInventory = async (sku: string, qty: number) => {
  const optimisticId = generateId();
  
  // 1. Optimistic: update UI immediately
  store.setItem(sku, qty);
  addPendingUpdate(optimisticId, { sku, qty });
  
  // 2. Send to server (fire-and-forget)
  api.updateInventory({ sku, qty, optimisticId });
  
  // 3. Listen for server confirmation via WebSocket
  socket.once(\`ack:\${optimisticId}\`, (serverState) => {
    // If mismatch, reconcile gracefully
    if (serverState[sku] !== qty) {
      store.setItem(sku, serverState[sku]);
      showNotification("Resolved conflict");
    }
    removePendingUpdate(optimisticId);
  });
};`,
    language: "typescript",
  },
  {
    project: "E-commerce Platform — Critical Rendering Path",
    challenge:
      "Product catalog pages with 500+ SKUs were blocking the main thread on filter interactions. Largest Contentful Paint (LCP) was 3.2s; Input Delay (INP) exceeded 400ms, causing severe UX degradation.",
    approach:
      "Shifted heavy filtering to server-side rendering via Next.js 15 Server Components. URL-state-driven architecture means filter logic runs on server, returns pre-filtered streamed HTML. Client stays lightweight—filter UI weighs <2KB JS.",
    result:
      "LCP dropped to 0.9s. INP improved to 89ms. Core Web Vitals: all green. Conversion rate +28%.",
    metric: "LCP 0.9s, INP 89ms, CLS 0.01",
    codeSnippet: `// Server-side filtering via SearchParams
export default async function Catalog({ searchParams }) {
  const filters = parseFilters(searchParams);
  
  // Heavy lifting on server
  const products = await db.query(\`
    SELECT * FROM products
    WHERE category = ? AND price BETWEEN ? AND ?
    ORDER BY popularity DESC
    LIMIT 50
  \`, [filters.category, filters.priceMin, filters.priceMax]);
  
  return (
    <div>
      <FilterPanel currentFilters={filters} />
      <ProductGrid products={products} />
    </div>
  );
}`,
    language: "typescript",
  },
];

function CodeBlock({
  snippet,
  language,
}: {
  snippet: string;
  language: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/[0.08] bg-[#0a0a0a]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
        <span className="label-text text-ink-tertiary">{language}</span>
        <Code2 className="h-3.5 w-3.5 stroke-[2] text-accent/60" />
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="text-xs leading-relaxed text-ink-secondary">
          {snippet}
        </code>
      </pre>
    </div>
  );
}

function DeepDiveCard({ study, index }: { study: CaseStudy; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.12,
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="grid grid-cols-1 gap-6 rounded-2xl border border-white/[0.06] bg-surface p-8 lg:grid-cols-2 lg:p-12"
    >
      {/* Left: Challenge + Approach */}
      <div className="flex flex-col gap-6">
        {/* Index */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-4xl font-bold leading-none tracking-tighter text-accent/20">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Zap className="h-5 w-5 stroke-[1.8] text-accent/60" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold tracking-tight text-ink-primary">
          {study.project}
        </h3>

        {/* Challenge */}
        <div className="space-y-1.5">
          <span className="label-text text-accent/70">Challenge</span>
          <p className="text-sm leading-relaxed text-ink-secondary">
            {study.challenge}
          </p>
        </div>

        {/* Approach */}
        <div className="space-y-1.5">
          <span className="label-text text-accent/70">Approach</span>
          <p className="text-sm leading-relaxed text-ink-secondary">
            {study.approach}
          </p>
        </div>

        {/* Metric badge */}
        <div className="rounded-lg border border-accent/30 bg-accent/8 px-4 py-3">
          <span className="label-text block text-accent/60 mb-1">Result</span>
          <p className="text-base font-semibold text-accent">{study.metric}</p>
        </div>
      </div>

      {/* Right: Code + Result narrative */}
      <div className="flex flex-col gap-6">
        <CodeBlock snippet={study.codeSnippet} language={study.language} />

        <div className="space-y-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
          <span className="label-text text-ink-tertiary block">
            Performance Impact
          </span>
          <p className="text-sm leading-relaxed text-ink-primary">
            {study.result}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function TechnicalDeepDive() {
  return (
    <section
      id="deep-dive"
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
          <span className="label-text text-ink-tertiary">Performance Orchestration</span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
        </div>
        <h2 className="text-4xl font-semibold tracking-tight text-ink-primary lg:text-5xl">
          60fps under heavy load.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-ink-secondary">
          How I maintain frame-perfect performance while orchestrating real-time
          data streams, state mutations, and complex UI interactions. The
          invisible architecture that makes it all feel effortless.
        </p>
      </motion.div>

      {/* Case studies */}
      <div className="space-y-6">
        {DEEP_DIVES.map((study, i) => (
          <DeepDiveCard key={study.project} study={study} index={i} />
        ))}
      </div>
    </section>
  );
}
