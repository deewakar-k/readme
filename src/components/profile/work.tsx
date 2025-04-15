import { getExperience } from "@/actions/experience";

import Content from "../content";

export const WorkExperience = async () => {
  const works = await getExperience();
  return (
    <div className="mt-4 flex flex-col gap-3">
      <h1>Work Experience</h1>
      {works?.map((work, idx) => (
        <Content
          role={work.role}
          title={work.organization}
          from={work.from || ""}
          to={work.to || ""}
          location={work.location || ""}
          description={work.description || ""}
          url={work.url || ""}
          showAction={false}
          key={idx}
        />
      ))}
    </div>
  );
};
