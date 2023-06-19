import InputField from "../../atoms/formfields/InputField/InputField";
import TextArea from "../../atoms/formfields/TextArea/TextArea";
import Button from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon/Icon";
import styles from "./InquiryForm.module.scss";
import classnames from "classnames";
import { useState, useCallback, useContext } from "react";
import useAPI from "../../../hooks/useApi/useApi";
import { ConfiguratorContext } from "../../../context/configuration";
import { AxiosError, AxiosResponse } from "axios";
import { useTranslation } from "react-i18next";

type formInfo = {
  company: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  postalCode: string;
  city: string;
  question: string;
};

type errors = {
  [key: string]: string[] | undefined;
};

type formResponse = {
  errors: errors;
  success: boolean;
};

export const InquiryForm = ({
  onSuccessfull,
}: {
  onSuccessfull?: (...args: any) => any;
}) => {
  const configuration = useContext(ConfiguratorContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<Partial<formInfo>>({} as formInfo);
  const [formErrors, setFormErrors] = useState<errors>({});
  const api = useAPI();
  const { t } = useTranslation();

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

  const unsetError = (name: string) => {
    setFormErrors((state) => {
      const prevState = { ...state } as errors;

      prevState[name] = undefined;

      return prevState;
    });
  };

  const submitForm = useCallback(() => {
    (async () => {
      setLoading(true);

      const response: AxiosResponse<formResponse> | void = await api
        .post("/configurator/inquiry/submit", {
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

      if (
        response?.data?.success === true &&
        typeof onSuccessfull === "function"
      )
        onSuccessfull();

      setLoading(false);
    })();
  }, [
    api,
    configuration.cart,
    configuration.productData?.product,
    onSuccessfull,
    state,
  ]);

  return (
    <form
      className={classnames(styles.inquiryForm, {
        [styles.loading]: loading,
      })}
    >
      <div className={styles.formRow}>
        <InputField
          value={state.company}
          errors={formErrors["company"]}
          name="company"
          placeholder={t("inquiry.form.companyName")}
          label={t("inquiry.form.companyName")}
          onChange={(value) => updateField("company", value)}
          onFocus={() => unsetError("company")}
        />
      </div>
      <div className={classnames(styles.formRow, styles.formRowAddress)}>
        <InputField
          value={state.firstName}
          errors={formErrors["firstName"]}
          name="firstName"
          placeholder={t("inquiry.form.firstName")}
          label={t("inquiry.form.firstName")}
          onChange={(value) => updateField("firstName", value)}
          onFocus={() => unsetError("firstName")}
        />
        <InputField
          value={state.lastName}
          errors={formErrors["lastName"]}
          name="lastName"
          placeholder={t("inquiry.form.lastName")}
          label={t("inquiry.form.lastName")}
          onChange={(value) => updateField("lastName", value)}
          onFocus={() => unsetError("lastName")}
        />
      </div>
      <div className={classnames(styles.formRow, styles.formRowAddress)}>
        <InputField
          value={state.postalCode}
          errors={formErrors["postalCode"]}
          name="postalCode"
          type="text"
          placeholder={t("inquiry.form.postalCode")}
          label={t("inquiry.form.postalCode")}
          onChange={(value) => updateField("postalCode", value)}
          onFocus={() => unsetError("postalCode")}
        />
        <InputField
          value={state.city}
          errors={formErrors["city"]}
          name="city"
          type="text"
          placeholder={t("inquiry.form.city")}
          label={t("inquiry.form.city")}
          onChange={(value) => updateField("city", value)}
          onFocus={() => unsetError("city")}
        />
      </div>
      <div className={styles.formRow}>
        <InputField
          value={state.phone}
          errors={formErrors["email"]}
          name="email"
          type="email"
          placeholder={t("inquiry.form.mail")}
          label={t("inquiry.form.mail")}
          onChange={(value) => updateField("email", value)}
          onFocus={() => unsetError("email")}
        />
      </div>
      <div className={styles.formRow}>
        <InputField
          value={state.phone}
          errors={formErrors["phone"]}
          name="phone"
          type="tel"
          placeholder={t("inquiry.form.phone")}
          label={t("inquiry.form.phone")}
          onChange={(value) => updateField("phone", value)}
          onFocus={() => unsetError("phone")}
        />
      </div>
      <div className={styles.formRow}>
        <TextArea
          value={state.company}
          errors={formErrors["question"]}
          name="question"
          placeholder={t("inquiry.form.question")}
          label={t("inquiry.form.question")}
          onChange={(value) => updateField("question", value)}
          onFocus={() => unsetError("question")}
        />
      </div>

      <div className={styles.formRow}>
        <Button.Base className={styles.btn} type="button" loading={loading} onClick={submitForm}>
          <Button.Text>{t("inquiry.form.submit")}</Button.Text>
          <Button.Icon>
            <Icon name="arrow-right" />
          </Button.Icon>
        </Button.Base>
      </div>
    </form>
  );
};

export default InquiryForm;
