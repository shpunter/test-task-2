import { Outlet } from "@tanstack/react-router";
import css from "./root.module.css";
import Header from "../Header/Header";
import Users from "../Users/Users";

const Root = () => {
  return (
    <div className={css.root}>
      <Users />
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
