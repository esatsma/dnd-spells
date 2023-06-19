import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./Container.module.scss";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const classnames = classNames(className, styles.container);

  return <div className={classnames}>{children}</div>;
};
