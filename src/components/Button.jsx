const Button = ({ children, theme }) => {
  if (theme == "light") {
    return (
      <button className="text-dark-cyan-neuro bg-light-neuro flex align-center md:justify-start justify-center font-sm font-medium py-2 px-3 rounded-md hover:opacity-80">
        {children}
      </button>
    );
  } else if (theme == "dark") {
    return (
      <button className="text-light-neuro bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro flex align-center md:justify-start justify-center font-sm font-medium py-2 px-3 rounded-md hover:opacity-80">
        {children}
      </button>
    );
  }
};

export default Button;
