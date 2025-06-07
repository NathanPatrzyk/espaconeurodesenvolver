import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";

import LinkGoToProfessionals from "../components/link/LinkGoToProfessionals";

import Main from "../components/Main";
import About from "../components/About";
import Speciality from "../components/Speciality";
import SocialMedia from "../components/SocialMedia";

import ImageEstimulacaoVisual from "../assets/estimulacaovisual.webp";
import ImagePediasuit from "../assets/pediasuit.webp";
import ImageTerapiaOcupacional from "../assets/terapiaocupacional.webp";
import ImageBobath from "../assets/bobath.webp";
import ImagePsicomotricidade from "../assets/psicomotricidade.webp";
import ImageFonoaudiologiaBobath from "../assets/fonoaudiologia.webp";

function Home() {
  return (
    <div>
      <Main />
      <About />
      <Speciality
        image={ImageFonoaudiologiaBobath}
        title="Fonoaudiologia Bobath"
        description="O método Bobath é uma abordagem terapêutica voltada para a habilitação e reabilitação motora, auxiliando no tratamento de pessoas com diversas condições neurológicas."
        link="especialidades/fonoaudiologiabobath"
        theme="dark"
      />
      <SocialMedia />
      <Speciality
        image={ImagePediasuit}
        title="PediaSuit"
        description="É uma abordagem revolucionária na neuroreabilitação infantil, projetada para crianças com desafios neuromotores. Descubra como esse protocolo funciona e como ele pode fazer a diferença na vida de nossos pequenos pacientes!"
        link="especialidades/pediasuit"
        theme="dark"
      />
      <LinkGoToProfessionals />
      <Speciality
        image={ImageBobath}
        title="Bobath"
        description="O Conceito Neuroevolutivo Bobath é uma abordagem terapêutica desenvolvida a fim de facilitar o individuo com limitação para participação no cotidiano, devido a danos motores, (incluindo tônus muscular e padrões de movimento) funções sensoriais, perceptivas e cognitivas, resultantes dos distúrbios do SNC – Sistema Nervoso Central."
        link="especialidades/bobath"
        theme="light"
      />
      <Speciality
        image={ImageTerapiaOcupacional}
        title="Terapia Ocupacional"
        description="Essa prática terapêutica foca em capacitar as pessoas a superar desafios diários."
        link="especialidades/terapiaocupacional"
        theme="dark"
      />
      <Speciality
        image={ImageEstimulacaoVisual}
        title="Estimulação Visual"
        description="É uma especialidade que visa desenvolver e melhorar a capacidade de acuidade visual por meio de atividades específicas que favorecem o sistema visual."
        link="especialidades/estimulacaovisual"
        theme="light"
      />
      <Speciality
        image={ImagePsicomotricidade}
        title="Psicomotricidade"
        description="A Psicomotricidade busca melhorar os movimentos do corpo, a noção de espaço onde se está, a coordenação motora, equilíbrio e também o ritmo."
        link="especialidades/psicomotricidade"
        theme="dark"
      />
      <Nav />
      <Footer />
    </div>
  );
}

export default Home;
