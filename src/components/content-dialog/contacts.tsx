"use client";

import { contacts } from "@/utils/mock-data";

import Content from "../content";

export const ContactsContent = () => {
  return (
    <div className="flex flex-col gap-3">
      {contacts.map((contact, idx) => (
        <Content
          header={contact.header}
          title={contact.title}
          key={idx}
          showAction={true}
          className="py-0"
        />
      ))}
    </div>
  );
};
