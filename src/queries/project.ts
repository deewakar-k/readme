import { createProject, getProjects } from "@/actions/projects";
import { queryClient } from "@/app/provider";
import { Project } from "@/types/project";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
};

export const useCreateProject = () => {
  return useMutation({
    mutationFn: (data: Project) => createProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
};
