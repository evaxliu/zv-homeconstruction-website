"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'

const language = [
  { language: "EN", href: "/" },
  { language: "VN", href: "/vn" }
]

export default function NavBar() {
  const pathname = usePathname()
  
  return (
    <header className="bg-slate-200 sticky top-0 z-50">
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl flex items-center justify-between py-6 px-6">
        <div className="flex">
          <Link
            href={pathname === '/' ? "/" : "/vn"}
            className={`link ${pathname === '/' ? 'active' : ''} flex gap-3 text-2xl tracking-tight select-none text-[#4E8CA2]`}
          >
            <p className="font-semibold">Z <span className="text-[#202A36]">&amp;</span> V</p>
            <p className="text-[#202A36] hidden lg:flex text-2xl tracking-tight select-none">Home Construction LLC</p>
          </Link>
        </div>
        <div className="flex items-center gap-3 select-none">
          <Link 
            key={pathname === '/' ? "Get a Quote" : "Tiếp xúc"}
            href={"/contact-us"} 
            className={"text-[#202A36] hover:bg-[#4E8CA2] border border-[#4E8CA2] px-3 py-2 text-sm font-semibold rounded-xl"}
          >
            {pathname === '/' ? "Get a Quote" : "Tiếp xúc"}
          </Link>
          <div className="flex overflow-hidden rounded-xl border border-[#4E8CA2] text-sm">
            {language.map((item) => {
              const isVietnamese =
                pathname === "/vn" || pathname.startsWith("/vn/");

              const isActive =
                item.language === "VN" ? isVietnamese : !isVietnamese;

              return (
                <Link
                  key={item.language}
                  href={item.href}
                  className={`
                    px-3 py-2 font-semibold
                    hover:bg-[#4E8CA2]
                    ${isActive
                      ? "bg-[#4E8CA2] text-white"
                      : "text-[#202A36]"
                    }
                  `}
                >
                  {item.language}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}