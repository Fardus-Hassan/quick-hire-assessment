import { Search, MapPin, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    // Outer wrapper - now inheriting background from parent
    <div className="w-full">
      
      {/* 2. Main Hero Content */}
      <main className="max-w-[1192px] mx-auto  w-[95%] flex-1 flex flex-col lg:grid lg:grid-cols-12 gap-10 items-center relative z-30">
        
        {/* Left Column: Text & Search */}
        <div className="lg:col-span-7 flex flex-col justify-center w-full relative z-40 pt-10 lg:pt-20 pb-20">
          
          {/* Main Headline */}
          <h1 className="text-[#202430] text-[48px] lg:text-[72px] font-bold leading-[1.05] tracking-tight">
            Discover <br />
            more than <br />
            <span className="text-[#26A4FF] relative inline-block mt-2">
              5000+ Jobs
              {/* Custom SVG Scribble Underline */}
              <svg className="absolute w-[115%] -bottom-4 left-0 text-[#26A4FF]" viewBox="0 0 350 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 12.5C40.5 7.5 125.5 -2.5 347.5 7.5M10.5 17.5C65.5 14.5 200.5 6.5 305.5 14.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          {/* Subheadline Paragraph */}
          <p className="text-[#515B6F] text-[18px] lg:text-[20px] leading-relaxed mt-10 max-w-[500px]">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>

          {/* Search Box Form */}
          <div className="mt-10 bg-white p-4 shadow-[0px_20px_60px_rgba(46,51,90,0.08)] w-full max-w-full flex flex-col lg:flex-row gap-4 lg:gap-0 items-center relative z-50 border border-[#D6DDEB]/50">
            
            {/* Job Title Input */}
            <div className="flex-[1.2] flex items-center gap-3 px-4 w-full">
              <Search className="text-[#A9B1C0]" size={24} />
              <input 
                type="text" 
                placeholder="Job title or keyword" 
                className="w-full outline-none text-[#202430] placeholder:text-[#A9B1C0] text-[16px] bg-transparent py-2"
              />
            </div>

            {/* Desktop Divider */}
            <div className="hidden lg:block w-px h-10 bg-[#D6DDEB]"></div>

            {/* Location Input */}
            <div className="flex-1 flex items-center justify-between px-4 w-full border-t lg:border-t-0 border-[#D6DDEB] pt-4 lg:pt-0">
              <div className="flex items-center gap-3 w-full">
                <MapPin className="text-[#A9B1C0]" size={24} />
                <input 
                  type="text" 
                  placeholder="Florence, Italy" 
                  // defaultValue="Florence, Italy"
                  className="w-full outline-none text-[#202430] placeholder:text-[#A9B1C0] text-[16px] bg-transparent py-2"
                />
              </div>
              {/* <ChevronDown className="text-[#202430] cursor-pointer" size={20} /> */}
            </div>

            {/* Submit Button */}
            <button className="bg-[#4640DE] hover:bg-[#3b36be] transition-colors text-white font-semibold px-10 py-4 w-full lg:w-auto mt-2 lg:mt-0 whitespace-nowrap">
              Search my job
            </button>
          </div>

          {/* Popular Tags */}
          <p className="mt-6 text-[#515B6F] text-[16px]">
            <span className="text-[#202430] font-medium opacity-70">Popular :</span> UI Designer, UX Researcher, Android, Admin
          </p>
        </div>

        {/* Right Column: Images */}
        <div className="lg:col-span-5 hidden lg:flex relative w-full justify-center items-end z-20">
          
          {/* Profile Image */}
          <div className="relative w-full h-full flex justify-end items-end z-10 translate-x-[50px]">
            <Image
              src="/Pic.png" 
              alt="Smiling professional" 
              width={2000}
              height={2000}
              priority
              className="object-cover h-[700px] min-w-[500px] mt-5"
            />
          </div>
        </div>
      </main>

      {/* Decorative Bottom Diagonal Overlay (White) */}
      <div 
        className="absolute bottom-0 right-0 z-30 w-[25%] h-[200px] bg-white pointer-events-none lg:block hidden"
        style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}
      ></div>

    </div>
  );
}
