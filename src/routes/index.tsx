import { createFileRoute } from "@tanstack/react-router";
import Posts from "../Posts/Posts";
import Section from "../components/Section/Section";
import type { User } from "../Users/fetchUsers.type";
import type { Post } from "../Posts/fetchPosts.type";
import AddPost from "../AddPost/AddPost";

export type SearchPosts = {
  userId?: User["id"] | undefined;
  postId?: Post["id"] | undefined;
  action?: "add" | undefined;
};

export const Route = createFileRoute("/")({
  validateSearch: (search: SearchPosts): SearchPosts => {
    return {
      userId: search?.userId || undefined,
      postId: search?.postId || undefined,
      action: search?.action || undefined,
    };
  },
  component: () => {
    return (
      <Section>
        <Posts />
        <AddPost />
      </Section>
    );
  },
});
