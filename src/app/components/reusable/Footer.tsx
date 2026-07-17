import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-slate-200 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl flex items-center justify-between py-6 px-6">
        <div className="flex">
          <div 
            className="flex flex-col gap-3 text-4xl tracking-tight select-none text-[#4E8CA2]"
          >
            <p className="font-semibold">Z <span className="text-[#202A36]">&amp;</span> V</p>
            <p className="text-[#202A36] tracking-tight select-none">Home Construction LLC</p>
          </div>
          <a href="https://www.flaticon.com/free-icons/architect" title="architect icons">Architect icons created by Vectors Tank - Flaticon</a>
        </div>
      </div>
    </footer>
  );
}