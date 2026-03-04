import Link from "next/link";
import { Job } from "@/lib/types";

type JobCardProps = {
  job: Job;
};

export function JobCard({ job }: JobCardProps) {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="border border-[#D6DDEB] p-6 bg-white hover:shadow-[0px_10px_40px_rgba(46,51,90,0.05)] transition-shadow duration-300 flex flex-col h-full group rounded-md"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-[#25324B] text-[20px] font-bold mb-1 group-hover:text-[#4640DE] transition-colors">
            {job.title}
          </h3>
          <p className="text-[#7C8493] text-[14px]">
            {job.company} <span className="mx-1">•</span> {job.location}
          </p>
        </div>
        <span className="border border-[#4640DE] text-[#4640DE] px-3 py-1 text-[12px] font-medium bg-transparent rounded-full">
          {job.category}
        </span>
      </div>

      <p className="text-[#515B6F] text-[14px] leading-relaxed mb-4 line-clamp-3">
        {job.description}
      </p>

      <p className="mt-auto text-[12px] text-[#7C8493]">
        Posted on{" "}
        {new Date(job.created_at).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </Link>
  );
}

