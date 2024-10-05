import type { Props } from "./comment.type";
import css from "./comment.module.css";

const Comment = ({ comment }: Props) => {
  return (
    <div className={css.comment}>
      <div className={css.author} data-email={comment.email} />
      <div className={css.body}>{comment.body}</div>
    </div>
  );
};

export default Comment;
