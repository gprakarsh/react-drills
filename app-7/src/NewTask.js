import React, {Component} from 'react';

export default class NewTask extends Component{
constructor(){
    super();
    this.state={
        input:''
    }
}
handleInput(val){
   this.setState({input:val})
}
handleAdd1(){
    let arr = this.props.tasks.slice();
    arr.push(this.state.input)
    return arr
}
render(){
    return(
        <div>
        <input onChange={e=>this.handleInput(e.target.value)} placeholder={'Enter new task'}/>
        <button onClick={()=>this.props.handleAdd(this.handleAdd1())}>Add</button>
        </div>
    )
}
}