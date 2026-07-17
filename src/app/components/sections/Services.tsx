const services = [
  "Renovation",
  "Remodeling",
  "Flooring",
  "Drywall",
  "Carpentry",
  "Handyman",
  "Restaurants",
  "Salons",
  "Bathrooms"
]

export default function Services() {
  return(
    <section className="w-full bg-slate-200 text-[#202A36]">
      <div className="mx-auto max-w-7xl px-6 py-20 flex">
        <div className="flex flex-col justify-start">
          <p className="max-w-md text-lg font-bold text-[#4E8CA2]">
            Services
          </p>
          <h2 className="max-w-md text-3xl font-bold">
            We Provide a Variety of Solutions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div key={service} className="m-20">
              <h3 className="font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}