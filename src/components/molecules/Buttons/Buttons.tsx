import { ReactNode } from "react";
import styles from "./Buttons.module.scss";

export const Buttons = ({ children }: { children: ReactNode }) => {
  return <div className={styles.buttons}>{children}</div>;
};

export default Buttons;
