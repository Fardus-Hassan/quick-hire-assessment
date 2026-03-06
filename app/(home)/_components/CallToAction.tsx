import Image from 'next/image';

const CallToAction = () => {
  return (
    <section className="w-full bg-[#FFFFFF] flex justify-center items-center py-12 lg:py-[72px]">
      <div className="relative max-w-[1192px] w-full">  
        
        {/* Desktop Deep Blue Background Layer (Hidden on mobile) */}
        <div 
          className="absolute inset-0 bg-[#4640DE] z-0 hidden lg:block"
          style={{ 
            clipPath: 'polygon(0 18%, 14% 0, 100% 0, 100% 82%, 86% 100%, 0 100%)' 
          }}
        ></div>

        {/* Mobile Deep Blue Background Layer: Adjusted to match the exact angles in your mobile screenshot */}
        <div 
          className="absolute inset-0 bg-[#4640DE] z-0 block lg:hidden"
          style={{ 
            clipPath: 'polygon(0 8%, 20% 0, 100% 0, 100% 92%, 80% 100%, 0 100%)' 
          }}
        ></div>
        
        {/* Content Wrapper: Added px-6 to keep content away from edges */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch justify-between min-h-[480px] pt-16 lg:pt-0 w-[95%] mx-auto gap-8 lg:gap-12">
          
          {/* Left Column: Text & CTA */}
          {/* Added items-center and text-center for mobile layout */}
          <div className="w-full lg:w-[45%] lg:pl-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6 lg:gap-[24px] py-8 md:py-10 lg:py-16">
            
            <h2 className="text-[#FFFFFF] font-Clash font-semibold text-[36px] md:text-[40px] lg:text-[48px] leading-[1.2] lg:leading-[1.1] tracking-tight">
              Start posting <br className="hidden md:block" /> jobs today
            </h2>
            
            <p className="text-[#FFFFFF] text-[16px] font-semibold font-Epilogue max-w-[380px] leading-[1.6]">
              Start posting jobs for only $10.
            </p>
            
            {/* Button: Added w-full for mobile, lg:w-auto for desktop */}
            <button className="bg-[#FFFFFF] hover:bg-gray-100 w-full sm:w-auto lg:w-auto cursor-pointer transition-all duration-300 text-[#4640DE] text-[16px] font-Epilogue font-semibold px-8 md:px-10 py-4 shadow-xl hover:scale-105 mt-2 lg:mt-0">
              Sign Up For Free
            </button>
            
          </div>

          {/* Right Column: Dashboard Mockup Image */}
          <div className="w-full flex justify-center lg:justify-end items-end relative pb-12 lg:pb-0">
            <div className="relative w-full max-w-[664px] max-h-[446px] min-h-[200px] animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <Image
                src="/3.1 Dashboard Company.png"
                alt="QuickHire Dashboard Interface"
                width={564}
                height={346}
                className="object-contain w-full h-auto lg:rounded-t-xl rounded-xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default CallToAction
