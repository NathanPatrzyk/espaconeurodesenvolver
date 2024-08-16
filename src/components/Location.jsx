import Motion from "./Motion";

import Link from "./Link";

const Location = () => {
  return (
    <>
      <section className="flex md:flex-row flex-col bg-light-neuro gap-8 px-16 md:py-12 py-8">
        <div className="grow">
          <div className="flex-1 flex items-center justify-center pb-8">
            <iframe
              className="w-full h-full min-h-[300px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.1925990864897!2d-50.646131325262985!3d-25.465243534285854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e7d54717ac8929%3A0x678e2ce721a7ad8b!2sEspa%C3%A7o%20Neurodesenvolver!5e0!3m2!1spt-BR!2sbr!4v1713653945793!5m2!1spt-BR!2sbr"
            ></iframe>
          </div>
          <div className="md:max-w-[50vw] max-w-none">
            <Motion>
              <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
                Unidade Irati
              </h2>
              <p className="text-dark-neuro py-6">
                📍 R. Conselheiro Zacarias, 156 - Irati-PR, 84500-245
              </p>
              <Link
                link="https://maps.app.goo.gl/WEoznvMvrLGJoZZk8"
                name="LOCALIZAÇÃO"
                theme="dark"
              />
            </Motion>
          </div>
        </div>
        <div className="grow">
          <div className="flex-1 flex items-center justify-center pb-8">
            <iframe
              className="w-full h-full min-h-[300px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.218434605806!2d-50.60720032483519!3d-25.229566777690103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e863f231a53643%3A0xb13a501a648fb779!2sR.%20Xavier%20da%20Silva%2C%20110%20-%20Imbituva%2C%20PR%2C%2084430-000!5e0!3m2!1spt-BR!2sbr!4v1723840763103!5m2!1spt-BR!2sbr"
            ></iframe>
          </div>
          <div className="md:max-w-[50vw] max-w-none">
            <Motion>
              <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
                Unidade Imbituva
              </h2>
              <p className="text-dark-neuro py-6">
                📍 R. Xavier da Silva, 110 - Imbituva, PR, 84430-000
              </p>
              <Link
                link="https://maps.app.goo.gl/o4EVjEycbFSptjta9"
                name="LOCALIZAÇÃO"
                theme="dark"
              />
            </Motion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
