import { toast } from "sonner";
import useSWR from "swr";

import { getContacts } from "@/actions/contacts";
import { useSession } from "@/lib/auth-client";

export const useContacts = () => {
  const { data: session } = useSession();
  const {
    data: contacts,
    error,
    isLoading,
    mutate,
  } = useSWR(
    session?.session ? `contact-${session.user.id}` : null,
    async () => {
      try {
        const result = await getContacts();
        return result;
      } catch (error) {
        console.error("error fetching contacts: ", error);
        toast.error("failed to load contacts");
        throw error;
      }
    }
  );

  return {
    data: contacts,
    error,
    isLoading,
    mutate,
  };
};
