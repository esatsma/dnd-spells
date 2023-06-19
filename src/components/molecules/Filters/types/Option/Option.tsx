import { ChangeEventHandler, MouseEventHandler, useCallback } from "react";
import { useDidMountEffect } from "../../../../../hooks/didMountEffect/didMountEffect";
import { Icon } from "../../../../atoms/Icon/Icon";
import { DynamicFilterComponentProps } from "../../DynamicFilterComponent";
import styles from "./Option.module.scss";
import { OptionValueMultipleType } from "./Option.type";
import { useFilterState } from "../../../../../hooks/filterState/useFilterState";

export type OptionProps = DynamicFilterComponentProps;

export const Option = ({ filter, onChange, canReset }: OptionProps) => {
  const [currentValue, setCurrentValue, resetFilters] = useFilterState(
    filter.name
  );

  const handleChange: (
    filterValueItem: string
  ) => ChangeEventHandler<HTMLInputElement> = (newValue) => (e) => {
    if (filter.multiple) {
      let newState: OptionValueMultipleType = [];

      if (Array.isArray(currentValue)) {
        newState = [...currentValue];
      }

      const currentIndex = newState.indexOf(newValue);

      if (currentIndex !== -1) {
        newState.splice(currentIndex, 1);
      }

      if (e.target.checked) {
        newState.push(newValue);
      }

      setCurrentValue(newState);
    } else {
      setCurrentValue(e.target.checked ? newValue : "");
    }
  };

  useDidMountEffect(() => {
    onChange(currentValue);
  }, [currentValue]);

  const isChecked = useCallback(
    (filterValue: string) => {
      if (Array.isArray(currentValue)) {
        return currentValue.indexOf(filterValue) !== -1;
      } else if (filterValue === currentValue) {
        return true;
      }

      return false;
    },
    [currentValue]
  );

  const handleClick: (
    filterValueItem: string
  ) => MouseEventHandler<HTMLLabelElement> = (filterValueItem) => (event) => {
    if (isChecked(filterValueItem)) {
      if (filter.multiple) {
        let newState: OptionValueMultipleType = [];

        if (Array.isArray(currentValue)) {
          newState = [...currentValue];
        }
        const currentIndex = newState.indexOf(filterValueItem);

        newState.splice(currentIndex, 1);

        setCurrentValue(newState);
        event.stopPropagation();
        event.preventDefault();
      } else {
        setCurrentValue("");
      }
      event.stopPropagation();
      event.preventDefault();
    }
  };

  return (
    <div className={styles.options}>
      {filter.values.map((filterValueItem) => {
        return (
          <label
            key={filterValueItem.value}
            className={styles.option}
            onClick={handleClick(filterValueItem.value)}
          >
            <input
              type={filter.multiple ? "checkbox" : "radio"}
              value={filterValueItem.value}
              name={filter.name}
              disabled={filterValueItem.disabled}
              onChange={handleChange(filterValueItem.value)}
              checked={isChecked(filterValueItem.value)}
            />
            {isChecked(filterValueItem.value) && canReset ? (
              <div className={styles.resetInput}>
                <Icon name="close" />
              </div>
            ) : null}
            <div className={styles.content}>
              {filterValueItem.icon && (
                <div className={styles.icon}>
                  <img src={filterValueItem.icon} alt={filterValueItem.label} />
                </div>
              )}
              <span
                dangerouslySetInnerHTML={{ __html: filterValueItem.label }}
              ></span>
            </div>
          </label>
        );
      })}
    </div>
  );
};
