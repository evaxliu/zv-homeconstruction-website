import Image from "next/image";
import ExpertiseCards from "../reusable/Expertise-Cards";

const expertise_types = [
  {
    title: "Residential",
    description: "",
    image: ""
  },
  {
    title: "Commercial",
    description: "",
    image: ""
  },
  {
    title: "Handyman",
    description: "",
    image: ""
  }
]

export default function Expertise() {
  return(
    <section className="w-full bg-slate-200 text-[#202A36]">
      <div className="mx-auto max-w-7xl px-6 py-20 flex">
        <div className="flex flex-col justify-start">
          <p className="max-w-md text-lg font-bold text-[#4E8CA2]">
            Expertise
          </p>
          <p className="max-w-md text-3xl font-bold">
            Our Focus Areas
          </p>
          <div className="flex flex-col lg:flex-row items-start lg:items-end my-10 gap-5 object-contain">
            <Image
              src={"/projects/outside1.webp"}
              alt={""}
              width={700}
              height={700}
            />
            <h2 className="font-semibold max-w-xs">
              Based in Bothell, serving the greater Seattle area since 2021. Licensed, bonded & insured in Washington State. English & Vietnamese.
            </h2>
          </div>
          {expertise_types.map((expertise) => (
            <div key={expertise.title}>
              <ExpertiseCards
                title={expertise.title}
                description={expertise.description}
                image={expertise.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}