import json from "../data.json";

import Motion from "../components/Motion";
import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";

import Link from "../components/link/Link";
import LinksSmall from "../components/link/LinksSmall";
import LinkGoToProfessionals from "../components/link/LinkGoToProfessionals";

import IconStairs from "../assets/stairs.webp";
import IconSmile from "../assets/smile.webp";
import IconWhatsapp from "../assets/whatsapp.svg";

import ImageTerapiaOcupacionalAlternative from "../assets/terapiaOcupacionalAlternative.webp";

const TerapiaOcupacional = () => {
  const name = "Terapia Ocupacional";
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
                Terapia Ocupacional:
              </span>{" "}
              Grandes Mudanças Através dos Pequenos Detalhes
            </h1>
            <p>
              As maiores transformações na vida vêm de pequenos detalhes. A
              Terapia Ocupacional é um exemplo perfeito disso.
            </p>
          </Motion>
        </div>
      </main>
      <Motion>
        <section className="flex flex-col gap-8 px-4 py-8 md:flex-row md:px-16 md:py-12">
          <div className="flex-1 rounded-lg border-4 border-dark-neuro border-opacity-20 px-8 py-4 hover:border-cyan-neuro">
            <img className="mx-auto h-20 w-20" src={IconStairs} />
            <p className="pt-4 text-dark-neuro">
              Foco em capacitar as pessoas a superar desafios diários, tornando
              pequenos passos em direção a uma vida mais plena e independente,
              onde cada pequena vitória é um grande avanço.
            </p>
          </div>
          <div className="flex-1 rounded-lg border-4 border-dark-neuro border-opacity-20 px-8 py-4 hover:border-cyan-neuro">
            <img className="mx-auto h-20 w-20" src={IconSmile} />
            <p className="pt-4 text-dark-neuro">
              Acreditamos no poder das pequenas conquistas e no impacto
              significativo que a Terapia Ocupacional pode ter em sua vida.
            </p>
          </div>
        </section>
      </Motion>
      <LinkGoToProfessionals />
      <section>
        <div className="flex flex-col-reverse bg-light-cyan-neuro md:flex-row">
          <div className="flex flex-1 flex-col justify-center px-4 py-8 md:px-16 md:py-32">
            <Motion>
              <h1 className="text-2xl text-dark-neuro">
                Entre em contato com nossa equipe e realize uma avaliação, para
                que a Terapia Ocupacional possa ajudar nas atividades diárias do
                seu filho(a)!
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
                src={ImageTerapiaOcupacionalAlternative}
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

export default TerapiaOcupacional;
