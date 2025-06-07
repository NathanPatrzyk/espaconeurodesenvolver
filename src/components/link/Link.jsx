import Button from "../Button";

const Link = ({ icon, link, name, theme, children }) => {
  if (name && theme == "dark") {
    return (
      <div className="flex justify-center md:justify-start">
        <a href={link} className="w-full sm:w-auto">
          <Button theme="dark">
            <div className="flex items-center gap-1">
              <div>
                <img src={icon}></img>
                {children}
              </div>
              <div>{name}</div>
            </div>
          </Button>
        </a>
      </div>
    );
  } else if (name && theme == "light") {
    return (
      <div className="flex justify-center md:justify-start">
        <a href={link} className="w-full sm:w-auto">
          <Button theme="light">
            <div className="flex items-center gap-1">
              <div>
                <img src={icon}></img>
                {children}
              </div>
              <div>{name}</div>
            </div>
          </Button>
        </a>
      </div>
    );
  } else if (!name) {
    return (
      <div className="flex w-full justify-center md:justify-start">
        <a href={link} className="w-full">
          <Button theme="light">
            <div>
              <img className="py-1" src={icon}></img>
            </div>
          </Button>
        </a>
      </div>
    );
  }
};

export default Link;
