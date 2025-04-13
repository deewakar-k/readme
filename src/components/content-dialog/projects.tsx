import { useState } from "react";

import { projects } from "@/utils/mock-data";

import { Add } from "../add-more";
import Content from "../content";
import { GoBack } from "../go-back";
import { InputBox } from "../input-box";
import { CustomTextArea } from "../text-area";
import { YearSelector } from "../year-selector";

export const ProjectContent = () => {
  const [add, setAdd] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      {add ? (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <InputBox label="name" placeholder="readme" value="" />
            <YearSelector />
          </div>
          <InputBox label="link" placeholder="http://localhost:3000" value="" />
          <CustomTextArea
            label="description"
            placeholder="best project ever built using nextjs..."
            defaultValue=""
            className="min-h-48"
          />
        </div>
      ) : (
        <>
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
        </>
      )}
      <div className="fixed right-4 bottom-4">
        {add ? (
          <GoBack handleOnClick={() => setAdd(false)} />
        ) : (
          <Add handleOnClick={() => setAdd(true)} />
        )}
      </div>
    </div>
  );
};
