import json from "../data.json";

import Motion from "./Motion";

const Professional = () => {
  return (
    <Motion>
      <section className="flex flex-col gap-12 md:pb-12 pb-8 md:px-16 px-4 pt-0">
        {json.profissionals.map((profissional) => (
          <div className="flex-1 flex flex-col md:flex-row gap-6 p-4 md:p-8 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
            <figure className="size-[80%] max-w-[200px] max-h-[200px] mx-auto">
              <img
                className="size-[100%] max-w-[200px] max-h-[200px]"
                src={profissional.image}
                alt={profissional.name}
              />
            </figure>
            <div className="flex-1 md:text-left text-center">
              <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
                {profissional.name}
              </h2>
              <p className="font-bold text-dark-neuro text-2xl pt-2">
                {profissional.role}
              </p>
              <p className="text-dark-neuro text-2xl pb-4">
                {profissional.description}
              </p>
              <div className="flex md:block flex-col">
                {profissional.formations &&
                  profissional.formations.map((formation) => (
                    <p className="text-dark-neuro inline-block px-3 py-0.5 m-1 md:mx-1 mx-auto bg-light-cyan-neuro rounded-full border-cyan-neuro border-[3px]">
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
