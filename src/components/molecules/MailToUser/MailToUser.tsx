import { useContext, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import styles from "./MailToUser.module.scss";
import Modal from "../../atoms/Modal/Modal";
import InputField from "../../atoms/formfields/InputField/InputField";
import Heading from "../../atoms/Heading/Heading";
import Button from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon/Icon";
import { AxiosError, AxiosResponse } from "axios";
import { ConfiguratorContext } from "../../../context/configuration";
import useAPI from "../../../hooks/useApi/useApi";
import classnames from "classnames";

type formInfo = {
  email: string;
};

type errors = {
  [key: string]: string[] | undefined;
};

type formResponse = {
  errors: errors;
  success: boolean;
};

export const MailToUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const configuration = useContext(ConfiguratorContext);
  const [formErrors, setFormErrors] = useState<errors>({});
  const [state, setState] = useState<Partial<formInfo>>({} as formInfo);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const api = useAPI();
  const { t } = useTranslation();

  const closeConfirmation = () => {
    setShowConfirmationModal(false);
    document.body.classList.remove("no-scroll");
  };

  const updateField = <T extends keyof formInfo, K extends formInfo[T]>(
    key: T,
    value: K
  ) => {
    setState((state) => {
      const prevState = { ...state } as formInfo;
      prevState[key] = value;

      return prevState;
    });
  };

  const cancelSubmit = () => {
    setShowModal(false);
  };

  const submitForm = useCallback(() => {
    (async () => {
      setLoading(true);

      const response: AxiosResponse<formResponse> | void = await api
        .post("/configurator/inquirytouser/submit", {
          inquiry: state,
          cart: configuration.cart,
          product: configuration.productData?.product,
        })
        .catch((err: AxiosError<{ errors: errors }>) => {
          if (err.response?.status === 422 && err.response?.data.errors) {
            setFormErrors(err.response?.data.errors);

            setTimeout(() => {
              document.querySelector("[data-errors")?.scrollIntoView();
            }, 10);
          }
        });

      if (response?.data?.success === true) {
        setShowModal(false);
        setShowConfirmationModal(true);

        setLoading(false);
      }
    })();
  }, [api, configuration.cart, configuration.productData?.product, state]);

  const unsetError = (name: string) => {
    setFormErrors((state) => {
      const prevState = { ...state } as errors;

      prevState[name] = undefined;

      return prevState;
    });
  };

  const open = () => {
    setShowModal(true);
    document.body.classList.add("no-scroll");
  };

  return (
    <div>
      <Button.Base type="button" onClick={open} className={styles.btn}>
        <Button.Icon>
          <Icon name="arrow-right" />
        </Button.Icon>
        <Button.Text>{t("inquiry.sendToSelf.button")}</Button.Text>
      </Button.Base>

      {showModal && (
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => null}
        >
          <Modal
            modalOpen={showModal}
            handleClose={cancelSubmit}
            handleButtonClick={submitForm}
            buttonText={t("inquiry.sendToSelf.submit")}
          >
            <div className={styles.modalContent}>
              <Heading heading={2} line={true}>
                {t("inquiry.sendToSelf.title")}
              </Heading>
              <p>{t("inquiry.sendToSelf.text")}</p>
              <form
                className={classnames(styles.inquiryForm, {
                  [styles.loading]: loading,
                })}
              >
                <InputField
                  value={state.email}
                  errors={formErrors["email"]}
                  type="email"
                  onChange={(value) => updateField("email", value)}
                  onFocus={() => unsetError("email")}
                  name="email"
                  label={t("inquiry.form.mail")}
                  placeholder={t("inquiry.form.mail")}
                />
              </form>
            </div>
          </Modal>
        </AnimatePresence>
      )}
      {showConfirmationModal && (
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => null}
        >
          <Modal
            modalOpen={showConfirmationModal}
            handleClose={closeConfirmation}
            buttonText={t("modal.close")}
          >
            <div className={styles.modalContent}>
              <Heading heading={2} line={true}>
                {t("inquiry.sendToSelf.title")}
              </Heading>
              <p>
                {t("inquiry.sendToSelf.confirmation")} {state.email}
              </p>
            </div>
          </Modal>
        </AnimatePresence>
      )}
    </div>
  );
};

export default MailToUser;
