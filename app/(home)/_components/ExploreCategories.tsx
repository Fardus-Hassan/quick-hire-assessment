import React from 'react';
import { 
  ArrowRight, 
  PencilRuler, 
  LineChart, 
  Megaphone, 
  WalletCards, 
  Monitor, 
  Code, 
  Briefcase, 
  Users 
} from 'lucide-react';

export default function ExploreCategories() {
  // Data array for easy rendering and maintenance
  const categories = [
    { name: 'Design', count: '235', icon: PencilRuler },
    { name: 'Sales', count: '756', icon: LineChart },
    { name: 'Marketing', count: '140', icon: Megaphone },
    { name: 'Finance', count: '325', icon: WalletCards },
    { name: 'Technology', count: '436', icon: Monitor },
    { name: 'Engineering', count: '542', icon: Code },
    { name: 'Business', count: '211', icon: Briefcase },
    { name: 'Human Resource', count: '346', icon: Users },
  ];

  return (
    // Outer section wrapper
    <section className="w-full flex justify-center items-center pb-16 pt-6 lg:pb-24 bg-white">
      
      {/* Main Container constrained to 1192px */}
      <div className="max-w-[1192px] w-full lg:px-0 md:px-8 flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          
          {/* Main Title matching your exact typography parameters */}
          {/* Note: add 'font-clash' to your tailwind config mapping to 'Clash Display' */}
          <h2 className="text-[40px] md:text-[48px] font-[600] leading-[1.1] tracking-tight">
            <span className="text-[#25324B]">Explore by </span>
            <span className="text-[#26A4FF]">category</span>
          </h2>
          
          {/* Show all jobs link */}
          <a 
            href="#" 
            className="flex items-center gap-2 text-[#4640DE] text-[16px] font-semibold hover:text-[#3b36be] transition-colors pb-1 md:pb-2"
          >
            Show all jobs <ArrowRight size={20} strokeWidth={2} />
          </a>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              // Card Container with 'group' class to trigger child hover effects
              <div 
                key={index} 
                className="group border border-[#D6DDEB] p-8 min-h-[250px] flex flex-col bg-white hover:bg-[#4640DE] transition-all duration-300 cursor-pointer"
              >
                {/* Icon: Blue by default, white on hover */}
                <div className="text-[#4640DE] group-hover:text-white transition-colors duration-300">
                  <Icon size={44} strokeWidth={1.5} />
                </div>
                
                {/* Text Content pushed to the bottom using mt-auto */}
                <div className="mt-auto flex flex-col gap-3 pt-8">
                  
                  {/* Category Name: Dark by default, white on hover */}
                  <h3 className="text-[#25324B] group-hover:text-white text-[24px] font-bold transition-colors duration-300">
                    {cat.name}
                  </h3>
                  
                  {/* Footer Row: Subtitle + Arrow */}
                  <div className="flex justify-between items-center">
                    
                    {/* Subtitle: Gray by default, dim white on hover */}
                    <span className="text-[#7C8493] group-hover:text-white/90 text-[16px] transition-colors duration-300">
                      {cat.count} jobs available
                    </span>
                    
                    {/* Arrow: Dark by default, white on hover */}
                    <ArrowRight 
                      className="text-[#25324B] group-hover:text-white transition-colors duration-300" 
                      size={24} 
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>

      </div>
    </section>
  );
}