import { getProjects } from "@/actions/projects";

import Content from "../content";

export const Projects = async () => {
  const projects = await getProjects();

  return (
    <div className="mt-4 flex flex-col gap-3">
      <h1>Projects</h1>
      {projects?.map((project) => (
        <Content
          header={project.date || ""}
          title={project.name}
          url={project.url || ""}
          description={project.description || ""}
          showAction={false}
          key={project.id}
        />
      ))}
    </div>
  );
};
