import React from "react";

const Nav = () => {
  let links = [
    { name: "Especialidades", link: "/" },
    { name: "Profissionais", link: "/" },
    { name: "Sobre", link: "/" },
    { name: "Contato", link: "/" },
  ];
  return (
    <div className="w-full md:flex md:px-8 items-center justify-between fixed top-0 left-0 bg-white">
      <div className="flex w-2/5 p-4">
        <div className="w-10 sm:w-72 h-10 bg-[url(./assets/logo-small.png)] sm:bg-[url(./assets/logo.png)] bg-no-repeat bg-center bg-contain cursor-pointer hover:opacity-80 focus:opacity-80 duration-500"></div>
      </div>
      <div className="md:w-3/5 md:flex md:items-center gap-4 sm:justify-end text-lg md:pb-0 pb-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full">
        {links.map((link) => (
          <div className="pb-2 md:px-0 px-4 hover:opacity-80 focus:opacity-80 cursor-pointer duration-500">
            <a href={link.link}>{link.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
