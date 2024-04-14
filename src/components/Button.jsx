const Button = (props) => {
  return <button className="text-light-neuro font-sm font-medium bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro flex align-center py-[10px] px-[20px] rounded-md">{props.children}</button>;
};

export default Button;
