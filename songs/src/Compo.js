import React, { Component } from "react";
import ReactDOM from "react-dom";
import faker from "faker";
//class Compo extends Component {
//state = {};
//render() {
const Compo = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.person}
        </a>
        <div className="metadata">
          <span>{props.timeAgo} </span>
        </div>
        <div>{props.blog} </div>
      </div>
    </div>
  );
};
export default Compo;
