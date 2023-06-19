import { useContext } from "react";
import { ConfiguratorContext } from "../../../context/configuration";
import { Emblem } from "../Emblem/Emblem";
import styles from "./ProductHeading.module.scss";
import ProductImage from "../../atoms/ProductImage/ProductImage";

export const ProductHeading = ({
  withoutImage,
}: {
  withoutImage?: boolean;
}) => {
  const configuration = useContext(ConfiguratorContext);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.productTitleTop}>
          {configuration.productData?.product.series && (
            <Emblem>{configuration.productData?.product.series}</Emblem>
          )}
          {configuration.productData?.product.name && (
            <span className={styles.productTitle}>
              {configuration.productData?.product.name}
            </span>
          )}
        </div>
        {configuration.productData?.product.subtitle && (
          <span className={styles.productSubtitle}>
            {configuration.productData?.product.subtitle}
          </span>
        )}
      </div>
      {!withoutImage && (
        <ProductImage
          className={styles.productImage}
          src={configuration.productData?.product.productImage}
        />
      )}
    </div>
  );
};

export default ProductHeading;
