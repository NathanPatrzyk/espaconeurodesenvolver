import { useState } from "react";
import json from "../../data.json";

import NavItem from "./NavItem";

const Nav = () => {
  let [open, setOpen] = useState(false);
  return (
    <nav className="fixed left-0 top-0 flex w-screen justify-center bg-white bg-opacity-90">
      <div className="flex w-full max-w-7xl items-center px-8 py-3">
        <div className="flex items-center">
          <a href="/">
            <div className="h-10 w-10 cursor-pointer bg-[url(./assets/logo-small.webp)] bg-contain bg-center bg-no-repeat duration-500 hover:opacity-80 sm:w-72 sm:bg-[url(./assets/logo.webp)]"></div>
          </a>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`absolute right-6 top-4 h-8 w-8 cursor-pointer bg-center bg-no-repeat md:hidden ${
            open
              ? "bg-[url(./assets/close.svg)]"
              : "bg-[url(./assets/menu.svg)]"
          }`}
        ></div>
        <div
          className={`absolute left-0 z-[-1] w-full bg-white bg-opacity-90 p-2 pt-4 md:static md:z-auto md:flex md:justify-end md:gap-4 md:bg-opacity-0 md:p-0 ${
            open ? "top-[64px]" : "top-[-490px]"
          }`}
        >
          {json.pages.map((page) => (
            <NavItem
              key={page.link}
              name={page.name}
              link={page.link}
              childrens={page.childrens}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
