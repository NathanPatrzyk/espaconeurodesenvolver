import { useState } from "react";
import IconSeeMore from "../../assets/see-more.svg";

const NavItem = (props) => {
  let [open, setOpen] = useState(false);
  if (props.childrens) {
    if (!open) {
      return (
        <div className="p-2 md:p-0">
          <a
            className="block cursor-pointer font-medium text-dark-neuro hover:opacity-80"
            href={props.link}
            onClick={() => setOpen(!open)}
          >
            {props.name}
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
              href={props.link}
              onClick={() => setOpen(!open)}
            >
              {props.name}
              <img
                className={`inline pb-0.5 ${
                  open ? "rotate-180 pe-2" : "rotate-0 ps-2"
                }`}
                src={IconSeeMore}
              />
            </a>
          </div>
          <div className="left-0 top-[64px] w-screen pb-2 md:absolute md:bg-white md:bg-opacity-90">
            {props.childrens.map((children) => (
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
          href={props.link}
        >
          {props.name}
        </a>
      </div>
    );
  }
};

export default NavItem;
