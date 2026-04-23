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
    <div className="resume-no-print flex flex-col items-end gap-2">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex h-11 items-center rounded-full border border-black/15 px-6 text-sm font-semibold text-[#1a1a1a] transition-colors duration-200 hover:bg-[#1a1a1a] hover:text-white"
        >
          Print / Download
        </button>
        <a
          href="/"
          className="inline-flex h-11 items-center rounded-full border border-black/15 px-6 text-sm font-semibold text-[#1a1a1a] transition-colors duration-200 hover:bg-black/[0.04]"
        >
          Back to Portfolio
        </a>
      </div>
      <p className="text-xs text-slate-500">
        For clean PDF output, disable browser "Headers and footers" in the print dialog.
      </p>
    </div>
  );
}