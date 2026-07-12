import Card from "./Card";

export default function Services() {
  return(
    <section className="flex flex-col md:flex-row bg-white text-black w-full">
      <article className="flex w-full flex-col text-center items-center gap-5 py-10 md:flex-1 md:justify-center mx-auto max-w-7xl px-6 min-h-[calc(100svh-80px)] md:gap-10 md:items-center font-[gelasio]">
        <ul className="flex gap-5 md:gap-10">
          <li>
            Licensed
          </li>
          -
          <li>
            Bonded
          </li>
          -
          <li>
            Insured
          </li>
        </ul>
        <div>
          <h1 className="text-5xl">
            What We Build
          </h1>
        </div>
        <div className="flex flex-col justify-center md:flex-row md:flex-wrap gap-10">
          <Card title="Residential" description="Kitchens, bathrooms, flooring & whole-home remodels." imageSrc={"/house1.avif"} />
          <Card title="Small Commercial" description="Interior & exterior renovation for shops, restaurants & offices." imageSrc={"/toilet1.avif"} />
          <Card title="Exterior & Repairs" description="Decks, fences, painting & the smaller jobs." imageSrc={"/stair1.avif"} />
        </div>
      </article>
    </section>
  )
}