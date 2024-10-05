import type { Props } from "./button.type";
import css from "./button.module.css";

const Button = ({ label, btnType = "default", ...rest }: Props) => {
  return (
    <button className={`${css.btn} ${css[btnType]}`} type="button" {...rest}>
      {label}
    </button>
  );
};

export default Button;
