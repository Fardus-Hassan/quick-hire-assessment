import Intro from "./_components/Intro";
import Image from "next/image";
import CompanyLogos from "./_components/CompanyLogos";
import ExploreCategories from "./_components/ExploreCategories";
import CallToAction from "./_components/CallToAction";
import FeaturedJobs from "./_components/FeaturedJobs";
import LatestJobs from "./_components/LatestJobs";


export default function page() {
  return (
    <>
      <div className="relative bg-[#F8F8FD] overflow-hidden w-[95%] mx-auto">
        {/* Background Geometric Pattern - Exact Figma Specs: 860px x 794px, Left: 580px */}
        <div
          className="absolute z-0 pointer-events-none hidden lg:block overflow-visible md:w-[860px] w-[500px] h-[794px] md:left-[800px] left-[10] top-[-40px]"
        >
          <Image
            src="/Pattern.svg"
            alt="Geometric pattern background"
            width={860}
            height={794}
            className="w-full h-full object-contain"
          />
        </div>

        <Intro />
      </div>
      <div className="w-[95%] mx-auto">
        <CompanyLogos />
      </div>
      <div className="w-[95%] mx-auto">
        <ExploreCategories />
      </div>
      <div className="">
        <CallToAction />
      </div>
      <div className="w-[95%] mx-auto">
        <FeaturedJobs />
      </div>
      <div className="">
        <LatestJobs />
      </div>
    </>
  );
}
