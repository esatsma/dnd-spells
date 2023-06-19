import classnames from "classnames";
import { ReactNode } from "react";
import PriceType from "../../../types/price.type";
import { Price } from "../../atoms/Price/Price";
import styles from "./TotalPrice.module.scss";

export const TotalPrice = ({
  prependPrice,
  price,
  vatPrice,
  label,
  className,
  textAlign = "left",
  size = "default",
}: {
  prependPrice?: string;
  vatPrice?: PriceType;
  price?: PriceType;
  label?: string | ReactNode;
  className?: string;
  size?: "small" | "default";
  textAlign?: "left" | "right";
}) => {

  return !price?.amount && !vatPrice?.amount ? null : (
    <div
      className={classnames(styles.totalprice, className, "TotalPrice", {
        [styles.textRight]: textAlign === "right",
        [styles.sizeSmall]: size === "small",
      })}
    >
      <div className={styles.container}>
        {prependPrice && <span className={styles.prepend}>{prependPrice}</span>}
        <Price price={price} className={styles.price} />
      </div>

      {label && (
        <div className={classnames(styles.label, "label")}>{label}</div>
      )}
    </div>
  );
};

export default TotalPrice;
