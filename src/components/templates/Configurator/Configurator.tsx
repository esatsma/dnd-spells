import { Bottombar } from "../../molecules/Bottombar/Bottombar";
import { useContext } from "react";
import { Container } from "../../atoms/Container/Container";
import { Grid } from "../../atoms/Grid/Grid";
import { Intro } from "../../molecules/Intro/Intro";
import { Filters } from "../../molecules/Filters/Filters";
import { Topbar } from "../../molecules/Topbar/Topbar";
import styles from "./configurator.module.scss";
import { useTranslation } from "react-i18next";
import ProductImage from "../../atoms/ProductImage/ProductImage";
import { FilterComponent } from "../../molecules/Filters/FilterComponent";
import { ConfiguratorContext } from "../../../context/configuration";
import ProductHeading from "../../atoms/ProductHeading/ProductHeading";
import Heading from "../../atoms/Heading/Heading";
import { ArrowFilterProvider, ArrowFilterValue } from "../../../context/arrowFilter";


export const Configurator = () => {
  const configurator = useContext(ConfiguratorContext);
  const { t } = useTranslation();

  const handleChange = (name: string) => (value: ArrowFilterValue) => {
    configurator.updateCart("variantOptions", {
      [name]: value,
    });
  };

  return (
    <div>
      <Topbar />

      <Container className={styles.container}>
        <Grid className={styles.grid}>
          <div className={styles.filters}>
            <Heading heading={3} className={styles.productTitle}>
              <ProductHeading />
            </Heading>
            <div className="mobile-only">
              <Intro
                title={t("configuration.pageTitle")}
                extra={t("configuration.extra_info")}
              >
                {t("configuration.description")}
              </Intro>
            </div>

            <ArrowFilterProvider>
              <Filters>
                {configurator.filters.map((filter) => (
                  <FilterComponent
                    value={configurator.cart.variantOptions[filter.name]}
                    onChange={handleChange(filter.name)}
                    filter={filter}
                    key={filter.name}
                  />
                ))}
              </Filters>
            </ArrowFilterProvider>
          </div>
          <div className="desktop-only">
            <Intro
              title={t("configuration.pageTitle")}
              extra={t("configuration.extra_info")}
            >
              {t("configuration.description")}
            </Intro>
          </div>
          <div className={styles.product}>
            <ProductImage
              className={styles.productImageSticky}
              src={configurator.productData?.product.productImage}
            />
            <ProductImage className={styles.productImageMobile} />
          </div>
        </Grid>
      </Container>

      <Bottombar nextStep={true} title={t("next.step_2")} />
    </div>
  );
};
