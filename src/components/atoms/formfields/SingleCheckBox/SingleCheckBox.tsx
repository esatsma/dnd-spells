import { useState } from "react";
import Errors from "../Errors/Errors";
import styles from "./SingleCheckBox.module.scss";

export const SingleCheckBox = ({
  label,
  name,
  value = false,
  onChange,
  onFocus,
  errors,
}: {
  value?: boolean;
  label?: string;
  name: string;
  errors?: string[];
  onChange: (value: boolean) => any;
  onFocus?: (...args: any) => any;
}) => {
  const [currentValue, setCurrentValue] = useState<boolean>(value);

  const handleChange = (e: any) => {
    typeof onChange === "function" && onChange(e.target.checked);
    setCurrentValue(e.target.checked);
  };

  return (
    <>
      <label className={styles.singleCheckBox}>
        <input
          value={Number(currentValue)}
          type="checkbox"
          checked={currentValue}
          name={name}
          onChange={handleChange}
          onFocus={typeof onFocus === "function" ? onFocus : undefined}
        />
        <span>{label}</span>
      </label>
      <Errors errors={errors} />
    </>
  );
};

export default SingleCheckBox;
