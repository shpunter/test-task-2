import type { ButtonHTMLAttributes } from "react";

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  btnType?: "submit" | "default";
};
