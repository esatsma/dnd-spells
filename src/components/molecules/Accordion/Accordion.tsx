import * as React from "react";
import { useState } from "react";
import AccordionItem, {
  AccordionItemProps,
} from "../AccordionItem/AccordionItem";
import styles from "./Accordion.module.scss";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile"

const Accordion = ({
  children,
}: {
  children: React.ReactElement<AccordionItemProps>[];
}) => {
  const isMobile = useIsMobile();
  const [openIndex, setOpenIndex] = useState<number | null>(isMobile ? -1 : 0);

  const handleClick = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className={styles.accordion}>
      {React.Children.map(children, (child, index) => {
        const isOpen = openIndex === index;
        const title = child.props.title;

        return (
          <AccordionItem
            key={index}
            title={title}
            onClick={() => handleClick(index)}
            isOpen={isOpen}
          >
            {isOpen && child.props.children}
          </AccordionItem>
        );
      })}
    </div>
  );
};

export default Accordion;
