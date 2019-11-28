import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';

import "bootstrap/dist/css/bootstrap.min.css";
import { configureStore, history } from './redux/store/configureStore.dev';
import "./index.css";
import App from "./modules/routes";

console.log('something :', configureStore);

let store = configureStore();

ReactDOM.render (
  <Provider store={store}>
  
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>    
    
  </Provider>,
  document.getElementById("root")
);
