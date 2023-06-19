import classnames from "classnames";
import { ReactNode } from "react";
import styles from "./Emblem.module.scss";

export const Emblem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const _className = classnames(styles.emblem, className);

  return <span className={_className}>{children}</span>;
};
