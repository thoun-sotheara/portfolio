import type { Metadata } from "next";
import { PORTFOLIO } from "@/lib/portfolio-data";
import { ResumeActions } from "@/components/ui/ResumeActions";

export const metadata: Metadata = {
  title: `${PORTFOLIO.name} Resume`,
  description: "Mid-Level Full-Stack Developer and Frontend Specialist resume.",
};

export default async function ResumePage({
  searchParams,
}: {
  searchParams: Promise<{ download?: string }>;
}) {
  const params = await searchParams;
  const autoPrint = params.download === "1";

  return (
    <main className="min-h-screen bg-[#f6f7f9] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[900px] space-y-6">
        <div className="resume-no-print flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white px-6 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Resume
            </p>
            <h1 className="mt-1 text-[22px] font-bold text-[#1a1a1a]">
              Thoun Sotheara
            </h1>
          </div>
          <ResumeActions autoPrint={autoPrint} />
        </div>

        <section className="resume-sheet rounded-2xl border border-black/10 bg-white px-7 py-7 shadow-[0_24px_65px_rgba(0,0,0,0.06)] sm:px-10 sm:py-9">
          <header className="border-b border-black/10 pb-5">
            <h2 className="text-[22pt] font-bold leading-tight text-[#1a1a1a]">
              Thoun Sotheara
            </h2>
            <p className="mt-1 text-[11pt] font-medium text-[#2a2a2a]">
              Mid-Level Full-Stack Developer | Frontend Specialist
            </p>

            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[10.5pt] text-[#2d2d2d]">
              <a href={`mailto:${PORTFOLIO.email}`} className="hover:underline">
                {PORTFOLIO.email}
              </a>
              <a
                href="https://www.linkedin.com/in/thoun-sotheara"
                className="hover:underline"
              >
                linkedin.com/in/thoun-sotheara
              </a>
              <a href={PORTFOLIO.github} className="hover:underline">
                thoun-sotheara
              </a>
            </div>

            <p className="mt-4 text-[10.5pt] italic text-[#3a3a3a]">
              "Complexity is the engine; simplicity is the steering wheel. I
              bridge the gap."
            </p>
          </header>

          <div className="mt-6 space-y-6">
            <section>
              <h3 className="text-[16pt] font-semibold text-[#1a1a1a]">
                Professional Summary
              </h3>
              <p className="mt-2 text-[11pt] leading-[1.65] text-[#262626]">
                Mid-level full-stack developer with a frontend-first mindset and
                proven experience delivering scalable SaaS products. I
                specialize in turning complex business requirements into
                intuitive, high-performance interfaces with robust architecture.
                My work balances UI precision, maintainable systems, and
                measurable product outcomes. I bridge product strategy and
                engineering execution to ship reliable digital experiences.
              </p>
            </section>

            <section>
              <h3 className="text-[16pt] font-semibold text-[#1a1a1a]">
                Core Skills
              </h3>
              <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-2 text-[11pt] text-[#262626] sm:grid-cols-3">
                {[
                  "Next.js",
                  "Tailwind CSS",
                  "TypeScript",
                  "Node.js",
                  "Firestore",
                  "Framer Motion",
                ].map((skill) => (
                  <li key={skill} className="list-inside list-disc">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-[16pt] font-semibold text-[#1a1a1a]">
                Key Projects
              </h3>
              <div className="mt-3 space-y-4">
                <article className="resume-block-break">
                  <h4 className="text-[12pt] font-semibold text-[#1f1f1f]">
                    Advanced SaaS POS Platform
                  </h4>
                  <ul className="mt-2 list-disc pl-5 text-[10.5pt] leading-[1.6] text-[#2f2f2f]">
                    <li>
                      Architected a multi-tenant platform with strict data
                      isolation and configurable workspace provisioning.
                    </li>
                    <li>
                      Implemented real-time inventory updates to improve stock
                      accuracy and reduce operational delays.
                    </li>
                    <li>
                      Designed complex state management flows for checkout,
                      orders, and analytics with consistent UX behavior.
                    </li>
                  </ul>
                </article>

                <article className="resume-block-break">
                  <h4 className="text-[12pt] font-semibold text-[#1f1f1f]">
                    E-commerce Ecosystem
                  </h4>
                  <ul className="mt-2 list-disc pl-5 text-[10.5pt] leading-[1.6] text-[#2f2f2f]">
                    <li>
                      Optimized user journey funnels from discovery to checkout,
                      increasing conversion consistency.
                    </li>
                    <li>
                      Built secure payment flows with validation and fault
                      handling to improve transaction reliability.
                    </li>
                    <li>
                      Refined product browsing and checkout interactions for
                      performance and clarity across devices.
                    </li>
                  </ul>
                </article>
              </div>
            </section>

            <section>
              <h3 className="text-[16pt] font-semibold text-[#1a1a1a]">
                Work Experience
              </h3>
              <div className="mt-3 space-y-4">
                <article className="resume-block-break">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-[12pt] font-semibold text-[#1f1f1f]">
                      Frontend Engineer | Freelance & Product Teams
                    </h4>
                    <p className="text-[10.5pt] text-[#3a3a3a]">2023 - Present</p>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-[10.5pt] leading-[1.6] text-[#2f2f2f]">
                    <li>
                      Improved load times by 40% using Next.js optimization and
                      route-level code splitting.
                    </li>
                    <li>
                      Built reusable UI architecture that reduced duplicated
                      components and sped up delivery.
                    </li>
                    <li>
                      Implemented real-time frontend workflows that improved
                      data reliability for operators.
                    </li>
                  </ul>
                </article>

                <article className="resume-block-break">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-[12pt] font-semibold text-[#1f1f1f]">
                      Full-Stack Developer | SaaS & Commerce Systems
                    </h4>
                    <p className="text-[10.5pt] text-[#3a3a3a]">2021 - 2023</p>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-[10.5pt] leading-[1.6] text-[#2f2f2f]">
                    <li>
                      Developed secure API and payment integrations, reducing
                      transaction failures and improving trust.
                    </li>
                    <li>
                      Shipped high-conversion commerce interfaces by refining
                      checkout UX and feedback states.
                    </li>
                    <li>
                      Translated business goals into production-ready full-stack
                      features with measurable impact.
                    </li>
                  </ul>
                </article>
              </div>
            </section>

            <section>
              <h3 className="text-[16pt] font-semibold text-[#1a1a1a]">
                Education
              </h3>
              <div className="mt-2 text-[11pt] leading-[1.6] text-[#262626]">
                <p className="font-semibold">Bachelor Degree in Computer Science</p>
                <p>
                  Relevant certifications: Frontend Architecture, UI
                  Engineering, Modern JavaScript Ecosystems
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}