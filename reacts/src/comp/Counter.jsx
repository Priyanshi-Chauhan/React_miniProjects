import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:0};
      //  constructor() {
       //     super();
         //   this.handleIncrement=this.handleIncrement.bind(this)

        //}
        handleIncrement=product=> {
            console.log(product);
            this.setState({count:this.state.count+1});
        }
        render() {
            return (
                <div>
                    <span className={this.badgeclas()}>{this.formatc()}</span><button onClick={this.handleIncrement} className="btn btn-primary sm-2">Increment</button>
                     </div>
            );
        }
badgeclas() {
    
}


    }
 
export default Counter;