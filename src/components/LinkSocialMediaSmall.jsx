import ButtonSmall from "./ButtonSmall";

const LinkSocialMediaSmall = (props) => {
  return (
    <div>
      <a href={props.link}>
        <ButtonSmall>
          <div>
            <img className="mt-0.5" src={props.icon}></img>
          </div>
          <div>{props.name}</div>
        </ButtonSmall>
      </a>
    </div>
  );
};

export default LinkSocialMediaSmall;
