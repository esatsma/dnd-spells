import { createContext } from "react";

export type ArrowFilterValue = Array<number | string> | number | string;
export type ArrowFilters = Record<string, ArrowFilterValue>;
export type SetArrowFilters = (partialFilters: ArrowFilters) => void;
export type ResetArrowFilters = () => void;

export type ArrowFilterContextValue = readonly [
  ArrowFilters,
  SetArrowFilters,
  ResetArrowFilters
];

export const ArrowFilterContext =
  createContext<ArrowFilterContextValue | undefined>(undefined);

export default ArrowFilterContext;
