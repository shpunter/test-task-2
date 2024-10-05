import css from "./section.module.css";
import type { Props } from "./section.type";

const Section = ({ children }: Props) => {
  return <section className={css.section}>{children}</section>;
};

export default Section;
