import { getProjects } from "@/actions/projects";

import { AnimatedProjects } from "../animated/projects";
import { Error } from "../error";

export const Projects = async () => {
  const projects = await getProjects();

  if (!projects) {
    return <Error label="projects" />;
  }
  return <AnimatedProjects projects={projects} />;
};
