import Image from "next/image";
import { FadeInSection } from "@/components/FadeInSection";
import Intro from "./_components/Intro";
import CompanyLogos from "./_components/CompanyLogos";
import ExploreCategories from "./_components/ExploreCategories";
import CallToAction from "./_components/CallToAction";
import FeaturedJobs from "./_components/FeaturedJobs";
import LatestJobs from "./_components/LatestJobs";

export default function page() {
  return (
    <>
      <FadeInSection className="relative bg-[#F8F8FD] overflow-hidden" delay={0}>
        {/* Background Geometric Pattern */}
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
      </FadeInSection>
      <FadeInSection className="w-[95%] mx-auto" delay={0.05}>
        <CompanyLogos />
      </FadeInSection>
      <FadeInSection className="w-[95%] mx-auto" delay={0.1}>
        <ExploreCategories />
      </FadeInSection>
      <FadeInSection delay={0.1}>
        <CallToAction />
      </FadeInSection>
      <FadeInSection className="w-[95%] mx-auto" delay={0.15}>
        <FeaturedJobs />
      </FadeInSection>
      <FadeInSection delay={0.15}>
        <LatestJobs />
      </FadeInSection>
    </>
  );
}
