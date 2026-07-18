type expertiseProps = {
  title: string,
  description: string,
  image: string
}

export default function ExpertiseCards({title, description, image} : expertiseProps) {
  return(
    <section className="w-full bg-slate-200 text-[#202A36]">
      <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col md:flex-row">
        <div className="flex flex-col justify-start">
          <h3 className="max-w-md text-lg font-bold text-[#4E8CA2]">
            {title}
          </h3>
          <p className="max-w-md text-3xl font-bold">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}