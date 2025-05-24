import { Eye, Puzzle, Star } from "lucide-react";
import Motion from "./Motion";

const About = () => {
  return (
    <Motion>
      <section
        id="sobre"
        className="grid md:grid-cols-3 grid-cols-1 gap-4 md:px-16 px-4 md:py-12 py-8"
      >
        <div className="flex-1 px-8 py-4">
          <Puzzle className="mx-auto size-14 text-light-neuro bg-dark-cyan-neuro p-2 rounded-md" />
          <h2 className="py-4 text-center font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
            Missão
          </h2>
          <p className="text-dark-neuro text-center">
            Proporcionar ao paciente a potencialização de suas habilidades,
            através de intervenções baseadas em evidências científicas, inovação
            e tecnologia.
          </p>
        </div>
        <div className="flex-1 px-8 py-4">
          <Eye className="mx-auto size-14 text-light-neuro bg-dark-cyan-neuro p-2  rounded-md" />
          <h2 className="py-4 text-center font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
            Visão
          </h2>
          <p className="text-dark-neuro text-center">
            Ser um espaço de referência na reabilitação, oferecendo atendimentos
            com profissionais capacitados, terapias especializadas, além de
            espaço adequado e equipamentos.
          </p>
        </div>
        <div className="flex-1 px-8 py-4">
          <Star className="mx-auto size-14 text-light-neuro bg-dark-cyan-neuro p-2  rounded-md" />
          <h2 className="py-4 text-center font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
            Valores
          </h2>
          <p className="text-dark-neuro text-center">
            Proatividade; Comprometimento; Motivação; Trabalho em Equipe; Ética
            e Respeito; Excelência; Melhoria contínua; Inovação;
            Responsabilidade.
          </p>
        </div>
      </section>
    </Motion>
  );
};

export default About;
