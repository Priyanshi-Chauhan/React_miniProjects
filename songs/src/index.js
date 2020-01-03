import React, { Component } from "react";
import ReactDOM from "react-dom";
import Compo from "./Compo";
const App = () => {
  return (
    <div className="ui container comments">
      <Compo person="Sam" timeAgo="today at 5 pm " blog="yo man" />
      <Compo
        person="Alex"
        timeAgo="yesterday at 12 noon "
        blog="hiii you there!!"
      />
      <Compo person="Susu" timeAgo="yesterday at 5 pm " blog="i am gud" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
