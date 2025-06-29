import json from "../data.json";

import Motion from "../components/Motion";
import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";

import Link from "../components/link/Link";
import LinksSmall from "../components/link/LinksSmall";
import LinkGoToProfessionals from "../components/link/LinkGoToProfessionals";

import IconTalk from "../assets/talk.webp";
import IconRules from "../assets/rules.webp";
import IconMountain from "../assets/mountain.webp";
import IconWhatsapp from "../assets/whatsapp.svg";

import ImagePsicomotricidadeAlternative from "../assets/psicomotricidadeAlternative.webp";

const Psicomotricidade = () => {
  const name = "Psicomotricidade";
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
                Psicomotricidade:
              </span>{" "}
              Desenvolvendo Habilidades Motoras e Sociais
            </h1>
            <p>
              A Psicomotricidade busca melhorar os movimentos do corpo, a noção
              de espaço onde se está, a coordenação motora, equilíbrio e também
              o ritmo.
            </p>
          </Motion>
        </div>
      </main>
      <Motion>
        <section className="flex flex-col gap-8 px-4 py-8 md:flex-row md:px-16 md:py-12">
          <div className="flex-1 rounded-lg border-4 border-dark-neuro border-opacity-20 px-8 py-4 hover:border-cyan-neuro">
            <img className="mx-auto h-20 w-20" src={IconTalk} />
            <p className="pt-4 text-dark-neuro">
              É uma ótima oportunidade para promover a socialização entre as
              crianças, a partir de brincadeiras como correr, brincar com bolas
              e percorrer circuitos.
            </p>
          </div>
          <div className="flex-1 rounded-lg border-4 border-dark-neuro border-opacity-20 px-8 py-4 hover:border-cyan-neuro">
            <img className="mx-auto h-20 w-20" src={IconRules} />
            <p className="pt-4 text-dark-neuro">
              Possibilita a criança a livre expressão de sentimentos,
              pensamentos, conceitos e ideologias.
            </p>
          </div>
          <div className="flex-1 rounded-lg border-4 border-dark-neuro border-opacity-20 px-8 py-4 hover:border-cyan-neuro">
            <img className="mx-auto h-20 w-20" src={IconMountain} />
            <p className="pt-4 text-dark-neuro">
              O trabalho corporal realizado pela psicomotricidade auxilia nos
              processos de aprendizagem, ajudando na superação de obstáculos e
              prevenções de inadaptações.
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
                Contate-nos pelo WhatsApp e agende uma avaliação com nossa
                equipe multidisciplinar!
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
                src={ImagePsicomotricidadeAlternative}
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

export default Psicomotricidade;
