import styles from "./Topbar.module.scss";
import classnames from "classnames";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { StepContext } from "../../../context/step";
import { Icon } from "../../atoms/Icon/Icon";

export const Topbar = ({ disabled = false }: { disabled?: boolean }) => {
  const { t } = useTranslation();
  const { currentStep, currentIndex, previous, steps, setStep } = useContext(StepContext);
 
  const goToStep = (e: any) => {
    setStep(e.target.dataset.step);
  };

  const goToPrev = (e: any) => {
    window.history.back();  
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <button
          className={styles.previous}
          onClick={currentStep ==  'ARROWSELECTOR' ? goToPrev : previous}>
          <Icon name="arrow-left" className={styles.previousIcon} />{t(`previous_step.${currentStep}`)}
        </button>
        <ul className={styles.steps}>
          {steps.map((step, index) => {
            const classes = classnames(styles.step, {
              [styles["step--active"]]: step === currentStep,
              [styles["step--activated"]]: index < currentIndex,
            });

            return (
              <li key={step}>
                <button
                  data-step={step}
                  onClick={goToStep}
                  className={classes}
                  disabled={disabled}
                >
                  {t(`step.${step}`)}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
