import Motion from "../Motion";

const LinkSmall = ({ textColor, name, link }) => {
  return (
    <Motion>
      <a
        className={`text-${textColor} inline-block p-4 text-left font-bold underline md:p-8`}
        href={link}
      >
        {name}
      </a>
    </Motion>
  );
};

export default LinkSmall;
