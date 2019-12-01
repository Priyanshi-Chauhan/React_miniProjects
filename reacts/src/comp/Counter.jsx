import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:0
};
    render() { 
        return <span>{this.format()}<button>increment</button></span>
    }
    format() {
        const {count} =this.state;
        return count === 0 ? 'ZERo':count;
    }
}
 
export default Counter;