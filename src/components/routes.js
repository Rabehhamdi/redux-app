import React, { Component } from 'react';
import Home from './home';
import Liste from './Liste';
import {Route} from 'react-router-dom';
class Routes extends Component {
    state ={ }
    render(){
        return(<div className="routes-container">
            <Route exact path='/' component={Home}/>
            <Route exact path='/Liste' component={Liste} />
        </div>
        )
    }
}
export default Routes;