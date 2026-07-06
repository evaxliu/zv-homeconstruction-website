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
    <section className="flex flex-col md:flex-row bg-slate-800">
      <article className="flex flex-col text-center items-center gap-5 p-15 md:flex-1 md:justify-center">
        <p className="">
          Residential &amp; small commercial renovation across the Greater Seattle Area.
        </p>
        <div>
          <h1 className="text-5xl font-[gelasio]">
            Your Satisfaction is Our Goal
          </h1>
        </div>
        <div className="flex md:p-5">
          <Link 
            key={"View our quote"} 
            href={"/"} 
            className={"text-black bg-white hover:text-slate-400 border px-4 py-2 text-sm font-sm"}
          >
            VIEW OUR WORK
          </Link>
        </div>
      </article>
      <aside className="flex items-center justify-center md:flex-1 md:p-10">
        <div className="max-w-lg rounded-xl">
          <Carousel slides={slides} />
        </div>
      </aside>
    </section>
  )
}