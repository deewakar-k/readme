import { works } from "@/utils/mock-data";

import Content from "../content";

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
