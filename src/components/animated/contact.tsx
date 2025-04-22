"use client";

import { useEffect } from "react";

import { type Variants, motion, useAnimation } from "framer-motion";

import { Contact } from "@/types";

import Content from "../content";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    //filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    // filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1,
      delay: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
    //filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    //filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      mass: 1.2,
    },
  },
};

export const AnimatedContact = ({ contacts }: { contacts: Contact[] }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="mt-4 flex flex-col gap-3"
    >
      <motion.h1 variants={itemVariants} className="mb-2">
        Contacts
      </motion.h1>
      {contacts?.map((contact: Contact) => (
        <Content
          header={contact.platform}
          title={contact.username}
          url={contact.url}
          showAction={false}
          key={contact.platform}
          className="py-0"
        />
      ))}
    </motion.div>
  );
};
