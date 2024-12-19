import { addExperience, getExperiences } from "@/actions/experience";
import { queryClient } from "@/app/provider";
import { ExperienceInput } from "@/types/experience";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useExperiences() {
  return useQuery({
    queryKey: ["experiences"],
    queryFn: getExperiences,
  });
}

export const useAddExperience = () => {
  return useMutation({
    mutationFn: (data: ExperienceInput) => addExperience(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["experiences"],
      });
    },
  });
};
