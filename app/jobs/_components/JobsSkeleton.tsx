import Container from "@/components/Container";

export function JobsSkeleton() {
  const cards = Array.from({ length: 6 });

  return (
    <section className="w-full bg-[#F8F8FD] py-12 md:py-16 lg:py-20">
      <Container>
        <div className="mb-10 md:mb-12">
          <div className="h-9 md:h-10 w-64 md:w-80 bg-[#E5E7EB] rounded-md animate-pulse" />
          <div className="mt-3 h-4 md:h-5 w-72 md:w-[420px] bg-[#E5E7EB] rounded-md animate-pulse" />
        </div>

        <div className="mb-8 grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] gap-4 md:gap-6 items-end">
          <div className="w-full space-y-2">
            <div className="h-4 w-24 bg-[#E5E7EB] rounded-md animate-pulse" />
            <div className="h-10 bg-white rounded-md border border-[#D6DDEB] animate-pulse" />
          </div>
          <div className="w-full space-y-2">
            <div className="h-4 w-24 bg-[#E5E7EB] rounded-md animate-pulse" />
            <div className="h-10 bg-white rounded-md border border-[#D6DDEB] animate-pulse" />
          </div>
          <div className="w-full space-y-2">
            <div className="h-4 w-24 bg-[#E5E7EB] rounded-md animate-pulse" />
            <div className="h-10 bg-white rounded-md border border-[#D6DDEB] animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((_, index) => (
            <div
              key={index}
              className="border border-[#D6DDEB] p-6 bg-white rounded-md animate-pulse"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-2">
                  <div className="h-5 w-40 bg-[#E5E7EB] rounded-md" />
                  <div className="h-4 w-32 bg-[#E5E7EB] rounded-md" />
                </div>
                <div className="h-6 w-20 bg-[#E5E7EB] rounded-full" />
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-3 w-full bg-[#E5E7EB] rounded-md" />
                <div className="h-3 w-5/6 bg-[#E5E7EB] rounded-md" />
                <div className="h-3 w-3/4 bg-[#E5E7EB] rounded-md" />
              </div>
              <div className="h-3 w-32 bg-[#E5E7EB] rounded-md" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

