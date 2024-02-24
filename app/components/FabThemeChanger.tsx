"use client";
import cx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

interface FabThemeChangerProps {
  themes: string[];
  onThemeChange: (theme: string) => void;
}

const FabThemeChanger = (props: FabThemeChangerProps) => {
  const { themes, onThemeChange } = props;

  const [showThemePallet, setShowThemePallet] = useState<boolean>(false);

  const toggleThemePallet = () => {
    setShowThemePallet(!showThemePallet);
  };

  const onThemeClick = (theme: string) => {
    onThemeChange(theme);
    setShowThemePallet(false);
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  };
  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <div className="flex flex-col items-end">
        <AnimatePresence>
          {showThemePallet && (
            <motion.div
              className="mb-3 grid grid-cols-3 gap-3"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {themes.map((theme, index) => (
                <motion.div
                  key={theme}
                  className={cx(
                    `${theme} h-10 w-10 cursor-pointer rounded-full bg-primary-500`,
                  )}
                  variants={itemVariants}
                  onClick={() => onThemeClick(theme)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary-500"
          onClick={toggleThemePallet}
        >
          <FaChevronUp
            className={`text-color-background transition-transform ${showThemePallet ? "rotate-180" : ""}`}
          />
        </motion.div>
      </div>
    </div>
  );
};
export default FabThemeChanger;
