import Motion from "./Motion";
import Link from "./Link";

import IconWhatsapp from "../assets/whatsapp.svg";
import ImageMain from "../assets/main.webp";

const Main = () => {
  return (
    <main className="flex md:flex-row flex-col-reverse bg-light-cyan-neuro">
      <div className="flex-1 flex flex-col justify-center md:pt-48 md:pb-32 md:px-16 px-4 py-8">
        <Motion>
          <h1 className="text-dark-neuro text-3xl">
            Agende uma avaliação e venha{" "}
            <span className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
              conhecer nosso espaço!
            </span>
          </h1>
          <div className="pt-6">
            <Link
              icon={IconWhatsapp}
              link="https://api.whatsapp.com/send?phone=554299732535"
              name="ENTRE EM CONTATO"
              theme="dark"
            />
          </div>
        </Motion>
      </div>
      <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 md:pt-28 pt-24 py-8 md:bg-gradient-to-r md:from-dark-cyan-neuro md:to-cyan-neuro bg-gradient-to-r from-transparent to-transparent md:rounded-none md:rounded-bl-[800px] rounded-none">
        <Motion>
          <img
            src={ImageMain}
            className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
          ></img>
        </Motion>
      </div>
    </main>
  );
};

export default Main;
