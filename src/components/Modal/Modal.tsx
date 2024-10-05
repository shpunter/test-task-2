import { useEffect, useRef } from "react";
import type { Props } from "./modal.type";
import css from "./modal.module.css";

const Modal = ({ isOpen, children }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    isOpen ? ref.current?.showModal() : ref.current?.close();

    return () => ref.current?.close();
  }, [isOpen]);

  return (
    <dialog className={css.modal} ref={ref}>
      {children}
    </dialog>
  );
};

export default Modal;
