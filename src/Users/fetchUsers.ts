import { useQuery } from "@tanstack/react-query";
import { USERS } from "../api";
import type { Users } from "./fetchUsers.type";
import { fetcher } from "../shared/fetcher";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetcher<Users>(USERS),
    refetchOnWindowFocus: false,
  });
};
