import LinkSmall from "../components/LinkSmall";

const LinksSmall = (props) => {
  if (props.next) {
    return (
      <div className="flex justify-between">
        <LinkSmall
          textColor="dark-neuro"
          name={props.previous.name}
          link={props.previous.link}
        />
        <LinkSmall
          textColor="dark-neuro"
          name={props.next.name}
          link={props.next.link}
        />
      </div>
    );
  } else {
    return (
      <div className="flex justify-between">
        <LinkSmall
          textColor="dark-neuro"
          name={props.previous.name}
          link={props.previous.link}
        />
      </div>
    );
  }
};

export default LinksSmall;
