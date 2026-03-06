import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  PencilRuler,
  LineChart,
  Megaphone,
  WalletCards,
  Monitor,
  Code,
  Briefcase,
  Users,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

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
        
        <SectionHeader leadingText="Explore " accentText="category" />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            const href = {
              pathname: "/jobs",
              query: { category: cat.name },
            } as const;

            return (
              <Link
                key={index}
                href={href}
                className="group border border-[#D6DDEB] md:p-8 p-5 md:min-h-[200px] flex md:flex-col flex-row md:items-start items-center gap-8 bg-white hover:bg-[#4640DE] transition-all duration-300 cursor-pointer"
              >
                {/* Icon: Blue by default, white on hover */}
                <div className="text-[#4640DE] group-hover:text-white transition-colors duration-300">
                  <Icon size={44} strokeWidth={1.5} />
                </div>

                {/* Text Content pushed to the bottom using mt-auto */}
                <div className="mt-auto flex flex-col gap-3 w-full">
                  {/* Category Name: Dark by default, white on hover */}
                  <h3 className="text-[#25324B] group-hover:text-white text-[24px] font-bold transition-colors duration-300">
                    {cat.name}
                  </h3>

                  {/* Footer Row: Subtitle + Arrow */}
                  <div className="flex justify-between items-center w-full">
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
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}