const Flex = ({ children, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Flex;
