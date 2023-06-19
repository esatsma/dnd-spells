import { createContext } from "react";
import { useConfiguration } from "../../hooks/configuration/configuration";

export const ConfiguratorContext = createContext(
  {} as ReturnType<typeof useConfiguration>
);
