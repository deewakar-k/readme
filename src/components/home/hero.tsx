"use client";

import { motion } from "framer-motion";

export const Hero = () => {
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
    <motion.div
      initial="hidden"
      variants={containerVariants}
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-4 text-center"
    >
      <motion.h1 variants={itemVariants} className="text-8xl font-semibold">
        readme.
      </motion.h1>
      <motion.p className="text-muted-foreground mx-auto max-w-md font-light">
        elevate your professional presence
      </motion.p>
    </motion.div>
  );
};
