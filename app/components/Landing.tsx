"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { FaChevronDown } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="relative">
      <LandingContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-clip-text py-4"
        >
          <Image src="/home.png" width={700} height={700} alt="GokuVsLuffy" />
        </motion.h1>
      </LandingContainer>
      <div className="absolute bottom-20 left-[50%] -translate-x-1/2 transform">
        <FaChevronDown className="text-primary-500 text-2xl" />
      </div>
    </div>
  );
};

export default Landing;

export const LandingContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-primary-background relative z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md",
        className,
      )}
    >
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="from-primary-500 absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible bg-gradient-conic via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="bg-primary-background  absolute bottom-0 left-0 z-20 h-40 w-[100%] [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="bg-primary-background  absolute bottom-0 left-0 z-20  h-[100%] w-40 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="to-primary-500 absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="bg-primary-background  absolute bottom-0 right-0 z-20  h-[100%] w-40 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="bg-primary-background  absolute bottom-0 right-0 z-20 h-40 w-[100%] [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="bg-primary-background absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="bg-primary-500 absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-primary-400 absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-primary-400 absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] "
        ></motion.div>

        <div className="bg-primary-background absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
