import Nav from "../components/Nav";
import Footer from "../components/Footer";

import Professional from "../components/Professional";
import LinkSmall from "../components/LinkSmall";

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
