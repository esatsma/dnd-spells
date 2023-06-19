import ConfigContext from "../../../context/config/config";
import { Language } from "../../../enums/language";
import { Story } from "@storybook/react";
import { useConfig } from "../../../hooks/config/config";

export const LanguageDecorator = (Story: Story) => {
  const config = useConfig({
    apiBase: "nl_NL",
    locale: "nl_NL",
    language: Language.NL,
  });

  return (
    <ConfigContext.Provider value={config}>
      <Story />
    </ConfigContext.Provider>
  );
};

export default LanguageDecorator;
