import Image from "next/image";
import ExpertiseCards from "../reusable/Expertise-Cards";

const expertise_types = [
  {
    idx: 1,
    title: "Residential",
    description: "From kitchen and bathroom renovations to flooring upgrades and full-home remodels, we transform outdated spaces into functional homes suited to your needs. Whether updating one room or planning a larger renovation, we provide dependable workmanship throughout.",
    image: "/blue_interior.webp",
    flip: true,
    width: 5824,
    height: 3264
  },
  {
    idx: 2,
    title: "Small Commercial",
    description: "We provide interior and exterior renovation services for shops, restaurants, offices, and other small commercial spaces. Our work can help refresh the appearance of your property, improve how the space functions, and create a more welcoming environment for customers and employees.",
    image: "/blue_building.webp",
    flip: false,
    width: 2912,
    height: 1632
  },
  {
    idx: 3,
    title: "Exterior & Repairs",
    description: "We build and repair decks and fences, complete interior and exterior painting, and take care of smaller improvement and maintenance projects. From necessary repairs to finishing touches, we help keep your property safe, functional, and well maintained.",
    image: "/blue_stairs.webp",
    flip: true,
    width: 7280,
    height: 4080
  }
]

export default function Expertise() {
  return(
    <section className="w-full text-[#202A36]">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col">
        <div className="flex flex-col justify-start">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-medium text-[#4E8CA2]">
              Expertise
            </p>

            <h2 className="max-w-xs text-4xl font-medium leading-tight text-[#202A36]">
              Our Focus Areas
            </h2>
          </div>
          <div className="flex flex-col-reverse lg:flex-row lg:items-end my-5 gap-5 pb-5 md:pb-20">
            <Image
              src={"/blue_house.webp"}
              alt={"Blue house stock"}
              width={5824}
              height={3328}
              className="h-auto lg:max-h-[calc(100svh-12rem)] w-full max-w-220 object-contain"
            />
            <h2 className="max-w-2xl lg:max-w-xs text-lg font-medium">
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
              width={expertise.width}
              height={expertise.height}
              flip={expertise.flip}
            />
          ))}
        </div>
      </div>
    </section>
  );
}