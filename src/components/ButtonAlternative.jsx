const ButtonAlternative = (props) => {
  return (
    <button className="flex align-center justify-left gap-2 text-dark-cyan-neuro sm:w-auto w-full max-w-[300px] font-sm font-medium bg-light-neuro py-[10px] px-[20px] rounded-md hover:opacity-80">
      {props.children}
    </button>
  );
};

export default ButtonAlternative;
