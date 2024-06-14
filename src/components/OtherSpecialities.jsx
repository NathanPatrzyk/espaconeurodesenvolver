import Motion from "./Motion";

import ImagePsicologia from "../assets/psicologia.webp";
import ImageFonoaudiologia from "../assets/fonoaudiologia.webp";

const OtherSpecialities = () => {
  return (
    <section id="outrasespecialidades" className="flex md:flex-row flex-col bg-light-cyan-neuro">
      <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8 md:bg-gradient-to-r md:from-dark-cyan-neuro md:to-cyan-neuro md:rounded-none md:rounded-tr-[800px] rounded-none">
        <Motion>
          <figure className="flex flex-col sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]">
            <img
              className="self-start sm:size-[150px] size-[45vw] max-w-[150px] max-h-[150px]"
              src={ImagePsicologia}
            ></img>
            <img
              className="self-end sm:size-[150px] size-[45vw] max-w-[150px] max-h-[150px]"
              src={ImageFonoaudiologia}
            ></img>
          </figure>
        </Motion>
      </div>
      <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8 ">
        <Motion>
          <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
            Outras Especialidades
            <ul className="font-normal list-disc text-dark-neuro flex flex-col gap-1 ps-8 pt-4 text-base">
              <li>Psicologia</li>
              <li>Fonoaudiologia</li>
              <li>Etc.</li>
            </ul>
          </h2>
        </Motion>
      </div>
    </section>
  );
};

export default OtherSpecialities;
