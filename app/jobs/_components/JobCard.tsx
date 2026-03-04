import Link from "next/link";
import { Job } from "@/lib/types";
import { Button } from "@/components/ui/button";

type JobCardProps = {
  job: Job;
};

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="border border-[#D6DDEB] p-6 bg-white hover:shadow-[0px_10px_40px_rgba(46,51,90,0.05)] transition-shadow duration-300 flex flex-col h-full rounded-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-[#25324B] text-[20px] font-bold mb-1">
            {job.title}
          </h3>
          <p className="text-[#7C8493] text-[14px]">
            {job.company} <span className="mx-1">•</span> {job.location}
          </p>
        </div>
        <span className="border border-[#4640DE] text-[#4640DE] px-3 py-1 text-[10px] text-nowrap font-medium bg-transparent rounded-full text-center">
          {job.category}
        </span>
      </div>

      <p className="text-[#515B6F] text-[14px] leading-relaxed mb-4 line-clamp-3 grow">
        {job.short_description}
      </p>

      <div className="mt-auto flex items-center justify-between pt-4">
        <p className="text-[12px] text-[#7C8493]">
          Posted on{" "}
          {new Date(job.created_at).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <Button
          asChild
          size="sm"
          variant="outline"
          className="border-[#4640DE] text-[#4640DE] bg-transparent hover:bg-[#4640DE] hover:text-white"
        >
          <Link href={`/jobs/${job.id}`}>View details</Link>
        </Button>
      </div>
    </div>
  );
}

