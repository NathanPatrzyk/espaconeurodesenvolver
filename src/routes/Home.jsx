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
import ImagePsicomotricidade from "../assets/psicomotricidade.webp";

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
        description="Essa prática terapêutica foca em capacitar as pessoas a superar desafios diários."
        link="especialidades/terapiaocupacional"
        theme="dark"
      />
      <LinkGoToProfessionals />
      <Speciality
        image={ImageEstimulacaoVisual}
        title="Estimulação Visual"
        description="É uma especialidade que visa desenvolver e melhorar a capacidade de acuidade visual por meio de atividades específicas que favorecem o sistema visual."
        link="especialidades/estimulacaovisual"
        theme="dark"
      />
      <Speciality
        image={ImagePsicomotricidade}
        title="Psicomotricidade"
        description="A Psicomotricidade busca melhorar os movimentos do corpo, a noção de espaço onde se está, a coordenação motora, equilíbrio e também o ritmo."
        link="especialidades/psicomotricidade"
        theme="light"
      />
      <OtherSpecialities />
      <Nav />
      <Footer />
    </div>
  );
}

export default Home;
