import { useTranslation } from "react-i18next";
import { InquiryData } from "../../../../types/inquiryData.type";
import { Price } from "../../../atoms/Price/Price";
import styles from "../InquiryTable.module.scss";

export const Additions = ({
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
          <div className={styles.tableTitle}>{t("inquiry.expansions")}</div>
        </th>
        <td></td>
      </tr>

      {inquiryData?.additions?.items?.map((item) => (
        <tr className={styles.specRow} key={item.productId}>
          <th>{item.name}</th>
          <td>
            {showAmount ? (
              <>{item.amount}</>
            ) : (
              <div className={styles.amountColumn}>
                {item.priceWithoutVAT && <Price price={item.priceWithoutVAT} />}
                {/* @TODO: Check of dit nog nodig is bij het toevoegen/verwijderen vna */}
                {/* <AmountField
                    value={
                        configuration.cart.additionalItems[item.productId]?.amount
                    }
                    onChange={(amount) => {
                        configuration.updateCart("additionalItems", {
                            [item.productId]: { amount },
                        });
                    }}
                /> */}
              </div>
            )}
          </td>
        </tr>
      ))}
    </>
  );
};

export default Additions;
