import { ReactNode } from "react";
import styles from "./ProductList.module.scss";

export const ProductList = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.additionList}>
      <ul>{children}</ul>
    </div>
  );
};

export default ProductList;
