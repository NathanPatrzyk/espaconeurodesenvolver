import json from "../data.json";

import Motion from "../components/Motion";
import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";

import Link from "../components/link/Link";
import LinksSmall from "../components/link/LinksSmall";
import LinkGoToProfessionals from "../components/link/LinkGoToProfessionals";

import IconWalking from "../assets/walking.webp";
import IconTalk from "../assets/talk.webp";
import IconDocument from "../assets/document.webp";
import IconWhatsapp from "../assets/whatsapp.svg";

import ImageFonoaudiologiaBobathAlternative from "../assets/fonoaudiologiaBobathAlternative.webp";
import ImageFonoaudiologiaBobathAlternative2 from "../assets/fonoaudiologiaBobathAlternative2.webp";
import Flex from "../components/layout/Flex";

const FonoaudiologiaBobath = () => {
  const name = "Fonoaudiologia Bobath";
  return (
    <div>
      <div className="flex w-full flex-col justify-center bg-dark-cyan-neuro bg-[url('/cloud.svg')] bg-cover bg-bottom bg-no-repeat pt-16">
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

        <div className="mx-auto flex h-full w-full max-w-7xl p-4 md:p-8">
          <Motion>
            <div className="pb-14">
              <h1 className="pb-4 text-center text-3xl text-white md:text-left">
                <span className="font-decoration text-4xl">
                  Fonoaudiologia Bobath:
                </span>{" "}
                Integrando Movimento e Comunicação para uma Melhor Qualidade de
                Vida
              </h1>
            </div>
          </Motion>
        </div>
      </div>

      <Motion>
        <p className="px-4 pt-8 text-center text-dark-neuro md:px-16 md:pt-12 md:text-left">
          O conceito Neuroevolutivo Bobath é um conceito utilizado na
          habilitação e reabilitação motora, para auxiliar e tratar pessoas com
          diferentes condições neurológicas, como paralisia cerebral, atraso do
          desenvolvimento motor, síndrome de Down, síndromes raras dentre
          outras.
        </p>
        <section className="grid w-full max-w-7xl grid-cols-1 gap-4 p-4 md:grid-cols-3 md:p-12">
          <div className="flex-1 p-4">
            <img className="mx-auto h-20 w-20" src={IconWalking} />
            <p className="pt-4 text-dark-neuro">
              O conceito baseia-se a partir do controle, desenvolvimento e
              aprendizado motor, atuando através de manuseios e facilitações,
              para modificar padrões de tônus postural anormal, facilitar
              padrões motores normais, integrar reflexos e preparar o sujeito
              para atividades e tarefas funcionais.
            </p>
          </div>
          <div className="flex-1 p-4">
            <img className="mx-auto h-20 w-20" src={IconTalk} />
            <p className="pt-4 text-dark-neuro">
              A base para a avaliação e intervenção, provém do conhecimento
              extenso do desenvolvimento típico e atípico. Os manuseios advém
              para ativação adequada do sistema sensório-motor, desempenho da
              atividades e aquisição das habilidades, para que o sujeito alcance
              participação em atividades relevantes nas diferentes etapas de sua
              vida.
            </p>
          </div>
          <div className="flex-1 p-4">
            <img className="mx-auto h-20 w-20" src={IconDocument} />
            <p className="pt-4 text-dark-neuro">
              O Bobath conta com o modelo de classificação internacional de
              funcionalidade, incapacidade e saúde (CIF), pela qual na prática
              clinica o terapeuta utiliza do raciocínio clinico para
              problema-solução.
            </p>
          </div>
        </section>
      </Motion>
      <LinkGoToProfessionals />
      <section className="flex flex-col md:flex-row">
        <div className="flex flex-1 items-center justify-center rounded-none py-8 md:rounded-none md:rounded-tr-[800px] md:bg-gradient-to-r md:from-light-cyan-neuro md:to-light-cyan-neuro md:px-16 md:py-12">
          <Motion>
            <img
              src={ImageFonoaudiologiaBobathAlternative}
              className="size-[90vw] max-h-[300px] max-w-[300px] sm:size-[300px]"
            ></img>
          </Motion>
        </div>
        <div className="flex flex-1 flex-col justify-center px-4 py-8 md:px-16 md:py-32">
          <Motion>
            <p className="pt-6 text-dark-neuro">
              Na fonoaudiologia, o método Bobath é essencial para:{" "}
              <ul className="flex list-disc flex-col gap-1 ps-8 pt-4 font-bold text-dark-cyan-neuro">
                <li>
                  Analisar a postura global e as habilidades orais específicas.
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
      </section>
      <section>
        <div className="flex flex-col-reverse bg-light-cyan-neuro md:flex-row">
          <div className="flex flex-1 flex-col justify-center px-4 py-8 md:px-16 md:py-32">
            <Motion>
              <h1 className="text-2xl text-dark-neuro">
                Agora o Espaço Neurodesenvolver conta com profissionais
                especializados nesse método para melhor te atender!
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
                src={ImageFonoaudiologiaBobathAlternative2}
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

export default FonoaudiologiaBobath;
