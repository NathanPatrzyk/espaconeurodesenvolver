import Motion from "./Motion";
import Flex from "./layout/Flex";
import Link from "./link/Link";
import { Info } from "lucide-react";

const Speciality = ({ theme, link, image, title, description }) => {
  if (theme == "dark") {
    if (link) {
      return (
        <section className="flex w-full justify-center bg-light-cyan-neuro">
          <Flex className="flex-col md:flex-row">
            <div className="flex items-center justify-center p-4 md:p-12">
              <Motion>
                <img
                  src={image}
                  className="size-[90vw] max-h-[300px] max-w-[300px] duration-500 hover:scale-105 active:scale-105 sm:size-[300px]"
                ></img>
              </Motion>
            </div>
            <div className="flex flex-1 flex-col justify-center p-4 md:p-12">
              <Motion>
                <h2 className="text-center font-decoration text-4xl text-dark-cyan-neuro md:text-left">
                  {title}
                </h2>
                <p className="py-6 text-center text-dark-neuro md:text-left">
                  {description}
                </p>
                <Link link={link} name="SAIBA MAIS" theme="dark">
                  <Info />
                </Link>
              </Motion>
            </div>
          </Flex>
        </section>
      );
    } else {
      return (
        <section className="flex w-full justify-center bg-light-cyan-neuro">
          <Flex className="flex-col md:flex-row">
            <div className="flex items-center justify-center p-4 md:p-12">
              <Motion>
                <img
                  src={image}
                  className="size-[90vw] max-h-[300px] max-w-[300px] duration-500 hover:scale-105 active:scale-105 sm:size-[300px]"
                ></img>
              </Motion>
            </div>
            <div className="flex flex-1 flex-col justify-center p-4 md:p-12">
              <Motion>
                <h2 className="text-center font-decoration text-4xl text-dark-cyan-neuro md:text-left">
                  {title}
                </h2>
                <p className="pt-6 text-center text-dark-neuro md:text-left">
                  {description}
                </p>
              </Motion>
            </div>
          </Flex>
        </section>
      );
    }
  } else if (theme == "light") {
    if (link) {
      return (
        <section className="flex w-full justify-center bg-light-neuro">
          <Flex className="flex-col-reverse md:flex-row">
            <div className="flex flex-1 flex-col justify-center p-4 md:p-12">
              <Motion>
                <h2 className="text-center font-decoration text-4xl text-dark-cyan-neuro md:text-left">
                  {title}
                </h2>
                <p className="py-6 text-center text-dark-neuro md:text-left">
                  {description}
                </p>
                <Link link={link} name="SAIBA MAIS" theme="dark">
                  <Info />
                </Link>
              </Motion>
            </div>
            <div className="flex items-center justify-center p-4 md:p-12">
              <Motion>
                <img
                  src={image}
                  className="size-[90vw] max-h-[300px] max-w-[300px] duration-500 hover:scale-105 active:scale-105 sm:size-[300px]"
                ></img>
              </Motion>
            </div>
          </Flex>
        </section>
      );
    } else {
      return (
        <section className="flex w-full justify-center bg-light-neuro">
          <Flex className="flex-col-reverse md:flex-row">
            <div className="flex flex-1 flex-col justify-center p-4 md:p-12">
              <Motion>
                <h2 className="font-decoration text-4xl text-dark-cyan-neuro">
                  {title}
                </h2>
                <p className="pt-6 text-dark-neuro">{description}</p>
              </Motion>
            </div>
            <div className="flex items-center justify-center p-4 md:p-12">
              <Motion>
                <img
                  src={image}
                  className="size-[90vw] max-h-[300px] max-w-[300px] duration-500 hover:scale-105 active:scale-105 sm:size-[300px]"
                ></img>
              </Motion>
            </div>
          </Flex>
        </section>
      );
    }
  }
};

export default Speciality;
