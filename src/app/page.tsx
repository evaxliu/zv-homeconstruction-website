import AboutUs from "./components/sections/AboutUs";
import Expertise from "./components/sections/Expertise";
import Main from "./components/sections/Main";
import Services from "./components/sections/Services";

export default function Home() {
  return (
    <>
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
    </>
  );
}