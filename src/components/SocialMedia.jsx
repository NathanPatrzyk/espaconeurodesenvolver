import LinkSocialMedia from "./LinkSocialMedia";
import BackgroundSocialMedia from "../assets/bgredesocial.webp";
import ImageSocialMedia from "../assets/redesocial.webp";

const SocialMedia = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse bg-light-neuro">
      <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8 ">
        <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
          Redes Sociais
        </h2>
        <LinkSocialMedia />
      </div>
      <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 py-8">
        <div className="relative top-0 left-0">
          <img
            src={BackgroundSocialMedia}
            className="size-[300px] min-w-[300px] min-h-[300px] rounded-[60px] mx-auto"
          ></img>
          <div className="absolute top-0 left-0">
            <img
              src={ImageSocialMedia}
              className="size-[300px] min-w-[300px] min-h-[300px] rounded-[60px] mx-auto animate-goback"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
