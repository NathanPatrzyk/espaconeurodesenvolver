const Flex = ({ className, children }) => {
  return (
    <div
      className={`flex w-full max-w-7xl items-center justify-center gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Flex;
