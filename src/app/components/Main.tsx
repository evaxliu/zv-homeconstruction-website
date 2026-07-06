import Link from "next/link";
import Carousel from "./Carousel";

export default function Main() {
  return(
    <section className="flex flex-col bg-slate-800">
      <article className="flex flex-col text-center items-center md:items-center gap-5 p-15">
        <p className="">
          Residential &amp; small commercial renovation across the Greater Seattle Area.
        </p>
        <div>
          <h1 className="text-5xl font-[gelasio]">
            Your Satisfaction is Our Goal
          </h1>
        </div>
        <div className="flex">
          <Link 
            key={"View our quote"} 
            href={"/"} 
            className={"text-black bg-white hover:text-slate-400 border px-4 py-2 text-sm font-sm"}
          >
            VIEW OUR WORK
          </Link>
        </div>
      </article>
      <aside className="grow block p-6 rounded-base shadow-xs">
        <Carousel />
      </aside>
    </section>
  )
}