import Content from "../content";

const works = [
  {
    header: "2025",
    title: "SDE Intern at march",
    description: "San Francisco, California",
  },
  {
    header: "2024",
    title: "SDE Intern at march",
    description: "San Francisco, California",
  },
];

export const WorkExperience = async () => {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <h1>Work Experience</h1>
      {works.map((work, idx) => (
        <Content
          header={work.header}
          title={work.title}
          description={work.description}
          key={idx}
        />
      ))}
    </div>
  );
};
