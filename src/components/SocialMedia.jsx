const SocialMedia = () => {
  return (
    <section className="flex md:flex-row flex-col gap-1 bg-light-cyan-neuro">
      <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8 ">
        <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl"></h2>
      </div>
      <div className="flex-1 flex items-center justify-center my-20">
        <div className="size-[300px] rounded-[60px] bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro mx-auto">
          <img className="mx-auto sm:size-[350px] size-[90vw] max-w-[350px] max-h-[350px]"></img>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
