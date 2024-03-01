import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const AnimeDataLoader = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  };

  return (
    <div className="flex min-h-[100vh] min-w-[100vw] flex-row items-center justify-center">
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity }}
          >
            <Image
              src={"/sharingan.png"}
              alt="Madara Uchiha Sharingan"
              height="100"
              width="100"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimeDataLoader;
