import json from "../data.json";

import Motion from "../components/Motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import Link from "../components/Link";
import LinksSmall from "../components/LinksSmall";
import LinkGoToProfessionals from "../components/LinkGoToProfessionals";

import IconZoom from "../assets/zoom.webp";
import IconCamera from "../assets/camera.webp";
import IconGlasses from "../assets/glasses.webp";
import IconWhatsapp from "../assets/whatsapp.svg";

import ImageEstimulacaoVisualAlternative from "../assets/estimulacaoVisualAlternative.webp";
import ImageEstimulacaoVisualAlternative2 from "../assets/estimulacaoVisualAlternative2.webp";

const EstimulacaoVisual = () => {
  const name = "Estimulação Visual";
  return (
    <div className="pt-16">
      <div className="bg-light-cyan-neuro">
        {json.pages.map(
          (page) =>
            page.childrens &&
            page.childrens.map((children) =>
              children.name == name ? (
                <LinksSmall previous={children.previous} next={children.next} />
              ) : null
            )
        )}
      </div>
      <main className="bg-light-cyan-neuro flex md:flex-row flex-col-reverse">
        <div className="flex-1 flex flex-col md:py-12 md:px-16 md:pt-4 py-8 px-4 pt-4">
          <Motion>
            <h1 className="text-dark-neuro text-3xl pb-4">
              <span className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
                Estimulação Visual:
              </span>{" "}
              Potencializando o Desenvolvimento Global da Visão
            </h1>
            <p>
              É a especialidade responsável pela melhora na capacidade de acuidade
              visual, ou seja, a nitidez da visão no dia a dia.
            </p>
          </Motion>
        </div>
      </main>
      <Motion>
        <section className="flex md:flex-row flex-col gap-8 md:px-16 px-4 md:py-12 py-8">
          <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
            <img className="mx-auto w-20 h-20" src={IconZoom} />
            <p className="text-dark-neuro pt-4">
              Criação de novas conexões neurais, possibilitando o cérebro a ver,
              mesmo que ocorram alterações nas funções visuais.
            </p>
          </div>
          <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
            <img className="mx-auto w-20 h-20" src={IconCamera} />
            <p className="text-dark-neuro pt-4">
              Auxílio no aprendizado e desenvolvimento global da visão.
            </p>
          </div>
          <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
            <img className="mx-auto w-20 h-20" src={IconGlasses} />
            <p className="text-dark-neuro pt-4">
              Indicada para qualquer indivíduo, independente da idade ou alteração
              visual apresentada.
            </p>
          </div>
        </section>
      </Motion>
      <LinkGoToProfessionals />
      <section className="flex md:flex-row flex-col">
        <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8 md:bg-gradient-to-r md:from-light-cyan-neuro md:to-light-cyan-neuro md:rounded-none md:rounded-tr-[800px] rounded-none">
          <Motion>
            <img
              src={ImageEstimulacaoVisualAlternative}
              className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
            ></img>
          </Motion>
        </div>
        <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8 ">
          <Motion>
            <p className="text-dark-neuro pt-6">
              As principais indicações para a Estimulação Visual são:{" "}
              <ul className="list-disc font-bold text-dark-cyan-neuro flex flex-col gap-1 ps-8 pt-4">
                <li>Estrabismo</li>
                <li>Nistagmo</li>
                <li>Dificuldades de Atenção e Foco</li>
                <li>Ambliopia</li>
                <li>Dificuldades de Acomodação Visual</li>
                <li>Insuficiência de Convergência</li>
                <li>Glaucoma</li>
                <li>Astigmatismo</li>
                <li>Distúrbio Visual Cortical</li>
                <li>Olhar Baixo</li>
                <li>Entre Outros</li>
              </ul>
            </p>
          </Motion>
        </div>
      </section>
      <section>
        <div className="flex md:flex-row flex-col-reverse bg-light-cyan-neuro">
          <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8">
            <Motion>
              <h1 className="text-dark-neuro text-2xl">
              O Espaço Neurodesenvolver disponibiliza as melhores metodologias no processo de fisioterapia e reabilitação. Venha conhecer!
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
          <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8 md:rounded-none md:rounded-bl-[800px] rounded-none">
            <Motion>
              <img
                src={ImageEstimulacaoVisualAlternative2}
                className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
              ></img>
            </Motion>
          </div>
        </div>
      </section>
      <div className="bg-light-cyan-neuro ">
        {json.pages.map(
          (page) =>
            page.childrens &&
            page.childrens.map((children) =>
              children.name == name ? (
                <LinksSmall previous={children.previous} next={children.next} />
              ) : null
            )
        )}
      </div>
      <Nav />
      <Footer />
    </div>
  );
};

export default EstimulacaoVisual;
