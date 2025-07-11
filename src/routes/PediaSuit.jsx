import json from "../data.json";

import Motion from "../components/Motion";
import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";

import Link from "../components/link/Link";
import LinksSmall from "../components/link/LinksSmall";
import LinkGoToProfessionals from "../components/link/LinkGoToProfessionals";

import IconPushups from "../assets/pushups.webp";
import IconBiking from "../assets/biking.webp";
import IconWalking from "../assets/walking.webp";
import IconChampion from "../assets/champion.webp";
import IconWhatsapp from "../assets/whatsapp.svg";

import ImagePediasuit from "../assets/pediasuit.webp";

function PediaSuit() {
  const name = "PediaSuit";
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
      <main className="flex md:flex-row flex-col-reverse bg-light-cyan-neuro">
        <div className="flex-1 flex flex-col md:py-12 md:px-16 md:pt-4 py-8 px-4 pt-4">
          <Motion>
            <h1 className="text-dark-neuro text-3xl pb-4">
              <span className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
                PediaSuit:
              </span>{" "}
              Transformando Vidas na Neuroreabilitação Infantil
            </h1>
            <p>
              O PediaSuit utiliza uma combinação única de colete, capacete e
              elásticos ajustáveis, que fornecem suporte e estimulação para os
              músculos e articulações durante o tratamento.
            </p>
          </Motion>
        </div>
      </main>
      <Motion>
        <section className="flex md:flex-row flex-col gap-8 md:px-16 px-4 md:py-12 py-8">
          <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
            <img className="mx-auto w-20 h-20" src={IconPushups} />
            <p className="text-dark-neuro pt-4">
              O protocolo é personalizado para atender às necessidades de cada
              criança, com exercícios terapêuticos que visam melhorar a força, o
              equilíbrio e a coordenação motora.
            </p>
          </div>
          <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
            <img className="mx-auto w-20 h-20" src={IconBiking} />
            <p className="text-dark-neuro pt-4">
              Os elásticos ajustáveis permitem a aplicação de resistência
              adequada para o desenvolvimento progressivo das habilidades
              motoras.
            </p>
          </div>
          <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
            <img className="mx-auto w-20 h-20" src={IconWalking} />
            <p className="text-dark-neuro pt-4">
              O PediaSuit é utilizado durante as sessões de fisioterapia, onde
              nossos profissionais especializados acompanham de perto o
              progresso da criança.
            </p>
          </div>
        </section>
      </Motion>
      <LinkGoToProfessionals />
      <section className="flex md:flex-row flex-col bg-light-neuro">
        <div className="flex md:ps-16 md:py-12 md:pe-4 pt-8 pb-2 px-4">
          <Motion>
            <img className="mx-auto w-40 h-40" src={IconChampion} />
          </Motion>
        </div>
        <div className="flex-1 flex md:pe-16 md:py-12 md:ps-4 pb-8 pt-2 px-4 self-center">
          <Motion>
            <p>
              Com dedicação, amor e um protocolo tão inovador, nossos pequenos
              campeões têm a oportunidade de alcançar novos marcos na sua
              jornada de desenvolvimento.
            </p>
          </Motion>
        </div>
      </section>
      <section className="bg-light-neuro">
        <div className="flex md:flex-row flex-col-reverse bg-light-cyan-neuro">
          <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8">
            <Motion>
              <h1 className="text-dark-neuro text-2xl">
                Agende uma avaliação conosco e descubra como o PediaSuit pode
                ser a chave para conquistar novos horizontes na
                neuroreabilitação de seu filho(a)!
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
          <div className="flex-1 flex items-center justify-center md:px-16 md:pt-12 pt-8 md:rounded-none md:rounded-bl-[800px] rounded-none">
            <Motion>
              <img
                src={ImagePediasuit}
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
    </div>
  );
}

export default PediaSuit;
