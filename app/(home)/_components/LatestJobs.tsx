import React from "react";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export default function LatestJobs() {
  // Job data array reflecting the items in your design
  const jobs = [
    {
      id: 1,
      logoSrc: "/job1.png",
      title: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
    },
    {
      id: 2,
      logoSrc: "/job2.png",
      title: "Social Media Assistant",
      company: "Netlify",
      location: "Paris, France",
    },
    {
      id: 3,
      logoSrc: "/job3.png",
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Fransisco, USA",
    },
    {
      id: 4,
      logoSrc: "/job4.jpg",
      title: "Brand Designer",
      company: "Maze",
      location: "San Fransisco, USA",
    },
    {
      id: 5,
      logoSrc: "/job5.png",
      title: "Interactive Developer",
      company: "Terraform",
      location: "Hamburg, Germany",
    },
    {
      id: 6,
      logoSrc: "/job6.png",
      title: "Interactive Developer",
      company: "Udacity",
      location: "Hamburg, Germany",
    },
    {
      id: 7,
      logoSrc: "/job7.png",
      title: "HR Manager",
      company: "Packer",
      location: "Lucern, Switzerland",
    },
    {
      id: 8,
      logoSrc: "/job8.png",
      title: "HR Manager",
      company: "Webflow",
      location: "Lucern, Switzerland",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFE] flex justify-center items-center py-24 relative overflow-hidden">
      {/* Angled white background – top left (like reference) */}
      <div
        className="absolute top-0 left-0 lg:w-[200px] w-[150px] lg:min-h-[100px] min-h-[70px] bg-white pointer-events-none z-0"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0% 100%, 0 100%)",
        }}
      />
      <div className="max-w-[1192px] w-[95%] mx-auto flex flex-col relative z-10">
        
        <SectionHeader leadingText="Latest " accentText="jobs open" />

        {/* Jobs Grid (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id} 
              className="bg-white border border-[#D6DDEB] p-6 md:p-8 hover:shadow-[0px_10px_40px_rgba(46,51,90,0.5)] hover:border-[#4640DE]/50 transition-all duration-300 flex items-start gap-6 cursor-pointer group"
            >
              {/* Company logo */}
              <div className="w-[64px] h-[64px]">
                <Image
                  src={job.logoSrc}
                  alt={`${job.company} logo`}
                  width={40}
                  height={40}
                  className="w-[64px] h-[64px] object-contain"
                />
              </div>

              {/* Job Details */}
              <div className="flex flex-col w-full">
                <h3 className="text-[#25324B] text-[20px] font-bold mb-1 group-hover:text-[#4640DE] transition-colors">
                  {job.title}
                </h3>
                
                <p className="text-[#7C8493] text-[15px] mb-4">
                  {job.company} <span className="mx-1">•</span> {job.location}
                </p>

                {/* Tags Row */}
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  {/* Full Time Badge (Filled) */}
                  <span className="bg-[#56CDAD]/10 text-[#56CDAD] px-3 md:px-4 py-1.5 rounded-full text-[13px] font-semibold">
                    Full-Time
                  </span>
                  
                  {/* Divider Line */}
                  <div className="w-px h-5 bg-[#D6DDEB] mx-1"></div>

                  {/* Outline Tags */}
                  <span className="border border-[#FFB836] text-[#FFB836] px-3 md:px-4 py-1.5 rounded-full text-[13px] font-medium bg-transparent">
                    Marketing
                  </span>
                  
                  <span className="border border-[#4640DE] text-[#4640DE] px-3 md:px-4 py-1.5 rounded-full text-[13px] font-medium bg-transparent">
                    Design
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}