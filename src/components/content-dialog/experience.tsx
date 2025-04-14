import { useState } from "react";

import { works } from "@/utils/mock-data";

import { Add } from "../add-more";
import Content from "../content";
import { InputBox } from "../input-box";
import { CustomTextArea } from "../text-area";
import { YearSelector } from "../year-selector";

export const WorkContent = () => {
  const [add, setAdd] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      {add ? (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <InputBox label="oranization" placeholder="Netflix" value="" />
            <YearSelector />
          </div>
          <InputBox label="link" placeholder="www.netflix.com" value="" />
          <InputBox label="role" placeholder="swe" value="" />
          <CustomTextArea
            label="description"
            placeholder="worked on security..."
            defaultValue=""
            className="min-h-48"
          />
        </div>
      ) : (
        <>
          {works.map((work, idx) => (
            <Content
              header={work.header}
              title={work.title}
              description={work.description}
              showAction={true}
              key={idx}
            />
          ))}
        </>
      )}
      <div className="fixed right-4 bottom-4">
        {add ? "" : <Add handleOnClick={() => setAdd(true)} />}
      </div>
    </div>
  );
};
