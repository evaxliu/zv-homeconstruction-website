"use client"
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Services", href: "/services", current: false },
  { name: "Our Work", href: "/our-work", current: false },
  { name: "About Us", href: "/about-us", current: false },
]

const language = [
  { language: "EN", href: "/", current: true },
  { language: "VI", href: "/", current: false }
]

export default function NavBar() {
  const [mobileNav, setShowMobileNav] = useState(false);
  const [currentTab, setCurrentTab] = useState("Home")
  const [currentLang, setCurrentLang] = useState("EN")

  const handleShowHide = () => {
    setShowMobileNav(!mobileNav);
  };

  const handleActiveTab = (name: string) => {
    setCurrentTab(name);
  };

  const handleActiveLang = (language: string) => {
    setCurrentLang(language);
  };
  
  return (
    <header className="bg-white sticky top-0 z-50">
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl flex items-center justify-between py-6 px-6 text-slate-600">
        <div className="flex">
          <Link 
            href="/" 
            onClick={() => handleActiveTab("Home")}
            className="font-serif text-2xl tracking-tight select-none text-slate-600"
          >
            Z &amp; V
          </Link>
          <Link
            href="/" 
            onClick={() => handleActiveTab("Home")}
            className="hidden lg:flex font-serif text-2xl tracking-tight select-none text-slate-600"
          >
           | Home Construction LLC
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-3 select-none">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={() => handleActiveTab(item.name)} 
              className={(currentTab == item.name ? "text-slate-800 underline " : "text-slate-600 ") + "hover:text-slate-800 px-3 py-2 text-md font-medium"}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            key={"Get a Quote"} 
            href={"/contact-us"} 
            className={"text-slate-600 hover:text-white hover:bg-slate-800 border px-3 py-2 text-sm font-medium"}
          >
            GET A QUOTE
          </Link>
          <div className="flex text-sm border">
            {language.map((item) => (
              <Link 
                key={item.language} 
                href={item.href} 
                onClick={() => handleActiveLang(item.language)} 
                className={(currentLang == item.language ? "text-slate-800 bg-slate-400 " : "text-slate-600 ") + "hover:text-slate-800 font-medium px-3 py-2"}
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