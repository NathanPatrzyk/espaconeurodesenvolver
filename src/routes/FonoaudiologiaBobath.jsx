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

const FonoaudiologiaBobath = () => {
  const name = "Fonoaudiologia Bobath";
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
                Fonoaudiologia Bobath:
              </span>{" "}
              Integrando Movimento e Comunicação para uma Melhor Qualidade de
              Vida
            </h1>
            <p>
              O conceito Neuroevolutivo Bobath é um conceito utilizado na
              habilitação e reabilitação motora, para auxiliar e tratar pessoas
              com diferentes condições neurológicas, como paralisia cerebral,
              atraso do desenvolvimento motor, síndrome de Down, síndromes raras
              dentre outras.
            </p>
          </Motion>
        </div>
      </main>
      <Motion>
        <section className="flex md:flex-row flex-col gap-8 md:px-16 px-4 md:py-12 py-8">
          <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
            <img className="mx-auto w-20 h-20" src={IconWalking} />
            <p className="text-dark-neuro pt-4">
              O conceito baseia-se a partir do controle, desenvolvimento e
              aprendizado motor, atuando através de manuseios e facilitações,
              para modificar padrões de tônus postural anormal, facilitar
              padrões motores normais, integrar reflexos e preparar o sujeito
              para atividades e tarefas funcionais.
            </p>
          </div>
          <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
            <img className="mx-auto w-20 h-20" src={IconTalk} />
            <p className="text-dark-neuro pt-4">
              A base para a avaliação e intervenção, provém do conhecimento
              extenso do desenvolvimento típico e atípico. Os manuseios advém
              para ativação adequada do sistema sensório-motor, desempenho da
              atividades e aquisição das habilidades, para que o sujeito alcance
              participação em atividades relevantes nas diferentes etapas de sua
              vida.
            </p>
          </div>
          <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
            <img className="mx-auto w-20 h-20" src={IconDocument} />
            <p className="text-dark-neuro pt-4">
              O Bobath conta com o modelo de classificação internacional de
              funcionalidade, incapacidade e saúde (CIF), pela qual na prática
              clinica o terapeuta utiliza do raciocínio clinico para
              problema-solução.
            </p>
          </div>
        </section>
      </Motion>
      <LinkGoToProfessionals />
      <section className="flex md:flex-row flex-col">
        <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8 md:bg-gradient-to-r md:from-light-cyan-neuro md:to-light-cyan-neuro md:rounded-none md:rounded-tr-[800px] rounded-none">
          <Motion>
            <img
              src={ImageFonoaudiologiaBobathAlternative}
              className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
            ></img>
          </Motion>
        </div>
        <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8 ">
          <Motion>
            <p className="text-dark-neuro pt-6">
              Na fonoaudiologia, o método Bobath é essencial para:{" "}
              <ul className="list-disc font-bold text-dark-cyan-neuro flex flex-col gap-1 ps-8 pt-4">
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
        <div className="flex md:flex-row flex-col-reverse bg-light-cyan-neuro">
          <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8">
            <Motion>
              <h1 className="text-dark-neuro text-2xl">
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
          <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8 md:rounded-none md:rounded-bl-[800px] rounded-none">
            <Motion>
              <img
                src={ImageFonoaudiologiaBobathAlternative2}
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

export default FonoaudiologiaBobath;
