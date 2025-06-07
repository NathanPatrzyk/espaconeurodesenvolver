const Button = ({ children, theme }) => {
  if (theme == "light") {
    return (
      <button className="align-center font-sm flex w-full justify-center rounded-md bg-light-neuro px-3 py-2 font-semibold text-dark-cyan-neuro hover:opacity-80 sm:w-auto md:justify-start">
        {children}
      </button>
    );
  } else if (theme == "dark") {
    return (
      <button className="align-center font-sm flex w-full justify-center rounded-md bg-dark-cyan-neuro px-3 py-2 font-semibold text-light-neuro hover:opacity-80 sm:w-auto md:justify-start">
        {children}
      </button>
    );
  }
};

export default Button;
