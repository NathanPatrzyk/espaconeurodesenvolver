import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";

import Professional from "../components/Professional";
import Motion from "../components/Motion";
import LinkSmall from "../components/link/LinkSmall";

function Professionals() {
  return (
    <div>
      <div className="flex w-full flex-col justify-center bg-dark-cyan-neuro bg-[url('/cloud.svg')] bg-cover bg-bottom bg-no-repeat pt-16">
        <LinkSmall textColor="white" name="Voltar" link="/" />
        <div className="flex h-full justify-center p-4 md:p-8">
          <Motion>
            <h1 className="pb-14 text-center font-decoration text-4xl text-white md:text-left">
              Nossos Profissionais
            </h1>
          </Motion>
        </div>
      </div>
      <Professional />
      <Nav />
      <Footer />
    </div>
  );
}

export default Professionals;
