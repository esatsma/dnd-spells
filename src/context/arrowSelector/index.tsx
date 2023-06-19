import { createContext } from "react";
import ArrowOverviewFiltering from "../../hooks/arrowOverviewFiltering/arrowOverviewFiltering";

export const ARROWSELECTORContext = createContext(
  {} as ReturnType<typeof ArrowOverviewFiltering>
);

export default ARROWSELECTORContext;
