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
        <div className="flex md:flex-row flex-col md:items-start items-center">
          <div className="flex flex-1 md:flex-row flex-col md:px-16 px-4 py-8 gap-8 md:text-start text-center">
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
            <div className="flex-1 flex flex-col gap-4 md:text-start text-center">
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
          <div className="flex flex-col gap-4 md:px-16 px-4 sm:pt-8 pb-8">
            <p className="text-white text-lg font-semibold">Unidade Irati</p>
            <div className="flex gap-4 justify-start md:justify-end">
              <Link
                icon={IconWhatsappAlternative}
                link="https://api.whatsapp.com/send?phone=554299732535"
                theme="light"
              />
              <Link
                icon={IconEmailAlternative}
                link="mailto:espaconeurodesenvolverirati@gmail.com"
              />
              <Link
                icon={IconInstagramAlternative}
                link="https://www.instagram.com/espaconeurodesenvolver/"
              />
              <Link
                icon={IconFacebookAlternative}
                link="https://www.facebook.com/profile.php?id=61573420109403"
              />
            </div>
            <p className="text-white text-lg font-semibold">Unidade Imbituva</p>
            <div className="flex gap-4 justify-start md:justify-end">
              <Link
                icon={IconWhatsappAlternative}
                link="https://api.whatsapp.com/send?phone=554299375807"
                theme="light"
              />
              <Link
                icon={IconEmailAlternative}
                link="mailto:espaconeurodesenvolverimbituva@gmail.com"
              />
              <Link
                icon={IconInstagramAlternative}
                link="https://www.instagram.com/espaconeurodesenvolver_imb/"
              />
              <Link
                icon={IconFacebookAlternative}
                link="https://www.facebook.com/profile.php?id=61573420109403"
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
            NWP Software {new Date().getFullYear()}
          </a>
        </p>
      </Motion>
    </footer>
  );
};

export default Footer;
