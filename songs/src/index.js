import React, { Component } from "react";
import ReactDOM from "react-dom";
import Compo from "./Compo";
const App = () => {
  return (
    <div className="ui container comments">
      <Compo />
      <Compo />
      <Compo />
      <Compo />
      <Compo />
      <Compo />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
