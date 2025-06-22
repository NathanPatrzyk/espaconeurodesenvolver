import { motion } from "framer-motion";

const Motion = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 16, opacity: 0.2 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
