import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./Grid.module.scss";

export const Grid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const classnames = classNames(className, styles.grid);

  return <div className={classnames}>{children}</div>;
};
