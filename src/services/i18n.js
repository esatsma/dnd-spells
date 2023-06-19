import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  nl: {
    translation: require("../translations/nl.json"),
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "nl",
  initImmediate: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
