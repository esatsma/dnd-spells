import classnames from "classnames";
import styles from "./PhoneNumber.module.scss";

export const PhoneNumber = ({
  phoneNumber,
  phoneNumberLabel,
  className,
}: {
  phoneNumber?: string;
  phoneNumberLabel?: string;
  className?: string;
}) => {
  const _className = classnames(styles.phonenumber, className);

  return !phoneNumber ? null : (
    <a href={"tel:" + phoneNumber} className={_className}>
      {phoneNumberLabel}
    </a>
  );
};
