import Nav from "../components/Nav";
import Footer from "../components/Footer";

import LinkGoToProfessionals from "../components/LinkGoToProfessionals";

import Main from "../components/Main";
import About from "../components/About";
import Speciality from "../components/Speciality";
import SocialMedia from "../components/SocialMedia";
import Location from "../components/Location";
import OtherSpecialities from "../components/OtherSpecialities";

import ImageEstimulacaoVisual from "../assets/estimulacaovisual.webp";
import ImagePediasuit from "../assets/pediasuit.webp";
import ImageTerapiaOcupacional from "../assets/terapiaocupacional.webp";
import ImageBobath from "../assets/bobath.webp";

function Home() {
  return (
    <div>
      <Main />
      <About />
      <Speciality
        image={ImagePediasuit}
        title="PediaSuit"
        description="É uma abordagem revolucionária na neuroreabilitação infantil, projetada para crianças com desafios neuromotores. Descubra como esse protocolo funciona e como ele pode fazer a diferença na vida de nossos pequenos pacientes!"
        link="especialidades/pediasuit"
        theme="dark"
      />
      <SocialMedia />
      <Speciality
        image={ImageBobath}
        title="Bobath"
        description="O Conceito Neuroevolutivo Bobath é uma abordagem terapêutica desenvolvida a fim de facilitar o individuo com limitação para participação no cotidiano, devido a danos motores, (incluindo tônus muscular e padrões de movimento) funções sensoriais, perceptivas e cognitivas, resultantes dos distúrbios do SNC – Sistema Nervoso Central."
        link="especialidades/bobath"
        theme="dark"
      />
      <Location />
      <Speciality
        image={ImageTerapiaOcupacional}
        title="Terapia Ocupacional"
        description="Às vezes, as maiores transformações na vida vêm de pequenos detalhes. A Terapia Ocupacional é um exemplo perfeito disso. Essa prática terapêutica foca em capacitar as pessoas a superar desafios diários, tornando pequenos passos em direção a uma vida mais plena e independente. Cada pequena vitória é um grande avanço."
        theme="dark"
      />
      <LinkGoToProfessionals />
      <Speciality
        image={ImageEstimulacaoVisual}
        title="Estimulação Visual"
        description="É uma especialidade que visa desenvolver e melhorar a capacidade de acuidade visual por meio de atividades específicas que favorecem o sistema visual."
        theme="dark"
      />
      <OtherSpecialities />
      <Nav />
      <Footer />
    </div>
  );
}

export default Home;
