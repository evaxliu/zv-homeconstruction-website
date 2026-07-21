import Image from "next/image";

const pictures = [
  {title: "Blue Fireplace", image: "/projects/fireplace/fireplace_blue.webp", width: 1536, height: 2048},
  {title: "Blue Marble Shower Side View", image: "/projects/bathroom/blue_marble_shower_side.webp", width: 1536, height: 2048},
  {title: "Bathtub Closeup", image: "/projects/bathroom/bathtub_closeup.webp", width: 2048, height: 1536},
  {title: "House Outside Stairs", image: "/projects/outside/house_stairs.webp", width: 1134, height: 1512},
  {title: "Full Sink White", image: "/projects/bathroom/full_sink_2.webp", width: 765, height: 1020},
  {title: "Full Kitchen", image: "/projects/kitchen/full_kitchen.webp", width: 2048, height: 1536},
  {title: "Full Sink Brown", image: "/projects/bathroom/full_sink.webp", width: 1536, height: 2048},
  {title: "Bathtub Side View", image: "/projects/bathroom/bathtub_side.webp", width: 1134, height: 1512},
  {title: "Blue Marble Shower Front View", image: "/projects/bathroom/blue_marble_shower_front.webp", width: 1536, height: 2048},
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