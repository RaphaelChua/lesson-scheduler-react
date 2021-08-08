import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Root from "./pages/root/index";
import configureStore from "./utils/store";
// import reportWebVitals from "./reportWebVitals";

const store = configureStore({});

const app = (
  <Provider store={store}>
    <Root />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}

// ReactDOM.render(
//   <Provider store={store}>
//     <Root />
//   </Provider>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
