import React from "react";

const Speciality = (props) => {
  return (
    <section className="flex md:flex-row flex-col-reverse gap-1 bg-light-cyan-neuro">
      <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8 bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro md:rounded-none md:rounded-br-[800px] rounded-none">
        <img
          src={props.image}
          className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
        ></img>
      </div>
      <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8 ">
        <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
          {props.title}
        </h2>
        <p className="text-dark-neuro pt-6">{props.description}</p>
      </div>
    </section>
  );
};

export default Speciality;
