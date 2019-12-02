import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:0};
      //  constructor() {
       //     super();
         //   this.handleIncrement=this.handleIncrement.bind(this)

        //}
        handleIncrement=()=> {
            console.log("increment clicked",this);
        }
        render() {
            return (
                <div><button onClick={this.handleIncrement} className="btn btn-primary sm-2">Increment</button>
                     </div>
            )
        };
    }
 
export default Counter;