export default function AboutUs() {
  return(
    <section className="flex flex-col md:flex-row bg-slate-200 text-black w-full">
      <article className="flex w-full flex-col text-center items-center gap-5 py-10 md:flex-1 md:justify-center mx-auto max-w-7xl px-6 min-h-[calc(100svh-80px)] md:gap-10 md:items-center font-[gelasio]">
        <div>
          <h2 className="text-5xl">
            ABOUT US
          </h2>
        </div>
        <div className="flex flex-col justify-center md:flex-row md:flex-wrap gap-10">
          <p>
            Headquartered in Bothell, WA, Z&V Homeconstruction is a general construction company specializing in providing general contracting services such as but not limited to:
          </p>
          <ul>
            <li>
              Home improvements
            </li>
            <li>
              Handyman services
            </li>
            <li>
              Business interior and exterior renovation
            </li>
            <li>
              Painting
            </li>
            <li>
              Fence Installation
            </li>
            <li>
              Deck construction
            </li>
            <li>
              Etc.
            </li>
          </ul>
          <p>
            We take pride in assuring that our customers’ satisfaction will be maximized when working with us. We are bonded, licensed, and insured in the state of Washington.
          </p>
        </div>
      </article>
    </section>
  );
}