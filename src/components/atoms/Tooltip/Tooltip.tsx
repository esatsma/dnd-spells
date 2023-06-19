import classnames from "classnames";
import { useState } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./Tooltip.module.scss";
import { AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal";
import Heading from "../Heading/Heading";
import { t } from "i18next";

export const Tooltip = ({
  className,
  modalHeading,
  modalContent,
  modalImage,
  textVersion,
}: {
  className?: string;
  modalHeading?: string;
  modalContent: string;
  modalImage?: string;
  textVersion?: boolean;
}) => {
  const [showModal, setShowModal] = useState(false);

  const close = () => {
    setShowModal(false);
    document.body.classList.remove("no-scroll");
  };

  const open = () => {
    setShowModal(true);
    document.body.classList.add("no-scroll");
  };

  return (
    <div className={classnames(styles.tooltip, className)}>
      <button
        type="button"
        className={classnames(styles.infoIcon, "infoIcon", {
          [styles.textVersion]: textVersion === true,
        })}
        onClick={open}
      >
        {textVersion && textVersion === true ? (
          `${t("filter_tooltip_label")}`
        ):
        (
          <Icon name="info" />
        )}
      </button>



      {/* Content modal */}
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => null}>
        {showModal && (
          <Modal
            modalOpen={showModal}
            handleClose={close}
            buttonText={t("modal.close")}
          >
            <div className={styles.modalContent}>
              <div>
                <Heading heading={2} line={true}>
                  {modalHeading}
                </Heading>
                <p>{modalContent}</p>
              </div>
              {modalImage && (
                <img
                  className={styles.modalImage}
                  src={modalImage}
                  alt=""
                  role="presentation"
                />
              )}
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
