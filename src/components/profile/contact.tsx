import { getContacts } from "@/actions/contacts";

import Content from "../content";

export const Contacts = async () => {
  const contacts = await getContacts();

  return (
    <div className="mt-4 flex flex-col gap-3">
      <h1 className="mb-2">Contacts</h1>
      {contacts?.map((contact, idx) => (
        <Content
          header={contact.platform}
          title={contact.username}
          url={contact.url}
          showAction={false}
          key={idx}
          className="py-0"
        />
      ))}
    </div>
  );
};
