import { ArrowDown } from 'lucide-react';

export default function Main() {
  return(
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-10 min-h-[calc(100svh-80px)] flex flex-col justify-evenly">
        <div className="flex justify-end">
          <h1 className="max-w-lg text-right text-2xl font-bold text-[#202A36]">
            Experienced & Reliable Builders, proudly serving since 2021 with dedication and quality craftsmanship
          </h1>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end">
          <p className="max-w-md text-5xl md:text-7xl font-bold text-[#202A36]">
            Your satisfaction is our goal
          </p>
          <div 
            className="hidden md:flex items-center gap-2 text-[#202A36] text-sm font-semibold rounded-xl animate-bounce select-none"
          >
            Scroll for More <ArrowDown />
          </div>
        </div>
      </div>
    </section>
  );
}