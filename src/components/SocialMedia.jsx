import Motion from "./Motion";
import IconWhatsappAlternative from "../assets/whatsappAlternative.svg";
import IconEmailAlternative from "../assets/emailAlternative.svg";
import IconInstagramAlternative from "../assets/instagramAlternative.svg";
import IconFacebookAlternative from "../assets/facebookAlternative.svg";
import { MapPin } from "lucide-react";

const SocialMedia = () => {
  return (
    <section
      id="contato"
      className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-4 bg-light-neuro md:p-16 p-4"
    >
      <Motion>
        <div
          className="from-dark-cyan-neuro to-cyan-neuro bg-gradient-to-r p-4
        rounded-xl flex flex-col"
        >
          <h2 className="font-decoration text-white text-4xl px-2 pb-2">
            Unidade Irati
          </h2>
          <a
            href="https://api.whatsapp.com/send?phone=554299732535"
            target="_blank"
          >
            <div className="duration-300 flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
              <img
                className="size-12 p-2 bg-white rounded-md"
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
            <div className="duration-300 flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
              <img
                className="size-12 p-2 bg-white rounded-md"
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
            <div className="duration-300 flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
              <img
                className="size-12 p-2 bg-white rounded-md"
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
            <div className="duration-300 flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
              <img
                className="size-12 p-2 bg-white rounded-md"
                src={IconFacebookAlternative}
              />
              <div className="text-white">
                <p className="text-xl font-bold">Facebook:</p>
                <p>Espaço Neurodesenvolver</p>
              </div>
            </div>
          </a>
          <a href="https://maps.app.goo.gl/WEoznvMvrLGJoZZk8" target="_blank">
            <div className="duration-300 flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
              <MapPin className="size-12 p-2 text-dark-cyan-neuro bg-white rounded-md shrink-0" />
              <div className="text-white">
                <p className="text-xl font-bold">Localização:</p>
                <p>R. Conselheiro Zacarias, 156 - Irati-PR, 84500-245</p>
              </div>
            </div>
          </a>
          <div className="md:p-3 p-2">
            <iframe
              className="w-full h-full min-h-[300px] rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.1925990864897!2d-50.646131325262985!3d-25.465243534285854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e7d54717ac8929%3A0x678e2ce721a7ad8b!2sEspa%C3%A7o%20Neurodesenvolver!5e0!3m2!1spt-BR!2sbr!4v1713653945793!5m2!1spt-BR!2sbr"
            ></iframe>
          </div>
        </div>
      </Motion>
      <Motion>
        <div
          className="from-dark-cyan-neuro to-cyan-neuro bg-gradient-to-r p-4
        rounded-xl flex flex-col"
        >
          <h2 className="font-decoration text-white text-4xl px-2 pb-2">
            Unidade Imbituva
          </h2>
          <a
            href="https://api.whatsapp.com/send?phone=554299375807"
            target="_blank"
          >
            <div className="duration-300 flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
              <img
                className="size-12 p-2 bg-white rounded-md"
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
            <div className="duration-300 flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
              <img
                className="size-12 p-2 bg-white rounded-md"
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
            <div className="duration-300 flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
              <img
                className="size-12 p-2 bg-white rounded-md"
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
            <div className="duration-300 flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
              <img
                className="size-12 p-2 bg-white rounded-md"
                src={IconFacebookAlternative}
              />
              <div className="text-white">
                <p className="text-xl font-bold">Facebook:</p>
                <p>Espaço Neurodesenvolver</p>
              </div>
            </div>
          </a>
          <a href="https://maps.app.goo.gl/o4EVjEycbFSptjta9" target="_blank">
            <div className="duration-300 flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
              <MapPin className="size-12 p-2 text-dark-cyan-neuro bg-white rounded-md shrink-0" />
              <div className="text-white">
                <p className="text-xl font-bold">Localização:</p>
                <p>R. Xavier da Silva, 110 - Imbituva, PR, 84430-000</p>
              </div>
            </div>
          </a>
          <div className="md:p-3 p-2">
            <iframe
              className="w-full h-full min-h-[300px] rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.218434605806!2d-50.60720032483519!3d-25.229566777690103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e863f231a53643%3A0xb13a501a648fb779!2sR.%20Xavier%20da%20Silva%2C%20110%20-%20Imbituva%2C%20PR%2C%2084430-000!5e0!3m2!1spt-BR!2sbr!4v1723840763103!5m2!1spt-BR!2sbr"
            ></iframe>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default SocialMedia;
