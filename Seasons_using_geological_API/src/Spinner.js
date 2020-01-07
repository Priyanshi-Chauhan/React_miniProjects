import React, { Component } from "react";
const Spinner = props => {
  return (
    <div>
      <div class="ui active dimmer">
        <div class="ui big text loader">{props.messga}</div>
      </div>
    </div>
  );
};
Spinner.defaultProps = {
  messga: "loading!!"
};
export default Spinner;
