import classNames from "classnames";
import styles from "./ResetButton.module.scss";
import { useFilterState } from "../../../hooks/filterState/useFilterState";

export const ResetButton = ({
  className,
  buttonText,
}: {
  className?: string;
  buttonText?: string;
}) => {
  const [, , resetFilterState] = useFilterState("");
  const onReset = () => {
    resetFilterState();
  };

  return (
    <button className={classNames(className, styles.button)} onClick={onReset}>
      {buttonText}
    </button>
  );
};

export default ResetButton;
