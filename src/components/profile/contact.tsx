import Content from "../content";

const contacts = [
  {
    header: "Github",
    title: "deewakar-k",
  },
  {
    header: "Email",
    title: "deewakar.tech@gmail.com",
  },
  {
    header: "LinkedIn",
    title: "deewakar-kumar",
  },
];

export const Contacts = async () => {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <h1 className="mb-2">Contacts</h1>
      {contacts.map((contact, idx) => (
        <Content
          header={contact.header}
          title={contact.title}
          key={idx}
          className="py-0"
        />
      ))}
    </div>
  );
};
