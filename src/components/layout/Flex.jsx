const Flex = ({ children, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 md:flex-row ${className}`}
    >
      {children}
    </div>
  );
};

export default Flex;
