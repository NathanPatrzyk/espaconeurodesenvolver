import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";

import Professional from "../components/Professional";
import LinkSmall from "../components/link/LinkSmall";

function Professionals() {
  return (
    <div className="pt-16">
      <LinkSmall textColor="dark-cyan-neuro" name="Voltar" link="/" />
      <Professional />
      <Nav />
      <Footer />
    </div>
  );
}

export default Professionals;
