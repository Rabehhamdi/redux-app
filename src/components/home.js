import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Home extends Component {
    state={ }
    render(){
        return(<div className="home-container">
            <h2>Home Page</h2>
            <Link to="/Liste">
                <button>Liste</button>
            </Link>
            <button>Add Contact</button>
        </div>)
    }
}
export default Home;