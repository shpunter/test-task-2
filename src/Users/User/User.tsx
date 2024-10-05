import { Link } from "@tanstack/react-router";
import css from "./user.module.css";
import type { Props } from "./user.type";

const User = ({ user }: Props) => {
  return (
    <Link
      to="/"
      activeProps={{ className: `${css.active}` }}
      className={css.user}
      search={{ userId: user.id }}
    >
      {user.username}
    </Link>
  );
};

export default User;
