import json from "../data.json";

import Motion from "../components/Motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

import LinkButton from "../components/LinkButton";
import LinksSmall from "../components/LinksSmall";
import LinkGoToProfessionals from "../components/LinkGoToProfessionals";

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
        <section className="flex md:flex-row flex-col gap-8 md:px-16 px-4 md:py-12 py-8">
          <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
            <img className="mx-auto w-20 h-20" src={IconStairs} />
            <p className="text-dark-neuro pt-4">
              Foco em capacitar as pessoas a superar desafios diários, tornando
              pequenos passos em direção a uma vida mais plena e independente,
              onde cada pequena vitória é um grande avanço.
            </p>
          </div>
          <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
            <img className="mx-auto w-20 h-20" src={IconSmile} />
            <p className="text-dark-neuro pt-4">
              Acreditamos no poder das pequenas conquistas e no impacto
              significativo que a Terapia Ocupacional pode ter em sua vida.
            </p>
          </div>
        </section>
      </Motion>
      <LinkGoToProfessionals />
      <section>
        <div className="flex md:flex-row flex-col-reverse bg-light-cyan-neuro">
          <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8">
            <Motion>
              <h1 className="text-dark-neuro text-2xl">
                Entre em contato com nossa equipe e realize uma avaliação, para
                que a Terapia Ocupacional possa ajudar nas atividades diárias do
                seu filho(a)!
              </h1>
              <div className="pt-6">
                <LinkButton
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
                src={ImageTerapiaOcupacionalAlternative}
                className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
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
                <LinksSmall previous={children.previous} next={children.next} />
              ) : null
            )
        )}
      </div>
      <Nav />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default TerapiaOcupacional;
