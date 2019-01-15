import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask'
import List from './List'

class App extends Component {
constructor(){
  super();
  this.state={
    tasks:[]
  }
  this.handleAdd=this.handleAdd.bind(this)
}
handleAdd(arr){
   this.setState({tasks:arr})
}
  render() {
    return (
      <div className="App">
      <h1>My to-do list</h1>
      <NewTask tasks={this.state.tasks} handleAdd={this.handleAdd}/>
      <List tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
