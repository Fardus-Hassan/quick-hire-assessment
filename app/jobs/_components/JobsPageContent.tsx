"use client";

import { useEffect, useMemo, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchJobs } from "@/lib/stores/jobsSlice";
import { JobsSkeleton } from "./JobsSkeleton";

export default function JobsPageContent() {
  const dispatch = useAppDispatch();
  const { items: jobs, status, error } = useAppSelector((state) => state.jobs);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [location, setLocation] = useState<string>("all");
  const [jobsPage, setJobsPage] = useState(1);
  const JOBS_PER_PAGE = 20;

  useEffect(() => {
    if (status === "idle") {
      void dispatch(fetchJobs());
    }
  }, [dispatch, status]);

  const categories = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.category))),
    [jobs],
  );

  const locations = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.location))),
    [jobs],
  );

  const filteredJobs = useMemo(
    () =>
      jobs.filter((job) => {
        const matchesSearch =
          search.trim().length === 0 ||
          job.title.toLowerCase().includes(search.toLowerCase()) ||
          job.company.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
          category === "all" || job.category === category;

        const matchesLocation =
          location === "all" || job.location === location;

        return matchesSearch && matchesCategory && matchesLocation;
      }),
    [jobs, search, category, location],
  );

  const totalJobsPages = Math.max(1, Math.ceil(filteredJobs.length / JOBS_PER_PAGE));
  const effectivePage = Math.min(jobsPage, Math.max(1, totalJobsPages));
  const paginatedJobs = useMemo(
    () =>
      filteredJobs.slice(
        (effectivePage - 1) * JOBS_PER_PAGE,
        effectivePage * JOBS_PER_PAGE,
      ),
    [filteredJobs, effectivePage],
  );

  if (status === "loading") {
    return <JobsSkeleton />;
  }

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
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7C8493] size-4" />
              <Input
                type="text"
                placeholder="Search by title or company"
                className="pl-9 bg-white"
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
              <SelectTrigger className="bg-white w-full border-[#D6DDEB] text-[#7C8493]">
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                {categories.map((cat) => (
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
            <Select
              value={location}
              onValueChange={(value) => {
                setLocation(value);
                setJobsPage(1);
              }}
            >
              <SelectTrigger className="bg-white w-full border-[#D6DDEB] text-[#7C8493]">
                <SelectValue placeholder="All locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All locations</SelectItem>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>
                    {loc}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {status === "failed" ? (
          <p className="mt-8 text-center text-red-500 text-[14px]">
            {error ?? "Something went wrong while loading jobs."}
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {filteredJobs.length === 0 ? (
              <p className="mt-8 text-center text-[#7C8493] text-[14px]">
                No jobs found. Try adjusting your search or filters.
              </p>
            ) : (
              totalJobsPages > 1 && (
                <Pagination
                  currentPage={effectivePage}
                  totalPages={totalJobsPages}
                  totalItems={filteredJobs.length}
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

