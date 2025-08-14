import json from "../data.json";

import Motion from "../components/Motion";
import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";

import Link from "../components/link/Link";
import LinksSmall from "../components/link/LinksSmall";
import LinkGoToProfessionals from "../components/link/LinkGoToProfessionals";

import IconDocument from "../assets/document.webp";
import IconBoy from "../assets/boy.webp";
import IconGirl from "../assets/girl.webp";
import IconWhatsapp from "../assets/whatsapp.svg";

import ImageBobath from "../assets/bobath.webp";
import ImageBobathAlternative from "../assets/bobathAlternative.webp";

import ImageFonoaudiologiaBobathAlternative from "../assets/fonoaudiologiaBobathAlternative.webp";
import ImageFonoaudiologiaBobathAlternative2 from "../assets/fonoaudiologiaBobathAlternative2.webp";
import Flex from "../components/layout/Flex";

import { Info } from "lucide-react";

function Bobath() {
  const name = "Bobath";
  return (
    <div>
      <div className="flex w-full flex-col items-center bg-dark-cyan-neuro bg-[url('/cloud2.svg')] bg-cover bg-bottom bg-no-repeat pt-16">
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
              <Info className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
              <p className="pt-4 text-center text-dark-neuro">
                O conceito baseia-se a partir do controle, desenvolvimento e
                aprendizado motor, atuando através de manuseios e facilitações,
                para modificar padrões de tônus postural anormal, facilitar
                padrões motores normais, integrar reflexos e preparar o sujeito
                para atividades e tarefas funcionais.
              </p>
            </div>
            <div className="flex-1 p-4">
              <Info className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
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
              <Info className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
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
      <section className="flex w-full justify-center bg-light-neuro">
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
              <p className="pt-6 text-center text-dark-neuro md:text-left">
                Na fonoaudiologia, o método Bobath é essencial para:{" "}
                <ul className="flex list-disc flex-col gap-1 ps-8 pt-4 text-left font-bold text-dark-cyan-neuro">
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
      <section className="flex w-full justify-center bg-light-cyan-neuro">
        <Flex className="flex-col-reverse md:flex-row">
          <div className="flex items-center justify-center p-4 md:p-12">
            <Motion>
              <p className="pt-6 text-center text-dark-neuro md:text-left">
                Além da Fonoaudilogia Bobath, também atendemos as seguintes
                especialidades de fonoaudiologia:{" "}
                <ul className="flex list-disc flex-col gap-1 ps-8 pt-4 text-left font-bold">
                  <li>Fonoaudiologia ABA</li>
                  <li>Fonoaudiologia Disfagia</li>
                  <li>Fonoaudiologia Atraso na Fala</li>
                  <li>Fonoaudiologia Prompt</li>
                </ul>
              </p>
            </Motion>
          </div>
          <div className="flex flex-1 flex-col justify-center p-4 md:p-12">
            <Motion>
              <img
                src={ImageFonoaudiologiaBobathAlternative2}
                className="size-[90vw] max-h-[300px] max-w-[300px] sm:size-[300px]"
              ></img>
            </Motion>
          </div>
        </Flex>
      </section>
      <section className="flex w-full justify-center bg-light-neuro">
        <Flex className="flex-col-reverse md:flex-row">
          <div className="flex items-center justify-center p-4 md:p-12">
            <Motion>
              <h1 className="text-center text-2xl text-dark-neuro md:text-left">
                Agora o Espaço Neurodesenvolver conta com profissionais
                especializados em diversas áreas da fonoaudiologia para melhor
                te atender!
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
}

export default Bobath;
