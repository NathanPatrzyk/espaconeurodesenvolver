const Button = (props) => {
  return <button className="flex align-center justify-left gap-4 text-light-neuro sm:w-[234px] w-full font-sm font-medium bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro py-[10px] px-[20px] rounded-md hover:opacity-80">{props.children}</button>;
};

export default Button;
