import Link from "./Link";

const Speciality = (props) => {
  if (props.theme == "dark") {
    if (props.link) {
      return (
        <section className="flex md:flex-row flex-col bg-light-cyan-neuro">
          <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8 md:bg-gradient-to-r md:from-dark-cyan-neuro md:to-cyan-neuro bg-gradient-to-r from-transparent to-transparent md:rounded-none md:rounded-tr-[800px] rounded-none">
            <img
              src={props.image}
              className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
            ></img>
          </div>
          <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8">
            <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
              {props.title}
            </h2>
            <p className="text-dark-neuro py-6">{props.description}</p>
            <Link link={props.link} name="SAIBA MAIS" theme="dark" />
          </div>
        </section>
      );
    } else {
      return (
        <section className="flex md:flex-row flex-col bg-light-cyan-neuro">
          <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8 md:bg-gradient-to-r md:from-dark-cyan-neuro md:to-cyan-neuro bg-gradient-to-r from-transparent to-transparent md:rounded-none md:rounded-tr-[800px] rounded-none">
            <img
              src={props.image}
              className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
            ></img>
          </div>
          <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8">
            <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
              {props.title}
            </h2>
            <p className="text-dark-neuro pt-6">{props.description}</p>
          </div>
        </section>
      );
    }
  } else if (props.theme == "light") {
    if (props.link) {
      return (
        <section className="flex md:flex-row flex-col-reverse bg-light-neuro">
          <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8 ">
            <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
              {props.title}
            </h2>
            <p className="text-dark-neuro pt-6">{props.description}</p>
            <Link link={props.link} name="SAIBA MAIS" theme="dark" />
          </div>
          <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8 md:bg-gradient-to-r md:from-light-cyan-neuro md:to-light-cyan-neuro md:rounded-none md:rounded-bl-[800px] rounded-none">
            <img
              src={props.image}
              className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
            ></img>
          </div>
        </section>
      );
    } else {
      return (
        <section className="flex md:flex-row flex-col-reverse bg-light-neuro">
          <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8 ">
            <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
              {props.title}
            </h2>
            <p className="text-dark-neuro pt-6">{props.description}</p>
          </div>
          <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8 md:bg-gradient-to-r md:from-light-cyan-neuro md:to-light-cyan-neuro md:rounded-none md:rounded-bl-[800px] rounded-none">
            <img
              src={props.image}
              className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
            ></img>
          </div>
        </section>
      );
    }
  }
};

export default Speciality;
