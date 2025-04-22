import { getContacts } from "@/actions/contacts";

import { AnimatedContact } from "../animated/contact";
import { Error } from "../error";

export const Contacts = async () => {
  const contacts = await getContacts();

  if (!contacts) {
    return <Error label="label" />;
  }

  return <AnimatedContact contacts={contacts} />;
};
