import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./Components/SearchBar";
class Index extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
