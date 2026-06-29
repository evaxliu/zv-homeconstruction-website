'use client'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '/', current: false },
  { name: 'Our Work', href: '/', current: false },
  { name: 'About Us', href: '/', current: false },
]

export default function TempNav() {
  const [mobileNav, setShowMobileNav] = useState(false);

  const handleShowHide = () => {
    setShowMobileNav(!mobileNav);
  };
  
  return (
    <header className='bg-black sticky top-0 z-50'>
      <nav className='mx-auto max-w-7xl flex items-center justify-between py-6 px-6 bg-white'>
        <div className="flex text-slate-600">
          <span className="font-serif text-xl tracking-tight select-none">Z & V</span>
        </div>
        <div className='gap-6 hidden md:block'>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className='text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium'>
              {item.name}
            </a>
          ))}
          <a key={"Get a Quote"} href={"/"} className='text-slate-600 hover:text-white hover:bg-slate-800 border px-3 py-2 text-sm font-medium'>
            Get a Quote
          </a>
        </div>
      </nav>
    </header>
  );
}