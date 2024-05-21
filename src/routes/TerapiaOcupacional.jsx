import json from "../data.json";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import LinksSmall from "../components/LinksSmall";

const TerapiaOcupacional = () => {
  const name = "Terapia Ocupacional";
  return (
    <div className="bg-light-cyan-neuro pt-16">
      {json.pages.map(
        (page) =>
          page.childrens &&
          page.childrens.map((children) =>
            children.name == name ? (
              <LinksSmall previous={children.previous} next={children.next} />
            ) : null
          )
      )}
      <main className="flex md:flex-row flex-col-reverse">
        <div className="flex-1 flex flex-col md:py-12 md:px-16 md:pt-4 py-8 px-4 pt-4">
          <h1 className="text-dark-neuro text-3xl pb-4">
            <span className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
              Terapia Ocupacional:
            </span>{" "}
            Grandes Mudanças Através dos Pequenos Detalhes
          </h1>
        </div>
      </main>
      {json.pages.map(
        (page) =>
          page.childrens &&
          page.childrens.map((children) =>
            children.name == name ? (
              <LinksSmall previous={children.previous} next={children.next} />
            ) : null
          )
      )}
      <Nav />
      <Footer />
    </div>
  );
};

export default TerapiaOcupacional;
