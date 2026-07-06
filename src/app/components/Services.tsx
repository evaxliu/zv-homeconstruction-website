import Link from "next/link";
import Carousel from "./Carousel";

export default function Services() {
  const slides = [
    '/bathtub1.avif',
    '/toilet1.avif',
    '/kitchen1.avif',
    '/shower1.avif',
  ];
  return(
    <section className="flex flex-col md:flex-row bg-slate-800">
      <article className="flex flex-col text-center items-center gap-5 py-20 md:flex-1 md:justify-center">
        <ul className="flex gap-5 md:gap-10">
          <li>
            Licensed
          </li>
          <li>
            Bonded
          </li>
          <li>
            Insured
          </li>
          <li>
            Since 2021
          </li>
        </ul>
        <div>
          <h1 className="text-5xl font-[gelasio]">
            Services
          </h1>
        </div>
        <div className="flex md:p-5">
          
        </div>
      </article>
    </section>
  )
}