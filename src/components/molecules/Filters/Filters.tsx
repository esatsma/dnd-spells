import { FC, ReactNode } from "react";

import styles from "./Filters.module.scss";

export type FiltersProps = {
  children?: ReactNode;
  fold?: Boolean;
};

export const Filters: FC<FiltersProps> = (props) => {
  const { children, fold } = props;

  return <div data-folded={fold} className={styles.filters}>{children}</div>;
};
