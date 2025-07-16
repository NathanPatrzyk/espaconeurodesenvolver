import { useState } from "react";
import IconSeeMore from "../../assets/see-more.svg";

const NavItem = ({ childrens, link, name }) => {
  let [open, setOpen] = useState(false);
  if (childrens) {
    if (!open) {
      return (
        <div className="p-2 md:p-0">
          <a
            className="block cursor-pointer font-medium text-dark-neuro hover:opacity-80"
            href={link}
            onClick={() => setOpen(!open)}
          >
            {name}
            <img className="inline pb-0.5 ps-2" src={IconSeeMore} />
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <div className="p-2 md:p-0">
            <a
              className="block cursor-pointer font-medium text-dark-neuro hover:opacity-80"
              href={link}
              onClick={() => setOpen(!open)}
            >
              {name}
              <img
                className={`inline pb-0.5 ${
                  open ? "rotate-180 pe-2" : "rotate-0 ps-2"
                }`}
                src={IconSeeMore}
              />
            </a>
          </div>
          <div className="right-[109px] top-[64px] pb-2 md:absolute md:bg-white md:bg-opacity-90">
            {childrens.map((children) => (
              <a
                key={children.link}
                className="mx-6 my-2 block cursor-pointer text-dark-neuro hover:opacity-80"
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
      <div className="p-2 md:p-0">
        <a
          className="block cursor-pointer font-medium text-dark-neuro hover:opacity-80"
          href={link}
        >
          {name}
        </a>
      </div>
    );
  }
};

export default NavItem;
