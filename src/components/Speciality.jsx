import Motion from "./Motion";
import Link from "./Link";
import { Info } from "lucide-react";

const Speciality = (props) => {
  if (props.theme == "dark") {
    if (props.link) {
      return (
        <section className="flex md:flex-row flex-col bg-light-cyan-neuro">
          <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8">
            <Motion>
              <img
                src={props.image}
                className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
              ></img>
            </Motion>
          </div>
          <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8">
            <Motion>
              <h2 className="font-decoration font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
                {props.title}
              </h2>
              <p className="text-dark-neuro py-6">{props.description}</p>
              <Link link={props.link} name="SAIBA MAIS" theme="dark">
                <Info />
              </Link>
            </Motion>
          </div>
        </section>
      );
    } else {
      return (
        <section className="flex md:flex-row flex-col bg-light-cyan-neuro">
          <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8">
            <Motion>
              <img
                src={props.image}
                className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
              ></img>
            </Motion>
          </div>
          <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8">
            <Motion>
              <h2 className="font-decoration font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
                {props.title}
              </h2>
              <p className="text-dark-neuro pt-6">{props.description}</p>
            </Motion>
          </div>
        </section>
      );
    }
  } else if (props.theme == "light") {
    if (props.link) {
      return (
        <section className="flex md:flex-row flex-col-reverse bg-light-neuro">
          <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8 ">
            <Motion>
              <h2 className="font-decoration font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
                {props.title}
              </h2>
              <p className="text-dark-neuro py-6">{props.description}</p>
              <Link link={props.link} name="SAIBA MAIS" theme="dark">
                <Info />
              </Link>
            </Motion>
          </div>
          <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8">
            <Motion>
              <img
                src={props.image}
                className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
              ></img>
            </Motion>
          </div>
        </section>
      );
    } else {
      return (
        <section className="flex md:flex-row flex-col-reverse bg-light-neuro">
          <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8 ">
            <Motion>
              <h2 className="font-decoration font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
                {props.title}
              </h2>
              <p className="text-dark-neuro pt-6">{props.description}</p>
            </Motion>
          </div>
          <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8">
            <Motion>
              <img
                src={props.image}
                className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
              ></img>
            </Motion>
          </div>
        </section>
      );
    }
  }
};

export default Speciality;
