import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'
class App extends Component {
  constructor(){
    super();
    this.state={
      tasks:[],
      userInput:''
    }
  }
  handleInput(val){
    this.setState({userInput:val})
  }
  handleAdd(){
    let arr = this.state.tasks.slice();
    arr.push(this.state.userInput);
    this.setState({tasks:arr,userInput:''});    
  }
  render() {
    return (
      <div className="App">
      <h1>My to-do list</h1>
      <input onChange={e=>this.handleInput(e.target.value)} placeholder='Enter new task' value={this.state.userInput}/>
      <button onClick={()=>this.handleAdd()}>Add</button> 
      <Todo todoList={this.state.tasks}/>
      <br />
      </div>
    );
  }
}

export default App;
