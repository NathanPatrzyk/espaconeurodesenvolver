import json from "../data.json";

import Motion from "./Motion";
import Link from "./link/Link";

import IconWhatsappAlternative from "../assets/whatsappAlternative.svg";
import IconEmailAlternative from "../assets/emailAlternative.svg";
import IconInstagramAlternative from "../assets/instagramAlternative.svg";
import IconFacebookAlternative from "../assets/facebookAlternative.svg";

const Footer = () => {
  return (
    <footer className="flex w-screen justify-center bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro">
      <div className="w-full max-w-7xl">
        <Motion>
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <div className="flex flex-1 flex-col gap-8 px-4 py-8 text-center md:flex-row md:px-16 md:text-start">
              <div className="flex flex-1 flex-col gap-4">
                {json.pages.map(
                  (page) =>
                    page.link && (
                      <a
                        className="block font-medium font-semibold text-light-neuro hover:underline"
                        href={page.link}
                      >
                        {page.name}
                      </a>
                    ),
                )}
              </div>
              <div className="flex flex-1 flex-col gap-4 text-center md:text-start">
                {json.pages.map(
                  (page) =>
                    page.childrens &&
                    page.childrens.map(
                      (children) =>
                        children.link && (
                          <a
                            className="block font-medium font-semibold text-light-neuro hover:underline"
                            href={children.link}
                          >
                            {children.name}
                          </a>
                        ),
                    ),
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4 px-4 pb-8 sm:pt-8 md:px-16">
              <p className="text-center text-lg font-semibold text-white md:text-left">
                Unidade Irati
              </p>
              <div className="flex justify-start gap-4 md:justify-end">
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
              <p className="text-center text-lg font-semibold text-white md:text-left">
                Unidade Imbituva
              </p>
              <div className="flex justify-start gap-4 md:justify-end">
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
          <p className="pb-4 text-center font-semibold text-light-neuro">
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
      </div>
    </footer>
  );
};

export default Footer;
