import Nav from "../components/Nav";
import Footer from "../components/Footer";

import About from "../components/About";
import SocialMedia from "../components/SocialMedia";
import Location from "../components/Location";

function Sobre() {
  return (
    <div className="pt-16">
      <About />
      <SocialMedia />
      <Location />
      <Nav />
      <Footer />
    </div>
  );
}

export default Sobre;
