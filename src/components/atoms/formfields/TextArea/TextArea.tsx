import classnames from "classnames";
import { useState } from "react";
import Errors from "../Errors/Errors";
import styles from "./TextArea.module.scss";

export const TextArea = ({
  label,
  name,
  placeholder,
  value,
  errors,
  onChange,
  onFocus,
}: {
  value?: string;
  label?: string;
  name: string;
  errors?: string[];
  placeholder: string;
  onFocus?: (...args: any) => any;
  onChange: (value: string) => any;
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (e: any) => {
    typeof onChange === "function" && onChange(e.target.value);
    setCurrentValue(e.target.value);
  };

  return (
    <div
      className={classnames(styles.textArea, {
        [styles["textArea--error"]]: errors && errors?.length > 0,
      })}
    >
      {label && <label>{label}</label>}
      <Errors errors={errors} />
      <textarea
        value={currentValue}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={typeof onFocus === "function" ? onFocus : undefined}
      />
    </div>
  );
};

export default TextArea;
