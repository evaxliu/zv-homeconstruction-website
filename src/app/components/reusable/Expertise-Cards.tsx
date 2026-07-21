import Image from "next/image";

type expertiseProps = {
  idx: number,
  title: string,
  description: string,
  image: string,
  width: number,
  height: number,
  flip: boolean
}

export default function ExpertiseCards({idx, title, description, image, width, height, flip} : expertiseProps) {
  return(
    <section className="w-full text-[#202A36] my-5 lg:my-10">
      {flip ?
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-30">
          <div className="flex flex-col justify-between gap-3 lg:gap-0 my-5 lg:my-0">
            <div>
              <p className="max-w-md text-xl font-medium text-[#4E8CA2]">
                {idx}
              </p>
              <h3 className="max-w-md text-2xl font-medium">
                {title}
              </h3>
            </div>
            <p className="max-w-2xl lg:max-w-xs text-lg font-medium">
              {description}
            </p>
          </div>
          <div className="object-contain">
            <Image
              src={image}
              alt={""}
              width={width}
              height={height}
              className="h-auto lg:max-h-[calc(100svh-12rem)] w-auto max-w-200 object-contain"
            />
          </div>
        </div>
      :
        <div className="flex flex-col-reverse lg:flex-row lg:gap-5">
          <div className="object-contain">
            <Image
              src={image}
              alt={""}
              width={width}
              height={height}
              className="h-auto lg:max-h-[calc(100svh-12rem)] w-auto max-w-200 object-contain"
            />
          </div>
          <div className="flex flex-col justify-between gap-3 lg:gap-0 my-5 lg:my-0">
            <div className="flex flex-col">
              <p className="max-w-md text-xl font-medium text-[#4E8CA2]">
                {idx}
              </p>
              <h3 className="max-w-md text-2xl font-medium">
                {title}
              </h3>
            </div>
            <p className="max-w-2xl lg:max-w-xs text-lg font-medium">
              {description}
            </p>
          </div>
        </div>
      }
    </section>
  );
}