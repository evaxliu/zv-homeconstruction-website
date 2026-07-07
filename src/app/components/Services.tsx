import Link from "next/link";
import Card from "./Card";

export default function Services() {
  return(
    <section className="flex flex-col md:flex-row bg-white text-black">
      <article className="flex flex-col text-center items-center gap-5 py-10 md:flex-1 md:justify-center">
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
            What We Build
          </h1>
        </div>
        <div className="flex">
          <Card title="Residential" description="" imageSrc={"/house1.avif"} />
          <Card title="Small Commercial" description="" imageSrc={"/house1.avif"} />
          <Card title="Exterior & Repairs" description="" imageSrc={"/house1.avif"} />
        </div>
      </article>
    </section>
  )
}