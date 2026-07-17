const skills = [
  "Residential",
  "Commercial",
  "Handyman"
]

export default function Expertise() {
  return(
    <section className="w-full bg-slate-200 text-[#202A36]">
      <div className="mx-auto max-w-7xl px-6 py-20 flex">
        <div className="flex flex-col justify-start">
          <p className="max-w-md text-lg font-bold text-[#4E8CA2]">
            Expertise
          </p>
          <h2 className="max-w-md text-3xl font-bold">
            Our Focus Areas
          </h2>
        </div>
        {/* Expertise Cards */}
      </div>
    </section>
  );
}