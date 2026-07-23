import AboutUs from "./components/sections/About-Us";
import ContactUs from "./components/sections/Contact-Us";
import Expertise from "./components/sections/Expertise";
import Main from "./components/sections/Main";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://www.zvhomes.org/#business",
  name: "Z&V Home Construction LLC",
  url: "https://www.zvhomes.org/",
  description:
    "Licensed, bonded, and insured general contractor providing residential remodeling, small commercial renovation, and handyman services in Bothell and the Greater Seattle area.",
  telephone: "+1-945-304-9455",
  email: "zvhomeconstruction@gmail.com",
  foundingDate: "2021",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18949 108th Ave NE",
    addressLocality: "Bothell",
    addressRegion: "WA",
    postalCode: "98011",
    addressCountry: "US",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Bothell",
    },
    {
      "@type": "AdministrativeArea",
      name: "Greater Seattle Area",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "08:00",
      closes: "19:00",
    },
  ],
};

export default function Home() {
  return (
    <div className="bg-[#E5ECF2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="w-full">
        <Main />
      </div>
      <div className="w-full">
        <Services />
      </div>
      <div className="w-full">
        <Expertise />
      </div>
      <div className="w-full">
        <AboutUs />
      </div>
      <div className="w-full">
        <Projects />
      </div>
      <div className="w-full">
        <ContactUs />
      </div>
    </div>
  );
}