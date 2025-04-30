import { toast } from "sonner";
import useSWR from "swr";

import { getContacts } from "@/actions/contacts";
import { useSession } from "@/lib/auth-client";

export const useContacts = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const {
    data: contacts,
    error,
    isLoading,
    mutate,
  } = useSWR(userId ? `contact-${userId}` : null, async (id) => {
    if (!id) {
      return null;
    }
    try {
      const result = await getContacts(id);
      return result;
    } catch (error) {
      console.error("error fetching contacts: ", error);
      toast.error("failed to load contacts");
      throw error;
    }
  });

  return {
    data: contacts,
    error,
    isLoading,
    mutate,
  };
};
