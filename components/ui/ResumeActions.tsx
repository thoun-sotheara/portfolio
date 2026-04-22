"use client";

import { useEffect } from "react";

export function ResumeActions({ autoPrint }: { autoPrint: boolean }) {
  useEffect(() => {
    if (autoPrint) {
      const timer = window.setTimeout(() => {
        window.print();
      }, 300);

      return () => window.clearTimeout(timer);
    }
  }, [autoPrint]);

  return (
    <div className="resume-no-print flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_36px_rgba(124,110,224,0.35)]"
      >
        Download PDF
      </button>
      <a
        href="/"
        className="inline-flex h-11 items-center rounded-full border border-white/[0.1] bg-white/[0.03] px-6 text-sm font-semibold text-ink-secondary transition-colors duration-200 hover:border-white/[0.18] hover:text-ink-primary"
      >
        Back to Portfolio
      </a>
    </div>
  );
}