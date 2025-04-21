"use client";

import { motion } from "framer-motion";

import { Dialog, DialogTrigger } from "../ui/dialog";
import { SignInModal } from "./signin-modal";

export const WaitlistButton = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial="hidden"
          variants={containerVariants}
          whileInView="visible"
          className="relative h-12 w-full max-w-[140px] cursor-pointer rounded-full border border-stone-300 bg-neutral-100 shadow-xl dark:border-stone-700 dark:bg-neutral-800"
        >
          <div className="relative flex h-full">
            <motion.div
              variants={itemVariants}
              className="z-10 flex flex-1 items-center justify-center text-lg text-black transition-colors duration-300 dark:text-white"
            >
              Build Now
            </motion.div>
          </div>
        </motion.div>
      </DialogTrigger>
      <SignInModal />
    </Dialog>
  );
};
