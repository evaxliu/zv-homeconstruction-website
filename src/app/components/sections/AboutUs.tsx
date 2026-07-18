import Image from "next/image";

const stats = [
  {title: "Experience", desc: "Year of Establishment", num: "2021", icon: "/about-icons/experience.png"},
  {title: "Scale", desc: "Completed Projects", num: "40+", icon: "/about-icons/scale.png"},
  {title: "Bond", desc: "Nationwide Mutual Insurance", num: "$30k", icon: "/about-icons/bond.png"},
  {title: "Insurance", desc: "Third Coast Insurance", num: "$1M", icon: "/about-icons/insurance.png"},
]

export default function AboutUs() {
  return(
    <section className="w-full bg-slate-300 text-[#202A36]">
      <div className="mx-auto max-w-7xl px-6 flex flex-col">
        <div className="flex flex-col md:flex-row md:justify-between min-h-screen pt-20">
          <div className="flex flex-col justify-start">
            <p className="max-w-md text-xl font-bold text-[#4E8CA2]">
              About Us
            </p>
            <h2 className="md:max-w-2xl text-3xl font-semibold">
              Based in Bothell, WA, Z&V Home Construction provides remodeling, handyman, painting, fencing, decking, and commercial renovation services. We are licensed, bonded, and insured in Washington and committed to customer satisfaction.
            </h2>
          </div>
          <div className="flex flex-col items-center mt-10">
            <Image
              src={"/engineer.png"}
              alt={""}
              width={512}
              height={512}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start pt-20 md:pt-0">
          <p className="max-w-md text-xl font-bold text-[#4E8CA2]">
            By the Numbers
          </p>
          <h2 className="max-w-2xl text-2xl font-semibold">
            Proven Results, Solid Foundations
          </h2>
          <div className="my-10 grid grid-cols-1 lg:grid-cols-4 justify-between">
            {stats.map((stat) => (
              <div key={stat.title} className="flex flex-col lg:min-h-136 border-b last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <div className="flex flex-col border-b px-6 pb-3 pt-10">
                  <Image
                    src={stat.icon}
                    alt={stat.title}
                    width={40}
                    height={40}
                  />
                  <h3 className="mt-6 text-lg font-semibold">
                    {stat.title}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col justify-between px-6 py-14">
                  <p className="text-5xl font-bold md:text-6xl">
                    {stat.num}
                  </p>
                  
                  <p className="max-w-56 text-2xl font-semibold leading-tight">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}