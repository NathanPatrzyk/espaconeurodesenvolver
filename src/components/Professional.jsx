import json from "../data.json";
import Motion from "./Motion";

const Professional = () => {
  return (
    <Motion>
      <div className="flex w-screen justify-center">
        <section className="flex w-full max-w-7xl flex-wrap gap-4 p-4 md:p-12">
          {json.profissionals.map((profissional) => (
            <div
              key={profissional.name}
              className="flex w-full flex-1 flex-col items-center justify-between p-4 sm:min-w-96"
            >
              <h2 className="max-w-full text-center font-decoration text-3xl text-dark-cyan-neuro">
                {profissional.name}
              </h2>
              <p className="max-w-full pt-2 text-center text-lg font-bold uppercase text-dark-neuro">
                {profissional.role}
              </p>
              <p className="max-w-full text-center text-lg uppercase text-dark-neuro">
                {profissional.description}
              </p>
              <p></p>
            </div>
          ))}
        </section>
      </div>
    </Motion>
  );
};

export default Professional;
