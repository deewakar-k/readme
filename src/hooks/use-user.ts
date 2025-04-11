import { toast } from "sonner";
import useSWR from "swr";

import { getUser } from "@/actions/user";
import { useSession } from "@/lib/auth-client";

export const useUser = () => {
  const { data: session } = useSession();
  const {
    data: user,
    error,
    isLoading,
    mutate,
  } = useSWR(session?.session ? `user-${session.user.id}` : null, async () => {
    try {
      const result = await getUser();
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
