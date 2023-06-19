import { FC } from "react";

import { Range } from "./types/Range/Range";
import { Option } from "./types/Option/Option";
import { Input } from "./types/Input/Input";
import { FilterComponentProps } from "./FilterComponent";

export type DynamicFilterComponentProps = FilterComponentProps;

export const DynamicFilterComponent: FC<DynamicFilterComponentProps> = (
  props
) => {
  const { filter, value, onChange, canReset } = props;

  const Comp =
    filter.type === "option" || filter.type === "multi_select"
      ? Option
      : filter.type === "input"
      ? Input
      : Range;

  return (
    <Comp
      value={value}
      onChange={onChange}
      filter={filter}
      canReset={canReset}
    />
  );
};
