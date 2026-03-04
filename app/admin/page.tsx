"use client";

import { useEffect, useMemo, useState } from "react";
import { Trash2, Plus } from "lucide-react";

import Navbar from "@/app/(home)/_components/Navbar";
import Footer from "@/app/(home)/_components/Footer";
import Container from "@/components/Container";
import { Pagination } from "@/components/Pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Job } from "@/lib/types";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addJob, deleteJob, fetchJobs } from "@/lib/stores/jobsSlice";

type JobForm = Omit<Job, "id" | "created_at">;

export default function AdminPage() {
  const dispatch = useAppDispatch();
  const { items: jobs, status } = useAppSelector((state) => state.jobs);
  const [listingsPage, setListingsPage] = useState(1);
  const LISTINGS_PER_PAGE = 20;
  const [form, setForm] = useState<JobForm>({
    title: "",
    company: "",
    location: "",
    category: "",
    short_description: "",
    main_description: "",
  });

  useEffect(() => {
    if (status === "idle") {
      void dispatch(fetchJobs());
    }
  }, [dispatch, status]);

  const canSubmit = useMemo(
    () =>
      form.title.trim().length > 0 &&
      form.company.trim().length > 0 &&
      form.location.trim().length > 0 &&
      form.category.trim().length > 0 &&
      form.short_description.trim().length > 0,
    [form],
  );

  function handleChange(
    field: keyof JobForm,
    value: string,
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleAddJob() {
    if (!canSubmit) return;

    const nextId =
      jobs.length > 0 ? Math.max(...jobs.map((job) => job.id)) + 1 : 1;

    const newJob: Job = {
      id: nextId,
      title: form.title.trim(),
      company: form.company.trim(),
      location: form.location.trim(),
      category: form.category.trim(),
      short_description: form.short_description.trim(),
      main_description: form.main_description?.trim() || undefined,
      created_at: new Date().toISOString(),
    };

    dispatch(addJob(newJob));
    setListingsPage(1);

    setForm({
      title: "",
      company: "",
      location: "",
      category: "",
      short_description: "",
      main_description: "",
    });
  }

  function handleDeleteJob(id: number) {
    dispatch(deleteJob(id));
    setListingsPage((p) => Math.max(1, Math.min(p, Math.ceil((jobs.length - 1) / LISTINGS_PER_PAGE))));
  }

  const totalListingsPages = Math.max(1, Math.ceil(jobs.length / LISTINGS_PER_PAGE));

  const paginatedJobs = useMemo(
    () =>
      jobs.slice(
        (listingsPage - 1) * LISTINGS_PER_PAGE,
        listingsPage * LISTINGS_PER_PAGE,
      ),
    [jobs, listingsPage],
  );

  return (
    <>
      <div className="relative w-full bg-[#F8F8FD]">
        <Navbar />

        <section className="py-12 md:py-16 lg:py-20">
          <Container>
            <div className="mb-8">
              <h1 className="text-[28px] md:text-[36px] font-semibold text-[#25324B]">
                Admin – Manage jobs
              </h1>
              <p className="mt-2 text-[14px] md:text-[15px] text-[#7C8493] max-w-2xl">
                This basic admin view lets you add new job listings and delete
                existing ones. Data is kept in memory only for the demo.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] gap-10 lg:gap-12 items-start">
              <div className="lg:sticky lg:top-6 border border-[#D6DDEB] bg-white p-6 md:p-8 rounded-md shadow-sm lg:self-start">
                <h2 className="text-[18px] md:text-[20px] font-semibold text-[#25324B] mb-4">
                  Add new job
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[14px] font-medium text-[#25324B] mb-1.5">
                      Job title
                    </label>
                    <Input
                      value={form.title}
                      onChange={(e) => handleChange("title", e.target.value)}
                      placeholder="e.g. Senior Frontend Engineer"
                      className="bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-[#25324B] mb-1.5">
                      Company
                    </label>
                    <Input
                      value={form.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      placeholder="e.g. QuickHire"
                      className="bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[14px] font-medium text-[#25324B] mb-1.5">
                        Location
                      </label>
                      <Input
                        value={form.location}
                        onChange={(e) =>
                          handleChange("location", e.target.value)
                        }
                        placeholder="e.g. Dhaka, Bangladesh"
                        className="bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[14px] font-medium text-[#25324B] mb-1.5">
                        Category
                      </label>
                      <Input
                        value={form.category}
                        onChange={(e) =>
                          handleChange("category", e.target.value)
                        }
                        placeholder="e.g. Software Engineering"
                        className="bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-[#25324B] mb-1.5">
                      Short description
                    </label>
                    <textarea
                      className="file:text-foreground border-[#D6DDEB] text-[#25324B] placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                      rows={2}
                      value={form.short_description}
                      onChange={(e) =>
                        handleChange("short_description", e.target.value)
                      }
                      placeholder="Brief summary for listings..."
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-[#25324B] mb-1.5">
                      Main description (optional, HTML)
                    </label>
                    <textarea
                      className="file:text-foreground border-[#D6DDEB] text-[#25324B] placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                      rows={4}
                      value={form.main_description ?? ""}
                      onChange={(e) =>
                        handleChange("main_description", e.target.value)
                      }
                      placeholder="Rich HTML for detail page (e.g. &lt;p&gt;, &lt;strong&gt;, &lt;u&gt;, &lt;span style=...&gt;)"
                    />
                  </div>

                  <Button
                    type="button"
                    onClick={handleAddJob}
                    disabled={!canSubmit}
                    className="mt-2 inline-flex items-center gap-2 bg-[#4640DE] hover:bg-[#3b36be]"
                  >
                    <Plus className="size-4" />
                    Add job
                  </Button>
                </div>
              </div>

              <div>
                <h2 className="text-[18px] md:text-[20px] font-semibold text-[#25324B] mb-4">
                  Current listings
                </h2>
                <div className="space-y-4">
                  {paginatedJobs.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white border border-[#D6DDEB] rounded-md p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                    >
                      <div>
                        <p className="text-[15px] font-semibold text-[#25324B]">
                          {job.title}
                        </p>
                        <p className="text-[13px] text-[#7C8493]">
                          {job.company} <span className="mx-1">•</span>{" "}
                          {job.location} <span className="mx-1">•</span>{" "}
                          {job.category}
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteJob(job.id)}
                        className="inline-flex items-center gap-2"
                      >
                        <Trash2 className="size-4" />
                        Delete
                      </Button>
                    </div>
                  ))}

                  {jobs.length === 0 && (
                    <p className="text-[14px] text-[#7C8493]">
                      No jobs available. Add a new job using the form.
                    </p>
                  )}
                </div>

                {jobs.length > 0 && totalListingsPages > 1 && (
                  <Pagination
                    currentPage={listingsPage}
                    totalPages={totalListingsPages}
                    totalItems={jobs.length}
                    onPageChange={setListingsPage}
                    itemLabel="total"
                    showTopBorder={false}
                    className="mt-6"
                  />
                )}
              </div>
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
}

