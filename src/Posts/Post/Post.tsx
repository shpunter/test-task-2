import type { Props } from "./post.type";
import css from "./post.module.css";
import Comments from "./Comments/Comments";
import { useDelPost } from "./delPost.hook";
import { classNames } from "../../shared/utils";

const Post = ({ post }: Props) => {
  const mutation = useDelPost(post);

  const onClick = () => {
    mutation.mutate(post.id);
  };

  const classnames = classNames({ [css.pending]: mutation.isPending }, [
    css.post,
    css.limited,
  ]);

  return (
    <div className={classnames}>
      <div className={css.actions}>
        <div className={css.delete} onClick={onClick} />
        <input type="checkbox" className={css.showHide} />
      </div>
      <div className={css.title}>{post.title}</div>
      <div>{post.body}</div>
      <div className={css.comments}>
        <Comments id={post.id} />
      </div>
    </div>
  );
};

export default Post;
