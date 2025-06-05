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
        <section className="flex md:flex-row flex-col gap-8 md:px-16 px-4 md:py-12 py-8">
          <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
            <img className="mx-auto w-20 h-20" src={IconTalk} />
            <p className="text-dark-neuro pt-4">
              É uma ótima oportunidade para promover a socialização entre as
              crianças, a partir de brincadeiras como correr, brincar com bolas
              e percorrer circuitos.
            </p>
          </div>
          <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
            <img className="mx-auto w-20 h-20" src={IconRules} />
            <p className="text-dark-neuro pt-4">
              Possibilita a criança a livre expressão de sentimentos,
              pensamentos, conceitos e ideologias.
            </p>
          </div>
          <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
            <img className="mx-auto w-20 h-20" src={IconMountain} />
            <p className="text-dark-neuro pt-4">
              O trabalho corporal realizado pela psicomotricidade auxilia nos
              processos de aprendizagem, ajudando na superação de obstáculos e
              prevenções de inadaptações.
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
          <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8 md:rounded-none md:rounded-bl-[800px] rounded-none">
            <Motion>
              <img
                src={ImagePsicomotricidadeAlternative}
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

export default Psicomotricidade;
