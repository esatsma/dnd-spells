import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import { Language } from "./enums/language";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <App
    language={Language.NL}
    apiBase="http://127.0.0.1:4444/api/v1/nl_NL/"
    locale="nl_NL"
  />
  // </React.StrictMode>
);
