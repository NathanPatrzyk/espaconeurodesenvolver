const Button = (props) => {
  return (
    <button className="flex align-center justify-start gap-2 text-light-neuro w-[70vw] sm:w-[170px] font-sm font-medium bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro py-[10px] px-[20px] rounded-md hover:opacity-80">
      {props.children}
    </button>
  );
};

export default Button;
