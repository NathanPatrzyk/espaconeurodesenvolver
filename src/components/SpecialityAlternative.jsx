import React from "react";

const SpecialityAlternative = (props) => {
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
};

export default SpecialityAlternative;
