import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:0,
        imageurl:"https://picsum.photos/200"};
        styles={fontSize:50,
            fontWeight:"bold"}
    render() { 
        return(
        <div>
        <img src={this.state.imageurl} alt=""></img>
         <span style={this.styles}>{this.format()}</span>
         <button className = "btn btn-secondary btn-sm2">increment</button></div>)
    };
    format() {
        const {count} =this.state;
        return count === 0 ? 'ZERo':count;
    }
}
 
export default Counter;