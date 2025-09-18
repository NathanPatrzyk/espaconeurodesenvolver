import json from "../data.json";

import Motion from "../components/Motion";
import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";

import Link from "../components/link/Link";
import LinksSmall from "../components/link/LinksSmall";
import LinkGoToProfessionals from "../components/link/LinkGoToProfessionals";

import IconWhatsapp from "../assets/whatsapp.svg";
import ImagePsicomotricidadeAlternative from "../assets/psicomotricidadeAlternative.webp";

import Flex from "../components/layout/Flex";
import { Image, ListChecks, MessagesSquare } from "lucide-react";

const Psicomotricidade = () => {
  const name = "Psicomotricidade";
  return (
    <div>
      <div className="flex w-full flex-col items-center bg-dark-cyan-neuro bg-[url('/cloud7.svg')] bg-cover bg-bottom bg-no-repeat pt-16">
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
                  Psicomotricidade:
                </span>{" "}
                Desenvolvendo Habilidades Motoras e Sociais
              </h1>
              <p className="pb-14 text-center font-bold text-light-neuro md:text-left">
                A Psicomotricidade busca melhorar os movimentos do corpo, a
                noção de espaço onde se está, a coordenação motora, equilíbrio e
                também o ritmo.
              </p>
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
              <MessagesSquare className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
              <p className="pt-4 text-center text-dark-neuro">
                É uma ótima oportunidade para promover a socialização entre as
                crianças, a partir de brincadeiras como correr, brincar com
                bolas e percorrer circuitos.
              </p>
            </div>
            <div className="flex-1 p-4">
              <ListChecks className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
              <p className="pt-4 text-center text-dark-neuro">
                Possibilita a criança a livre expressão de sentimentos,
                pensamentos, conceitos e ideologias.
              </p>
            </div>
            <div className="flex-1 p-4">
              <Image className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
              <p className="pt-4 text-center text-dark-neuro">
                O trabalho corporal realizado pela psicomotricidade auxilia nos
                processos de aprendizagem, ajudando na superação de obstáculos e
                prevenções de inadaptações.
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
                Além da Psicomotricidade, também atendemos as seguintes
                especialidades de fisioterapia:{" "}
                <ul className="flex list-disc flex-col gap-1 ps-8 pt-4 text-left font-bold">
                  <li>Fisioterapia Método Pediasuit</li>
                  <li>Fisioterapia Método RTA</li>
                  <li>Fisioterapia Método ABA</li>
                  <li>Fisioterapia Método Bobath</li>
                  <li>Cuervas Medek Exercises</li>
                  <li>Fisioterapia Neurológica</li>
                  <li>Fisioterapia Neuropediatrica</li>
                  <li>Fisioterapia de Reabilitação Vestibular</li>
                  <li>Fisioterapia Método Dir-Floortime</li>
                  <li>
                    Fisioterapia para Torcicolo Congênito e Assimetrias
                    Cranianas
                  </li>
                  <li>Estimulação Visual</li>
                </ul>
              </p>
            </Motion>
          </div>
          <div className="flex items-center justify-center p-4 md:p-12">
            <Motion>
              <img
                src={ImagePsicomotricidadeAlternative}
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
              <h1 className="text-center text-2xl text-dark-neuro md:text-left">
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

export default Psicomotricidade;
