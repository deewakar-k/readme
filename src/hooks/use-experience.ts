import { toast } from "sonner";
import useSWR from "swr";

import { getExperience } from "@/actions/experience";
import { useSession } from "@/lib/auth-client";

export const useExperience = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const {
    data: experience,
    error,
    isLoading,
    mutate,
  } = useSWR(userId ? `experience-${userId}` : null, async (id) => {
    if (!id) {
      return null;
    }
    try {
      const result = await getExperience(id);
      return result;
    } catch (error) {
      console.error("error fetching experience: ", error);
      toast.error("failed to load experience");
      throw error;
    }
  });

  return {
    data: experience,
    error,
    isLoading,
    mutate,
  };
};
