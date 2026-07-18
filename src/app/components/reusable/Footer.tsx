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
        </div>
          <div>Icons made by <a href="https://www.flaticon.com/authors/magnific" title="Magnific">Magnific</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/vectors-tank" title="Vectors Tank">Vectors Tank</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/smashingstocks" title="smashingstocks">smashingstocks</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/umeicon" title="Umeicon">Umeicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/darwin-mulya" title="Darwin Mulya">Darwin Mulya</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    </footer>
  );
}