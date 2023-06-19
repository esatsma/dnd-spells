import { Container } from "../../atoms/Container/Container";
import Heading from "../../atoms/Heading/Heading";
import InquiryTable from "../../molecules/InquiryTable/InquiryTable";
import InquiryForm from "../../molecules/InquiryForm/InquiryForm";
import { Topbar } from "../../molecules/Topbar/Topbar";
import { Bottombar } from "../../molecules/Bottombar/Bottombar";
import { Grid } from "../../atoms/Grid/Grid";
import { Intro } from "../../molecules/Intro/Intro";
import styles from "./inquiry.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Contact from "../../molecules/Contact/Contact";
import { Icon } from "../../atoms/Icon/Icon";
import { ProductHeading } from "../../atoms/ProductHeading/ProductHeading";

export const Inquiry = () => {
  const [successfullSubmitted, setSuccessfullSubmitted] = useState(false);
  const { t } = useTranslation();

  return (
    <div>
      <Topbar disabled={successfullSubmitted} />
      {successfullSubmitted === false ? (
        <Container>
          <Grid className={styles.grid}>
            <div className={styles.filters}>
              <InquiryTable />
            </div>
            <div className={styles.inquiryContent}>
              <Intro
                title={t("inquiry.requestInquiry.heading")}
                extra={t("inquiry.requestInquiry.extra_info")}
              >
                {t("inquiry.requestInquiry.message")}
              </Intro>
            </div>

            <InquiryForm onSuccessfull={() => setSuccessfullSubmitted(true)} />
          </Grid>
        </Container>
      ) : (
        <Container className={styles.confirmationcontainer}>
          <Grid className={styles.grid}>
            <div className={styles.confirmationSidebar}>
              <Heading heading={3} className={styles.productTitle}>
                <ProductHeading />
              </Heading>
              <Contact
                phoneNumber={t("contact.phoneNumber")}
                phoneNumberLabel={t("contact.phoneNumberLabel")}
                contactText={t("contact.contactText")}
                showButton={true}
                className={styles.contact}
                inlineVariant
              />
            </div>
            <div className={styles.inquiry}>
              <div className={styles.inquiryContent}>
                <Heading heading={2} line={true}>
                  {t("inquiry.confirmationMessage.heading")}
                </Heading>

                <p>{t("inquiry.confirmationMessage.message")}</p>
                <a
                  href={t("inquiry.confirmationMessage.link")}
                  className={styles.button}
                  target="_self"
                >
                  {t("inquiry.confirmationMessage.linktitle")}
                  <Icon className="icon" name="arrow-right" />
                </a>
              </div>
            </div>
          </Grid>
        </Container>
      )}
      <Bottombar hideSteps={true} title={t("next.step_2")} />
    </div>
  );
};

export default Inquiry;
