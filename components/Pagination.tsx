"use client";

import { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  /** Label for the count, e.g. "jobs" or "total" */
  itemLabel?: string;
  className?: string;
  /** Show top border and padding (e.g. jobs page). Set false for admin listing. */
  showTopBorder?: boolean;
};

function getPageTabs(
  totalPages: number,
  currentPage: number,
): (number | "ellipsis")[] {
  if (totalPages <= 9) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages: (number | "ellipsis")[] = [];
  if (currentPage <= 4) {
    for (let i = 1; i <= 5; i++) pages.push(i);
    pages.push("ellipsis");
    pages.push(totalPages);
  } else if (currentPage >= totalPages - 3) {
    pages.push(1);
    pages.push("ellipsis");
    for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    pages.push("ellipsis");
    for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
    pages.push("ellipsis");
    pages.push(totalPages);
  }
  return pages;
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
  itemLabel = "items",
  className = "",
  showTopBorder = true,
}: PaginationProps) {
  const pageTabs = useMemo(
    () => getPageTabs(totalPages, currentPage),
    [totalPages, currentPage],
  );

  if (totalPages <= 1) return null;

  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  const buttonBase =
    "inline-flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium text-[#25324B] border border-[#D6DDEB] rounded-md bg-white hover:bg-[#F8F8FD] disabled:opacity-50 disabled:cursor-not-allowed";
  const tabActive =
    "min-w-[36px] h-9 px-2 text-[14px] font-medium rounded-md border bg-[#4640DE] text-white border-[#4640DE]";
  const tabInactive =
    "min-w-[36px] h-9 px-2 text-[14px] font-medium rounded-md border bg-white text-[#25324B] border-[#D6DDEB] hover:bg-[#F8F8FD]";

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap ${showTopBorder ? "border-t border-[#D6DDEB] pt-8" : ""} ${className}`}
    >
      <p className="text-[14px] text-[#7C8493] order-2 sm:order-1">
        Page {currentPage} of {totalPages} ({totalItems} {itemLabel})
      </p>
      <div className="flex items-center gap-1 order-1 sm:order-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={prevDisabled}
          className={buttonBase}
        >
          <ChevronLeft className="size-4" />
          Prev
        </button>
        <div className="flex items-center gap-1 mx-1 flex-wrap justify-center">
          {pageTabs.map((p, idx) =>
            p === "ellipsis" ? (
              <span
                key={`ellipsis-${idx}`}
                className="px-1 text-[#7C8493]"
              >
                …
              </span>
            ) : (
              <button
                key={p}
                type="button"
                onClick={() => onPageChange(p)}
                className={p === currentPage ? tabActive : tabInactive}
              >
                {p}
              </button>
            ),
          )}
        </div>
        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={nextDisabled}
          className={buttonBase}
        >
          Next
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
