import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactTransform from 'react-transform'
class Counter extends Component {

        state = {styleOne: {},styleTwo: {} };
      onMouseMove = (event) => {
        this.setState({
          styleOne:transform(-event.clientX / event.clientY),
          styleTwo:transform(event.clientX / event.clientY)
          
        })
      }
      render() {
        return <div onMouseMove={this.onMouseMove}>
          <div className="panel" style={this.state.styleOne} />
          <div className="panel" style={this.state.styleTwo} />
          </div>
      }
      
      }
    
     
    
 
export default Counter ;