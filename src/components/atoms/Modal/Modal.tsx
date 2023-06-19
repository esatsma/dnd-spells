import ReactDom from "react-dom";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.scss";
import { Icon } from "../Icon/Icon";
import Button from "../Button/Button";

const dropIn = {
  hidden: {
    y: "-10vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 4.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const Modal = ({
  handleClose,
  handleButtonClick,
  modalOpen,
  buttonText,
  children,
}: {
  handleClose?: any;
  handleButtonClick?: any;
  buttonText: string;
  modalOpen: any;
  children?: any;
}) => {
  const shadowRoot = document.body.querySelector(".configurator")
    ? document.body.querySelector(".configurator")!.shadowRoot
    : null;

  return ReactDom.createPortal(
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={styles.modal__content}>
          {children}

          <Button.Base
            className={styles.modal__btn}
            onClick={handleButtonClick ? handleButtonClick : handleClose}
          >
            <Button.Icon>
              <Icon name="check" className={styles.modal__check} />
            </Button.Icon>
            <Button.Text>
              <span>{buttonText}</span>
            </Button.Text>
          </Button.Base>
        </div>
      </motion.div>
    </Backdrop>,
    shadowRoot ? shadowRoot : document.body
  );
};
export default Modal;
