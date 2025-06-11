import json from "../data.json";

import Motion from "./Motion";

const Professional = () => {
  return (
    <Motion>
      <section className="flex flex-col gap-12 px-4 pb-8 pt-0 md:px-16 md:pb-12">
        {json.profissionals.map((profissional) => (
          <div className="flex flex-1 flex-col gap-6 rounded-lg border-4 border-dark-neuro border-opacity-20 p-4 hover:border-cyan-neuro md:flex-row md:p-8">
            <figure className="mx-auto size-[80%] max-h-[200px] max-w-[200px]">
              <img
                className="size-[100%] max-h-[200px] max-w-[200px]"
                src={profissional.image}
                alt={profissional.name}
              />
            </figure>
            <div className="flex-1 text-center md:text-left">
              <h2 className="bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro bg-clip-text text-3xl font-bold text-transparent">
                {profissional.name}
              </h2>
              <p className="pt-2 text-2xl font-bold text-dark-neuro">
                {profissional.role}
              </p>
              <p className="pb-4 text-2xl text-dark-neuro">
                {profissional.description}
              </p>
              <div className="flex flex-col md:block">
                {profissional.formations &&
                  profissional.formations.map((formation) => (
                    <p className="m-1 mx-auto inline-block rounded-full border-[3px] border-cyan-neuro bg-light-cyan-neuro px-3 py-0.5 text-dark-neuro md:mx-1">
                      {formation.name}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </Motion>
  );
};

export default Professional;
