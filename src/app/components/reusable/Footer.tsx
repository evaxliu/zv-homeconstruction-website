import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-[#E5ECF2] sticky top-0 z-50 text-[#202A36]">
      <div className="mx-auto max-w-7xl py-6 px-6">
        <div className="flex flex-col lg:flex-row justify-between border-b">
          <div
            className="flex flex-col w-full gap-3 text-4xl tracking-tight select-none text-[#4E8CA2] py-5"
          >
            <p className="font-semibold">Z <span className="text-[#202A36]">&amp;</span> V</p>
            <p className="tracking-tight select-none text-[#202A36]">Home Construction LLC</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5 font-semibold">
            <div>
              <p className="text-[#4E8CA2]">
                Business Address
              </p>
              <p>
                18949 108th Ave NE,
              </p>
              <p>
                Bothell, WA 98011
              </p>
              <p>
                zvhomeconstruction@gmail.com
              </p>
            </div>
            <div>
              <p className="text-[#4E8CA2]">
                Inquiries
              </p>
              <p>
                For any inquiries, questions or commendations, please call:
              </p>
              <p>
                (945) 304-9455
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#4E8CA2]">
                Socials
              </p>
              <Link 
                href={"https://www.linkedin.com/company/zvhomes/"}
                rel="noopener noreferrer"
                target="_blank"
              >
                Linkedin
              </Link>
              <Link 
                href={"https://www.facebook.com/people/ZV-Homeconstruction-LLC/100075830095164/"}
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 gap-5">
          <p className="font-semibold">
            © 2026 Z&V Home Construction LLC · Licensed, Bonded & Insured · Bothell, WA
          </p>
          <p className="text-xs">
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/dimitry-miroliubov"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Dimitry Miroliubov
            </a>
            ,{" "}
            <a
              href="https://www.flaticon.com/authors/smashicons"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Smashicons
            </a>
            ,{" "}
            <a
              href="https://www.flaticon.com/authors/magnific"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Magnific
            </a>
            ,{" "}
            <a
              href="https://www.flaticon.com/authors/vectors-tank"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Vectors Tank
            </a>
            ,{" "}
            <a
              href="https://www.flaticon.com/authors/smashingstocks"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              smashingstocks
            </a>
            ,{" "}
            <a
              href="https://www.flaticon.com/authors/maan-icons"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Maan Icons
            </a>
            ,{" "}
            <a
              href="https://www.flaticon.com/authors/umeicon"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Umeicon
            </a>
            , and{" "}
            <a
              href="https://www.flaticon.com/authors/darwin-mulya"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Darwin Mulya
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Flaticon
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}