import { CSSProperties } from "react";
import classNames from "classnames";
import useImageLoading from "../../../hooks/imageLoading/imageLoading";
import styles from "./ProductImage.module.scss";

export const ProductImage = ({
  style,
  className,
  src,
}: {
  style?: CSSProperties;
  className?: string;
  src?: string;
}) => {
  const { isLoading, image } = useImageLoading(src ?? null, 250);

  return (
    <div
      className={classNames(
        styles.productImage,
        {
          [styles["productImage--visible"]]: !isLoading,
        },
        className
      )}
      style={style}
    >
      {image && <img src={image} alt="" role="presentation" />}
    </div>
  );
};

export default ProductImage;
