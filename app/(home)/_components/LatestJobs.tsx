import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function LatestJobs() {
  // Job data array reflecting the items in your design
  const jobs = [
    {
      id: 1,
      logo: 'N', // Nomad placeholder
      logoBg: 'bg-[#56CDAD] text-white',
      title: 'Social Media Assistant',
      company: 'Nomad',
      location: 'Paris, France',
    },
    {
      id: 2,
      logo: 'N', // Netlify placeholder
      logoBg: 'bg-[#20C6B6] text-white',
      title: 'Social Media Assistant',
      company: 'Netlify',
      location: 'Paris, France',
    },
    {
      id: 3,
      logo: 'D', // Dropbox placeholder
      logoBg: 'bg-[#0061FF] text-white',
      title: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Fransisco, USA',
    },
    {
      id: 4,
      logo: 'M', // Maze placeholder
      logoBg: 'bg-[#0055FF] text-white',
      title: 'Brand Designer',
      company: 'Maze',
      location: 'San Fransisco, USA',
    },
    {
      id: 5,
      logo: 'T', // Terraform placeholder
      logoBg: 'bg-[#5C4EE5] text-white',
      title: 'Interactive Developer',
      company: 'Terraform',
      location: 'Hamburg, Germany',
    },
    {
      id: 6,
      logo: 'U', // Udacity placeholder
      logoBg: 'bg-[#02B3E4] text-white',
      title: 'Interactive Developer',
      company: 'Udacity',
      location: 'Hamburg, Germany',
    },
    {
      id: 7,
      logo: 'P', // Packer placeholder
      logoBg: 'bg-[#F24C53] text-white',
      title: 'HR Manager',
      company: 'Packer',
      location: 'Lucern, Switzerland',
    },
    {
      id: 8,
      logo: 'W', // Webflow placeholder
      logoBg: 'bg-[#4353FF] text-white',
      title: 'HR Manager',
      company: 'Webflow',
      location: 'Lucern, Switzerland',
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFE] flex justify-center items-center py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1192px] w-[95%] mx-auto flex flex-col relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-[40px] md:text-[48px] font-[600] leading-[1.1] tracking-tight">
            <span className="text-[#25324B]">Latest </span>
            <span className="text-[#26A4FF]">jobs open</span>
          </h2>
          
          <a 
            href="#" 
            className="flex items-center gap-2 text-[#4640DE] text-[16px] font-semibold hover:text-[#3b36be] transition-colors pb-1 md:pb-2"
          >
            Show all jobs <ArrowRight size={20} strokeWidth={2} />
          </a>
        </div>

        {/* Jobs Grid (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-white border border-[#D6DDEB] p-6 md:p-8 hover:shadow-[0px_10px_40px_rgba(46,51,90,0.05)] hover:border-[#4640DE]/50 transition-all duration-300 flex items-start gap-6 cursor-pointer group"
            >
              {/* Logo Placeholder */}
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-2xl shadow-sm ${job.logoBg}`}>
                {job.logo}
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