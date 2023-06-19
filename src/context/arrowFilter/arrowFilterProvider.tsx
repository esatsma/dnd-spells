import { ReactNode, useCallback, useState } from "react";
import ArrowFilterContext, {
  ArrowFilters,
} from "./arrowFilterContext";

export type ArrowFilterProviderProps = {
  children: ReactNode;
};

export const ArrowFilterProvider = (props: ArrowFilterProviderProps) => {
  const { children } = props;
  const [filterState, setFilterState] = useState<ArrowFilters>({});

  const reset = useCallback(() => {
    setFilterState({});
  }, []);

  const value = [
    filterState,
    (newValues: ArrowFilters) =>
      setFilterState((oldState) => ({ ...oldState, ...newValues })),
    reset,
  ] as const;

  return (
    <ArrowFilterContext.Provider value={value}>
      {children}
    </ArrowFilterContext.Provider>
  );
};
