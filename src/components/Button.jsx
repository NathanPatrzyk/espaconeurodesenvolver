const Button = (props) => {
  return <button className="text-light-neuro sm:w-auto w-full font-sm font-medium bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro flex align-center justify-center py-[10px] px-[20px] rounded-md hover:opacity-80">{props.children}</button>;
};

export default Button;
