"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SectionHeaderProps = {
  leadingText: string;
  accentText: string;
  className?: string;
  showLink?: boolean;
};

export function SectionHeader({
  leadingText,
  accentText,
  className,
  showLink = true,
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col md:flex-row md:justify-between items-start md:items-center mb-12 gap-6 ${
        className ?? ""
      }`}
    >
      <h2 className="text-[40px] md:text-[48px] font-semibold leading-[1.1] tracking-tight">
        <span className="text-[#25324B]">{leadingText}</span>
        <span className="text-[#26A4FF]">{accentText}</span>
      </h2>

      {showLink && (
        <Link
          href="/jobs"
          className="flex items-center gap-2 text-[#4640DE] text-[16px] font-semibold hover:text-[#3b36be] transition-colors pb-1 md:pb-2"
        >
          Show all jobs <ArrowRight size={20} strokeWidth={2} />
        </Link>
      )}
    </div>
  );
}

