import Motion from "./Motion";
import Link from "./link/Link";

import IconWhatsappAlternative from "../assets/whatsappAlternative.svg";
import ImageLogo from "../assets/logo-big.webp";
import Flex from "./layout/Flex";

const Main = () => {
  return (
    <main className="flex w-full justify-center bg-dark-cyan-neuro bg-[url('/cloud.svg')] bg-cover bg-bottom bg-no-repeat pt-16">
      <Flex className="flex-col md:flex-row">
        <div className="flex flex-col p-4 md:p-12">
          <Motion>
            <h1 className="text-center text-3xl text-white md:text-left">
              Agende uma avaliação e venha{" "}
              <span className="font-decoration text-4xl">
                conhecer nosso espaço!
              </span>
            </h1>
            <div className="pt-6">
              <Link
                icon={IconWhatsappAlternative}
                link="https://api.whatsapp.com/send?phone=554299732535"
                name="ENTRE EM CONTATO"
                theme="light"
              />
            </div>
          </Motion>
        </div>
        <div className="flex w-full items-center justify-center p-4 duration-500 md:w-auto md:p-12">
          <Motion>
            <div className="mx-auto size-[300px] rounded-[60px] bg-transparent">
              <img
                src={ImageLogo}
                className="mx-auto size-[300px] animate-goback"
              ></img>{" "}
            </div>
          </Motion>
        </div>
      </Flex>
    </main>
  );
};

export default Main;
