import React, { useState } from "react";

const Nav = () => {
  let links = [
    { name: "Especialidades", link: "/" },
    { name: "Sobre", link: "/" },
    { name: "Contato", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="bg-white bg-opacity-70 md:px-8 px-4 py-3 w-full md:flex items-center fixed top-0 left-0">
      <div className="flex items-center">
        <div className="sm:w-72 w-10 h-10 bg-[url(./assets/logo-small.png)] sm:bg-[url(./assets/logo.png)] bg-no-repeat bg-center bg-contain cursor-pointer hover:opacity-80 focus:opacity-80 duration-500"></div>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className={`absolute right-6 top-4 cursor-pointer md:hidden w-8 h-8 bg-no-repeat bg-center ${
          open ? "bg-[url(./assets/close.svg)]" : "bg-[url(./assets/menu.svg)]"
        }`}
      ></div>
      <div
        className={`bg-white md:bg-opacity-0 bg-opacity-70 md:p-0 p-2 pt-4 md:flex md:gap-4 md:justify-end absolute md:static md:z-auto z-[-1] left-0 w-full ${
          open ? "top-[64px]" : "top-[-490px]"
        }`}
      >
        {links.map((link) => (
          <div className="font-medium md:p-0 p-2 hover:opacity-80 focus:opacity-80 cursor-pointer duration-500">
            <a href={link.link}>{link.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
