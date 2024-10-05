import { forwardRef } from "react";
import css from "./input.module.css";
import type { Props } from "./input.type";

const Input = forwardRef<HTMLInputElement, { placeholder: string }>(
  ({ placeholder = "", ...rest }: Props, ref) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        className={css.input}
        {...rest}
      />
    );
  },
);

export default Input;
