import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import { Language } from "./enums/language";

export const shadow = (
  $element: HTMLElement,
  {
    baseProduct,
    language,
    styles,
    apiBase,
  }: {
    baseProduct?: string | undefined;
    language: string;
    styles: string;
    apiBase: string;
  }
) => {
  const $styleElement = document.createElement("style");
  const $appElement = document.createElement("div");

  const host = $element;
  const shadow = host.attachShadow({ mode: "open" });

  shadow.appendChild($styleElement);
  shadow.appendChild($appElement);

  $styleElement.innerHTML = styles;

  const root = ReactDOM.createRoot($appElement);

  root.render(
    <App
      locale="nl_NL"
      baseProduct={baseProduct}
      language={language as Language}
      apiBase={apiBase}
    />
  );
};

export default shadow;
