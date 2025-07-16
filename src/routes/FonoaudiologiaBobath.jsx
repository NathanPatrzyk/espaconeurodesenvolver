import json from "../data.json";

import Motion from "../components/Motion";
import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";

import Link from "../components/link/Link";
import LinksSmall from "../components/link/LinksSmall";
import LinkGoToProfessionals from "../components/link/LinkGoToProfessionals";

import IconWhatsapp from "../assets/whatsapp.svg";

import ImageFonoaudiologiaBobathAlternative from "../assets/fonoaudiologiaBobathAlternative.webp";
import ImageFonoaudiologiaBobathAlternative2 from "../assets/fonoaudiologiaBobathAlternative2.webp";
import Flex from "../components/layout/Flex";

import { Footprints, MessagesSquare, FileText } from "lucide-react";

const FonoaudiologiaBobath = () => {
  const name = "Fonoaudiologia Bobath";
  return (
    <div>
      <div className="flex w-full flex-col items-center bg-dark-cyan-neuro bg-[url('/cloud.svg')] bg-cover bg-bottom bg-no-repeat pt-16">
        <div className="flex w-full max-w-7xl flex-col flex-wrap justify-center gap-4 px-4 md:px-12">
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
          <div className="flex h-full justify-center p-4 md:p-8">
            <Motion>
              <h1 className="pb-14 text-center text-3xl text-white md:text-left">
                <span className="font-decoration text-4xl">
                  Fonoaudiologia Bobath:
                </span>{" "}
                Integrando Movimento e Comunicação para uma Melhor Qualidade de
                Vida
              </h1>
            </Motion>
          </div>
        </div>
      </div>

      <Motion>
        <div className="flex w-full justify-center">
          <section
            id="sobre"
            className="grid w-full max-w-7xl grid-cols-1 gap-4 p-4 md:grid-cols-3 md:p-12"
          >
            <div className="flex-1 p-4">
              <Footprints className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
              <p className="pt-4 text-center text-dark-neuro">
                O conceito baseia-se a partir do controle, desenvolvimento e
                aprendizado motor, atuando através de manuseios e facilitações,
                para modificar padrões de tônus postural anormal, facilitar
                padrões motores normais, integrar reflexos e preparar o sujeito
                para atividades e tarefas funcionais.
              </p>
            </div>
            <div className="flex-1 p-4">
              <MessagesSquare className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
              <p className="pt-4 text-center text-dark-neuro">
                A base para a avaliação e intervenção, provém do conhecimento
                extenso do desenvolvimento típico e atípico. Os manuseios advém
                para ativação adequada do sistema sensório-motor, desempenho da
                atividades e aquisição das habilidades, para que o sujeito
                alcance participação em atividades relevantes nas diferentes
                etapas de sua vida.
              </p>
            </div>
            <div className="flex-1 p-4">
              <FileText className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
              <p className="pt-4 text-center text-dark-neuro">
                O Bobath conta com o modelo de classificação internacional de
                funcionalidade, incapacidade e saúde (CIF), pela qual na prática
                clinica o terapeuta utiliza do raciocínio clinico para
                problema-solução.
              </p>
            </div>
          </section>
        </div>
      </Motion>
      <LinkGoToProfessionals />
      <section className="flex w-full justify-center bg-light-cyan-neuro">
        <Flex className="flex-col md:flex-row">
          <div className="flex items-center justify-center p-4 md:p-12">
            <Motion>
              <img
                src={ImageFonoaudiologiaBobathAlternative}
                className="size-[90vw] max-h-[300px] max-w-[300px] sm:size-[300px]"
              ></img>
            </Motion>
          </div>
          <div className="flex flex-1 flex-col justify-center p-4 md:p-12">
            <Motion>
              <p className="pt-6 text-dark-neuro">
                Na fonoaudiologia, o método Bobath é essencial para:{" "}
                <ul className="flex list-disc flex-col gap-1 ps-8 pt-4 font-bold">
                  <li>
                    Analisar a postura global e as habilidades orais
                    específicas.
                  </li>
                  <li>Melhorar a qualidade da postura e dos movimentos.</li>
                  <li>
                    Potencializar habilidades de comunicação, alimentação,
                    respiração e fala.
                  </li>
                </ul>
              </p>
            </Motion>
          </div>
        </Flex>
      </section>

      <Nav />
      <Footer />
    </div>
  );
};

export default FonoaudiologiaBobath;
