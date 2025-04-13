import { works } from "@/utils/mock-data";

import { Add } from "../add-more";
import Content from "../content";

export const WorkContent = () => {
  return (
    <div className="flex flex-col gap-3">
      {works.map((work, idx) => (
        <Content
          header={work.header}
          title={work.title}
          description={work.description}
          showAction={true}
          key={idx}
        />
      ))}
      <div className="fixed right-4 bottom-4">
        <Add />
      </div>
    </div>
  );
};
