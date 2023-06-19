
import { useContext } from "react";
import { ArrowFilterContext, ArrowFilterValue } from "../../context/arrowFilter";

export const useFilterState = (filterName: string) => {
  const ctx = useContext(ArrowFilterContext);

  if (ctx === undefined) {
    throw "Missing ArrowFilterProvider";
  }

  const [filterState, setFilterState, resetFilterState] = ctx;

  return [
    filterState[filterName],
    (newValue: ArrowFilterValue) => {
      setFilterState({ [filterName]: newValue });
    },
    resetFilterState,
  ] as const;
};

export default useFilterState;
