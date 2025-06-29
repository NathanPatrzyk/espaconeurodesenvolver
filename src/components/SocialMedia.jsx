import Motion from "./Motion";
import IconWhatsappAlternative from "../assets/whatsappAlternative.svg";
import IconEmailAlternative from "../assets/emailAlternative.svg";
import IconInstagramAlternative from "../assets/instagramAlternative.svg";
import IconFacebookAlternative from "../assets/facebookAlternative.svg";
import { MapPin } from "lucide-react";

const SocialMedia = () => {
  return (
    <div className="flex w-full justify-center bg-light-neuro">
      <section
        id="contato"
        className="grid w-full max-w-7xl grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-16 md:p-12"
      >
        <Motion>
          <div className="flex flex-col rounded-xl bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro p-4">
            <h2 className="px-2 pb-2 text-center font-decoration text-4xl text-white md:text-left">
              Unidade Irati
            </h2>
            <a
              href="https://api.whatsapp.com/send?phone=554299732535"
              target="_blank"
            >
              <div className="flex items-center gap-2 rounded-md p-2 duration-300 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 md:gap-4 md:p-3">
                <img
                  className="size-12 rounded-md bg-white p-2"
                  src={IconWhatsappAlternative}
                />
                <div className="text-white">
                  <p className="text-xl font-bold">WhatsApp:</p>
                  <p>(42)99973-2535</p>
                </div>
              </div>
            </a>
            <a
              href="mailto:espaconeurodesenvolverirati@gmail.com"
              target="_blank"
            >
              <div className="flex items-center gap-2 rounded-md p-2 duration-300 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 md:gap-4 md:p-3">
                <img
                  className="size-12 rounded-md bg-white p-2"
                  src={IconEmailAlternative}
                />
                <div className="text-white">
                  <p className="text-xl font-bold">Email:</p>
                  <p className="break-all">
                    espaconeurodesenvolverirati@gmail.com
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/espaconeurodesenvolver/"
              target="_blank"
            >
              <div className="flex items-center gap-2 rounded-md p-2 duration-300 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 md:gap-4 md:p-3">
                <img
                  className="size-12 rounded-md bg-white p-2"
                  src={IconInstagramAlternative}
                />
                <div className="text-white">
                  <p className="text-xl font-bold">Instagram:</p>
                  <p className="break-all">@espaconeurodesenvolver</p>
                </div>
              </div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573420109403"
              target="_blank"
            >
              <div className="flex items-center gap-2 rounded-md p-2 duration-300 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 md:gap-4 md:p-3">
                <img
                  className="size-12 rounded-md bg-white p-2"
                  src={IconFacebookAlternative}
                />
                <div className="text-white">
                  <p className="text-xl font-bold">Facebook:</p>
                  <p>Espaço Neurodesenvolver</p>
                </div>
              </div>
            </a>
            <a href="https://maps.app.goo.gl/WEoznvMvrLGJoZZk8" target="_blank">
              <div className="flex items-center gap-2 rounded-md p-2 duration-300 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 md:gap-4 md:p-3">
                <MapPin className="size-12 shrink-0 rounded-md bg-white p-2 text-dark-cyan-neuro" />
                <div className="text-white">
                  <p className="text-xl font-bold">Localização:</p>
                  <p>R. Conselheiro Zacarias, 156 - Irati-PR, 84500-245</p>
                </div>
              </div>
            </a>
            <div className="p-2 md:p-3">
              <iframe
                className="h-full min-h-[300px] w-full rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.1925990864897!2d-50.646131325262985!3d-25.465243534285854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e7d54717ac8929%3A0x678e2ce721a7ad8b!2sEspa%C3%A7o%20Neurodesenvolver!5e0!3m2!1spt-BR!2sbr!4v1713653945793!5m2!1spt-BR!2sbr"
              ></iframe>
            </div>
          </div>
        </Motion>
        <Motion>
          <div className="flex flex-col rounded-xl bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro p-4">
            <h2 className="px-2 pb-2 text-center font-decoration text-4xl text-white md:text-left">
              Unidade Imbituva
            </h2>
            <a
              href="https://api.whatsapp.com/send?phone=554299375807"
              target="_blank"
            >
              <div className="flex items-center gap-2 rounded-md p-2 duration-300 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 md:gap-4 md:p-3">
                <img
                  className="size-12 rounded-md bg-white p-2"
                  src={IconWhatsappAlternative}
                />
                <div className="text-white">
                  <p className="text-xl font-bold">WhatsApp:</p>
                  <p>(42)99937-5807</p>
                </div>
              </div>
            </a>
            <a
              href="mailto:espaconeurodesenvolverimbituva@gmail.com"
              target="_blank"
            >
              <div className="flex items-center gap-2 rounded-md p-2 duration-300 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 md:gap-4 md:p-3">
                <img
                  className="size-12 rounded-md bg-white p-2"
                  src={IconEmailAlternative}
                />
                <div className="text-white">
                  <p className="text-xl font-bold">Email:</p>
                  <p className="break-all">
                    espaconeurodesenvolverimbituva@gmail.com
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/espaconeurodesenvolver_imb/"
              target="_blank"
            >
              <div className="flex items-center gap-2 rounded-md p-2 duration-300 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 md:gap-4 md:p-3">
                <img
                  className="size-12 rounded-md bg-white p-2"
                  src={IconInstagramAlternative}
                />
                <div className="text-white">
                  <p className="text-xl font-bold">Instagram:</p>
                  <p className="break-all">@espaconeurodesenvolver_imb</p>
                </div>
              </div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573420109403"
              target="_blank"
            >
              <div className="flex items-center gap-2 rounded-md p-2 duration-300 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 md:gap-4 md:p-3">
                <img
                  className="size-12 rounded-md bg-white p-2"
                  src={IconFacebookAlternative}
                />
                <div className="text-white">
                  <p className="text-xl font-bold">Facebook:</p>
                  <p>Espaço Neurodesenvolver</p>
                </div>
              </div>
            </a>
            <a href="https://maps.app.goo.gl/o4EVjEycbFSptjta9" target="_blank">
              <div className="flex items-center gap-2 rounded-md p-2 duration-300 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 md:gap-4 md:p-3">
                <MapPin className="size-12 shrink-0 rounded-md bg-white p-2 text-dark-cyan-neuro" />
                <div className="text-white">
                  <p className="text-xl font-bold">Localização:</p>
                  <p>R. Xavier da Silva, 110 - Imbituva, PR, 84430-000</p>
                </div>
              </div>
            </a>
            <div className="p-2 md:p-3">
              <iframe
                className="h-full min-h-[300px] w-full rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.218434605806!2d-50.60720032483519!3d-25.229566777690103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e863f231a53643%3A0xb13a501a648fb779!2sR.%20Xavier%20da%20Silva%2C%20110%20-%20Imbituva%2C%20PR%2C%2084430-000!5e0!3m2!1spt-BR!2sbr!4v1723840763103!5m2!1spt-BR!2sbr"
              ></iframe>
            </div>
          </div>
        </Motion>
      </section>
    </div>
  );
};

export default SocialMedia;
