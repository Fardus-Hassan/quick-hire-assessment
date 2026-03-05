import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function LatestJobs() {
  // Job data array reflecting the items in your design
  const jobs = [
    {
      id: 1,
      logo: <svg width="49" height="58" viewBox="0 0 49 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_12614_2985)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 14.2939V42.7388L24.4321 57.4285L24.9992 56.5153L24.4321 28.9086L0.840059 14.3108L0 14.2939Z" fill="#449B82"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M48.6001 14.1602V43.0058L24.4323 57.4285V28.9084L47.7149 14.1818L48.6001 14.1602Z" fill="#9BDB9C"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3 0.00390625L48.6 14.1596L24.4321 29.3838L0 14.2932L24.3 0.00390625Z" fill="#56CDAD"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M36.5054 11.3486L28.2866 16.2133V26.0322L20.052 21.0876L12.1338 25.7746V46.2973L20.3525 41.2007V30.1538L29.1307 35.7574L36.5054 31.1843V11.3486Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_12614_2985">
      <rect width="48.6" height="57.6" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      , // Nomad placeholder
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
            className="flex items-center justify-end w-full gap-2 text-[#4640DE] text-[16px] font-semibold hover:text-[#3b36be] transition-colors pb-1 md:pb-2"
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
              <div className={``}>
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