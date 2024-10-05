import { forwardRef } from "react";
import css from "./textArea.module.css";
import type { Props } from "./textArea.type";

const TextArea = forwardRef<HTMLTextAreaElement, { placeholder: string }>(
  ({ placeholder = "", ...rest }: Props, ref) => {
    return (
      <textarea
        ref={ref}
        rows={10}
        placeholder={placeholder}
        className={css.input}
        {...rest}
      />
    );
  },
);

export default TextArea;
