import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./components/App";
import message from "./ecommerce-core/reducers";
import "bootstrap/dist/css/bootstrap.min.css";

let store = createStore(message);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
