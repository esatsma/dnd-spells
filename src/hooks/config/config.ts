import { useState } from "react";

export type configOptions = {
  apiBase: string;
  locale: string;
  language: string;
};

export const useConfig = (options: configOptions) => {
  const [config, setConfig] = useState<configOptions>({ ...options });

  return {
    config,
    setConfig,
  };
};
