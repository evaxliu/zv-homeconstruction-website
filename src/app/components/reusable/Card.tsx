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
    <article className="w-85 border rounded-lg bg-slate-600 border-neutral-200 font-[gelasio]">
      <div className="relative aspect-square w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="rounded-lg object-cover size-full transition-all duration-300 hover:scale-90"
        />
      </div>
      <section className="px-4 py-6 flex flex-col gap-3">
        <h3 className="text-2xl text-white">
          {title}
        </h3>
        <p className="flex flex-col gap-6 text-base text-white font-medium">
          {description}
        </p>
      </section>
    </article>
  );
}