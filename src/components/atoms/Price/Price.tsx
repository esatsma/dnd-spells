import classnames from "classnames";
import { useContext, useMemo } from "react";
import configContext from "../../../context/config/config";
import PriceType from "../../../types/price.type";
import styles from "./Price.module.scss";

export const Price = ({
  price,
  className,
}: {
  price?: PriceType;
  className?: string;
}) => {
  const config = useContext(configContext);

  const _price = useMemo(
    () =>
      price &&
      new Intl.NumberFormat(config.config.language?.toString(), {
        style: "currency",
        currency: price.currency,
        currencySign: "accounting",
        currencyDisplay: "narrowSymbol",
      })
        .format(price.amount / 100)
        .replace(",00", ",-"),
    [price, config]
  );

  const _className = classnames(styles.price, className, "Price");

  return !price?.amount ? null : <span className={_className}>{_price}</span>;
};
