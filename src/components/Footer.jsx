import json from "../data.json";

import Motion from "./Motion";
import Link from "./Link";

import IconWhatsappAlternative from "../assets/whatsappAlternative.svg";
import IconEmailAlternative from "../assets/emailAlternative.svg";
import IconInstagramAlternative from "../assets/instagramAlternative.svg";
import IconFacebookAlternative from "../assets/facebookAlternative.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro">
      <Motion>
        <div className="flex sm:flex-row flex-col">
          <div className="flex flex-1 md:px-16 px-4 py-8 gap-8 text-start">
            <div className="flex-1 flex flex-col gap-4">
              {json.pages.map(
                (page) =>
                  page.link && (
                    <a
                      className="block text-light-neuro font-medium hover:underline"
                      href={page.link}
                    >
                      {page.name}
                    </a>
                  )
              )}
            </div>
            <div className="flex-1 flex flex-col gap-4 text-start">
              {json.pages.map(
                (page) =>
                  page.childrens &&
                  page.childrens.map(
                    (children) =>
                      children.link && (
                        <a
                          className="block text-light-neuro font-medium hover:underline"
                          href={children.link}
                        >
                          {children.name}
                        </a>
                      )
                  )
              )}
            </div>
          </div>
          <div className="flex-col gap-4 md:px-16 px-4 sm:pt-8 pb-8">
            <div className="flex flex-1 pb-4 justify-start sm:justify-end">
              <Link
                icon={IconWhatsappAlternative}
                link="https://api.whatsapp.com/send?phone=554299732535"
                name="WHATSAPP"
                theme="light"
              />
            </div>
            <div className="flex gap-4 justify-start md:justify-end">
              <Link
                icon={IconEmailAlternative}
                link="mailto:espaconeurodesenvolverirati@gmail.com"
              />
              <Link
                icon={IconInstagramAlternative}
                link="https://www.instagram.com/espaconeurodesenvolver_imb/"
              />
              <Link
                icon={IconFacebookAlternative}
                link="https://m.facebook.com/people/Espa%C3%A7o-Neurodesenvolver/100071080340340/"
              />
            </div>
          </div>
        </div>
      </Motion>
      <Motion>
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
      </Motion>
    </footer>
  );
};

export default Footer;
