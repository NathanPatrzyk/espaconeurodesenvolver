const Button = ({ children, theme }) => {
  if (theme == "light") {
    return (
      <button className="font-semibold text-dark-cyan-neuro bg-light-neuro flex align-center md:justify-start justify-center font-sm py-2 px-3 rounded-md hover:opacity-80">
        {children}
      </button>
    );
  } else if (theme == "dark") {
    return (
      <button className="font-semibold text-light-neuro bg-dark-cyan-neuro flex align-center md:justify-start justify-center font-sm py-2 px-3 rounded-md hover:opacity-80">
        {children}
      </button>
    );
  }
};

export default Button;
