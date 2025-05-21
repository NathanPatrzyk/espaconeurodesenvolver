import Nav from "../components/Nav";
import Footer from "../components/Footer";

import About from "../components/About";
import SocialMedia from "../components/SocialMedia";

function Sobre() {
  return (
    <div className="pt-16">
      <About />
      <SocialMedia />
      <Nav />
      <Footer />
    </div>
  );
}

export default Sobre;
