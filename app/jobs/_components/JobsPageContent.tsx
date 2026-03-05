"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import Container from "@/components/Container";
import { Pagination } from "@/components/Pagination";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JobCard } from "./JobCard";
import { JobsSkeleton } from "./JobsSkeleton";
import { useGetJobsQuery } from "@/lib/api/jobsApi";
import { JOB_CATEGORIES } from "@/lib/constants";

export default function JobsPageContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") ?? "";
  const initialLocation = searchParams.get("location") ?? "";
  const rawCategory = searchParams.get("category");
  const initialCategory =
    rawCategory && JOB_CATEGORIES.includes(rawCategory as (typeof JOB_CATEGORIES)[number])
      ? rawCategory
      : "all";

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState<string>(initialCategory);
  const [location, setLocation] = useState<string>(initialLocation);
  const [jobsPage, setJobsPage] = useState(1);

  const effectiveCategory = category === "all" ? "" : category;
  const effectiveLocation = location === "all" ? "" : location;

  const { data, isLoading, isError, error } = useGetJobsQuery({
    search,
    category: effectiveCategory,
    location: effectiveLocation,
    page: jobsPage,
  });

  const jobs = useMemo(() => data?.data ?? [], [data]);
  const pagination = data?.pagination;

  return (
    <section className="w-full bg-[#F8F8FD] py-12 md:py-16 lg:py-20">
      <Container>
        <div className="mb-10 md:mb-12">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight text-[#25324B]">
            Find your next{" "}
            <span className="text-[#26A4FF]">opportunity</span>
          </h1>
          <p className="mt-3 text-[14px] md:text-[16px] text-[#7C8493] max-w-2xl">
            Browse all open positions, search by title or company, and filter
            by category and location. Fully responsive and consistent with the
            landing page style.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] gap-4 md:gap-6 items-end">
          <div className="w-full">
            <label className="block text-[14px] font-medium text-[#25324B] mb-2">
              Search jobs
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#25324B] size-4" />
              <Input
                type="text"
                placeholder="Search by title or company"
                className="pl-9 bg-white text-[#25324B]"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setJobsPage(1);
                }}
              />
            </div>
          </div>

          <div className="w-full">
            <label className="block text-[14px] font-medium text-[#25324B] mb-2">
              Category
            </label>
            <Select
              value={category}
              onValueChange={(value) => {
                setCategory(value);
                setJobsPage(1);
              }}
            >
              <SelectTrigger className="bg-white w-full border-[#D6DDEB] text-[#25324B]">
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                {JOB_CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full">
            <label className="block text-[14px] font-medium text-[#25324B] mb-2">
              Location
            </label>
            <Input
              type="text"
              placeholder="Search by location (e.g. Dhaka, Remote)"
              className="bg-white text-[#25324B]"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setJobsPage(1);
              }}
            />
          </div>
        </div>

        {isError ? (
          <p className="mt-8 text-center text-red-500 text-[14px]">
            {typeof error === "object" && error && "status" in error
              ? "Failed to load jobs."
              : "Something went wrong while loading jobs."}
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {isLoading ? (
                <JobsSkeleton />
              ) : (
                jobs.map((job) => <JobCard key={job.id} job={job} />)
              )}
            </div>

            {!isLoading && jobs.length === 0 ? (
              <p className="mt-8 text-center text-[#7C8493] text-[14px]">
                No jobs found. Try adjusting your search or filters.
              </p>
            ) : (
              pagination &&
              pagination.totalPages > 1 && (
                <Pagination
                  currentPage={pagination.page}
                  totalPages={pagination.totalPages}
                  totalItems={pagination.total}
                  onPageChange={setJobsPage}
                  itemLabel="jobs"
                  className="mt-10"
                />
              )
            )}
          </>
        )}
      </Container>
    </section>
  );
}

