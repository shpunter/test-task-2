import Button from "../components/Button/Button";
import { Route } from "../routes/index";
import css from "./header.module.css";
import { useNavigate } from "@tanstack/react-router";

const Header = () => {
  const navigate = useNavigate();
  const { userId } = Route.useSearch();
  const label = userId ? "Add new post" : "Select a user";

  const onClick = () => {
    navigate({ to: "/", search: { userId, action: "add" } });
  };

  return (
    <div className={css.header}>
      <Button onClick={onClick} label={label} disabled={!userId} />
    </div>
  );
};

export default Header;
