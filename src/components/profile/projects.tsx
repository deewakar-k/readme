import Content from "../content";

const projects = [
  {
    header: "Ongoing",
    title: "readme",
    description: "a clean resume builder",
  },
  {
    header: "2025",
    title: "celestial",
    description: "craft your ui universe with celestial",
  },
];

export const Projects = async () => {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <h1>Projects</h1>
      {projects.map((project) => (
        <Content
          header={project.header}
          title={project.title}
          description={project.description}
          key={project.title}
        />
      ))}
    </div>
  );
};
