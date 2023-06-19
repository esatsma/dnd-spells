import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../../../../../scss/range.theme.scss";
import { useMemo, useState, useEffect } from "react";
import { DynamicFilterComponentProps } from "../../DynamicFilterComponent";
import styles from "./Range.module.scss";
import { useFilterState } from "../../../../../hooks/filterState/useFilterState";

export type RangeProps = DynamicFilterComponentProps;

export const Range = ({ onChange, filter, value }: RangeProps) => {
  const [currentValue, setCurrentValue, resetFilters] = useFilterState(
    filter.name
  );
  const sliderChange = (e: any) => {
    setCurrentValue(e);
    onChange(e);
  };

  const marks = useMemo(() => {
    return filter.values
      .sort((prev, next) => {
        return prev.value > next.value ? -1 : 1;
      })
      .reduce((currentState, value) => {
        currentState[value.value] = value.label;
        return currentState;
      }, {} as { [key: string]: string });
  }, [filter.values]);

  useEffect(() => {
    const handle = document.querySelector(".rc-slider-handle");
    handle?.firstChild?.remove();

    if (!isNaN(Number(currentValue)) && currentValue >= 10) {
      const marker = document.createElement("span");
      const markerText = document.createTextNode(
        `${currentValue.toString().slice(0, -2)},${currentValue
          .toString()
          .slice(-2)}`.slice(0, -1) + " M"
      );
      marker.appendChild(markerText);
      handle?.appendChild(marker);
    }
  }, [currentValue]);

  const minMaxValue = useMemo(() => {
    const values = Object.keys(marks);

    return {
      min: Number(values[0]),
      max: Number(values[values.length - 1]),
    };
  }, [marks]);

  return (
    <div className={styles.container}>
      <Slider
        onChange={sliderChange}
        step={null}
        value={Number(currentValue)}
        marks={marks}
        min={minMaxValue.min}
        max={minMaxValue.max}
      />
    </div>
  );
};
