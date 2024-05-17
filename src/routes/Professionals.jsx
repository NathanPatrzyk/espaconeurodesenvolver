import Nav from "../components/Nav";
import Footer from "../components/Footer";

import LinkGoBack from "../components/LinkGoBack";

import Professional from "../components/Professional";

function Professionals() {
  return (
    <div>
      <LinkGoBack textColor="dark-cyan-neuro" />
      <Professional />
      <Nav />
      <Footer />
    </div>
  );
}

export default Professionals;
