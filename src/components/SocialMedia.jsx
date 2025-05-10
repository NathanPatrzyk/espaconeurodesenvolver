import Motion from "./Motion";
import IconWhatsappAlternative from "../assets/whatsappAlternative.svg";
import IconEmailAlternative from "../assets/emailAlternative.svg";
import IconInstagramAlternative from "../assets/instagramAlternative.svg";
import IconFacebookAlternative from "../assets/facebookAlternative.svg";

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
          <h2 className="font-bold text-white text-3xl px-2 pb-2">
            Unidade Irati
          </h2>
          <a
            href="https://api.whatsapp.com/send?phone=554299732535"
            target="_blank"
          >
            <div className="flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
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
          <a href="mailto:espaconeurodesenvolverirati@gmail.com">
            <div className="flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
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
          <div className="flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
            <img
              className="size-12 p-2 bg-white rounded-md"
              src={IconInstagramAlternative}
            />
            <div className="text-white">
              <p className="text-xl font-bold">Instagram:</p>
              <p className="break-all">@espaconeurodesenvolver</p>
            </div>
          </div>
          <div className="flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
            <img
              className="size-12 p-2 bg-white rounded-md"
              src={IconFacebookAlternative}
            />
            <div className="text-white">
              <p className="text-xl font-bold">Facebook:</p>
              <p>Espaço Neurodesenvolver</p>
            </div>
          </div>
        </div>
      </Motion>
      <Motion>
        <div
          className="from-dark-cyan-neuro to-cyan-neuro bg-gradient-to-r p-4
        rounded-xl flex flex-col"
        >
          <h2 className="font-bold text-white text-3xl px-2 pb-2">
            Unidade Imbituva
          </h2>
          <a
            href="https://api.whatsapp.com/send?phone=554299375807"
            target="_blank"
          >
            <div className="flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
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
          <a href="mailto:espaconeurodesenvolverimbituva@gmail.com">
            <div className="flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
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
          <div className="flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
            <img
              className="size-12 p-2 bg-white rounded-md"
              src={IconInstagramAlternative}
            />
            <div className="text-white">
              <p className="text-xl font-bold">Instagram:</p>
              <p className="break-all">@espaconeurodesenvolver_imb</p>
            </div>
          </div>
          <div className="flex items-center md:gap-4 gap-2 md:p-3 p-2 hover:bg-light-neuro hover:bg-opacity-25 active:bg-light-neuro active:bg-opacity-25 rounded-md">
            <img
              className="size-12 p-2 bg-white rounded-md"
              src={IconFacebookAlternative}
            />
            <div className="text-white">
              <p className="text-xl font-bold">Facebook:</p>
              <p>Espaço Neurodesenvolver</p>
            </div>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default SocialMedia;
