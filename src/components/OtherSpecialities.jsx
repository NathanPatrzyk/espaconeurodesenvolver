import Motion from "./Motion";

import ImagePsicomotricidade from "../assets/psicomotricidade.webp";
import ImagePsicologia from "../assets/psicologia.webp";
import ImageFonoaudiologia from "../assets/fonoaudiologia.webp";

const OtherSpecialities = () => {
  return (
    <section className="flex md:flex-row flex-col bg-light-neuro">
      <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8 ">
        <Motion>
          <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
            Outras Especialidades
            <ul className="font-normal list-disc text-dark-neuro flex flex-col gap-1 ps-8 pt-4 text-base">
              <li>Psicomotricidade</li>
              <li>Psicologia</li>
              <li>Fonoaudiologia</li>
              <li>Etc.</li>
            </ul>
          </h2>
        </Motion>
      </div>
      <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8 md:bg-gradient-to-r md:from-light-cyan-neuro md:to-light-cyan-neuro md:rounded-none md:rounded-bl-[800px] rounded-none">
        <Motion>
          <figure className="flex flex-col sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]">
            <img
              className="self-start sm:size-[100px] size-[30vw] max-w-[100px] max-h-[100px]"
              src={ImagePsicomotricidade}
            ></img>
            <img
              className="self-center sm:size-[100px] size-[30vw] max-w-[100px] max-h-[100px]"
              src={ImagePsicologia}
            ></img>
            <img
              className="self-end sm:size-[100px] size-[30vw] max-w-[100px] max-h-[100px]"
              src={ImageFonoaudiologia}
            ></img>
          </figure>
        </Motion>
      </div>
    </section>
  );
};

export default OtherSpecialities;
