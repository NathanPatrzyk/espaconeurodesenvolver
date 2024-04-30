import React from "react";
import LinkSocialMediaAlternative from "./LinkSocialMediaAlternative";
import IconWhatsappAlternative from "../assets/whatsappAlternative.svg";

const Footer = () => {
  let links = [
    { name: "Profissionais", link: "#" },
    { name: "Especialidades", link: "#especialidades" },
    { name: "Sobre", link: "#sobre" },
    { name: "Contato", link: "#contato" },
  ];
  return (
    <footer className="bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro">
      <div className="flex">
        <div className="flex flex-1 flex-col gap-4 px-8 pt-8 pb-8">
          {links.map((link) => (
            <a className="text-light-neuro font-medium" href={link.link}>
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-4 px-8 pt-8 pb-8">
          <div className="flex self-end">
            <LinkSocialMediaAlternative
              icon={IconWhatsappAlternative}
              link="https://api.whatsapp.com/send?phone=554299732535"
              name="WHATSAPP"
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
