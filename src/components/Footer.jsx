import React from "react";
import LinkSocialMedia from "./LinkSocialMedia";
import IconWhatsapp from "../assets/whatsapp.svg";

const Footer = () => {
  let links = [
    { name: "Especialidades", link: "#especialidades" },
    { name: "Sobre", link: "#sobre" },
    { name: "Contato", link: "#contato" },
  ];
  return (
    <div>
      <footer className="flex bg-cyan-neuro">
        <div className="flex flex-col gap-4 px-8 pt-8">
          {links.map((link) => (
            <a className="text-light-neuro font-medium" href={link.link}>
              {link.name}
            </a>
          ))}
          <p className="text-light-neuro">
            ©{" "}
            <a
              className="underline"
              href="https://www.instagram.com/nwp.software/"
              target="_blank"
            >
              NWP Software 2024
            </a>
          </p>
        </div>
      </footer>
      <div className="bg-cyan-neuro text-center w-full pb-8"></div>
    </div>
  );
};

export default Footer;
