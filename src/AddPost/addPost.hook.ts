import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetcher } from "../shared/fetcher";
import type { User } from "../Users/fetchUsers.type";
import { POSTS } from "../api";
import type { PastsAsMap, Post } from "../Posts/fetchPosts.type";

export const useAddPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["posts"],
    mutationFn: ({
      title,
      body,
      userId,
    }: { title: string; body: string; userId: User["id"] }) => {
      const posts = queryClient
        .getQueryData<PastsAsMap>(["posts"])
        ?.get(userId);

      const id = (posts?.length ?? 0) + 1;

      return fetcher<Post>(`${POSTS}/${id}`, {
        method: "PUT",
        body: { title, body, userId },
      });
    },
    onSuccess: (post) => {
      queryClient.setQueryData<PastsAsMap>(["posts"], (posts) => {
        if (!posts) return;

        const clone = new Map(posts);
        const postsForCurrUser = clone.get(post.userId) || [];

        clone.set(post.userId, postsForCurrUser.concat(post));

        return clone;
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
