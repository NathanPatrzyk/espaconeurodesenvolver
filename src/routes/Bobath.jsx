import Nav from "../components/Nav";
import Footer from "../components/Footer";

import Link from "../components/Link";
import LinkGoBack from "../components/LinkGoBack";
import LinkGoToProfessionals from "../components/LinkGoToProfessionals";

import IconDocument from "../assets/document.webp";
import IconBoy from "../assets/boy.webp";
import IconGirl from "../assets/girl.webp";
import IconWhatsapp from "../assets/whatsapp.svg";
import ImageBobath from "../assets/bobath.webp";
import ImageBobathAlternative from "../assets/bobathAlternative.png";

function Bobath() {
  return (
    <div className="bg-light-cyan-neuro">
      <LinkGoBack textColor="dark-neuro" />
      <main className="flex md:flex-row flex-col-reverse">
        <div className="flex-1 flex flex-col md:py-12 md:px-16 md:pt-4 py-8 px-4 pt-4">
          <h1 className="text-dark-neuro text-3xl pb-4">
            <span className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
              Bobath:
            </span>{" "}
            Caminhos para a Reabilitação Neuromuscular e Independência do
            Paciente
          </h1>
          <p>
            O Bobath é uma das certificações utilizada aqui na clínica a fim de
            melhorias nos resultados dos nossos pacientes.
          </p>
        </div>
      </main>
      <section className="flex md:flex-row flex-col gap-8 bg-light-neuro md:px-16 px-4 md:py-12 py-8">
        <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
          <img className="mx-auto w-20 h-20" src={IconDocument} />
          <p className="text-dark-neuro pt-4">
            A técnica enfatiza a reabilitação neuromuscular e a promoção do
            controle motor através de movimentos funcionais específicos,
            facilitando padrões normais de movimento e postura.
          </p>
        </div>
        <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
          <div className="flex justify-center">
            <img className="w-20 h-20" src={IconBoy} />
            <img className="w-20 h-20" src={IconGirl} />
          </div>
          <p className="text-dark-neuro pt-4">
            A abordagem é altamente individualizada e se baseia na análise
            minuciosa das habilidades motoras e na identificação de estratégias
            para melhorar a função e a independência do paciente.
          </p>
        </div>
      </section>
      <LinkGoToProfessionals />
      <section className="flex md:flex-row flex-col bg-light-neuro">
        <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8 md:bg-gradient-to-r md:from-light-cyan-neuro md:to-light-cyan-neuro md:rounded-none md:rounded-tr-[800px] rounded-none">
          <img
            src={ImageBobathAlternative}
            className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
          ></img>
        </div>
        <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8 ">
          <p className="text-dark-neuro pt-6">
            Esta pode ser especialmente benéfica para crianças neuroatípicas,
            como aquelas com:{" "}
            <ul className="list-disc font-bold text-dark-cyan-neuro flex flex-col gap-1 ps-8 pt-4">
              <li>
                Encefalopatia Crônica não Progressiva (Paralisia Cerebral)
              </li>
              <li>Trissomia do Cromossomo 21 (Síndrome de Down)</li>
              <li>Transtorno do Espectro Autista (TEA)</li>
              <li>Entre Outros</li>
            </ul>
          </p>
        </div>
      </section>
      <section className="flex md:flex-row flex-col-reverse bg-light-cyan-neuro">
        <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8">
          <h1 className="text-dark-neuro text-2xl">
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
        </div>
        <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8 md:rounded-none md:rounded-bl-[800px] rounded-none">
          <img
            src={ImageBobath}
            className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
          ></img>
        </div>
      </section>
      <Nav />
      <Footer />
    </div>
  );
}

export default Bobath;
