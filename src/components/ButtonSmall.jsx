const ButtonSmall = (props) => {
  return (
    <button className="flex align-center justify-center text-dark-cyan-neuro sm:w-auto w-full min-w-[44px] max-w-[300px] min-h-[44px] font-sm font-medium bg-light-neuro py-[10px] px-[10px] rounded-md hover:opacity-80">
      {props.children}
    </button>
  );
};

export default ButtonSmall;
