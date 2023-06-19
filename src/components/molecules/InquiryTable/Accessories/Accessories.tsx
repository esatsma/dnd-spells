import { useTranslation } from "react-i18next";
import { InquiryData } from "../../../../types/inquiryData.type";
import { Price } from "../../../atoms/Price/Price";
import styles from "../InquiryTable.module.scss";

export const Accessories = ({
  inquiryData,
  showAmount = false,
}: {
  inquiryData: InquiryData;
  showAmount?: Boolean;
}) => {
  const { t } = useTranslation();

  return (
    <>
      <tr className={styles.specRow}>
        <th>
          <div className={styles.tableTitle}>{t("inquiry.accessories")}</div>
        </th>
        <td></td>
      </tr>

      {inquiryData?.accessories?.items?.map((item) => (
        <tr className={styles.specRow} key={item.productId}>
          <th>{item.name}</th>
          <td>
            {showAmount ? (
              <>{item.amount}</>
            ) : (
              <div className={styles.amountColumn}>
                {item.priceWithoutVAT && <Price price={item.priceWithoutVAT} />}
              </div>
            )}
          </td>
        </tr>
      ))}

    </>
  );
};

export default Accessories;
