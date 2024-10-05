import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import { Route } from "../routes/index";
import { useNavigate } from "@tanstack/react-router";
import css from "./addPost.module.css";
import Input from "../components/Input/Input";
import TextArea from "../components/TextArea/TextArea";
import { useAddPost } from "./addPost.hook";
import { useEffect, useRef } from "react";

const AddPost = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { action, userId } = Route.useSearch();
  const navigate = useNavigate();
  const mutation = useAddPost();

  const onCancelClick = () => {
    navigate({
      to: "/",
      search: { userId: userId },
    });
  };

  const onCreateClick = () => {
    mutation.mutate({
      title: inputRef.current?.value ?? "",
      body: textAreaRef.current?.value ?? "",
      userId: userId ?? Number.NaN,
    });
  };

  useEffect(() => {
    mutation.isSuccess &&
      navigate({
        to: "/",
        search: { userId: userId },
      });
  }, [mutation.isSuccess, navigate, userId]);

  return (
    <Modal isOpen={action === "add"} key={Date.now()}>
      <div className={css.body}>
        <Input ref={inputRef} placeholder="Title" />
        <TextArea ref={textAreaRef} placeholder="Body" />
      </div>
      <div className={css.footer}>
        <Button label="Cancel" onClick={onCancelClick} />
        <Button label="Create" btnType="submit" onClick={onCreateClick} />
      </div>
    </Modal>
  );
};

export default AddPost;
