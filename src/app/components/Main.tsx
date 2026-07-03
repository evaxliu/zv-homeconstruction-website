import Link from "next/link";
import Carousel from "./Carousel";

export default function Main() {
  return(
    <section className="flex flex-wrap bg-gray-800">
      <article className="p-20">
        <p className="">Greater Seattle Area & Puget Sound</p>
        <h1 className="text-3xl">
          Your Satisfaction is our Goal
        </h1>
        <p className="">
          Residential &amp; small commercial renovation across the Puget Sound.
        </p>
        <div className="">
          <Link
            className="border"
            href=""
          >
            Request an estimate
          </Link>
          <Link
            className="border"
            href=""
          >
            View our quote
          </Link>
        </div>
      </article>
      <aside className="grow g-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
        <Carousel/>
      </aside>
    </section>
  )
}