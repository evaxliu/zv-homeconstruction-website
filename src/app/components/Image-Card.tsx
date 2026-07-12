import Image from "next/image"

export default function ImageCard ({
  title = "",
  imageSrc = "",
}: {
  title?: string;
  description?: string;
  imageSrc: string;
}) {
  return(
    <article className="w-85 border rounded-lg bg-slate-600 border-neutral-200 font-[gelasio]">
      <div className="relative aspect-square w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="rounded-lg object-cover size-full transition-all duration-300 hover:scale-90"
        />
      </div>
    </article>
  )
}