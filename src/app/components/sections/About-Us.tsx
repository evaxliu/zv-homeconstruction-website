import Image from "next/image";

const stats = [
  {title: "Experience", desc: "Year of Establishment", num: "2021", icon: "/about/experience.png"},
  {title: "Scale", desc: "Completed Projects", num: "40+", icon: "/about/scale.png"},
  {title: "Bond", desc: "Nationwide Insurance", num: "$30k", icon: "/about/bond.png"},
  {title: "Insurance", desc: "Third Coast Insurance", num: "$1M", icon: "/about/insurance.png"},
]

export default function AboutUs() {
  return(
    <section className="w-full text-[#202A36]">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col">
        <div className="flex flex-col justify-start">
          <div className="flex flex-col lg:flex-row lg:items-start my-5 gap-5 pb-5 md:pb-20">
            <div className="flex flex-col gap-2">
              <p className="max-w-md text-xl font-medium text-[#4E8CA2]">
                About Us
              </p>
              <h2 className="md:max-w-3xl text-3xl font-medium">
                Based in Bothell, WA, Z&V Home Construction provides remodeling, handyman, painting, fencing, decking, and commercial renovation services. We are licensed, bonded, and insured in Washington and committed to customer satisfaction.
              </h2>
            </div>
          <div className="flex flex-col items-center mt-10">
            <Image
              src={"/construction-worker.webp"}
              alt={"construction worker outline"}
              width={1600}
              height={812}
              className="h-auto w-full max-w-160 object-contain"
            />
          </div>
          </div>
        </div>

        <div className="flex flex-col justify-start pt-20 md:pt-0">
          <div className="flex flex-col gap-3">
            <p className="max-w-md text-xl font-medium text-[#4E8CA2]">
              By the Numbers
            </p>

            <h2 className="max-w-2xl text-4xl font-medium">
              Proven Results, Solid Foundations
            </h2>
          </div>

          <div className="my-10 grid grid-cols-1 lg:grid-cols-4 justify-between">
            {stats.map((stat) => (
              <div key={stat.title} className="flex flex-col md:max-w-xl max-w-full lg:min-h-136 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <div className="flex flex-col border-b lg:px-6 pb-3 pt-10">
                  <Image
                    src={stat.icon}
                    alt={stat.title}
                    width={40}
                    height={40}
                  />
                </div>

                <div className="flex flex-col border-b lg:px-6 pb-3">
                  <h3 className="mt-3 text-lg">
                    {stat.title}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-5 lg:px-6 py-7 lg:py-14">
                  <p className="text-5xl font-semibold md:text-6xl">
                    {stat.num}
                  </p>
                  
                  <p className="max-w-60 text-3xl leading-tight">
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