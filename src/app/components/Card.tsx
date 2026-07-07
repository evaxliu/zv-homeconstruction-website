import Image from "next/image"

export default function Card ({
  title = "",
  description = "",
  imageSrc = "",
}: {
  title?: string;
  description?: string;
  imageSrc: string;
}) {
  return(
    <section className="p-10">
      <Image src={imageSrc} alt={""} height={300} width={300}/>
      <h1 className="text-3xl font-[gelasio]">{title}</h1>
      <p>{description}</p>
    </section>
  )
}