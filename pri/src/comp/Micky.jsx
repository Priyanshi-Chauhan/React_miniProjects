import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Micky extends Component {
    state = {  }
    render() { 
        return ( <div><h1>lets gets started and route</h1>
        <Link to ='/details'><br /><button>start</button></Link>
        </div> );
    }
}
 
export default Micky;