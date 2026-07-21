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
    <section className="w-full text-[#202A36]">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col lg:flex-row min-h-[calc(100svh-80px)] md:gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-medium text-[#4E8CA2]">
            Services
          </p>

          <h2 className="max-w-xs text-4xl font-medium leading-tight text-[#202A36]">
            We Provide a Variety of Solutions
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:gap-px md:bg-[#202A36] md:grid-cols-3 md:grow">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col gap-5 md:bg-[#E5ECF2] px-5 py-10 md:justify-between">
              <Image
                src={service.icon}
                alt={service.title}
                width={96}
                height={96}
                className="h-24 w-24 md:h-19 md:w-19"
              />
              <h3 className="font-medium text-lg">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}