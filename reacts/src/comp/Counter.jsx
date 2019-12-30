import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: this.props.value,
    //imageUrl: "http://picsum.photos/200",
    //tags: []
  };
  render() {
    

    let classes = this.getBadgeClasses();
    return (
      <div>
    
        <span style={{ fontSize: 20 }} className={classes}>
          {this.formatCount()}
        </span>
        <button onClick = {() => this.handleIncrement()} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick = {() => this.props.onDelete(this.props.id)} className=" btn btn- primary btn-danger btm-sm m-3">Delete</button>     

      </div>
    );
  };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
  //renderTags() {
    //if ((this.state.tags.length === 0)) return <p>there are no tags</p>;
    //return (
     // <ul>
       // {this.state.tags.map(tag => (
         // <li key={tag}>{tag}</li>
       // ))}
      //</ul>
    //);
 // }
  handleIncrement = () => { 
    
    this.setState({count:this.state.count + 1}) 
  }
  
    
}

export default Counter;
