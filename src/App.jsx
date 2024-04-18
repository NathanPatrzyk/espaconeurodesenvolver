import ImageEstimulacaoVisual from "./assets/estimulacaovisual.webp";
import ImageSpecialityPediasuit from "./assets/pediasuit.webp";
import ImageTerapiaOcupacional from "./assets/terapiaocupacional.webp";
import About from "./components/About";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Speciality from "./components/Speciality";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <About />
      <Speciality
        image={ImageSpecialityPediasuit}
        title="PediaSuit"
        description="É uma abordagem revolucionária na neuroreabilitação infantil, projetada para crianças com desafios neuromotores. Descubra como esse protocolo funciona e como ele pode fazer a diferença na vida de nossos pequenos pacientes!"
      />
      <SocialMedia />
      <Speciality
        image={ImageTerapiaOcupacional}
        title="Terapia Ocupacional"
        description="Às vezes, as maiores transformações na vida vêm de pequenos detalhes. A Terapia Ocupacional é um exemplo perfeito disso. Essa prática terapêutica foca em capacitar as pessoas a superar desafios diários, tornando pequenos passos em direção a uma vida mais plena e independente. Cada pequena vitória é um grande avanço."
      />
      <Speciality
        image={ImageEstimulacaoVisual}
        title="Estimulação Visual"
        description="É uma especialidade que visa desenvolver e melhorar a capacidade de acuidade visual por meio de atividades específicas que favorecem o sistema visual."
      />
    </>
  );
}

export default App;
