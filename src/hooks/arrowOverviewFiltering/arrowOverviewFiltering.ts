import { useState } from "react";
import { ArrowOverviewItem } from "../../types/arrowOverview.type";

export const ArrowOverviewFiltering = () => {
  const [filteredArrowList, setFilteredArrowList] = useState<
    ArrowOverviewItem[]
  >([]);

  return {
    filteredArrowList,
    setFilteredArrowList,
  };
};

export default ArrowOverviewFiltering;
