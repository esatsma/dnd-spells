import "./scss/index.scss";
import "./services/i18n";
import { Steps } from "./components/atoms/Steps/Steps";
import { ConfiguratorContext } from "./context/configuration";
import ConfigContext from "./context/config/config";
import { Step } from "./enums/step";
import { useConfiguration } from "./hooks/configuration/configuration";
import { ArrowSelector } from "./components/templates/ArrowSelector/ArrowSelector";
import { Accessories } from "./components/templates/Accessories/Accessories";
import { Configurator } from "./components/templates/Configurator/Configurator";
import { Additions } from "./components/templates/Additions/Additions";
import styles from "./App.module.scss";
import Inquiry from "./components/templates/Inquiry/Inquiry";
import { Language } from "./enums/language";
import { useGranularEffect } from "./hooks/useGranularEffect";
import { useConfig } from "./hooks/config/config";

export type AppProps = {
  baseProduct?: string | undefined;
  apiBase: string;
  language: Language;
  locale: string;
};

function Base({ baseProduct }: { baseProduct?: string | undefined }) {
  const configuration = useConfiguration();
  const startAtStep2 = baseProduct ? true : false;

  useGranularEffect(
    () => {
      if (baseProduct !== undefined) {
        configuration.setBaseProduct(baseProduct);
      }
    },
    [baseProduct],
    [baseProduct, configuration]
  );

  return (
    <ConfiguratorContext.Provider value={configuration}>
      <div className={styles.app} id="arrowonfigurator">
        <Steps.Controller
          order={[
            Step.ARROWSELECTOR,
            Step.CONFIGURATION,
            Step.ADDITIONS,
            Step.ACCESSORIES,
            Step.INQUIRY,
          ]}
          skipStep={startAtStep2}
        >
          <Steps.Step name={Step.ARROWSELECTOR}>
            <ArrowSelector />
          </Steps.Step>
          <Steps.Step name={Step.CONFIGURATION}>
            <Configurator />
          </Steps.Step>
          <Steps.Step name={Step.ADDITIONS}>
            <Additions />
          </Steps.Step>
          <Steps.Step name={Step.ACCESSORIES}>
            <Accessories />
          </Steps.Step>
          <Steps.Step name={Step.INQUIRY}>
            <Inquiry />
          </Steps.Step>
        </Steps.Controller>
      </div>
    </ConfiguratorContext.Provider>
  );
}

function App({ baseProduct, language, apiBase, locale }: AppProps) {
  const config = useConfig({
    apiBase,
    locale,
    language,
  });

  return (
    <ConfigContext.Provider value={config}>
      <Base baseProduct={baseProduct}></Base>
    </ConfigContext.Provider>
  );
}

export default App;
