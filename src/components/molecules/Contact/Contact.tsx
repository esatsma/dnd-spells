import classnames from "classnames";
import { PhoneNumber } from "../../atoms/PhoneNumber/PhoneNumber";
import styles from "./Contact.module.scss";
import { Icon } from "../../atoms/Icon/Icon";

export const Contact = ({
  showButton,
  contactText,
  phoneNumber,
  phoneNumberLabel,
  className,
  inlineVariant,
}: {
  showButton?: boolean;
  contactText?: string;
  phoneNumber: string;
  phoneNumberLabel: string;
  className?: string;
  inlineVariant?: boolean;
}) => {
  return (
    <div
      className={classnames(styles.contact, className, "Contact", {
        [styles["contact--inline"]]: inlineVariant,
      })}
    >
      {showButton && (
        <div className={styles.iconwrapper}>
          <a
            href={"tel:" + phoneNumber}
            className={classnames(styles.contactIconBtn, "contactIconBtn")}
          >
            <Icon name="phone" className={styles.contactIcon} />
          </a>
        </div>
      )}
      <div className={styles.contactInfo}>
        {contactText && (
          <span className={styles.contactText}>{contactText} </span>
        )}
        <PhoneNumber
          phoneNumber={phoneNumber}
          phoneNumberLabel={phoneNumberLabel}
          className={classnames(styles.phonenumber, "phonenumber")}
        />
      </div>
    </div>
  );
};

export default Contact;
