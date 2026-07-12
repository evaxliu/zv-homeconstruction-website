import ImageCard from "../components/Image-Card"

const images = ["/bathtub1.avif", "/house1.avif", "/kitchen1.avif", "/shower1.avif", "/stair1.avif", "/toilet1.avif"]

export default function OurWork() {
  return(
    <section className="flex flex-col md:flex-row bg-white text-black w-full">
      <article className="flex w-full flex-col text-center items-center gap-5 py-10 md:flex-1 md:justify-center mx-auto max-w-7xl px-6 min-h-[calc(100svh-80px)] md:gap-10 md:items-center font-[gelasio]">
        <div>
          <h2 className="text-5xl">
            Our Work
          </h2>
        </div>
        <div className="flex flex-col justify-center md:flex-row md:flex-wrap gap-10">
          {images.map ((image, idx) => 
            <ImageCard key={idx} imageSrc={image} />
          )}
        </div>
      </article>
    </section>
  )
}