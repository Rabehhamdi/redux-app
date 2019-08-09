import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Item from './Item'

class Liste extends Component {
    state={ }
    render(){
        return (<div className="container-Liste">
            <h1>Liste :</h1>
            <div className="Liste">
                <Item />
                <Item />
            </div>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>)
    }
}
export default Liste; 