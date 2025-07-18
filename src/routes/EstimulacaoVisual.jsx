import json from "../data.json";

import Motion from "../components/Motion";
import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";

import Link from "../components/link/Link";
import LinksSmall from "../components/link/LinksSmall";
import LinkGoToProfessionals from "../components/link/LinkGoToProfessionals";

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
                <LinksSmall
                  key={children.link}
                  previous={children.previous}
                  next={children.next}
                />
              ) : null,
            ),
        )}
      </div>
      <main className="flex flex-col-reverse bg-light-cyan-neuro md:flex-row">
        <div className="flex flex-1 flex-col px-4 py-8 pt-4 md:px-16 md:py-12 md:pt-4">
          <Motion>
            <h1 className="pb-4 text-3xl text-dark-neuro">
              <span className="bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro bg-clip-text text-3xl font-bold text-transparent">
                Estimulação Visual:
              </span>{" "}
              Potencializando o Desenvolvimento Global da Visão
            </h1>
            <p>
              É a especialidade responsável pela melhora na capacidade de
              acuidade visual, ou seja, a nitidez da visão no dia a dia.
            </p>
          </Motion>
        </div>
      </main>
      <Motion>
        <section className="flex flex-col gap-8 px-4 py-8 md:flex-row md:px-16 md:py-12">
          <div className="flex-1 rounded-lg border-4 border-dark-neuro border-opacity-20 px-8 py-4 hover:border-cyan-neuro">
            <img className="mx-auto h-20 w-20" src={IconZoom} />
            <p className="pt-4 text-dark-neuro">
              Criação de novas conexões neurais, possibilitando o cérebro a ver,
              mesmo que ocorram alterações nas funções visuais.
            </p>
          </div>
          <div className="flex-1 rounded-lg border-4 border-dark-neuro border-opacity-20 px-8 py-4 hover:border-cyan-neuro">
            <img className="mx-auto h-20 w-20" src={IconCamera} />
            <p className="pt-4 text-dark-neuro">
              Auxílio no aprendizado e desenvolvimento global da visão.
            </p>
          </div>
          <div className="flex-1 rounded-lg border-4 border-dark-neuro border-opacity-20 px-8 py-4 hover:border-cyan-neuro">
            <img className="mx-auto h-20 w-20" src={IconGlasses} />
            <p className="pt-4 text-dark-neuro">
              Indicada para qualquer indivíduo, independente da idade ou
              alteração visual apresentada.
            </p>
          </div>
        </section>
      </Motion>
      <LinkGoToProfessionals />
      <section className="flex flex-col md:flex-row">
        <div className="flex flex-1 items-center justify-center rounded-none py-8 md:rounded-none md:rounded-tr-[800px] md:bg-gradient-to-r md:from-light-cyan-neuro md:to-light-cyan-neuro md:px-16 md:py-12">
          <Motion>
            <img
              src={ImageEstimulacaoVisualAlternative}
              className="size-[90vw] max-h-[300px] max-w-[300px] sm:size-[300px]"
            ></img>
          </Motion>
        </div>
        <div className="flex flex-1 flex-col justify-center px-4 py-8 md:px-16 md:py-32">
          <Motion>
            <p className="pt-6 text-dark-neuro">
              As principais indicações para a Estimulação Visual são:{" "}
              <ul className="flex list-disc flex-col gap-1 ps-8 pt-4 font-bold text-dark-cyan-neuro">
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
        <div className="flex flex-col-reverse bg-light-cyan-neuro md:flex-row">
          <div className="flex flex-1 flex-col justify-center px-4 py-8 md:px-16 md:py-32">
            <Motion>
              <h1 className="text-2xl text-dark-neuro">
                O Espaço Neurodesenvolver disponibiliza as melhores metodologias
                no processo de fisioterapia e reabilitação. Venha conhecer!
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
          <div className="flex flex-1 items-center justify-center rounded-none py-8 md:rounded-none md:rounded-bl-[800px] md:px-16 md:py-12">
            <Motion>
              <img
                src={ImageEstimulacaoVisualAlternative2}
                className="size-[90vw] max-h-[300px] max-w-[300px] sm:size-[300px]"
              ></img>
            </Motion>
          </div>
        </div>
      </section>
      <div className="bg-light-cyan-neuro">
        {json.pages.map(
          (page) =>
            page.childrens &&
            page.childrens.map((children) =>
              children.name == name ? (
                <LinksSmall
                  key={children.link}
                  previous={children.previous}
                  next={children.next}
                />
              ) : null,
            ),
        )}
      </div>
      <Nav />
      <Footer />
    </div>
  );
};

export default EstimulacaoVisual;
