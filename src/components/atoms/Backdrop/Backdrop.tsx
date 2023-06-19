import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import styles from "./Backdrop.module.scss";

const Backdrop = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: any;
}) => {
  return (
    <motion.div
      onClick={onClick}
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
