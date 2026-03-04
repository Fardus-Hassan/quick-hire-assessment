
export default function CompanyLogos() {
  const companies = [
    { name: 'Vodafone', src: '/brand-logo/vodafone-2017-logo.png', className: 'h-8 md:h-10' },
    { name: 'Intel', src: '/brand-logo/intel-3.svg', className: 'h-6 md:h-8' },
    { name: 'Tesla', src: '/brand-logo/tesla-9 1.svg', className: 'h-3.5 md:h-4' },
    { name: 'AMD', src: '/brand-logo/amd-logo-1.svg', className: 'h-5 md:h-6' },
    { name: 'Talkit', src: '/brand-logo/talkit 1.svg', className: 'h-7 md:h-9' },
  ];

  return (
    // Background matches the typical white section below a hero
    <section className="w-full bg-white flex justify-center items-center py-12 md:py-16">
      
      {/* Constrained container to match the 1192px max-width of Navbar and Hero */}
      <div className="max-w-[1192px] w-full lg:px-0 md:px-8 flex flex-col">
        
        {/* Section Heading */}
        <p className="text-[#8B95A5] text-[16px] mb-8 font-medium">
          Companies we helped grow
        </p>
        
        {/* Logo Cloud Container */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-8">
          
          {companies.map((company) => (
            <div key={company.name} className="flex justify-center items-center">
              {/* Note: Replace the `src` with your actual SVG paths in your public folder.
                The grayscale and opacity classes give it that exact muted gray look from the design. 
              */}
              <img 
                src={company.src} 
                alt={`${company.name} logo`} 
                className={`${company.className} grayscale opacity-50 hover:opacity-100 transition-opacity duration-300 object-contain`}
                
                // Fallback inline styling just in case the images aren't added yet so the layout doesn't break
                style={{ 
                  color: 'transparent',
                  display: 'block' 
                }}
              />
              
              {/* Fallback Text (Remove this in production once you have the SVGs) */}
              <span className="md:hidden text-[#8B95A5] font-bold text-xl uppercase tracking-wider sr-only">
                {company.name}
              </span>
            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
}