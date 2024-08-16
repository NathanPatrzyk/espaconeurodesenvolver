import Motion from "./Motion";
import Link from "./Link";

import IconWhatsapp from "../assets/whatsapp.svg";
import ImageMain from "../assets/main.webp";

const Main = () => {
  return (
    <main className="flex md:flex-row flex-col-reverse justify-center items-center pt-16 md:gap-8 bg-light-cyan-neuro">
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
      <div className="md:w-[50vw] flex justify-center items-center md:bg-gradient-to-r md:from-dark-cyan-neuro md:to-cyan-neuro bg-gradient-to-r from-transparent to-transparent md:rounded-none md:rounded-bl-[800px] rounded-none md:py-12 py-8">
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
