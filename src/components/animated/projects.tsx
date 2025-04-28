"use client";

import { useEffect } from "react";

import { type Variants, motion, useAnimation } from "framer-motion";

import { Project } from "@/types";

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
      delay: 0.3,
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

export const AnimatedProjects = ({ projects }: { projects: Project[] }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <>
      {projects.length !== 0 && (
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-4 flex flex-col gap-3"
        >
          <motion.h1 variants={itemVariants}>Projects</motion.h1>
          {projects.map((project, idx) => (
            <Content
              id={project.id || ""}
              header={project.date || ""}
              title={project.name || ""}
              url={project.url || ""}
              description={project.description || ""}
              attachments={
                project.attachments ? JSON.parse(project.attachments) : []
              }
              showAction={false}
              key={idx}
            />
          ))}
        </motion.div>
      )}
    </>
  );
};
