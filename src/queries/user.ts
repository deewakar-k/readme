import { getUserDetails } from "@/actions/user";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  return useQuery({
    queryKey: ["user_details"],
    queryFn: getUserDetails,
  });
};
