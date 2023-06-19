import { createContext } from "react";
import { useConfig } from "../../hooks/config/config";

export const configContext = createContext({} as ReturnType<typeof useConfig>);

export default configContext;
