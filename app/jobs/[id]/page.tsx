 "use client";

import { use } from "react";
import Container from "@/components/Container";
import { ApplyForm } from "../_components/ApplyForm";
import { useGetJobQuery } from "@/lib/api/jobsApi";

type JobDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const { id } = use(params);
  const { data: job, isLoading, isError } = useGetJobQuery(id);

  if (isLoading && !job) {
    return (
      <section className="w-full bg-[#F8F8FD] py-24">
        <Container>
          <div className="max-w-2xl space-y-4">
            <div className="h-4 w-24 bg-[#E5E7EB] rounded-md animate-pulse" />
            <div className="h-8 w-72 bg-[#E5E7EB] rounded-md animate-pulse" />
            <div className="h-4 w-40 bg-[#E5E7EB] rounded-md animate-pulse" />
            <div className="h-3 w-32 bg-[#E5E7EB] rounded-md animate-pulse" />
            <div className="space-y-2 pt-4">
              <div className="h-3 w-full bg-[#E5E7EB] rounded-md animate-pulse" />
              <div className="h-3 w-5/6 bg-[#E5E7EB] rounded-md animate-pulse" />
              <div className="h-3 w-3/4 bg-[#E5E7EB] rounded-md animate-pulse" />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (isError || !job) {
    return (
      <section className="w-full bg-[#F8F8FD] py-24">
        <Container>
          <h1 className="text-[32px] md:text-[40px] font-semibold text-[#25324B] mb-4">
            Job not found
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#7C8493]">
            The job you are looking for does not exist or may have been
            removed.
          </p>
        </Container>
      </section>
    );
  }

  return (
    <div className="relative w-full bg-[#F8F8FD] overflow-hidden">
      <section className="py-12 md:py-16 lg:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] gap-10 lg:gap-12">
              <div>
                <p className="text-[13px] uppercase tracking-[0.08em] text-[#7C8493] mb-3">
                  {job.category}
                </p>
                <h1 className="text-[32px] md:text-[40px] font-semibold leading-tight text-[#25324B] mb-4">
                  {job.title}
                </h1>
                <p className="text-[15px] text-[#7C8493] mb-6">
                  {job.company} <span className="mx-1">•</span> {job.location}
                </p>
                <p className="text-[13px] text-[#7C8493] mb-6">
                  Posted on{" "}
                  {new Date(job.created_at).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-[14px] font-semibold text-[#25324B] uppercase tracking-wide mb-2">
                      Summary
                    </h2>
                    <p className="text-[15px] leading-relaxed text-[#515B6F]">
                      {job.short_description}
                    </p>
                  </div>

                  {job.main_description && (
                    <div>
                      <h2 className="text-[14px] font-semibold text-[#25324B] uppercase tracking-wide mb-2">
                        Full description
                      </h2>
                      <div
                        className="prose max-w-none text-[15px] leading-relaxed text-[#515B6F]"
                        dangerouslySetInnerHTML={{
                          __html: job.main_description,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <ApplyForm jobId={job.id} jobTitle={job.title} />
              </div>
            </div>
          </Container>
      </section>
    </div>
  );
}

