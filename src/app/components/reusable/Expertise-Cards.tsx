import Image from "next/image";

type expertiseProps = {
  idx: number,
  title: string,
  description: string,
  image: string,
  flip: boolean
}

export default function ExpertiseCards({idx, title, description, image, flip} : expertiseProps) {
  return(
    <section className="w-full bg-slate-200 text-[#202A36] my-10">
      {flip ?
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col justify-between gap-3 md:gap-0 my-5 md:my-0">
            <div>
              <p className="max-w-md text-lg font-bold text-[#4E8CA2]">
                {idx}
              </p>
              <h3 className="max-w-md text-xl font-bold">
                {title}
              </h3>
            </div>
            <p className="md:max-w-xs text-md font-semibold">
              {description}
            </p>
          </div>
          <div className="object-contain">
            <Image
              src={image}
              alt={""}
              width={800}
              height={800}
              className="h-auto max-h-[calc(100svh-12rem)] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      :
        <div className="flex flex-col-reverse md:flex-row md:gap-5">
          <div className="object-contain">
            <Image
              src={image}
              alt={""}
              width={800}
              height={800}
              className="h-auto max-h-[calc(100svh-12rem)] w-auto max-w-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-between gap-3 md:gap-0 my-5 md:my-0">
            <div className="flex flex-col">
              <p className="max-w-md text-lg font-bold text-[#4E8CA2]">
                {idx}
              </p>
              <h3 className="max-w-md text-lg font-bold">
                {title}
              </h3>
            </div>
            <p className="md:max-w-xs text-md font-semibold">
              {description}
            </p>
          </div>
        </div>
      }
    </section>
  );
}