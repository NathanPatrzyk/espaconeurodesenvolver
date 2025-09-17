import json from "../data.json";

import Motion from "../components/Motion";
import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";
import Flex from "../components/layout/Flex";

import Link from "../components/link/Link";
import LinksSmall from "../components/link/LinksSmall";
import LinkGoToProfessionals from "../components/link/LinkGoToProfessionals";

import IconWhatsapp from "../assets/whatsapp.svg";

import ImageTerapiaOcupacionalAlternative from "../assets/terapiaOcupacionalAlternative.webp";
import ImageTerapiaOcupacionalAlternative2 from "../assets/terapiaOcupacionalAlternative2.webp";
import { Smile, TrendingUp } from "lucide-react";

const TerapiaOcupacional = () => {
  const name = "Terapia Ocupacional";
  return (
    <div>
      <div className="flex w-full flex-col items-center bg-dark-cyan-neuro bg-[url('/cloud5.svg')] bg-cover bg-bottom bg-no-repeat pt-16">
        <div className="flex w-full max-w-7xl flex-col flex-wrap justify-center px-4 md:px-12">
          {json.pages.map(
            (page) =>
              page.childrens &&
              page.childrens.map((children) =>
                children.name == name ? (
                  <LinksSmall
                    key={children.link}
                    previous={children.previous}
                    next={children.next}
                    textColor="white"
                  />
                ) : null,
              ),
          )}
          <div className="flex h-full justify-center p-4 md:p-8">
            <Motion>
              <h1 className="pb-4 text-center text-3xl text-white md:text-left">
                <span className="font-decoration text-4xl">
                  Terapia Ocupacional:
                </span>{" "}
                Grandes Mudanças Através dos Pequenos Detalhes
              </h1>
              <p className="pb-14 text-center font-bold text-light-neuro md:text-left">
                As maiores transformações na vida vêm de pequenos detalhes. A
                Terapia Ocupacional é um exemplo perfeito disso.
              </p>
            </Motion>
          </div>
        </div>
      </div>

      <Motion>
        <div className="flex w-full justify-center">
          <section
            id="sobre"
            className="grid w-full max-w-7xl grid-cols-1 gap-4 p-4 md:grid-cols-2 md:p-12"
          >
            <div className="flex-1 p-4">
              <TrendingUp className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
              <p className="pt-4 text-center text-dark-neuro">
                Foco em capacitar as pessoas a superar desafios diários,
                tornando pequenos passos em direção a uma vida mais plena e
                independente, onde cada pequena vitória é um grande avanço.
              </p>
            </div>
            <div className="flex-1 p-4">
              <Smile className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
              <p className="pt-4 text-center text-dark-neuro">
                Acreditamos no poder das pequenas conquistas e no impacto
                significativo que a Terapia Ocupacional pode ter em sua vida.
              </p>
            </div>
          </section>
        </div>
      </Motion>
      <LinkGoToProfessionals />
      <section className="flex w-full justify-center bg-light-cyan-neuro">
        <Flex className="flex-col-reverse md:flex-row">
          <div className="flex flex-1 flex-col justify-center p-4 md:p-12">
            <Motion>
              <p className="pt-6 text-center text-dark-neuro md:text-left">
                Atendemos as seguintes especialidades de terapia ocupacional:{" "}
                <ul className="flex list-disc flex-col gap-1 ps-8 pt-4 text-left font-bold">
                  <li>Terapia Ocupacional Convencional</li>
                  <li>Terapia Ocupacional com Integração Sensorial</li>
                  <li>Terapia Ocupacional Método ABA</li>
                </ul>
              </p>
            </Motion>
          </div>
          <div className="flex items-center justify-center p-4 md:p-12">
            <Motion>
              <img
                src={ImageTerapiaOcupacionalAlternative2}
                className="size-[90vw] max-h-[300px] max-w-[300px] sm:size-[300px]"
              ></img>
            </Motion>
          </div>
        </Flex>
      </section>
      <section className="flex w-full justify-center bg-light-neuro">
        <Flex className="flex-col md:flex-row">
          <div className="flex items-center justify-center p-4 md:p-12">
            <Motion>
              <img
                src={ImageTerapiaOcupacionalAlternative}
                className="size-[90vw] max-h-[300px] max-w-[300px] sm:size-[300px]"
              ></img>
            </Motion>
          </div>
          <div className="flex flex-1 flex-col justify-center p-4 md:p-12">
            <Motion>
              <h1 className="pt-6 text-center text-2xl text-dark-neuro md:text-left">
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
        </Flex>
      </section>

      <div className="flex w-full flex-col items-center">
        <div className="flex w-full max-w-7xl flex-col flex-wrap justify-center gap-4 px-0 md:px-4">
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
      </div>

      <Nav />
      <Footer />
    </div>
  );
};

export default TerapiaOcupacional;
