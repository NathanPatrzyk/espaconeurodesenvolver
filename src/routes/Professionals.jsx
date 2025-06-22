import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";

import Professional from "../components/Professional";
import Motion from "../components/Motion";
import LinkSmall from "../components/link/LinkSmall";
import { useState, useEffect } from "react";

function Professionals() {
  const [loaded, setLoaded] = useState(true);

  const bgImage = "bg-[url('/cloud.svg')]";

  useEffect(() => {
    const img = new Image();
    img.src = "/cloud.svg";
    img.onload = () => setLoaded(false);
  }, []);

  return (
    <div>
      <div
        className={`flex w-screen flex-col justify-center bg-cover bg-bottom bg-no-repeat pt-16 ${loaded ? "bg-dark-cyan-neuro" : bgImage}`}
      >
        <LinkSmall textColor="white" name="Voltar" link="/" />
        <div className="flex h-full min-h-40 justify-center p-4 md:p-8">
          <Motion>
            <h1 className="text-center font-decoration text-4xl text-white md:text-left">
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
