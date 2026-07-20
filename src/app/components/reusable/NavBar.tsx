"use client"
import Link from "next/link";

export default function NavBar() {  
  const scrollToSection = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-[#E5ECF2] sticky top-0 z-50">
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl flex items-center justify-between py-6 px-6">
        <div className="flex">
          <Link
            href={"/"}
            className="flex gap-3 text-2xl tracking-tight select-none text-[#4E8CA2]"
          >
            <p className="font-semibold">Z <span className="text-[#202A36]">&amp;</span> V</p>
            <p className="text-[#202A36] hidden lg:flex text-2xl tracking-tight select-none">Home Construction LLC</p>
          </Link>
        </div>
        <div className="flex items-center gap-3 select-none">
          <button 
            key={"Get a Quote"}
            onClick={scrollToSection}
            className={"text-[#202A36] px-3 py-2 text-md font-medium hover:cursor-pointer hover:underline"}
          >
            Get a Quote
          </button>
        </div>
      </nav>
    </header>
  );
}