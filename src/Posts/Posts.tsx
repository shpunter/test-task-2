import Loading from "../components/Loading/Loading";
import NoData from "../components/NoData/NoData";
import { Route } from "../routes/index";
import Post from "./Post/Post";
import { useGetPosts } from "./fetchPosts";
import css from "./posts.module.css";

const Posts = () => {
  const { userId } = Route.useSearch();
  const { data, isLoading } = useGetPosts();

  if (!data) return <NoData />;

  const posts = userId ? data.get(userId) : Array.from(data.values()).flat();

  if (!posts?.length) return <NoData />;

  return (
    <Loading isLoading={isLoading}>
      <div className={css.posts}>
        {(posts || []).map((post) => {
          return <Post key={`${post.id}-${post.userId}`} post={post} />;
        })}
      </div>
    </Loading>
  );
};

export default Posts;
