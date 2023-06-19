import { FILTERKEYS } from "../enums/filterAttributes";

export type Filter = {
  name: string;
  title: string;
  text: string;
  type: "option" | "multi_select" | "checkbox" | "input" | "range";
  multiple: boolean;
  info: string;
  values: FilterValue[];
};

export type FilterValue = {
  label: string;
  disabled?: boolean;
  value: string;
  icon?: string;
};

export type FilterResponse = {
  [key in FILTERKEYS]: Filter;
};

export type ActiveFilters = {
  [key in FILTERKEYS]: {
    active: boolean;
    value: number | string | string[];
  };
};
