import React, { Component } from "react";
import ReactDOM from "react-dom";
import Compo from "./Compo";
const App = () => {
  return (
    <div className="ui container comments">
      <Compo person="Sam" />
      <Compo person="Alex" />
      <Compo person="Susu" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
