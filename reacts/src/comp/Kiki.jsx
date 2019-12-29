import React, { Component } from 'react';
import Counter from './Counter';
class Kiki extends Component {
    state = {  }
    render() { 
        return (<div>
            <Counter />
            <Counter />
            <Counter />
            <Counter />

            
        </div>  

        );
    }
}
 
export default Kiki;