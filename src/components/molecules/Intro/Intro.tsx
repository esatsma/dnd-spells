import classNames from "classnames";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Intro.module.scss";
import { Heading } from "../../atoms/Heading/Heading";

export const Intro = ({
  title,
  extra,
  children,
  className,
}: {
  title?: string;
  extra?: string;
  children: ReactNode;
  className?: string;
}) => {
  const classnames = classNames(className, styles.container);
  const { t } = useTranslation();

  return (
    <div className={classnames}>
      {title && (
        <Heading heading={1} line={true}>
          {title}
        </Heading>
      )}
      {children && <p>{children}</p>}

      {extra && (
        <details>
          <summary>{t("intro_expand_button")}</summary>
          <p>{extra}</p>
        </details>
      )}
    </div>
  );
};
