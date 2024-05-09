import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Professional from "../components/Professional";
import LinkGoBack from "../components/LinkGoBack";

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
