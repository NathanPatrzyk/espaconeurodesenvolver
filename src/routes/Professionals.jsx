import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

import Professional from "../components/Professional";
import LinkSmall from "../components/LinkSmall";

function Professionals() {
  return (
    <div className="pt-16">
      <LinkSmall textColor="dark-cyan-neuro" name="Voltar" link="/" />
      <Professional />
      <Nav />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default Professionals;
