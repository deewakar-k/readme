import { projects } from "@/utils/mock-data";

import Content from "../content";

export const ProjectContent = () => {
  return (
    <div className="flex flex-col gap-3">
      {projects.map((project, idx) => (
        <Content
          header={project.header}
          title={project.title}
          url={project.url}
          description={project.description}
          showAction={true}
          key={idx}
        />
      ))}
    </div>
  );
};
