import { toast } from "sonner";
import useSWR from "swr";

import { getProjects } from "@/actions/projects";
import { useSession } from "@/lib/auth-client";

export const useProjects = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const {
    data: projects,
    error,
    isLoading,
    mutate,
  } = useSWR(userId ? `project-${userId}` : null, async () => {
    if (!userId) {
      return null;
    }
    try {
      const result = await getProjects(userId);
      return result;
    } catch (error) {
      console.error("error fetching projects: ", error);
      toast.error("failed to load projects");
      throw error;
    }
  });

  return {
    data: projects,
    error,
    isLoading,
    mutate,
  };
};
