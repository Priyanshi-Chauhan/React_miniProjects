import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "http://picsum.photos/200"
  };
  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <div>
        <img src={this.state.imageUrl} alt=""></img>
        <span style={{ fontSize: 20 }} className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">increment</button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
