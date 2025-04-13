"use client";

import { useState } from "react";

import { contacts } from "@/utils/mock-data";

import { Add } from "../add-more";
import Content from "../content";
import { GoBack } from "../go-back";
import { InputBox } from "../input-box";

export const ContactsContent = () => {
  const [addMore, setAddMore] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      {addMore ? (
        <>
          <div className="flex items-center gap-4">
            <InputBox label="platform" placeholder="github" value="" />
            <InputBox label="username" placeholder="deewakar-k" value="" />
          </div>
          <InputBox label="url" placeholder="github.com/deewakar-k" value="" />
        </>
      ) : (
        <>
          {contacts.map((contact, idx) => (
            <Content
              header={contact.header}
              title={contact.title}
              key={idx}
              showAction={true}
              className="py-0"
            />
          ))}
        </>
      )}
      <div className="fixed right-4 bottom-4 flex items-center gap-2">
        {addMore ? (
          <GoBack handleOnClick={() => setAddMore(false)} />
        ) : (
          <Add handleOnClick={() => setAddMore(true)} />
        )}
      </div>
    </div>
  );
};
