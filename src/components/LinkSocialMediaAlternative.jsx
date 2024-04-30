import ButtonAlternative from "./ButtonAlternative";

const LinkSocialMediaAlternative = (props) => {
  return (
    <div>
      <a href={props.link}>
        <ButtonAlternative>
          <div>
            <img className="mt-0.5" src={props.icon}></img>
          </div>
          <div>{props.name}</div>
        </ButtonAlternative>
      </a>
    </div>
  );
};

export default LinkSocialMediaAlternative;
