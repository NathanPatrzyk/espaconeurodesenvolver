import Motion from "./Motion";
import Link from "./Link";

import IconWhatsapp from "../assets/whatsapp.svg";
import ImageMain from "../assets/main.webp";
import BackgroundSocialMedia from "../assets/bgredesocial.webp";

import Cloud from "../assets/cloud.svg";
import ImageLogo from "../assets/logo-big.webp";

const Main = () => {
  return (
    <div>
      <main
        className="flex md:flex-row flex-col-reverse justify-center items-center pt-16 md:gap-8 bg-no-repeat bg-cover bg-bottom"
        style={{ backgroundImage: `url(${Cloud})` }}
      >
        <div className="md:w-[50vw] flex flex-col md:ps-16 px-4 md:px-0">
          <Motion>
            <h1 className="max-w-[980px] text-dark-neuro text-3xl">
              Agende uma avaliação e venha{" "}
              <span className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
                conhecer nosso espaço!
              </span>
            </h1>
            <div className="pt-6 pb-8">
              <Link
                icon={IconWhatsapp}
                link="https://api.whatsapp.com/send?phone=554299732535"
                name="ENTRE EM CONTATO"
                theme="dark"
              />
            </div>
          </Motion>
        </div>
        <div className="md:w-[50vw] flex justify-center items-center  md:rounded-none md:rounded-bl-[800px] rounded-none md:py-12 py-8">
          <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8">
            <div className="relative top-0 left-0">
              <Motion>
                <div className="bg-transparent size-[300px] min-w-[300px] min-h-[300px] rounded-[60px] mx-auto"></div>
                <div className="absolute top-0 left-0">
                  <img
                    src={ImageLogo}
                    className="size-[300px] min-w-[300px] min-h-[300px] rounded-[60px] mx-auto animate-goback"
                  ></img>
                </div>
              </Motion>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
