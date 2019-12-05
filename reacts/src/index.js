import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import * as serviceworker from "./serviceworker";
ReactDOM.render(<App />,document.querySelector("#root"));