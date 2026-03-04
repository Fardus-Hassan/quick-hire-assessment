export function JobsSkeleton() {
  const cards = Array.from({ length: 4 });

  return (
    <>
      {cards.map((_, index) => (
        <div
          key={index}
          className="border border-[#D6DDEB] p-6 bg-white rounded-md flex flex-col h-full animate-pulse"
        >
          {/* header row: title + category pill */}
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-2">
              <div className="h-5 w-40 bg-[#E5E7EB] rounded-md" />
              <div className="h-4 w-32 bg-[#E5E7EB] rounded-md" />
            </div>
            <div className="h-6 w-20 bg-[#E5E7EB] rounded-full" />
          </div>
          {/* short description */}
          <div className="space-y-2 mb-4">
            <div className="h-3 w-full bg-[#E5E7EB] rounded-md" />
            <div className="h-3 w-5/6 bg-[#E5E7EB] rounded-md" />
            <div className="h-3 w-3/4 bg-[#E5E7EB] rounded-md" />
          </div>
          {/* footer line */}
          <div className="h-3 w-32 bg-[#E5E7EB] rounded-md mt-auto" />
        </div>
      ))}
    </>
  );
}
