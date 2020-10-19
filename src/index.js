import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
import firebase from "./firebase";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
