import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Heading from "../../atoms/Heading/Heading";
import Button from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon/Icon";
import styles from "./ArrowItem.module.scss";
import { ArrowOverviewItem } from "../../../types/arrowOverview.type";
import { ConfiguratorContext } from "../../../context/configuration";
import { StepContext } from "../../../context/step";
import { Emblem } from "../../atoms/Emblem/Emblem";

export const ArrowItem = ({
  product,
}: {
  product: ArrowOverviewItem;
}) => {
  const { t } = useTranslation();
  const configurator = useContext(ConfiguratorContext);
  const step = useContext(StepContext);

  const bullets: string[] = product.attributeBullets
    ? product.attributeBullets.split(/\r\n/)
    : [];

  const selectProduct = () => {
    configurator.setBaseProduct(product.variants[0].productId.toString());
    step.next();
  };

  return (
    <article>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={product.productImage}
          alt={product.series + " " + product.name}
        />
        <div className={styles.content}>
          {/* <ProductHeading withoutImage /> */}
          <Heading heading={4} className={styles.name}>
            {product.series && <Emblem>{product.series}</Emblem>}
            {product.name && product.name}
            {product.subtitle && (
              <span className={styles.productSubtitle}>{product.subtitle}</span>
            )}
          </Heading>
          <details>
            <summary className={styles.toggle}>{t("show_details")}</summary>
            <p>{product.description}</p>
          </details>
          <ul className={styles.usps}>
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>

          <div className={styles.bottom}>
            {/* @TODO: Insert TotalPrice */}
            {/* <TotalPrice price={product.priceWithoutVAT} /> */}

            {/* @TODO: Onclick vervangen */}
            <Button.Base onClick={selectProduct} className={styles.btn}>
              <Button.Text>
                <span className="desktop-only">{t("arrow_button")}</span>
              </Button.Text>
              <Button.Icon>
                <Icon name="arrow-right" />
              </Button.Icon>
            </Button.Base>
          </div>
        </div>
      </div>
    </article>
  );
};
