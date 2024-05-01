import React from "react";
import ButtonAlternative from "./ButtonAlternative";

const Professionals = () => {
  return (
    <footer className="bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro">
      <div className="flex sm:flex-row flex-col md:gap-8 gap-2 md:p-16 py-8 p-4">
        <div className="flex">
            <h2 className="text-light-neuro text-2xl font-bold">
              Conheça nossos profissionais, suas formações e especialidades:
            </h2>
        </div>
        <div className="sm:self-center min-w-[128px]">
            <ButtonAlternative>
                <div>SAIBA MAIS</div>
            </ButtonAlternative>
        </div>
      </div>
    </footer>
  );
};

export default Professionals;
