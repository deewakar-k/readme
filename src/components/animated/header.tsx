"use client";

import Image from "next/image";
import { useEffect } from "react";

import { type Variants, motion, useAnimation } from "framer-motion";

//import { Globe } from "lucide-react";

import { User } from "@/types";

import { Avatar, AvatarFallback } from "../ui/avatar";

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

export const AnimatedHeader = ({ user }: { user: User }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex items-start justify-start"
    >
      <div className="flex items-center gap-6">
        <motion.div variants={itemVariants}>
          <Avatar className="h-[92px] w-[92px]">
            {user.image ? (
              <Image
                loader={({ src }) => {
                  return src;
                }}
                src={user.image}
                alt={user.name ?? "User Avatar"}
                width={92}
                height={92}
                priority
                className="rounded-full object-cover"
              />
            ) : (
              <AvatarFallback className="text-3xl">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </AvatarFallback>
            )}
          </Avatar>
        </motion.div>
        <div className="flex flex-col">
          <motion.h1 variants={itemVariants} className="text-xl">
            {user?.name ?? "User"}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-sm"
          >
            {user?.bio ?? ""}
          </motion.p>
          {/*   {user.website && (
            <motion.a
              href={
                user.website.startsWith("http")
                  ? user.website
                  : `https://${user.website}`
              }
              target="_blank"
              className="cursor-pointer"
            >
              <span>
                <Globe className="text-muted-foreground size-4" />
              </span>
            </motion.a>
          )} */}
        </div>
      </div>
    </motion.div>
  );
};
