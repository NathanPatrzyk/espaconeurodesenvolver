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
        <section className="flex flex-col gap-8 px-4 py-8 md:flex-row md:px-16 md:py-12">
          <div className="flex-1 rounded-lg border-4 border-dark-neuro border-opacity-20 px-8 py-4 hover:border-cyan-neuro">
            <img className="mx-auto h-20 w-20" src={IconPushups} />
            <p className="pt-4 text-dark-neuro">
              O protocolo é personalizado para atender às necessidades de cada
              criança, com exercícios terapêuticos que visam melhorar a força, o
              equilíbrio e a coordenação motora.
            </p>
          </div>
          <div className="flex-1 rounded-lg border-4 border-dark-neuro border-opacity-20 px-8 py-4 hover:border-cyan-neuro">
            <img className="mx-auto h-20 w-20" src={IconBiking} />
            <p className="pt-4 text-dark-neuro">
              Os elásticos ajustáveis permitem a aplicação de resistência
              adequada para o desenvolvimento progressivo das habilidades
              motoras.
            </p>
          </div>
          <div className="flex-1 rounded-lg border-4 border-dark-neuro border-opacity-20 px-8 py-4 hover:border-cyan-neuro">
            <img className="mx-auto h-20 w-20" src={IconWalking} />
            <p className="pt-4 text-dark-neuro">
              O PediaSuit é utilizado durante as sessões de fisioterapia, onde
              nossos profissionais especializados acompanham de perto o
              progresso da criança.
            </p>
          </div>
        </section>
      </Motion>
      <LinkGoToProfessionals />
      <section className="flex flex-col bg-light-neuro md:flex-row">
        <div className="flex px-4 pb-2 pt-8 md:py-12 md:pe-4 md:ps-16">
          <Motion>
            <img className="mx-auto h-40 w-40" src={IconChampion} />
          </Motion>
        </div>
        <div className="flex flex-1 self-center px-4 pb-8 pt-2 md:py-12 md:pe-16 md:ps-4">
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
        <div className="flex flex-col-reverse bg-light-cyan-neuro md:flex-row">
          <div className="flex flex-1 flex-col justify-center px-4 py-8 md:px-16 md:py-32">
            <Motion>
              <h1 className="text-2xl text-dark-neuro">
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
          <div className="flex flex-1 items-center justify-center rounded-none pt-8 md:rounded-none md:rounded-bl-[800px] md:px-16 md:pt-12">
            <Motion>
              <img
                src={ImagePediasuit}
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
}

export default PediaSuit;
