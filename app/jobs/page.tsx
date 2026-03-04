import Navbar from "@/app/(home)/_components/Navbar";
import Footer from "@/app/(home)/_components/Footer";
import JobsPageContent from "./_components/JobsPageContent";

export default function JobsPage() {
  return (
    <>
      <div className="relative w-full bg-[#F8F8FD] overflow-hidden">
        <Navbar />
        <JobsPageContent />
      </div>
      <Footer />
    </>
  );
}

