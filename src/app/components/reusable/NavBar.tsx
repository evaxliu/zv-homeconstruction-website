"use client"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'

const language = [
  { language: "EN", href: "/", current: true },
  { language: "VN", href: "/", current: false }
]

export default function NavBar() {
  const pathname = usePathname()
  const [currentLang, setCurrentLang] = useState("EN")

  const handleActiveLang = (language: string) => {
    setCurrentLang(language);
  };
  
  return (
    <header className="bg-slate-200 sticky top-0 z-50">
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl flex items-center justify-between py-6 px-6">
        <div className="flex">
          <Link
            href="/"
            className={`link ${pathname === '/' ? 'active' : ''} flex gap-3 text-2xl tracking-tight select-none text-[#4E8CA2]`}
          >
            <p className="font-semibold">Z <span className="text-[#202A36]">&amp;</span> V</p>
            <p className="text-[#202A36] hidden lg:flex text-2xl tracking-tight select-none">Home Construction LLC</p>
          </Link>
        </div>
        <div className="flex items-center gap-3 select-none">
          <Link 
            key={currentLang == "EN" ? "Get a Quote" : "Tiếp xúc"}
            href={"/contact-us"} 
            className={"text-[#202A36] hover:bg-[#4E8CA2] border border-[#4E8CA2] px-3 py-2 text-sm font-semibold rounded-xl"}
          >
            {currentLang == "EN" ? "Get a Quote" : "Tiếp xúc"}
          </Link>
          <div className="flex text-sm border border-[#4E8CA2] rounded-xl">
            {language.map((item) => (
              <Link 
                key={item.language}
                href={item.href} 
                onClick={() => handleActiveLang(item.language)} 
                className={(currentLang == item.language ? "text-[#202A36] bg-[#4E8CA2] " : "text-[#202A36] ") + "hover:bg-[#4E8CA2] font-semibold px-3 py-2 rounded-xl"}
              >
                {item.language}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}