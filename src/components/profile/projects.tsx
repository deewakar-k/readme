import { projects } from "@/utils/mock-data";

import Content from "../content";

export const Projects = async () => {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <h1>Projects</h1>
      {projects.map((project) => (
        <Content
          header={project.header}
          title={project.title}
          url={project.url}
          description={project.description}
          key={project.title}
        />
      ))}
    </div>
  );
};
