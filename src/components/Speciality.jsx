import React from "react";
import Button from "./Button";

const Speciality = ({ imageSource, title, description }) => {
  return (
    //<div>
    //  <div>{imageSource}</div>
    //  <div>{title}</div>
    //  <div>{description}</div>
    //</div>

    <section className="flex md:flex-row flex-col-reverse gap-1 bg-light-cyan-neuro">
      <div className="flex-1  md:px-16 md:py-12 md:pt-28 pt-24 py-8 bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro md:rounded-none md:rounded-br-[800px] rounded-none">
        <div className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px] mx-auto bg-[url(./assets/main.webp)] bg-contain bg-center bg-no-repeat"></div>
      </div>
      <div className="flex-1 flex flex-col justify-center md:pt-48 md:pb-32 md:px-16 px-4 py-8 ">
        <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
          Teste
        </h2>
      </div>
    </section>
  );
};

export default Speciality;
