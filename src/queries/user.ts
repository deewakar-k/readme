import { getUserDetails, setUserDetails } from "@/actions/user";
import { queryClient } from "@/app/provider";
import { User } from "@/types/user";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useUser = (username: string) => {
  return useQuery({
    queryKey: ["user_details", username],
    queryFn: () => getUserDetails(username),
    enabled: !!username,
  });
};

export const useUpdateUser = (username: string) => {
  return useMutation({
    mutationFn: (data: Partial<User>) => setUserDetails(data, username),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user_details"] });
    },
  });
};
