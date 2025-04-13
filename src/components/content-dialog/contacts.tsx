"use client";

import { useState } from "react";

import { contacts } from "@/utils/mock-data";

import { Add } from "../add-more";
import Content from "../content";
import { GoBack } from "../go-back";
import { InputBox } from "../input-box";

const MAX_INPUTBOX = 5;

export const ContactsContent = () => {
  const [addMore, setAddMore] = useState(false);
  const [inputBox, setInputBox] = useState<string[]>([]);

  const addInputBox = () => {
    if (inputBox.length < MAX_INPUTBOX) {
      setAddMore(true);
      setInputBox([...inputBox, ""]);
    }
  };

  const handleGoBack = () => {
    setAddMore(false);
    setInputBox([]);
  };

  const isLimitReached = inputBox.length >= MAX_INPUTBOX;

  return (
    <div className="flex flex-col gap-3">
      {addMore ? (
        <>
          {inputBox.map((_, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <InputBox label="platform" placeholder="github" value="" />

              <InputBox
                label="url"
                placeholder="github.com/deewakar-k"
                value=""
              />
            </div>
          ))}
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
        {addMore ? <GoBack handleOnClick={handleGoBack} /> : ""}
        {isLimitReached ? "" : <Add handleOnClick={addInputBox} />}{" "}
      </div>
    </div>
  );
};
