import Image from "next/image";

const services = [
  {title: "Renovation", icon: "/services/004-construction.png"},
  {title: "Remodeling", icon: "/services/003-home.png"},
  {title: "Flooring", icon: "/services/006-tile.png"},
  {title: "Drywall", icon: "/services/005-wall.png"},
  {title: "Carpentry", icon: "/services/009-hand-saw.png"},
  {title: "Handyman", icon: "/services/008-repair.png"},
  {title: "Restaurants", icon: "/services/010-restaurant.png"},
  {title: "Salons", icon: "/services/007-hair-salon.png"},
  {title: "Bathrooms", icon: "/services/011-sink.png"}
]

export default function Services() {
  return(
    <section className="w-full bg-slate-200 text-[#202A36]">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col justify-start">
          <p className="max-w-md text-lg font-bold text-[#4E8CA2]">
            Services
          </p>
          <h2 className="max-w-md text-3xl font-bold">
            We Provide a Variety of Solutions
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="my-15 md:m-15 flex flex-col gap-5">
              <Image
                src={service.icon}
                alt={service.title}
                width={96}
                height={96}
                className="h-24 w-24 md:h-16 md:w-16"
              />
              <h3 className="font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}