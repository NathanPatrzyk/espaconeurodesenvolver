import LinkSmall from "./LinkSmall";

const LinksSmall = ({ previous, next }) => {
  if (next) {
    return (
      <div className="flex justify-between">
        <LinkSmall
          textColor="white"
          name={previous.name}
          link={previous.link}
        />
        <LinkSmall textColor="white" name={next.name} link={next.link} />
      </div>
    );
  } else {
    return (
      <div className="flex justify-between">
        <LinkSmall
          textColor="white"
          name={previous.name}
          link={previous.link}
        />
      </div>
    );
  }
};

export default LinksSmall;
