import Image from "next/image"

type image = {
  title: string,
  imageSrc: string,
}

export default function ImageCard ({title, imageSrc}: image) {
  return(
    <article className="w-85 border rounded-lg bg-slate-600 border-neutral-200">
      <div className="relative aspect-square w-full flex grow">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="rounded-lg object-cover size-full transition-all duration-300 hover:scale-90"
        />
      </div>
    </article>
  );
}