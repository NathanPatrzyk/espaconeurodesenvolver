import Motion from "./Motion";
import LinkButton from "./LinkButton";
import BackgroundSocialMedia from "../assets/bgredesocial.webp";
import ImageLogo from "../assets/logo-big.webp";
import IconWhatsapp from "../assets/whatsapp.svg";
import IconEmail from "../assets/email.svg";
import IconInstagram from "../assets/instagram.svg";
import IconFacebook from "../assets/facebook.svg";

const SocialMedia = () => {
  return (
    <section
      id="contato"
      className="flex md:flex-row flex-col-reverse bg-light-neuro"
    >
      <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8 md:max-w-[50vw] max-w-none">
        <Motion>
          <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
            Redes Sociais
          </h2>
          <div className="flex md:flex-row flex-col gap-6 pt-6 sm:items-start items-center">
            <LinkButton
              icon={IconWhatsapp}
              link="https://api.whatsapp.com/send?phone=554299732535"
              name="WHATSAPP"
              theme="dark"
            />
            <LinkButton
              icon={IconEmail}
              link="mailto:espaconeurodesenvolverirati@gmail.com"
              name="EMAIL"
              theme="dark"
            />
          </div>
          <div className="flex md:flex-row flex-col gap-6 pt-6 sm:items-start items-center">
            <LinkButton
              icon={IconInstagram}
              link="https://www.instagram.com/espaconeurodesenvolver/"
              name="INSTAGRAM"
              theme="dark"
            />
            <LinkButton
              icon={IconFacebook}
              link="https://m.facebook.com/people/Espa%C3%A7o-Neurodesenvolver/100071080340340/"
              name="FACEBOOK"
              theme="dark"
            />
          </div>
        </Motion>
      </div>
      <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8">
        <div className="relative top-0 left-0">
          <Motion>
            <img
              src={BackgroundSocialMedia}
              className="size-[300px] min-w-[300px] min-h-[300px] rounded-[60px] mx-auto"
            ></img>
            <div className="absolute top-0 left-0">
              <img
                src={ImageLogo}
                className="size-[300px] min-w-[300px] min-h-[300px] rounded-[60px] mx-auto animate-goback"
              ></img>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
