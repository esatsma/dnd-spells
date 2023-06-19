import classnames from "classnames";
import { useState } from "react";
import { useGranularEffect } from "../../../../hooks/useGranularEffect";
import styles from "./AmountField.module.scss";

export const AmountField = ({
  value,
  min = 0,
  max = Infinity,
  placeholder = "0",
  onChange,
}: {
  value?: number | string | undefined;
  placeholder?: string;
  min?: number;
  max?: number;
  onChange?: (args: any) => any;
}) => {
  const [currentValue, setCurrentValue] = useState<number | undefined | string>(
    () => value
  );

  // change input value if value prop is changed
  useGranularEffect(
    () => {
      if (currentValue !== value) {
        setCurrentValue(value);
      }
    },
    [value],
    [currentValue, value]
  );

  const handleInputchange = (e: any) => {
    if (e.target.value < min) {
      setCurrentValue(0);
      return;
    }

    if (e.target.value >= max) {
      setCurrentValue(max);
      return;
    }

    if (e.target.value === "") {
      setCurrentValue(undefined);
    } else {
      setCurrentValue(Number(e.target.value));
    }
  };

  const handleAdd = () => {
    if ((currentValue ?? 0) >= max) {
      setCurrentValue(max);
      return;
    }

    setCurrentValue((state) => Number(state ?? 0) + 1);
  };

  const handleSubtract = () => {
    if ((currentValue ?? 0) <= min) {
      setCurrentValue(0);
      return;
    }

    setCurrentValue((state) => Number(state ?? 0) - 1);
  };

  // only trigger change if value is changed
  useGranularEffect(
    () => {
      if (!currentValue && !value) {
        return;
      }

      if (value !== currentValue) {
        typeof onChange === "function" && onChange(currentValue);
      }
    },
    [currentValue],
    [currentValue, onChange]
  );

  return (
    <div className={classnames(styles.amountField, "AmountField")}>
      <button className={styles.counter} onClick={handleSubtract}>-</button>
      <input
        className={styles.input}
        type="number"
        placeholder={placeholder}
        value={currentValue === undefined ? "" : currentValue}
        onChange={handleInputchange}
      />
      <button className={styles.counter} onClick={handleAdd}>+</button>
    </div>
  );
};

export default AmountField;
