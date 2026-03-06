"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const companies = [
  { name: "Vodafone", src: "/brand-logo/vodafone-2017-logo.png", className: "h-10" },
  { name: "Intel", src: "/brand-logo/intel-3.svg", className: "h-8" },
  { name: "Tesla", src: "/brand-logo/tesla-9 1.svg", className: "h-4" },
  { name: "Vodafone2", src: "/brand-logo/vodafone-2017-logo.png", className: "h-10" },
  { name: "AMD", src: "/brand-logo/amd-logo-1.svg", className: "h-6" },
  { name: "Talkit", src: "/brand-logo/talkit 1.svg", className: "h-9" },
];

export default function CompanyLogos() {
  return (
    <section className="w-full bg-white flex justify-center items-center py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1192px] w-full lg:px-0 md:px-8 flex flex-col">
        <p className="text-[#8B95A5] text-[16px] mb-8 font-medium">
          Companies we helped grow
        </p>

        <Marquee
          speed={40}
          direction="left"
          pauseOnHover
          gradient
          gradientColor="#ffffff"
          gradientWidth={48}
          className="flex items-center"
        >
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex justify-center items-center shrink-0 mx-8 md:mx-12"
            >
              <Image
                src={company.src}
                alt={`${company.name} logo`}
                width={120}
                height={40}
                className={`${company.className} w-auto grayscale transition-opacity duration-300 object-contain`}
              />
              <span className="sr-only">{company.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}