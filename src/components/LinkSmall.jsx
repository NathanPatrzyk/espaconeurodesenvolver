import Motion from "./Motion";

const LinkSmall = ({ textColor, name, link }) => {
  return (
    <Motion>
      <a
        className={`text-${textColor} font-bold text-left underline inline-block my-2 md:my-8 md:mx-16 mx-4`}
        href={link}
      >
        {name}
      </a>
    </Motion>
  );
};

export default LinkSmall;
