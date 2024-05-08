import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LinkGoBack from "../components/LinkGoBack";

function PediaSuit() {
  return (
    <div>
      <LinkGoBack />
      <main className="flex md:flex-row flex-col-reverse bg-light-cyan-neuro">
        <div className="flex-1 flex flex-col justify-center md:px-16 md:py-12 py-8 ">
          <h1 className="text-dark-neuro text-3xl text-center">
            <span className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
              PediaSuit:
            </span>{" "}
            Transformando Vidas na Neuroreabilitação Infantil
          </h1>
        </div>
      </main>
      <Nav />
      <Footer />
    </div>
  );
}

export default PediaSuit;
