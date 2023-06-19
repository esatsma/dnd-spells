// AccordionSection.tsx
import React from "react";
import { Icon } from "../../atoms/Icon/Icon";
import classnames from "classnames";
import styles from "./AccordionItem.module.scss";

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  onClick?: () => void;
  isOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  onClick,
  isOpen
}) => {
  return (
    <div className={classnames(styles.accordionItem, {
        [styles["accordionItem--open"]]: isOpen,
      })}>
      <button className={styles.accordionButton} onClick={onClick}>
        <span className={styles.accordionTitle}>{title}</span>{" "}
        <Icon name="circle-arrow-up" />
      </button>
      <div>{children}</div>
    </div>
  );
};

export default AccordionItem;
