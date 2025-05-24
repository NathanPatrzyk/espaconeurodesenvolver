import Button from "./Button";

const Link = ({ icon, link, name, theme, children }) => {
  if (name && theme == "dark") {
    return (
      <div className="flex md:justify-start justify-center">
        <a href={link}>
          <Button theme="dark">
            <div className="flex gap-1 items-center">
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
      <div className="flex md:justify-start justify-center">
        <a href={link}>
          <Button theme="light">
            <div className="flex gap-1 items-center">
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
      <div className="flex md:justify-start justify-center">
        <a href={link}>
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
