import { toast } from "sonner";
import useSWR from "swr";

import { getUser } from "@/actions/user";
import { useSession } from "@/lib/auth-client";

export const useUser = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const {
    data: user,
    error,
    isLoading,
    mutate,
  } = useSWR(userId ? `user-${userId}` : null, async (id) => {
    if (!id) {
      return null;
    }
    try {
      const result = await getUser(id);
      return result;
    } catch (error) {
      console.error("error fetching user: ", error);
      toast.error("failed to load user");
      throw error;
    }
  });

  return {
    data: user,
    error,
    isLoading,
    mutate,
  };
};
