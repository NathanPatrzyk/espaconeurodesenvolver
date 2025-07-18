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

function Bobath() {
  const name = "Bobath";
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
                Bobath:
              </span>{" "}
              Caminhos para a Reabilitação Neuromuscular e Independência do
              Paciente
            </h1>
            <p>
              O Bobath é uma das certificações utilizada aqui na clínica a fim
              de melhorias nos resultados dos nossos pacientes.
            </p>
          </Motion>
        </div>
      </main>
      <Motion>
        <section className="flex flex-col gap-8 px-4 py-8 md:flex-row md:px-16 md:py-12">
          <div className="flex-1 rounded-lg border-4 border-dark-neuro border-opacity-20 px-8 py-4 hover:border-cyan-neuro">
            <img className="mx-auto h-20 w-20" src={IconDocument} />
            <p className="pt-4 text-dark-neuro">
              A técnica enfatiza a reabilitação neuromuscular e a promoção do
              controle motor através de movimentos funcionais específicos,
              facilitando padrões normais de movimento e postura.
            </p>
          </div>
          <div className="flex-1 rounded-lg border-4 border-dark-neuro border-opacity-20 px-8 py-4 hover:border-cyan-neuro">
            <div className="flex justify-center">
              <img className="h-20 w-20" src={IconBoy} />
              <img className="h-20 w-20" src={IconGirl} />
            </div>
            <p className="pt-4 text-dark-neuro">
              A abordagem é altamente individualizada e se baseia na análise
              minuciosa das habilidades motoras e na identificação de
              estratégias para melhorar a função e a independência do paciente.
            </p>
          </div>
        </section>
      </Motion>
      <LinkGoToProfessionals />
      <section className="flex flex-col bg-light-neuro md:flex-row">
        <div className="flex flex-1 items-center justify-center rounded-none py-8 md:rounded-none md:rounded-tr-[800px] md:bg-gradient-to-r md:from-light-cyan-neuro md:to-light-cyan-neuro md:px-16 md:py-12">
          <Motion>
            <img
              src={ImageBobathAlternative}
              className="size-[90vw] max-h-[300px] max-w-[300px] sm:size-[300px]"
            ></img>
          </Motion>
        </div>
        <div className="flex flex-1 flex-col justify-center px-4 py-8 md:px-16 md:py-32">
          <Motion>
            <p className="pt-6 text-dark-neuro">
              Esta pode ser especialmente benéfica para crianças neuroatípicas,
              como aquelas com:{" "}
              <ul className="flex list-disc flex-col gap-1 ps-8 pt-4 font-bold text-dark-cyan-neuro">
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
      </section>
      <section className="bg-light-neuro">
        <div className="flex flex-col-reverse bg-light-cyan-neuro md:flex-row">
          <div className="flex flex-1 flex-col justify-center px-4 py-8 md:px-16 md:py-32">
            <Motion>
              <h1 className="text-2xl text-dark-neuro">
                O objetivo final do Bobath é melhorar a qualidade de vida e a
                participação do indivíduo em suas atividades diárias. Agende uma
                avaliação conosco!
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
                src={ImageBobath}
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

export default Bobath;
