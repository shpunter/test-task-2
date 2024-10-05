import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../shared/fetcher";
import { POSTS } from "../api";
import type { PastsAsMap, Posts } from "./fetchPosts.type";

export const useGetPosts = () => {
  return useQuery<PastsAsMap>({
    queryKey: ["posts"],
    refetchOnWindowFocus: false,
    queryFn: () =>
      fetcher<Posts>(POSTS).then((posts) => {
        return posts.reduce<PastsAsMap>((acc, target) => {
          acc.has(target.userId)
            ? (acc.get(target.userId) ?? []).push(target)
            : acc.set(target.userId, [target]);

          return acc;
        }, new Map());
      }),
  });
};
