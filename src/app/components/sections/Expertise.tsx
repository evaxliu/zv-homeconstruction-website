import Image from "next/image";
import ExpertiseCards from "../reusable/Expertise-Cards";

const expertise_types = [
  {
    idx: 1,
    title: "Residential",
    description: "From kitchen and bathroom renovations to flooring upgrades and full-home remodels, we help transform outdated spaces into homes that feel more comfortable, functional, and suited to your needs. Whether you are updating one room or planning a larger renovation, we provide dependable workmanship and attention to detail throughout the project.",
    image: "/projects/bathroom2.webp",
    flip: true
  },
  {
    idx: 2,
    title: "Small Commercial",
    description: "We provide interior and exterior renovation services for shops, restaurants, offices, and other small commercial spaces. Our work can help refresh the appearance of your property, improve how the space functions, and create a more welcoming environment for customers and employees.",
    image: "/projects/salon1-enhanced.png",
    flip: false
  },
  {
    idx: 3,
    title: "Exterior & Repairs",
    description: "We build and repair decks and fences, complete interior and exterior painting, and take care of smaller improvement and maintenance projects. From necessary repairs to finishing touches, we help keep your property safe, functional, and well maintained.",
    image: "/projects/stair1.avif",
    flip: true
  }
]

export default function Expertise() {
  return(
    <section className="w-full bg-slate-200 text-[#202A36]">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col">
        <div className="flex flex-col justify-start">
          <p className="max-w-md text-lg font-bold text-[#4E8CA2]">
            Expertise
          </p>
          <p className="max-w-md text-3xl font-bold">
            Our Focus Areas
          </p>
          <div className="flex flex-col lg:flex-row items-start lg:items-end my-10 gap-5 object-contain pb-15 md:pb-20">
            <Image
              src={"/projects/outside1.webp"}
              alt={""}
              width={750}
              height={750}
            />
            <h2 className="font-semibold max-w-xs text-md md:text-lg">
              We build and renovate homes, small businesses, and outdoor spaces, from kitchens and bathrooms to decks, fences, painting, and repairs.
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