import "!style-loader!css-loader!sass-loader!../src/scss/index.scss";
import "../src/services/i18n";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
