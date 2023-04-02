import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reset.scss";
import "./styles/vars.scss";
import "./styles/globalStyles.scss";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
