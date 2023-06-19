import { DependencyList, EffectCallback, useEffect, useRef } from "react";

// https://blog.bitsrc.io/a-more-granular-useeffect-9c8ca3d9f634
export const useGranularEffect = (
  effect: EffectCallback,
  primaryDeps: DependencyList,
  secondaryDeps: DependencyList
) => {
  const ref = useRef<DependencyList>();

  if (
    !ref.current ||
    // @ts-ignore
    !primaryDeps.every((w, i) => Object.is(w, ref.current[i]))
  ) {
    ref.current = [...primaryDeps, ...secondaryDeps];
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useEffect(effect, ref.current);
};
