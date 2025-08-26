import json from "../data.json";

import Motion from "../components/Motion";
import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";
import Flex from "../components/layout/Flex";

import Link from "../components/link/Link";
import LinksSmall from "../components/link/LinksSmall";
import LinkGoToProfessionals from "../components/link/LinkGoToProfessionals";

import IconWhatsapp from "../assets/whatsapp.svg";
import ImageBobath from "../assets/bobath.webp";
import ImageBobathAlternative from "../assets/bobathAlternative.webp";

import { FileText, Users } from "lucide-react";

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
              <h1 className="pb-4 text-center text-3xl text-white md:text-left">
                <span className="font-decoration text-4xl">Bobath:</span>{" "}
                Caminhos para a Reabilitação Neuromuscular e Independência do
                Paciente
              </h1>
              <p className="pb-14 text-center font-bold text-light-neuro md:text-left">
                O Bobath é uma das certificações utilizada aqui na clínica a fim
                de melhorias nos resultados dos nossos pacientes.
              </p>
            </Motion>
          </div>
        </div>
      </div>

      <Motion>
        <div className="flex w-full justify-center">
          <section
            id="sobre"
            className="grid w-full max-w-7xl grid-cols-1 gap-4 p-4 md:grid-cols-2 md:p-12"
          >
            <div className="flex-1 p-4">
              <FileText className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
              <p className="pt-4 text-center text-dark-neuro">
                A técnica enfatiza a reabilitação neuromuscular e a promoção do
                controle motor através de movimentos funcionais específicos,
                facilitando padrões normais de movimento e postura.
              </p>
            </div>
            <div className="flex-1 p-4">
              <Users className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
              <p className="pt-4 text-center text-dark-neuro">
                A abordagem é altamente individualizada e se baseia na análise
                minuciosa das habilidades motoras e na identificação de
                estratégias para melhorar a função e a independência do
                paciente.
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
                src={ImageBobathAlternative}
                className="size-[90vw] max-h-[300px] max-w-[300px] sm:size-[300px]"
              ></img>
            </Motion>
          </div>
          <div className="flex flex-1 flex-col justify-center p-4 md:p-12">
            <Motion>
              <p className="pt-6 text-center text-dark-neuro md:text-left">
                Esta pode ser especialmente benéfica para crianças
                neuroatípicas, como aquelas com:{" "}
                <ul className="flex list-disc flex-col gap-1 ps-8 pt-4 text-left font-bold text-dark-cyan-neuro">
                  <li>
                    Encefalopatia Crônica não Progressiva (Paralisia Cerebral)
                  </li>
                  <li>Trissomia do Cromossomo 21 (Síndrome de Down)</li>
                  <li>Transtorno do Espectro Autista (TEA)</li>
                  <li>Entre Outros</li>
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
