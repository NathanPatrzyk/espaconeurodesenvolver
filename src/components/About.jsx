import IconMissao from "../assets/missao.webp";
import IconVisao from "../assets/visao.webp";
import IconValores from "../assets/valores.webp";

const About = () => {
  return (
    <section
      id="sobre"
      className="flex md:flex-row flex-col gap-8 bg-light-neuro md:px-16 px-4 md:py-12 py-8"
    >
      <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
        <img className="mx-auto w-20 h-20" src={IconMissao} />
        <h2 className="py-4 text-center font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-2xl">
          Missão
        </h2>
        <p className="text-dark-neuro">
          Proporcionar ao paciente a potencialização de suas habilidades,
          através de intervenções baseadas em evidências científicas, inovação e
          tecnologia.
        </p>
      </div>
      <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
        <img className="mx-auto w-20 h-20" src={IconVisao} />
        <h2 className="py-4 text-center font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-2xl">
          Visão
        </h2>
        <p className="text-dark-neuro">
          Ser um espaço de referência na reabilitação, oferecendo atendimentos
          com profissionais capacitados, terapias especializadas, além de espaço
          adequado e equipamentos.
        </p>
      </div>
      <div className="flex-1 px-8 py-4 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
        <img className="mx-auto w-20 h-20" src={IconValores} />
        <h2 className="py-4 text-center font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-2xl">
          Valores
        </h2>
        <p className="text-dark-neuro">
          Proatividade; Comprometimento; Motivação; Trabalho em Equipe; Ética e
          Respeito; Excelência; Melhoria contínua; Inovação; Responsabilidade.
        </p>
      </div>
    </section>
  );
};

export default About;
