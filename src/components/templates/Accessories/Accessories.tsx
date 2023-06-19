import { Bottombar } from "../../molecules/Bottombar/Bottombar";
import { Topbar } from "../../molecules/Topbar/Topbar";
import { useTranslation } from "react-i18next";
import { Container } from "../../atoms/Container/Container";
import { Grid } from "../../atoms/Grid/Grid";
import { Intro } from "../../molecules/Intro/Intro";
import styles from "./Accessories.module.scss";
import { ProductList } from "../../atoms/ProductList/ProductList";
import { useContext, useState } from "react";
import { useGranularEffect } from "../../../hooks/useGranularEffect";
import { AxiosResponse } from "axios";
import { ConfiguratorContext } from "../../../context/configuration";
import Loader from "../../atoms/Loader/Loader";
import { useAPI } from "../../../hooks/useApi/useApi";
import ProductItem from "../../atoms/ProductItem/ProductItem";
import { ProductItem as ProductItemType } from "../../../types/addition.type";
import AdditionInquiryTable from "../../molecules/InquiryTable/AdditionInquiryTable";

export const Accessories = () => {
  const { t } = useTranslation();
  const configuration = useContext(ConfiguratorContext);
  const [accessories, setAccessories] = useState<ProductItemType[]>();
  const [isLoading, setIsLoading] = useState<Boolean>();
  const [abortController, setAbortController] =
    useState<AbortController | null>();
  const api = useAPI();

  useGranularEffect(
    () => {
      setIsLoading(true);
      (async () => {
        if (abortController) abortController.abort();

        const newAbortController = new AbortController();
        setAbortController(newAbortController);

        const response: AxiosResponse<{
          accessories: ProductItemType[];
        }> | void = await api
          .get(
            `/configurator/product/${configuration.productData?.product.productId}/accessories`
          )
          .catch(() => {});

        if (response?.data) {
          setAccessories(response.data.accessories);
          setIsLoading(false);
        }
      })();
    },
    [configuration.productData?.product.productId],
    [configuration.productData?.product.productId, abortController, isLoading]
  );

  return (
    <div>
      <Topbar />

      <Container>
        <Grid>
          <div className={styles.summation}>
            <AdditionInquiryTable />
          </div>

          <Intro
            title={t("accessories.pageTitle")}
            //extra={t("accessories.extra_info")}
          >
            {t("accessories.description")}
          </Intro>

          {isLoading ? (
            <Loader />
          ) : accessories && accessories.length > 0 ? (
            <ProductList>
              {accessories?.map((accessory) => (
                <ProductItem
                  key={accessory.productId}
                  product={accessory}
                  cartKey="accessories"
                />
              ))}
            </ProductList>
          ) : (
            <i>{t("accessories.empty")}</i>
          )}
        </Grid>
      </Container>

      <Bottombar title={t("next.step_4")} />
    </div>
  );
};
