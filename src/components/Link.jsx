import Button from "./Button";

const LinkSocialMedia = ({ icon, link, name, theme }) => {
  if (name && theme == "dark") {
    return (
      <div className="flex">
        <a href={link}>
          <Button theme="dark">
            <div className="flex gap-1">
              <div>
                <img className="mt-0.5" src={icon}></img>
              </div>
              <div>{name}</div>
            </div>
          </Button>
        </a>
      </div>
    );
  } else if (name && theme == "light") {
    return (
      <div className="flex">
        <a href={link}>
          <Button theme="light">
            <div className="flex gap-1">
              <div>
                <img className="mt-0.5" src={icon}></img>
              </div>
              <div>{name}</div>
            </div>
          </Button>
        </a>
      </div>
    );
  } else if (!name) {
    return (
      <div className="flex">
        <a href={link}>
          <Button theme="light">
            <div>
              <img className="mt-0.5" src={icon}></img>
            </div>
          </Button>
        </a>
      </div>
    );
  }
};

export default LinkSocialMedia;
