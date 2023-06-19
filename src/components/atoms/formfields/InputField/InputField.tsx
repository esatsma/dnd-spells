import classnames from "classnames";
import { useState } from "react";
import Errors from "../Errors/Errors";
import styles from "./InputField.module.scss";

export const InputField = ({
  label,
  name,
  placeholder,
  type = "text",
  onFocus,
  errors,
  value = "",
  onChange,
}: {
  value?: string;
  name: string;
  placeholder?: string;
  type?: string;
  label?: string;
  errors?: string[];
  onFocus?: (...args: any) => any;
  onChange?: (value: string) => any;
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (e: any) => {
    typeof onChange === "function" && onChange(e.target.value);
    setCurrentValue(e.target.value);
  };

  return (
    <div
      className={classnames(styles.inputField, {
        [styles["inputField--error"]]: errors && errors?.length > 0,
      })}
    >
      {label && <label>{label}</label>}
      <Errors errors={errors} />
      <input
        value={currentValue}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={typeof onFocus === "function" ? onFocus : undefined}
      />
    </div>
  );
};

export default InputField;
