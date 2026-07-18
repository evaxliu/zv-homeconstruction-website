import Image from "next/image";
import ExpertiseCards from "../reusable/Expertise-Cards";

const expertise_types = [
  {
    idx: 1,
    title: "Residential",
    description: "Kitchens, bathrooms, flooring & whole-home remodels.",
    image: "/projects/bathroom2.webp",
    flip: true
  },
  {
    idx: 2,
    title: "Commercial",
    description: "Interior & exterior renovation for shops, restaurants & offices.",
    image: "/projects/salon1-enhanced.png",
    flip: false
  },
  {
    idx: 3,
    title: "Handyman",
    description: "Decks, fences, painting & the smaller jobs.",
    image: "/projects/stair1.avif",
    flip: true
  }
]

export default function Expertise() {
  return(
    <section className="w-full bg-slate-200 text-[#202A36]">
      <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col">
        <div className="flex flex-col justify-start">
          <p className="max-w-md text-lg font-bold text-[#4E8CA2]">
            Expertise
          </p>
          <p className="max-w-md text-3xl font-bold">
            Our Focus Areas
          </p>
          <div className="flex flex-col lg:flex-row items-start lg:items-end my-10 gap-5 object-contain pb-20">
            <Image
              src={"/projects/outside1.webp"}
              alt={""}
              width={750}
              height={750}
            />
            <h2 className="font-semibold max-w-xs">
              Based in Bothell, serving the greater Seattle area since 2021. Licensed, bonded & insured in Washington State. English & Vietnamese.
            </h2>
          </div>
        </div>
        <div className="flex flex-col">
          {expertise_types.map((expertise) => (
            <ExpertiseCards
              key={expertise.title}
              idx = {expertise.idx}
              title={expertise.title}
              description={expertise.description}
              image={expertise.image}
              flip={expertise.flip}
            />
          ))}
        </div>
      </div>
    </section>
  );
}