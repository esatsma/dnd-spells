import { useMemo, useState } from "react";
import { Step } from "../../enums/step";

export const useSteps = ({
  currentStep,
  steps,
}: {
  currentStep: Step;
  steps: Step[];
}) => {
  const [_currentStep, setStep] = useState<Step>(currentStep);

  const hasNextStep = useMemo(() => {
    const currentIndex = steps.indexOf(_currentStep);
    const nextIndex = currentIndex + 1;

    return steps[nextIndex];
  }, [_currentStep, steps]);

  const next = () => {
    const currentIndex = steps.indexOf(_currentStep);
    const nextIndex = currentIndex + 1;

    if (steps[nextIndex]) {
      setStep(steps[nextIndex]);
    }
  };

  const previous = () => {
    const currentIndex = steps.indexOf(_currentStep);
    const previousIndex = currentIndex - 1;

    if (steps[previousIndex] && currentIndex !== 0) {
      setStep(steps[previousIndex]);
    }
  };

  const goToStep = (stepname: Step) => {
    setStep(stepname);
  };

  return {
    steps,
    currentStep: _currentStep,
    currentIndex: steps.indexOf(_currentStep),
    goToStep,
    setStep,
    next,
    previous,
    hasNextStep,
  };
};
