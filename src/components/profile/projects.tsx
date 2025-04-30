import { getProjects } from "@/actions/projects";

import { AnimatedProjects } from "../animated/projects";
import { Error } from "../error";

export const Projects = async ({ userId }: { userId: string }) => {
  const projects = await getProjects(userId);

  if (!projects) {
    return <Error label="projects" />;
  }
  return <AnimatedProjects projects={projects} />;
};
