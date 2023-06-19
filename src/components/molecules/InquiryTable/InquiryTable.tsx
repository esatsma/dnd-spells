import { AxiosResponse } from "axios";
import { useContext, useState } from "react";
import classNames from "classnames";
import useAPI from "../../../hooks/useApi/useApi";
import { ConfiguratorContext } from "../../../context/configuration";
import { useGranularEffect } from "../../../hooks/useGranularEffect";
import { InquiryData } from "../../../types/inquiryData.type";
import Heading from "../../atoms/Heading/Heading";
import Loader from "../../atoms/Loader/Loader";
import { Price } from "../../atoms/Price/Price";
import MailToUser from "../../molecules/MailToUser/MailToUser";
import Contact from "../../molecules/Contact/Contact";
import Accordion from "../Accordion/Accordion";
import AccordionItem from "../AccordionItem/AccordionItem";
import Accessories from "./Accessories/Accessories";
import { Additions } from "./Additions/Additions";
import styles from "./InquiryTable.module.scss";
import { useTranslation } from "react-i18next";
import ProductHeading from "../../atoms/ProductHeading/ProductHeading";

export const InquiryTable = () => {
  const { t } = useTranslation();
  const configuration = useContext(ConfiguratorContext);
  const [tableData, setTableData] = useState<InquiryData>();
  const [abortController, setAbortController] =
    useState<AbortController | null>();
  const api = useAPI();

  useGranularEffect(
    () => {
      (async () => {
        if (abortController) abortController.abort();

        const newAbortController = new AbortController();
        setAbortController(newAbortController);

        const response: AxiosResponse<InquiryData> | void = await api
          .post(
            "/configurator/inquiry",
            {
              cart: configuration.cart,
              product: configuration.productData?.product,
            },
            {
              signal: newAbortController.signal,
            }
          )
          .catch(() => {});

        if (response?.data) {
          setTableData(response.data);
        }
      })();
    },
    [configuration.cart],
    [
      configuration.cart,
      configuration.productData?.product.productId,
      abortController,
    ]
  );

  return !tableData ? (
    <>
      <Loader />
    </>
  ) : (
    <div className={styles.root}>
      <Heading heading={3} className={styles.productTitle}>
        <ProductHeading />
      </Heading>

      <Accordion>
        <AccordionItem title="Configuratie">
          <table className={styles.table}>
            <tbody>
              <tr className={styles.specRow}>
                <th>{t("inquiry.configNr")}: </th>
                <td>{tableData.product.productId}</td>
              </tr>
              {tableData.productSpecs.map((item) => (
                <tr className={styles.specRow} key={item.label}>
                  <th>{item.label}</th>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem title="Configuratielijst">
          <table className={styles.table}>
            <tbody>
              {tableData.productParts?.items?.length > 0 && (
                <>
                  {tableData.productParts.items.map((item) => (
                    <tr className={styles.specRow} key={item.productId}>
                      <th>{item.name}</th>
                      <td>{item.amount}</td>
                    </tr>
                  ))}
                </>
              )}
              {/* Configuratielijst - Extra onderdelen aantal */}
              {tableData.additions?.items?.length > 0 && (
                <Additions showAmount inquiryData={tableData} />
              )}
              {/* Configuratielijst - Extra accessories aantal */}
              {tableData.accessories?.items?.length > 0 && (
                <Accessories showAmount inquiryData={tableData} />
              )}
            </tbody>
          </table>
        </AccordionItem>
          
        <AccordionItem title="Prijsoverzicht">
          <table className={styles.table}>
            <tbody>
              <tr className={styles.specRow}>
                <th>
                  <div
                    className={classNames([
                      styles.tableTitle,
                      styles.tableTitleFirst,
                    ])}
                  >
                    {t("inquiry.arrow")}
                  </div>
                </th>
                <td></td>
              </tr>
              {tableData?.product && (
                <tr
                  className={styles.specRow}
                  key={tableData.product.productId}
                >
                  <th>
                    {tableData?.product?.name} ({tableData.product.productId})
                  </th>
                  <td>
                    <div className={styles.amountColumn}>
                      {tableData?.product?.priceWithoutVAT && (
                        <Price price={tableData.product.priceWithoutVAT} />
                      )}
                    </div>
                  </td>
                </tr>
              )}
              {/* Configuratielijst - Extra onderdelen prijs */}
              {tableData.additions?.items?.length > 0 && (
                <Additions inquiryData={tableData} />
              )}
              {/* Configuratielijst - Extra accessories prijs */}
              {tableData.accessories.items.length > 0 && (
                <Accessories inquiryData={tableData} />
              )}
              {tableData.totalPrice.priceWithoutVAT.amount !== 0 && (
                <tr
                  className={classNames([styles.specRow, styles.totalAmount])}
                >
                  <th>
                    <div className={styles.tableTitle}>
                      {t("price.total")} ({t("price.msrp_excl")})
                    </div>
                  </th>
                  <td>
                    <div className={styles.amountColumn}>
                      <Price price={tableData.totalPrice.priceWithoutVAT} />
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </AccordionItem>  
      </Accordion>
      
      <div className={styles.mailTo}>
        <MailToUser  />
      </div>
      
      <Contact
        phoneNumber={t("contact.phoneNumber")}
        phoneNumberLabel={t("contact.phoneNumberLabel")}
        contactText={t("contact.contactText")}
        showButton={true}
        className={classNames(styles.contact, "desktop-only")}
        inlineVariant
      />
    </div>
  );
};

export default InquiryTable;
