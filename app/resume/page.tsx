import type { Metadata } from "next";
import { PORTFOLIO } from "@/lib/portfolio-data";
import { ResumeActions } from "@/components/ui/ResumeActions";
import { ModernResume } from "@/components/sections/ModernResume";

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
      <div className="mx-auto max-w-[1080px] space-y-6">
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

        <ModernResume />
      </div>
    </main>
  );
}