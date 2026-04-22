import type { Metadata } from "next";
import { PORTFOLIO, RESUME_DATA } from "@/lib/portfolio-data";
import { ResumeActions } from "@/components/ui/ResumeActions";

export const metadata: Metadata = {
  title: `${PORTFOLIO.name} Resume`,
  description: `Resume for ${PORTFOLIO.name}, ${PORTFOLIO.role}.`,
};

export default async function ResumePage({
  searchParams,
}: {
  searchParams: Promise<{ download?: string }>;
}) {
  const params = await searchParams;
  const autoPrint = params.download === "1";

  return (
    <main className="resume-print-root min-h-screen bg-[#efebe2] px-4 py-8 text-slate-900 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <div className="resume-no-print flex items-center justify-between gap-4 rounded-[24px] border border-black/5 bg-white px-6 py-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Printable Resume
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">
              {PORTFOLIO.name}
            </h1>
          </div>
          <ResumeActions autoPrint={autoPrint} />
        </div>

        <section className="resume-card-print overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="border-b border-slate-200 px-8 py-8 lg:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {PORTFOLIO.role}
                </p>
                <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
                  {PORTFOLIO.name}
                </h2>
                <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-700">
                  {RESUME_DATA.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2 lg:min-w-[360px]">
                <a
                  href={`mailto:${PORTFOLIO.email}`}
                  className="transition-colors hover:text-slate-950"
                >
                  {PORTFOLIO.email}
                </a>
                <a
                  href={PORTFOLIO.github}
                  className="transition-colors hover:text-slate-950"
                >
                  {PORTFOLIO.github.replace("https://", "")}
                </a>
                <a
                  href={PORTFOLIO.facebook}
                  className="transition-colors hover:text-slate-950"
                >
                  {PORTFOLIO.facebook.replace("https://", "")}
                </a>
                <p>{PORTFOLIO.siteUrl}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                {
                  label: "Experience",
                  value: `${PORTFOLIO.yearsExperience}+ years`,
                },
                {
                  label: "Projects",
                  value: `${PORTFOLIO.projectsCompleted}+ shipped`,
                },
                {
                  label: "Live SaaS",
                  value: `${PORTFOLIO.liveSaasProducts} products`,
                },
                { label: "Focus", value: "SaaS + E-commerce" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid resume-grid-print grid-cols-1 gap-0 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="border-b border-slate-200 px-8 py-8 lg:border-b-0 lg:border-r lg:px-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Selected Experience
                </p>
                <div className="mt-5 space-y-5">
                  {RESUME_DATA.highlights.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-3xl border border-slate-200 px-5 py-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-accent">
                            {item.impact}
                          </p>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        {item.body}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Delivery Approach
                </p>
                <div className="mt-4 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-5">
                  <p className="text-sm leading-7 text-slate-700">
                    I lead with the critical path: data shape, performance
                    budget, and user feedback loops first. Motion and polish
                    come after the system is measurable, reliable, and
                    accessible.
                  </p>
                </div>
              </div>
            </div>

            <aside className="space-y-8 px-8 py-8 lg:px-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Core Competencies
                </p>
                <ul className="mt-4 space-y-2.5 text-sm leading-7 text-slate-700">
                  {RESUME_DATA.strengths.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Technology
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {RESUME_DATA.techStack.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium tracking-[0.02em] text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Availability
                </p>
                <div className="mt-4 rounded-3xl border border-slate-200 px-5 py-5 text-sm leading-7 text-slate-700">
                  <p>Available for full-time roles and select freelance work.</p>
                  <p className="mt-2">
                    Primary focus: performant frontend systems, SaaS products,
                    and e-commerce workflows.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}