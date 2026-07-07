"use client"
import Link from "next/link";
// import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Services", href: "#services", current: false },
  { name: "Our Work", href: "#work", current: false },
  { name: "About Us", href: "#about", current: false },
]

export default function NavBar() {
  const [mobileNav, setShowMobileNav] = useState(false);
  const [current, setCurrent] = useState("Home")

  const handleShowHide = () => {
    setShowMobileNav(!mobileNav);
  };

  const handleActive = (name: string) => {
    setCurrent(name);
  };
  
  return (
    <header className="bg-white sticky top-0 z-50">
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl flex items-center justify-between py-6 px-6">
        <div className="flex text-slate-600">
          <Link 
            href="/" 
            className="font-serif text-xl tracking-tight select-none text-slate-600"
          >
            Z &amp; V
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-3 select-none">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={() => handleActive(item.name)} 
              className={(current == item.name ? "text-slate-800 underline " : "text-slate-600 ") + "hover:text-slate-800 px-3 py-2 text-md font-medium"}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            key={"Get a Quote"} 
            href={"/"} 
            className={"text-slate-600 hover:text-white hover:bg-slate-800 border px-3 py-2 text-sm font-medium"}
          >
            GET A QUOTE
          </Link>
        </div>
      </nav>
    </header>
  );
}