import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { StepContext } from "../../../context/step";
import { Step } from "../../../enums/step";
import { useSteps } from "../../../hooks/step/step";

export const Steps = {
  Controller: ({
    children,
    order,
    skipStep,
  }: {
    children: React.ReactElement[];
    order: Step[];
    skipStep: boolean;
  }) => {
    const $container = useRef<HTMLDivElement>(null);
    const steps = useSteps({
      currentStep: skipStep ? order[1] : order[0],
      steps: order,
    });

    useEffect(() => {
      $container.current?.scrollIntoView();
    }, [steps.currentStep]);

    return (
      <StepContext.Provider value={steps}>
        <div className="controller" ref={$container}>
          {children}
        </div>
      </StepContext.Provider>
    );
  },
  Step: ({ children, name }: { children: React.ReactElement; name: Step }) => {
    const { currentStep } = useContext(StepContext);

    return currentStep === name ? <div className="step">{children}</div> : null;
  },
};
