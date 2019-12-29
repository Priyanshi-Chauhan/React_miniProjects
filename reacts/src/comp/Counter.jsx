import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "http://picsum.photos/200",
    tags: []
  };
  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        <img src={this.state.imageUrl} alt=""></img>
        <span style={{ fontSize: 20 }} className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">increment</button>
        {this.renderTags()}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
  renderTags() {
    if ((this.state.tags.length === 0)) return <p>there are no tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
