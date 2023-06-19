import { createContext } from "react";
import { useSteps } from "../../hooks/step/step";

export const StepContext = createContext({} as ReturnType<typeof useSteps>);
