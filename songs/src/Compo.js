import React, { Component } from "react";
import ReactDOM from "react-dom";
import faker from "faker";
class Compo extends Component {
  state = {};
  render() {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            sam
          </a>
          <div className="metadata">
            <span>today at 6pm </span>
          </div>
          <div>what a nice blog </div>
        </div>
      </div>
    );
  }
}
export default Compo;
