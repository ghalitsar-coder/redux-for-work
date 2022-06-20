import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { sagaMiddleware, store } from "./redux/store";
import allSagas from "./redux/watcherSagas";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
sagaMiddleware.run(allSagas);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
