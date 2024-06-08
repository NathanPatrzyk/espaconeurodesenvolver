import React, { useState } from "react";
import IconSeeMore from "../assets/see-more.svg";

const NavItem = (props) => {
  let [open, setOpen] = useState(false);
  if (props.childrens) {
    if (!open) {
      return (
        <div className="md:p-0 p-2">
          <a
            className="block text-dark-neuro font-medium hover:opacity-80 cursor-pointer"
            href={props.link}
            onClick={() => setOpen(!open)}
          >
            {props.name}
            <img className="inline ps-2 pb-0.5" src={IconSeeMore} />
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <div className="md:p-0 p-2">
            <a
              className="block text-dark-neuro font-medium hover:opacity-80 cursor-pointer"
              href={props.link}
              onClick={() => setOpen(!open)}
            >
              {props.name}
              <img
                className={`inline pb-0.5 ${
                  open ? "pe-2 rotate-180" : "ps-2 rotate-0"
                }`}
                src={IconSeeMore}
              />
            </a>
          </div>
          <div className="md:absolute right-[109px] top-[64px] md:bg-white md:bg-opacity-90 pb-2">
            {props.childrens.map((children) => (
              <a
                className="block text-dark-neuro hover:opacity-80 cursor-pointer my-2 mx-6"
                href={children.link}
              >
                {children.name}
              </a>
            ))}
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="md:p-0 p-2">
        <a
          className="block text-dark-neuro font-medium hover:opacity-80 cursor-pointer"
          href={props.link}
        >
          {props.name}
        </a>
      </div>
    );
  }
};

export default NavItem;
