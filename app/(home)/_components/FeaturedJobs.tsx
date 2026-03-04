import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FeaturedJobs() {
  // Job data array to keep the component clean and easy to map
  const jobs = [
    {
      id: 1,
      logo: 'R', // Replace with `<img src="/logos/revolut.svg" />` in production
      logoBg: 'bg-black text-white',
      title: 'Email Marketing',
      company: 'Revolut',
      location: 'Madrid, Spain',
      description: 'Revolut is looking for Email Marketing to help team ma ...',
      tags: [
        { label: 'Marketing', color: 'text-[#FFB836]', bg: 'bg-[#FFB836]/10' },
        { label: 'Design', color: 'text-[#56CDAD]', bg: 'bg-[#56CDAD]/10' },
      ],
    },
    {
      id: 2,
      logo: 'D', // Dropbox placeholder
      logoBg: 'bg-[#0061FF] text-white',
      title: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Fransisco, US',
      description: 'Dropbox is looking for Brand Designer to help the team t ...',
      tags: [
        { label: 'Design', color: 'text-[#56CDAD]', bg: 'bg-[#56CDAD]/10' },
        { label: 'Business', color: 'text-[#4640DE]', bg: 'bg-[#4640DE]/10' },
      ],
    },
    {
      id: 3,
      logo: 'P', // Pitch placeholder
      logoBg: 'bg-black text-white',
      title: 'Email Marketing',
      company: 'Pitch',
      location: 'Berlin, Germany',
      description: 'Pitch is looking for Customer Manager to join marketing t ...',
      tags: [
        { label: 'Marketing', color: 'text-[#FFB836]', bg: 'bg-[#FFB836]/10' },
      ],
    },
    {
      id: 4,
      logo: 'B', // Blinkist placeholder
      logoBg: 'bg-[#2CE080] text-white',
      title: 'Visual Designer',
      company: 'Blinkist',
      location: 'Granada, Spain',
      description: 'Blinkist is looking for Visual Designer to help team desi ...',
      tags: [
        { label: 'Design', color: 'text-[#56CDAD]', bg: 'bg-[#56CDAD]/10' },
      ],
    },
    {
      id: 5,
      logo: 'C', // ClassPass placeholder
      logoBg: 'bg-[#0055FF] text-white',
      title: 'Product Designer',
      company: 'ClassPass',
      location: 'Manchester, UK',
      description: 'ClassPass is looking for Product Designer to help us...',
      tags: [
        { label: 'Marketing', color: 'text-[#FFB836]', bg: 'bg-[#FFB836]/10' },
        { label: 'Design', color: 'text-[#56CDAD]', bg: 'bg-[#56CDAD]/10' },
      ],
    },
    {
      id: 6,
      logo: 'C', // Canva placeholder
      logoBg: 'bg-[#00C4CC] text-white',
      title: 'Lead Designer',
      company: 'Canva',
      location: 'Ontario, Canada',
      description: 'Canva is looking for Lead Engineer to help develop n ...',
      tags: [
        { label: 'Design', color: 'text-[#56CDAD]', bg: 'bg-[#56CDAD]/10' },
        { label: 'Business', color: 'text-[#4640DE]', bg: 'bg-[#4640DE]/10' },
      ],
    },
    {
      id: 7,
      logo: 'G', // GoDaddy placeholder
      logoBg: 'bg-black text-white',
      title: 'Brand Strategist',
      company: 'GoDaddy',
      location: 'Marseille, France',
      description: 'GoDaddy is looking for Brand Strategist to join the team...',
      tags: [
        { label: 'Marketing', color: 'text-[#FFB836]', bg: 'bg-[#FFB836]/10' },
      ],
    },
    {
      id: 8,
      logo: 'T', // Twitter placeholder
      logoBg: 'bg-[#1DA1F2] text-white',
      title: 'Data Analyst',
      company: 'Twitter',
      location: 'San Diego, US',
      description: 'Twitter is looking for Data Analyst to help team desi ...',
      tags: [
        { label: 'Technology', color: 'text-[#FF6550]', bg: 'bg-[#FF6550]/10' },
      ],
    },
  ];

  return (
    <section className="w-full bg-white flex justify-center items-center py-16 lg:py-24">
      <div className="max-w-[1192px] w-full lg:px-0 md:px-8 flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-[40px] md:text-[48px] font-[600] leading-[1.1] tracking-tight">
            <span className="text-[#25324B]">Featured </span>
            <span className="text-[#26A4FF]">jobs</span>
          </h2>
          
          <a 
            href="#" 
            className="flex items-center gap-2 text-[#4640DE] text-[16px] font-semibold hover:text-[#3b36be] transition-colors pb-1 md:pb-2"
          >
            Show all jobs <ArrowRight size={20} strokeWidth={2} />
          </a>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="border border-[#D6DDEB] p-6 bg-white hover:shadow-[0px_10px_40px_rgba(46,51,90,0.05)] transition-shadow duration-300 flex flex-col h-full cursor-pointer group"
            >
              {/* Top Row: Logo & Badge */}
              <div className="flex justify-between items-start mb-6">
                {/* Temporary Logo Placeholder */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${job.logoBg}`}>
                  {job.logo}
                </div>
                
                {/* Full Time Badge */}
                <span className="border border-[#4640DE] text-[#4640DE] px-3 py-1 text-[14px] font-medium bg-transparent">
                  Full Time
                </span>
              </div>

              {/* Job Details */}
              <h3 className="text-[#25324B] text-[20px] font-bold mb-2 group-hover:text-[#4640DE] transition-colors">
                {job.title}
              </h3>
              
              <p className="text-[#7C8493] text-[15px] mb-4">
                {job.company} <span className="mx-1">•</span> {job.location}
              </p>
              
              <p className="text-[#515B6F] text-[15px] leading-relaxed mb-6 flex-grow">
                {job.description}
              </p>

              {/* Tags Bottom Row */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {job.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`${tag.bg} ${tag.color} px-4 py-1.5 rounded-full text-[14px] font-semibold`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}