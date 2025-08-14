import LinkSmall from "./LinkSmall";

const LinksSmall = ({ textColor, previous, next }) => {
  if (next) {
    return (
      <div className="flex justify-between">
        <LinkSmall
          textColor={textColor ? textColor : "dark-neuro"}
          name={previous.name}
          link={previous.link}
        />
        <LinkSmall
          textColor={textColor ? textColor : "dark-neuro"}
          name={next.name}
          link={next.link}
        />
      </div>
    );
  } else {
    return (
      <div className="flex justify-between">
        <LinkSmall
          textColor={textColor ? textColor : "dark-neuro"}
          name={previous.name}
          link={previous.link}
        />
      </div>
    );
  }
};

export default LinksSmall;
