import Button from "./Button";

const LinkSocialMedia = (props) => {
  return (
    <div className="pt-6">
      <a href={props.link}>
        <Button>
          <div><img className="mt-0.5" src={props.icon}></img></div>
          <div>{props.name}</div>
        </Button>
      </a>
    </div>
  );
};

export default LinkSocialMedia;
