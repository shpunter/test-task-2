import User from "./User/User";
import { useGetUsers } from "./fetchUsers";
import css from "./users.module.css";

const Users = () => {
  const { data = [] } = useGetUsers();

  return (
    <div className={css.list}>
      {data.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
