import React from "react";
import LinkSocialMediaAlternative from "./LinkSocialMediaAlternative";
import LinkSocialMediaSmall from "./LinkSocialMediaSmall";
import IconWhatsappAlternative from "../assets/whatsappAlternative.svg";
import IconEmailAlternative from "../assets/emailAlternative.svg";
import IconInstagramAlternative from "../assets/instagramAlternative.svg";
import IconFacebookAlternative from "../assets/facebookAlternative.svg";

const Footer = () => {
  let links = [
    { name: "Profissionais", link: "#" },
    { name: "Especialidades", link: "#especialidades" },
    { name: "Sobre", link: "#sobre" },
    { name: "Contato", link: "#contato" },
  ];
  return (
    <footer className="bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro">
      <div className="flex sm:flex-row flex-col">
        <div className="flex flex-1 flex-col gap-4 md:px-16 px-4 py-8 sm:text-left text-center">
          {links.map((link) => (
            <a className="text-light-neuro font-medium hover:underline" href={link.link}>
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex-col flex-1 gap-4 md:px-16 px-4 sm:pt-8 pb-8">
          <div className="flex justify-center sm:justify-end pb-4">
            <LinkSocialMediaAlternative
              icon={IconWhatsappAlternative}
              link="https://api.whatsapp.com/send?phone=554299732535"
              name="WHATSAPP"
            />
          </div>
          <div className="flex gap-4 justify-center sm:justify-end">
            <LinkSocialMediaSmall
              icon={IconEmailAlternative}
              link="mailto:espaconeurodesenvolverirati@gmail.com"
            />
            <LinkSocialMediaSmall
              icon={IconInstagramAlternative}
              link="https://www.instagram.com/espaconeurodesenvolver/"
            />
            <LinkSocialMediaSmall
              icon={IconFacebookAlternative}
              link="https://m.facebook.com/people/Espa%C3%A7o-Neurodesenvolver/100071080340340/"
            />
        </div>
        </div>
        
      </div>
      <p className="text-light-neuro text-center pb-4">
        ©{" "}
        <a
          className="underline"
          href="https://www.instagram.com/nwp.software/"
          target="_blank"
        >
          NWP Software 2024
        </a>
      </p>
    </footer>
  );
};

export default Footer;
