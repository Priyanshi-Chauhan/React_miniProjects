import React, { Component } from 'react';
import Micky from './comp/Micky';
import Mouse from './comp/Mouse';
import {Switch,Route} from 'react-router-dom';
class Aaa extends Component {
    state = {  }
    render() { 
        return ( <html><div style={{background:"red"}}> My Project</div>
            <Switch>
                <Route exact path ='/'component={Micky}></Route>
                <Route pathc='/details' component = {Mouse}></Route>
            </Switch> </html>);
    }
}
 
export default Aaa;