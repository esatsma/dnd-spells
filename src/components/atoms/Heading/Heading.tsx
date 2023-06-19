import classnames from "classnames";
import { ReactNode } from "react";
import styles from "./Heading.module.scss";

export const Heading = ({
  children,
  heading,
  className,
  line = false,
}: {
  children: ReactNode;
  heading: 1 | 2 | 3 | 4 | 5 | 6;
  line?: boolean;
  className?: string;
}) => {
  const Tag = `h${heading}` as keyof JSX.IntrinsicElements;
  const _className = classnames(
    styles.heading,
    {
      [styles["heading--line"]]: line,
    },
    className
  );

  return <Tag className={_className}>{children}</Tag>;
};

export default Heading;
