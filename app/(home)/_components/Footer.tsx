import React from 'react';
import { Facebook, Instagram, Dribbble, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#202430] w-full flex justify-center items-center">
      {/* Main container */}
      <div className="max-w-[1192px] w-full lg:px-0 md:px-8 py-12 flex flex-col justify-center">
        
        {/* Top Content Area */}
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-8 pt-4">
          
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              {/* Custom CSS Logo */}
            <Image src="/footer-image/footer-logo.svg" alt="Footer Logo" width={32} height={32} />
              <span className="text-[#FFFFFF] font-RedHat text-[24px] font-semibold tracking-wide leading-[150%] letter-spacing-[-0.01em]">
                QuickHire
              </span>
            </div>
            <p className="text-[#A9B1C0] leading-relaxed text-[15px] pr-4 md:pr-10">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* Middle Section: About & Resources (Side-by-side on mobile) */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-4 lg:justify-items-center">
            {/* About Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-5 lg:mb-6">About</h3>
              <ul className="space-y-[18px]">
                {['Companies', 'Pricing', 'Terms', 'Advice', 'Privacy Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#A9B1C0] hover:text-white transition-colors text-[15px]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-5 lg:mb-6">Resources</h3>
              <ul className="space-y-[18px]">
                {['Help Docs', 'Guide', 'Updates', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#A9B1C0] hover:text-white transition-colors text-[15px]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="lg:col-span-4 lg:pl-4 flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-4 lg:mb-6">Get job notifications</h3>
            <p className="text-[#A9B1C0] leading-relaxed text-[15px] mb-6 max-w-sm">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            
            {/* Form: Stacked on mobile, inline on desktop with a gap */}
            <div className="flex flex-col sm:flex-row w-full gap-1 font-Epilogue">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 bg-white text-gray-900 placeholder:text-[#A9B1C0] focus:outline-none focus:ring-0 border-none rounded-none"
              />
              <button className="bg-[#4640DE] hover:bg-[#3b36be] transition-colors text-white font-semibold px-8 py-3 whitespace-nowrap w-full sm:w-auto rounded-none">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-[#303645] mt-12 mb-8" />

        {/* Bottom Area: Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-4">
          <p className="text-[#A9B1C0] text-[15px] text-center md:text-left">
            2021 @ QuickHire. All rights reserved.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Dribbble} />
            <SocialIcon Icon={Linkedin} />
            <SocialIcon Icon={Twitter} />
          </div>
        </div>

      </div>
    </footer>
  );
}

// Sub-component for clean social icon rendering
function SocialIcon({ Icon }: { Icon: any }) {
  return (
    <a 
      href="#" 
      className="w-[38px] h-[38px] rounded-full bg-[#303645] hover:bg-[#3f475a] transition-colors flex items-center justify-center text-[#A9B1C0] hover:text-white"
    >
      <Icon size={16} strokeWidth={2} />
    </a>
  );
}