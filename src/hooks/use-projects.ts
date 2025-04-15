import { toast } from "sonner";
import useSWR from "swr";

import { getProjects } from "@/actions/projects";
import { useSession } from "@/lib/auth-client";

export const useProjects = () => {
  const { data: session } = useSession();
  const {
    data: projects,
    error,
    isLoading,
    mutate,
  } = useSWR(
    session?.session ? `project-${session.user.id}` : null,
    async () => {
      try {
        const result = await getProjects();
        return result;
      } catch (error) {
        console.error("error fetching projects: ", error);
        toast.error("failed to load projects");
        throw error;
      }
    }
  );

  return {
    data: projects,
    error,
    isLoading,
    mutate,
  };
};
