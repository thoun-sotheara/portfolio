"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Skill {
  name: string;
  level: number; // 0–100, drives the bar width
  category: "core" | "strong" | "proficient";
}

interface TechGroup {
  title: string;
  icon: string;
  skills: Skill[];
}

const ENGINE: TechGroup[] = [
  {
    title: "Frontend Core",
    icon: "◈",
    skills: [
      { name: "Next.js / React", level: 95, category: "core" },
      { name: "TypeScript", level: 92, category: "core" },
      { name: "Tailwind CSS", level: 96, category: "core" },
      { name: "Framer Motion", level: 88, category: "strong" },
      { name: "Radix UI / Shadcn", level: 90, category: "core" },
    ],
  },
  {
    title: "State & Data",
    icon: "◎",
    skills: [
      { name: "React Query / TanStack", level: 90, category: "core" },
      { name: "Zustand", level: 88, category: "strong" },
      { name: "Redux Toolkit", level: 80, category: "strong" },
      { name: "WebSockets / SSE", level: 82, category: "strong" },
      { name: "GraphQL / tRPC", level: 75, category: "proficient" },
    ],
  },
  {
    title: "Backend Layer",
    icon: "◉",
    skills: [
      { name: "Node.js / Express", level: 85, category: "strong" },
      { name: "PostgreSQL", level: 82, category: "strong" },
      { name: "Redis", level: 76, category: "proficient" },
      { name: "Prisma / Drizzle", level: 84, category: "strong" },
      { name: "REST / API Design", level: 90, category: "core" },
    ],
  },
  {
    title: "Infrastructure",
    icon: "◐",
    skills: [
      { name: "Vercel / Edge Runtime", level: 90, category: "core" },
      { name: "Docker", level: 72, category: "proficient" },
      { name: "CI/CD (GitHub Actions)", level: 80, category: "strong" },
      { name: "Supabase / PlanetScale", level: 78, category: "proficient" },
    ],
  },
];

const CATEGORY_COLOR = {
  core: "rgba(124,110,224,0.85)",
  strong: "rgba(100,190,160,0.75)",
  proficient: "rgba(200,160,80,0.65)",
};

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="flex items-center gap-4">
      <span className="w-40 shrink-0 text-xs text-ink-secondary lg:text-[13px]">
        {skill.name}
      </span>
      <div className="relative h-px flex-1 bg-white/[0.06]">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{
            delay,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute left-0 top-0 h-full origin-left rounded-full"
          style={{
            width: `${skill.level}%`,
            background: CATEGORY_COLOR[skill.category],
            boxShadow: `0 0 6px ${CATEGORY_COLOR[skill.category]}`,
          }}
        />
      </div>
      <span className="w-8 text-right font-mono text-[10px] text-ink-tertiary">
        {skill.level}
      </span>
    </div>
  );
}

function EngineGroup({
  group,
  groupIndex,
}: {
  group: TechGroup;
  groupIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: groupIndex * 0.08,
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col gap-5 rounded-xl border border-white/[0.06] bg-surface p-6"
    >
      <div className="flex items-center gap-3">
        <span className="text-lg text-accent/60">{group.icon}</span>
        <h3 className="text-sm font-semibold tracking-wide text-ink-primary">
          {group.title}
        </h3>
      </div>
      <div className="flex flex-col gap-3.5">
        {group.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            delay={groupIndex * 0.06 + i * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function TechStack() {
  return (
    <section
      id="stack"
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
          <span className="label-text text-ink-tertiary">The Engine</span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
        </div>
        <h2 className="text-4xl font-semibold tracking-tight text-ink-primary lg:text-5xl">
          Full-stack, frontend-first.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-ink-secondary">
          Deep competency from design system to database. The bars reflect
          real project usage, not self-assessment.
        </p>

        {/* Legend */}
        <div className="flex flex-wrap gap-5 pt-2">
          {(
            Object.entries(CATEGORY_COLOR) as [
              keyof typeof CATEGORY_COLOR,
              string
            ][]
          ).map(([cat, color]) => (
            <div key={cat} className="flex items-center gap-2">
              <div
                className="h-2 w-6 rounded-full"
                style={{ background: color }}
              />
              <span className="label-text capitalize text-ink-tertiary">
                {cat}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {ENGINE.map((group, i) => (
          <EngineGroup key={group.title} group={group} groupIndex={i} />
        ))}
      </div>
    </section>
  );
}
