import { createEducation, getEducations } from "@/actions/education";
import { queryClient } from "@/app/provider";
import { EducationInput } from "@/types/education";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useEducations = () => {
  return useQuery({
    queryKey: ["education"],
    queryFn: getEducations,
  });
};

export const useCreateEducation = () => {
  return useMutation({
    mutationFn: (data: EducationInput) => createEducation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["education"],
      });
    },
  });
};
