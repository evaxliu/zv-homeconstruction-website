import Image from "next/image";

const pictures = [
  {title: "Handyman", image: "/projects/fireplace-blue.jpg"},
  {title: "Bathroom", image: "/projects/bathroom1.png"},
  {title: "Remodeling", image: "/projects/house1.avif"},
  {title: "Flooring", image: "/projects/kitchen1.avif"},
  {title: "Drywall", image: "/projects/outside1.webp"},
  {title: "Carpentry", image: "/projects/shower1.avif"},
  {title: "Restaurants", image: "/projects/bathtub1.avif"},
  {title: "Salons", image: "/projects/toilet1.avif"},
  {title: "Bathrooms", image: "/projects/bathroom2.webp"}
]

export default function Projects() {
  return(
    <section className="w-full text-[#202A36]">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col">
        <div className="flex flex-col justify-start gap-2">
          <p className="text-xl font-medium text-[#4E8CA2]">
            Our Projects
          </p>

          <h2 className="max-w-xs text-4xl font-medium leading-tight text-[#202A36]">
            Excellence in Every Building
          </h2>
        </div>

        <div className="overflow-x-auto flex gap-7 scroll-auto overscroll-x-contain">
          {pictures.map((picture) => (
            <article key={picture.title} className="group my-10 shrink-0 overflow-hidden">
              <Image
                src={picture.image}
                alt={picture.title}
                width={1000}
                height={1000}
                className="h-[50vh] md:h-[65vh] w-auto max-w-none object-contain transition-transform duration-1000 ease-out group-hover:scale-110"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}