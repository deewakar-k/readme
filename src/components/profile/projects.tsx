import Content from "../content";

export const Projects = async () => {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <h1>Projects</h1>
      <Content
        header="ongoing"
        title="readme"
        description="a clean resume builder"
      />
    </div>
  );
};
