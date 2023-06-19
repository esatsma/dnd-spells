import { ReactNode, useContext } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";
import { ConfiguratorContext } from "../../../context/configuration";
import { StepContext } from "../../../context/step";
import Button from "../../atoms/Button/Button";
import Buttons from "../Buttons/Buttons";
import { Container } from "../../atoms/Container/Container";
import { Icon } from "../../atoms/Icon/Icon";
import TotalPrice from "../TotalPrice/TotalPrice";
import styles from "./Bottombar.module.scss";
import Contact from "../Contact/Contact";
import Tooltip from "../../atoms/Tooltip/Tooltip";

export const Bottombar = ({
  buttons,
  nextStep = true,
  hideSteps = false,
  showContact = false,
  title,
}: {
  buttons?: ReactNode;
  nextStep?: boolean;
  hideSteps?: boolean;
  showContact? : boolean;
  title?: String,
}) => {
  const { t } = useTranslation();
  const configuration = useContext(ConfiguratorContext);
  const step = useContext(StepContext);

  return (
    <div
      className={classnames(styles.bottombar, {
        [styles["bottombar--transparent"]]: hideSteps,
      })}
    >
      <Container>
        <div className={styles.content}>
          <div className={styles.content__priceblock}>
            {(!showContact && configuration.productData?.totalPrice.priceWithoutVAT) && (
              <>
                <TotalPrice
                  price={configuration.productData?.totalPrice.priceWithoutVAT}
                  prependPrice={t("price.msrp_excl")}
                  className={styles.totalprice}
                />
                <Tooltip
                  className={styles.tooltip}
                  modalHeading={t("price.tooltip_title")}
                  modalContent={t("price.tooltip")}
                ></Tooltip>
              </>
            )}
            {(showContact || !configuration.productData?.totalPrice.priceWithoutVAT) && (
              <Contact
                phoneNumber={t("contact.phoneNumber")}
                phoneNumberLabel={t("contact.phoneNumberLabel")}
                contactText={t("contact.contactText")}
                showButton={true}
              />
            )}
          </div>

          {!hideSteps && (
            <div className={styles.nextstep}>
              <Buttons>
                {buttons}
                {step.hasNextStep && nextStep && (
                  <Button.Base
                    onClick={step.next}
                    className={styles.btn}
                    loading={configuration.productLoading}
                  >
                    <Button.Text>
                      <span className="mobile-only">{t("next_step")}</span>
                      <span className="desktop-only">{title}</span>
                    </Button.Text>
                    <Button.Icon>
                      <Icon name="arrow-right" />
                    </Button.Icon>
                  </Button.Base>
                )}
              </Buttons>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
