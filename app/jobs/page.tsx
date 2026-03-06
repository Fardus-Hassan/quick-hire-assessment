import { Suspense } from "react";
import { FadeInSection } from "@/components/FadeInSection";
import JobsPageContent from "./_components/JobsPageContent";

export default function JobsPage() {
  return (
    <FadeInSection
      className="relative w-full bg-[#F8F8FD] overflow-hidden"
      delay={0.1}
      animateOnMount
    >
      <Suspense
        fallback={
          <section className="w-full bg-[#F8F8FD] py-12 md:py-16 lg:py-20">
            <div className="max-w-[1192px] w-[95%] mx-auto">
              <div className="h-6 w-40 bg-[#E5E7EB] rounded-md mb-4 animate-pulse" />
              <div className="h-4 w-72 bg-[#E5E7EB] rounded-md mb-8 animate-pulse" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="h-40 rounded-md bg-[#E5E7EB] animate-pulse"
                  />
                ))}
              </div>
            </div>
          </section>
        }
      >
        <JobsPageContent />
      </Suspense>
    </FadeInSection>
  );
}

