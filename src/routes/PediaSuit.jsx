import json from "../data.json";

import Motion from "../components/Motion";
import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";

import Link from "../components/link/Link";
import LinksSmall from "../components/link/LinksSmall";
import LinkGoToProfessionals from "../components/link/LinkGoToProfessionals";

import IconWhatsapp from "../assets/whatsapp.svg";
import ImagePediasuit from "../assets/pediasuit.webp";
import ImagePediasuitAlternative from "../assets/pediasuitAlternative.webp";

import Flex from "../components/layout/Flex";
import { BicepsFlexed, Bike, Footprints, Medal } from "lucide-react";
import IconChampion from "../assets/champion.webp";

function PediaSuit() {
  const name = "PediaSuit";
  return (
    <div>
      <div className="flex w-full flex-col items-center bg-dark-cyan-neuro bg-[url('/cloud3.svg')] bg-cover bg-bottom bg-no-repeat pt-16">
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
                <span className="font-decoration text-4xl">PediaSuit:</span>{" "}
                Transformando Vidas na Neuroreabilitação Infantil
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
              <BicepsFlexed className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
              <p className="pt-4 text-center text-dark-neuro">
                O protocolo é personalizado para atender às necessidades de cada
                criança, com exercícios terapêuticos que visam melhorar a força,
                o equilíbrio e a coordenação motora.
              </p>
            </div>
            <div className="flex-1 p-4">
              <Bike className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
              <p className="pt-4 text-center text-dark-neuro">
                Os elásticos ajustáveis permitem a aplicação de resistência
                adequada para o desenvolvimento progressivo das habilidades
                motoras.
              </p>
            </div>
            <div className="flex-1 p-4">
              <Footprints className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
              <p className="pt-4 text-center text-dark-neuro">
                O PediaSuit é utilizado durante as sessões de fisioterapia, onde
                nossos profissionais especializados acompanham de perto o
                progresso da criança.
              </p>
            </div>
          </section>
        </div>
      </Motion>
      <LinkGoToProfessionals />
      <section className="flex w-full justify-center bg-light-neuro">
        <Flex className="flex-col gap-0 md:flex-row">
          <div className="flex items-center justify-center p-4 md:p-12">
            <Motion>
              <Medal
                className="flex h-32 w-full justify-center text-dark-cyan-neuro"
                src={IconChampion}
              />
            </Motion>
          </div>
          <div className="flex flex-1 flex-col justify-center p-4 text-center md:p-12 md:text-left">
            <Motion>
              <p>
                Com dedicação, amor e um protocolo tão inovador, nossos pequenos
                campeões têm a oportunidade de alcançar novos marcos na sua
                jornada de desenvolvimento.
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
                Além da Fisioterapia Método Pediasuit, também atendemos as
                seguintes especialidades de fisioterapia:{" "}
                <ul className="flex list-disc flex-col gap-1 ps-8 pt-4 text-left font-bold">
                  <li>Fisioterapia Método RTA</li>
                  <li>Fisioterapia Método ABA</li>
                  <li>Fisioterapia Método Bobath</li>
                  <li>Cuervas Medek Exercises</li>
                  <li>Psicomotricidade</li>
                  <li>Fisioterapia Neurológica</li>
                  <li>Fisioterapia Neuropediatrica</li>
                  <li>Fisioterapia de Reabilitação Vestibular</li>
                  <li>Fisioterapia Método Dir-Floortime</li>
                  <li>
                    Fisioterapia para Torcicolo Congênito e Assimetrias
                    Cranianas
                  </li>
                  <li>Estimulação Visual</li>
                  <li>Fisioterapia Respiratória</li>
                </ul>
              </p>
            </Motion>
          </div>
          <div className="flex flex-1 flex-col justify-center p-4 md:p-12">
            <Motion>
              <img
                src={ImagePediasuitAlternative}
                className="size-[90vw] max-h-[300px] max-w-[300px] sm:size-[300px]"
              ></img>
            </Motion>
          </div>
        </Flex>
      </section>
      <section className="flex w-full justify-center bg-light-cyan-neuro">
        <Flex className="flex-col-reverse md:flex-row">
          <div className="flex items-center justify-center p-4 md:p-12">
            <Motion>
              <h1 className="pt-6 text-center text-dark-neuro md:text-left">
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
          <div className="flex flex-1 flex-col justify-center p-4 md:p-12">
            <Motion>
              <img
                src={ImagePediasuit}
                className="size-[90vw] max-h-[300px] max-w-[300px] sm:size-[300px]"
              ></img>
            </Motion>
          </div>
        </Flex>
      </section>

      <div className="flex w-full flex-col items-center bg-light-cyan-neuro">
        <div className="gap-4px-0 flex w-full max-w-7xl flex-col flex-wrap justify-center md:px-4">
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

export default PediaSuit;
