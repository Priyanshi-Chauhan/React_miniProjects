import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:2
};
    render() { 
        return <span><h1>{this.state.count}</h1><button>increment</button></span>
    }
}
 
export default Counter;