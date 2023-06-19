import classnames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import styles from "./Button.module.scss";

const Base: FC<{
  children: ReactNode;
  className?: string;
  loading?: boolean;
  type?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >["type"];
  disabled?: boolean;
  onClick?: () => any;
}> = ({
  children,
  className,
  loading = false,
  disabled = false,
  onClick,
  type,
}) => {
  const classNames = classnames(
    styles.button,
    className,
    {
      [styles["button--loading"]]: loading === true,
    },
    "Button"
  );

  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

const Icon: FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const Text: FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const Button = { Base, Icon, Text };
export default Button;
