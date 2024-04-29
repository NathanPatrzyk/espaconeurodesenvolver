const Button = (props) => {
  return (
    <button className="flex align-center justify-left gap-2 text-light-neuro sm:w-auto w-full min-w-[170px] max-w-[300px] font-sm font-medium bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro py-[10px] px-[20px] rounded-md hover:opacity-80">
      {props.children}
    </button>
  );
};

export default Button;
