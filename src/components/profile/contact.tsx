import { getContacts } from "@/actions/contacts";

import { AnimatedContact } from "../animated/contact";
import { Error } from "../error";

export const Contacts = async ({ userId }: { userId: string }) => {
  const contacts = await getContacts(userId);

  if (!contacts) {
    return <Error label="label" />;
  }

  return <AnimatedContact contacts={contacts} />;
};
