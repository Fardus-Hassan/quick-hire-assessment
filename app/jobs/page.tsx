import { FadeInSection } from "@/components/FadeInSection";
import JobsPageContent from "./_components/JobsPageContent";

export default function JobsPage() {
  return (
    <FadeInSection
      className="relative w-full bg-[#F8F8FD] overflow-hidden"
      delay={0.05}
      animateOnMount
    >
      <JobsPageContent />
    </FadeInSection>
  );
}

