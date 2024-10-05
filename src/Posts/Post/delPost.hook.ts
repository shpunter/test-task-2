import { useMutation, useQueryClient } from "@tanstack/react-query";
import { POSTS } from "../../api";
import { fetcher } from "../../shared/fetcher";
import type { PastsAsMap, Post } from "../fetchPosts.type";

export const useDelPost = (post: Post) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["posts"],
    mutationFn: (id: Post["id"]) => {
      return fetcher<Post>(`${POSTS}/${id}`, { method: "DELETE" });
    },
    onSuccess: () => {
      queryClient.setQueryData<PastsAsMap>(["posts"], (posts) => {
        if (!posts) return;

        const clone = new Map(posts);
        const postsForCurrUser = (clone.get(post.userId) || []).filter(
          ({ id }) => id !== post.id,
        );

        clone.set(post.userId, postsForCurrUser);

        return clone;
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
