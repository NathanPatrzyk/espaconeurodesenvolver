import json from "../data.json";

const Professional = () => {
  return (
    <section className="flex flex-col gap-12 bg-light-neuro md:pb-12 pb-8 md:px-16 px-4 pt-0">
      {json.profissionals.map((profissional) => (
        <div className="flex-1 flex flex-col md:flex-row gap-6 p-4 md:p-8 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
          <img
            className="size-[80%] max-w-[200px] max-h-[200px] mx-auto"
            src={profissional.image}
          />
          <div className="flex-1 sm:text-left text-center">
            <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
              {profissional.name}
            </h2>
            <p className="font-bold text-dark-neuro text-2xl pt-2">
              {profissional.role}
            </p>
            <p className="text-dark-neuro text-2xl pb-4">
              {profissional.description}
            </p>
            <div className="flex sm:block flex-col">
              {profissional.formations.map((formation) => (
                <p className="text-dark-neuro inline-block px-3 py-0.5 m-1 sm:mx-1 mx-auto bg-light-cyan-neuro rounded-full border-cyan-neuro border-[3px]">
                  {formation.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Professional;
