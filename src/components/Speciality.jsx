import Motion from "./Motion";
import Link from "./link/Link";
import { Info } from "lucide-react";

const Speciality = (props) => {
  if (props.theme == "dark") {
    if (props.link) {
      return (
        <section className="flex flex-col bg-light-cyan-neuro md:flex-row">
          <div className="flex flex-1 items-center justify-center py-8 md:px-16 md:py-12">
            <Motion>
              <img
                src={props.image}
                className="size-[90vw] max-h-[300px] max-w-[300px] duration-500 hover:scale-105 active:scale-105 sm:size-[300px]"
              ></img>
            </Motion>
          </div>
          <div className="flex flex-1 flex-col justify-center px-4 py-8 md:px-16 md:py-32">
            <Motion>
              <h2 className="font-decoration text-4xl text-dark-cyan-neuro">
                {props.title}
              </h2>
              <p className="py-6 text-dark-neuro">{props.description}</p>
              <Link link={props.link} name="SAIBA MAIS" theme="dark">
                <Info />
              </Link>
            </Motion>
          </div>
        </section>
      );
    } else {
      return (
        <section className="flex flex-col bg-light-cyan-neuro md:flex-row">
          <div className="flex flex-1 items-center justify-center py-8 md:px-16 md:py-12">
            <Motion>
              <img
                src={props.image}
                className="size-[90vw] max-h-[300px] max-w-[300px] duration-500 hover:scale-105 active:scale-105 sm:size-[300px]"
              ></img>
            </Motion>
          </div>
          <div className="flex flex-1 flex-col justify-center px-4 py-8 md:px-16 md:py-32">
            <Motion>
              <h2 className="font-decoration text-4xl text-dark-cyan-neuro">
                {props.title}
              </h2>
              <p className="pt-6 text-dark-neuro">{props.description}</p>
            </Motion>
          </div>
        </section>
      );
    }
  } else if (props.theme == "light") {
    if (props.link) {
      return (
        <section className="flex flex-col-reverse bg-light-neuro md:flex-row">
          <div className="flex flex-1 flex-col justify-center px-4 py-8 md:px-16 md:py-32">
            <Motion>
              <h2 className="font-decoration text-4xl text-dark-cyan-neuro">
                {props.title}
              </h2>
              <p className="py-6 text-dark-neuro">{props.description}</p>
              <Link link={props.link} name="SAIBA MAIS" theme="dark">
                <Info />
              </Link>
            </Motion>
          </div>
          <div className="flex flex-1 items-center justify-center py-8 md:px-16 md:py-12">
            <Motion>
              <img
                src={props.image}
                className="size-[90vw] max-h-[300px] max-w-[300px] duration-500 hover:scale-105 active:scale-105 sm:size-[300px]"
              ></img>
            </Motion>
          </div>
        </section>
      );
    } else {
      return (
        <section className="flex flex-col-reverse bg-light-neuro md:flex-row">
          <div className="flex flex-1 flex-col justify-center px-4 py-8 md:px-16 md:py-32">
            <Motion>
              <h2 className="font-decoration text-4xl text-dark-cyan-neuro">
                {props.title}
              </h2>
              <p className="pt-6 text-dark-neuro">{props.description}</p>
            </Motion>
          </div>
          <div className="flex flex-1 items-center justify-center py-8 md:px-16 md:py-12">
            <Motion>
              <img
                src={props.image}
                className="size-[90vw] max-h-[300px] max-w-[300px] duration-500 hover:scale-105 active:scale-105 sm:size-[300px]"
              ></img>
            </Motion>
          </div>
        </section>
      );
    }
  }
};

export default Speciality;
