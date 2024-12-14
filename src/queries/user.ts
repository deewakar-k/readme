import { getUserDetails } from "@/actions/user";
import { useQuery } from "@tanstack/react-query";

export const useUser = (username: string) => {
  return useQuery({
    queryKey: ["user_details", username],
    queryFn: () => getUserDetails(username),
  });
};
