import classNames from "classnames";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { ConfiguratorContext } from "../../../context/configuration";
import { ProductItem as ProductItemType } from "../../../types/addition.type";
import { Cart } from "../../../types/cart.type";
import TotalPrice from "../../molecules/TotalPrice/TotalPrice";
import { Emblem } from "../Emblem/Emblem";
import AmountField from "../formfields/AmountField/AmountField";
import Heading from "../Heading/Heading";
import styles from "./ProductItem.module.scss";

export const ProductItem = ({
  product,
  cartKey,
}: {
  product: ProductItemType;
  cartKey: keyof Cart;
}) => {
  const configuration = useContext(ConfiguratorContext);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <li
      className={classNames(styles.addition, "Addition")}
      key={product.productId}
    >
      <div className={styles.display}>
        <img
          className={styles.image}
          src={product?.productImage}
          alt={product.name}
        />

        <div className={styles.content}>
          <Heading heading={4} className={styles.name}>
            {product.series && <Emblem>{product.series}</Emblem>}
            {product.name && product.name}
            {product.subtitle && (
              <span className={styles.productSubtitle}>{product.subtitle}</span>
            )}
          </Heading>

          <div className={styles.productNr}>
            {t("article_number", {
              article_number: product.articleNumber,
            })}
          </div>

          {product.description && (
            <p
            className={styles.description}
              data-active={isOpen}>
              {product.description}
            </p>
          )}
          {product.description && product.description.split('').length > 105 && <div
            className={styles.readmore}
            onClick={() => setIsOpen(!isOpen)}
            data-active={isOpen}
          >
            <span>{t("readless")}</span>
            <span>{t("readmore")}</span>
          </div>
          }
        </div>
      </div>

      <div className={styles.price}>
        <div>
          <TotalPrice
            className={styles.price}
            price={product.priceWithoutVAT}
          />
        </div>
        <AmountField
          placeholder="0"
          value={configuration.cart.additionalItems[product.productId]?.amount}
          onChange={(amount) => {
            configuration.updateCart(cartKey, {
              [product.productId]: { amount },
            });
          }}
        />
      </div>
    </li>
  );
};

export default ProductItem;
