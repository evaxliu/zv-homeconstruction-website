import Link from "next/link";
import Carousel from "./Carousel";

export default function Main() {
  const slides = [
    '/bathtub1.avif',
    '/toilet1.avif',
    '/kitchen1.avif',
    '/shower1.avif',
  ];
  return(
    <section className="w-full bg-slate-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-0 min-h-[calc(100svh-80px)] flex flex-col md:gap-10 md:flex-row md:items-center">
        <article className="flex flex-col text-center items-center gap-5 p-15 md:flex-1 md:justify-center">
          <p className="">
            Residential &amp; Small Commercial · Greater Seattle Area
          </p>
          <div>
            <p className="text-5xl font-[gelasio]">
              Your Satisfaction is Our Goal
            </p>
          </div>
          <h2 className="">
            Renovation and remodeling for homeowners and businesses across Bothell and the Greater Seattle Area — done right the first time.
          </h2>
          <div className="flex md:p-5">
            <Link 
              key={"Get a Quote"} 
              href={"/"} 
              className={"text-black border bg-white hover:text-white hover:bg-slate-800 px-4 py-2 text-sm font-medium"}
            >
              GET A QUOTE
            </Link>
          </div>
        </article>
        <aside className="flex flex-col items-center jusitfy-center md:justify-end md:flex-1">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <Carousel slides={slides} autoSlide={false}/>
          </div>
        </aside>
      </div>
    </section>
  )
}