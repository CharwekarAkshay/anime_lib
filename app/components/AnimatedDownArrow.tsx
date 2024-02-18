import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const AnimatedDownArrow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 2,
        delay: 0.2,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 2,
        repeatType: "loop",
      }}
    >
      <FaChevronDown className="text-primary-500 text-2xl" />
    </motion.div>
  );
};

export default AnimatedDownArrow;
