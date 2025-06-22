import json from "../data.json";
import Motion from "./Motion";

const Professional = () => {
  const imageClasses = {
    "/rafael.png": "bg-[url('/rafael.png')]",
    "/marcieli.png": "bg-[url('/marcieli.png')]",
    "/laiane.png": "bg-[url('/laiane.png')]",
    "/rafaellaroca.png": "bg-[url('/rafaellaroca.png')]",
    "/flavia.png": "bg-[url('/flavia.png')]",
    "/thais.png": "bg-[url('/thais.png')]",
    "/ingrid.png": "bg-[url('/ingrid.png')]",
    "/leslie.png": "bg-[url('/leslie.png')]",
    "/jociele.png": "bg-[url('/jociele.png')]",
    "/valmir.png": "bg-[url('/valmir.png')]",
  };

  return (
    <Motion>
      <div className="flex w-screen justify-center">
        <section className="flex w-full max-w-7xl flex-wrap gap-4 p-4 md:p-12">
          {json.profissionals.map((profissional) => (
            <Motion
              className="flex w-full flex-1 flex-col items-center rounded-md bg-light-cyan-neuro sm:min-w-96"
              key={profissional.name}
            >
              <div
                className={`h-64 w-full bg-light-cyan-neuro ${imageClasses[profissional.image]} bg-contain bg-bottom bg-no-repeat`}
              ></div>
              <div className="p-8">
                <h2 className="text-center font-decoration text-3xl text-dark-cyan-neuro">
                  {profissional.name}
                </h2>
                <p className="pt-2 text-center text-lg font-bold uppercase text-dark-neuro">
                  {profissional.role}
                </p>
                <p className="text-center text-lg uppercase text-dark-neuro">
                  {profissional.description}
                </p>
                {profissional.formations?.map((formation) => (
                  <div key={formation.title} className="mt-4 w-full">
                    <p className="text-center font-bold text-dark-neuro">
                      {formation.title}
                    </p>
                    <p className="flex flex-wrap justify-center break-words text-center text-dark-neuro">
                      {formation.items && (
                        <p className="break-words text-center text-dark-neuro">
                          {formation.items
                            .map((itemObj) => itemObj.item)
                            .join(" • ")}
                        </p>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </Motion>
          ))}
        </section>
      </div>
    </Motion>
  );
};

export default Professional;
