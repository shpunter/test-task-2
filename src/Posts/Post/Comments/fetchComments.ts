import { useQuery } from "@tanstack/react-query";
import type { Post } from "../../fetchPosts.type";
import { fetcher } from "../../../shared/fetcher";
import { POSTS } from "../../../api";
import type { Comments } from "./fetchComments.type";

export const useGetComments = (inViewport: boolean, id: Post["id"]) => {
  return useQuery<Comments>({
    enabled: inViewport,
    queryKey: ["comment", id],
    queryFn: () => fetcher(`${POSTS}/${id}/comments`),
    refetchOnWindowFocus: false,
  });
};
