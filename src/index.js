import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {store} from "./store";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
 import { RouterProvider } from "react-router-dom";
 import routes from "./route";
// As of React 18
const router=createBrowserRouter(routes)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
