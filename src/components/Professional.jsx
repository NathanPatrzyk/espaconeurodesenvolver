import ImageRafael from "../assets/rafael.webp";

const Professional = () => {
  let formations = [
    { name: "Pós-Graduado em Neurologia com ênfase em Neuropediatria" },
    { name: "Pós-Graduado em Fisioterapia Neurofuncional" },
    { name: "Pós Graduado em ABA (Análise do Comportamento Aplicada)" },
    { name: "Formação em PediaSuit Básico, PediaSuit Avançado e PediaSuit Baby" },
    { name: "Formação no Conceito Bobath" },
    { name: "Curso de Treinamento Locomotor na Paralisia Cerebral" },
    { name: "Curso Teórico/Prático de Estimulação Transcraniana por Corrente Contínua" },
    { name: "Curso de Psicomotricidade Básico e Avançado" },
  ]
  return (
    <section className="flex bg-light-neuro md:px-16 px-4 md:pb-12 pb-8 md:pt-28 pt-24">
      <div className="flex-1 flex gap-6 p-8 border-4 border-dark-neuro hover:border-cyan-neuro border-opacity-20 rounded-lg">
        <img
          className="size-[80vw] max-w-[200px] max-h-[200px]"
          src={ImageRafael}
        />
        <div className="flex-1">
          <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
            Rafael Alexandre Giliczynski
          </h2>
          <p className="font-bold text-dark-neuro text-2xl pt-4">Fisioterapeuta Responsável</p>
          <p className="text-dark-neuro text-2xl pb-6">Crefito-8 275189-F</p>
          <div className="flex-col gap-2">
          {formations.map((formation) => (
            <div>{formation.name}</div>
          ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professional;
