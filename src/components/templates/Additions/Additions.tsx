import { Bottombar } from "../../molecules/Bottombar/Bottombar";
import { Topbar } from "../../molecules/Topbar/Topbar";
import { useTranslation } from "react-i18next";
import { Container } from "../../atoms/Container/Container";
import { Grid } from "../../atoms/Grid/Grid";
import { Intro } from "../../molecules/Intro/Intro";
import { ProductItem } from "../../atoms/ProductItem/ProductItem";
import { useContext, useState } from "react";
import { useGranularEffect } from "../../../hooks/useGranularEffect";
import { AxiosResponse } from "axios";
import { ProductItem as ProductItemType } from "../../../types/addition.type";
import { ConfiguratorContext } from "../../../context/configuration";
import Loader from "../../atoms/Loader/Loader";
import { useAPI } from "../../../hooks/useApi/useApi";
import ProductList from "../../atoms/ProductList/ProductList";
import AdditionInquiryTable from "../../molecules/InquiryTable/AdditionInquiryTable";

export const Additions = () => {
  const { t } = useTranslation();
  const configuration = useContext(ConfiguratorContext);
  const [additionList, setAdditionList] = useState<ProductItemType[]>();
  const [isLoading, setIsLoading] = useState<Boolean>();
  const [abortController, setAbortController] =
    useState<AbortController | null>();
  const api = useAPI();

  useGranularEffect(
    () => {
      (async () => {
        setIsLoading(true);

        if (abortController) abortController.abort();

        const newAbortController = new AbortController();
        setAbortController(newAbortController);

        const response: AxiosResponse<{ additions: ProductItemType[] }> | void =
          await api
            .get(
              `/configurator/product/${configuration.productData?.product.productId}/additions`
            )
            .catch(() => {});

        if (response?.data) {
          setAdditionList(response.data.additions);
        }

        setIsLoading(false);
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
          <div>
            <AdditionInquiryTable />
          </div>
          <Intro
            title={t("additions.pageTitle")}
            //extra={t("additions.extra_info")}
          >
            {t("additions.description")}
          </Intro>

          {isLoading ? (
              <Loader />
          ) : additionList && additionList.length > 0 ? (
            <ProductList>
              {additionList?.map((product) => (
                <ProductItem
                  key={product.productId}
                  product={product}
                  cartKey="additionalItems"
                />
              ))}
            </ProductList>
          ) : (
            <i>{t("additions.empty")}</i>
          )}
        </Grid>
      </Container>

      <Bottombar title={t("next.step_3")} />
    </div>
  );
};
