import Motion from "./Motion";

import { Link } from "react-router-dom";

const LinkSmall = ({ textColor, name, link }) => {
  return (
    <Motion>
      <Link
        className={`text-${textColor} font-bold text-left underline inline-block my-2 md:my-8 md:mx-16 mx-4`}
        to={link}
      >
        {name}
      </Link>
    </Motion>
  );
};

export default LinkSmall;
