import AboutUs from "./components/sections/About-Us";
import ContactUs from "./components/sections/Contact-Us";
import Expertise from "./components/sections/Expertise";
import Main from "./components/sections/Main";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";

export default function Home() {
  return (
    <div className="bg-[#E5ECF2]">
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