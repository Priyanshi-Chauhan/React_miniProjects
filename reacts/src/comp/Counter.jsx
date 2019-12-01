import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:0,
        imageurl:"https://picsum.photos/200"
};
    render() { 
        return(
        <div>
        <img src={this.state.imageurl} alt=""></img>
         <span>{this.format()}</span>
         <button>increment</button></div>)
    };
    format() {
        const {count} =this.state;
        return count === 0 ? 'ZERo':count;
    }
}
 
export default Counter;