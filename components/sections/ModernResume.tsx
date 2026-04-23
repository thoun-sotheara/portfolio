import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

type ProjectItem = {
  title: string;
  summary: string;
  techStack: string;
};

const experiences: ExperienceItem[] = [
  {
    role: "Frontend Engineer",
    company: "Tasun Property",
    period: "2024 - Present",
    bullets: [
      "Designed and shipped enterprise property workflows with consistent UX patterns.",
      "Improved page performance by 40% through rendering and asset optimization.",
      "Built reusable component foundations to accelerate cross-team delivery.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Independent SaaS Projects",
    period: "2021 - 2024",
    bullets: [
      "Delivered scalable SaaS systems with real-time inventory and operations visibility.",
      "Implemented resilient APIs and data models that reduced operational friction.",
      "Translated product strategy into measurable business and engineering outcomes.",
    ],
  },
];

const projects: ProjectItem[] = [
  {
    title: "SaaS POS",
    summary:
      "A multi-tenant point-of-sale platform focused on real-time inventory, operational accuracy, and reliable transaction flows.",
    techStack: "Next.js, TypeScript, Node.js, Firestore, Tailwind CSS",
  },
  {
    title: "E-commerce",
    summary:
      "A performance-focused commerce ecosystem that improves customer journey completion and supports secure payment interactions.",
    techStack: "Next.js, React, Stripe, Node.js, Tailwind CSS",
  },
];

const skillGroups = {
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Firestore", "REST APIs", "Realtime Systems"],
  Tools: ["GitHub", "Vercel", "Figma", "Performance Auditing"],
};

export function ModernResume() {
  return (
    <section className="mx-auto w-full max-w-[1080px] bg-white text-slate-900 print:max-w-none">
      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_22px_55px_rgba(15,23,42,0.06)] print:rounded-none print:shadow-none">
        <div className="grid grid-cols-1 print:grid-cols-[30%_70%] md:grid-cols-[30%_70%]">
          <aside className="border-b border-slate-200 bg-[#F9FAFB] px-6 py-8 print:border-b-0 print:border-r md:border-b-0 md:border-r">
            <div className="mx-auto w-fit">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border border-slate-300">
                <Image
                  src="/images/portrait.png"
                  alt="Thoun Sotheara portrait"
                  fill
                  sizes="112px"
                  className="object-cover grayscale"
                  priority
                />
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <section>
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                  Contact
                </h3>
                <ul className="mt-3 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-slate-500" />
                    <a href="mailto:samakisolution@gmail.com" className="hover:underline">
                      samakisolution@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Linkedin className="h-4 w-4 text-slate-500" />
                    <a
                      href="https://www.linkedin.com/in/thoun-sotheara"
                      className="hover:underline"
                    >
                      linkedin.com/in/thoun-sotheara
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Github className="h-4 w-4 text-slate-500" />
                    <a href="https://github.com/thoun-sotheara" className="hover:underline">
                      thoun-sotheara
                    </a>
                  </li>
                </ul>
              </section>

              <section className="border-t border-slate-200 pt-5">
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                  Skills
                </h3>
                <div className="mt-3 space-y-4">
                  {Object.entries(skillGroups).map(([category, skills]) => (
                    <div key={category}>
                      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                        {category}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] text-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="border-t border-slate-200 pt-5">
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                  Education
                </h3>
                <div className="mt-3 space-y-3 text-sm text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-900">Bachelor of Computer Science</p>
                    <p className="text-slate-600">Royal University of Phnom Penh</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Certifications</p>
                    <p className="text-slate-600">
                      Frontend Architecture, Product UI Engineering
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </aside>

          <div className="px-7 py-8 print:px-8 sm:px-10">
            <header className="border-b border-slate-200 pb-6">
              <h1 className="text-[32px] font-bold uppercase tracking-[0.06em] text-slate-900 sm:text-[36px]">
                Thoun Sotheara
              </h1>
              <p className="mt-2 text-[16px] font-medium text-slate-700">
                Full-Stack Engineer | IT Manager
              </p>
              <p className="mt-4 max-w-3xl font-serif text-[17px] italic leading-relaxed text-slate-600">
                "Complexity is the engine; simplicity is the steering wheel. I bridge the gap."
              </p>
            </header>

            <section className="border-b border-slate-200 py-6">
              <h2 className="text-[18px] font-semibold text-slate-900">Experience</h2>

              <div className="relative mt-4 space-y-6 pl-6 before:absolute before:bottom-0 before:left-1.5 before:top-0 before:w-px before:bg-slate-300">
                {experiences.map((item) => (
                  <article key={`${item.company}-${item.period}`} className="relative">
                    <span className="absolute -left-[1.45rem] top-1.5 h-3 w-3 rounded-full border border-slate-300 bg-white" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-[15px] font-semibold text-slate-900">
                        <span className="font-bold">{item.company}</span> - {item.role}
                      </h3>
                      <p className="text-[12px] text-slate-500">{item.period}</p>
                    </div>
                    <ul className="mt-2 list-disc pl-5 text-[13px] leading-6 text-slate-700">
                      {item.bullets.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="border-b border-slate-200 py-6">
              <h2 className="text-[18px] font-semibold text-slate-900">Key Projects</h2>

              <div className="mt-4 grid grid-cols-1 gap-4">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-4"
                  >
                    <h3 className="text-[15px] font-semibold text-slate-900">{project.title}</h3>
                    <p className="mt-1 text-[13px] leading-6 text-slate-700">{project.summary}</p>
                    <p className="mt-2 text-[12px] text-slate-500">
                      Tech Stack: {project.techStack}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="pt-6">
              <h2 className="text-[18px] font-semibold text-slate-900">Philosophy</h2>
              <p className="mt-3 text-[14px] leading-7 text-slate-700">
                I approach product engineering as a balance between system depth and
                user clarity. I break down complex workflows into simple, deliberate
                interactions, then iterate on performance, resilience, and visual
                quality until the experience feels effortless.
              </p>
            </section>
          </div>
        </div>
      </article>
    </section>
  );
}