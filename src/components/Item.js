import React,{Component} from 'react'
class Item extends Component {
    state={}
    render(){
        return(<div className="Item">
            <h1>nom :sdfsdfsdf</h1>
            <p>  description :sdfsdfsdfsdfsdfsdf</p>
            <button>Edit</button>
            <button>Remove</button>
        </div>)
    }
}
export default Item