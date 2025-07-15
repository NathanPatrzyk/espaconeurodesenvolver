import { Eye, Puzzle, Star } from "lucide-react";
import Motion from "./Motion";

const About = () => {
  return (
    <Motion>
      <div className="flex w-full justify-center">
        <section
          id="sobre"
          className="grid w-full max-w-7xl grid-cols-1 gap-4 p-4 md:grid-cols-3 md:p-12"
        >
          <div className="flex-1 p-4">
            <Puzzle className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
            <h2 className="py-4 text-center font-decoration text-4xl text-dark-cyan-neuro">
              Missão
            </h2>
            <p className="text-center text-dark-neuro">
              Proporcionar ao paciente a potencialização de suas habilidades,
              através de intervenções baseadas em evidências científicas,
              inovação e tecnologia.
            </p>
          </div>
          <div className="flex-1 p-4">
            <Eye className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
            <h2 className="py-4 text-center font-decoration text-4xl text-dark-cyan-neuro">
              Visão
            </h2>
            <p className="text-center text-dark-neuro">
              Ser um espaço de referência na reabilitação, oferecendo
              atendimentos com profissionais capacitados, terapias
              especializadas, além de espaço adequado e equipamentos.
            </p>
          </div>
          <div className="flex-1 p-4">
            <Star className="mx-auto size-14 rounded-md bg-dark-cyan-neuro p-2 text-light-neuro" />
            <h2 className="py-4 text-center font-decoration text-4xl text-dark-cyan-neuro">
              Valores
            </h2>
            <p className="text-center text-dark-neuro">
              Proatividade; Comprometimento; Motivação; Trabalho em Equipe;
              Ética e Respeito; Excelência; Melhoria contínua; Inovação;
              Responsabilidade.
            </p>
          </div>
        </section>
      </div>
    </Motion>
  );
};

export default About;
