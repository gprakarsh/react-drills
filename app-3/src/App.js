import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      list:["cat","dog","mouse","chameleon"],
      userInput:""
    }
  }
  handleInput(val){
    this.setState({userInput:val})
  }

  render() {
    let animalDisplay = this.state.list.filter((e)=>e.includes(this.state.userInput)).map((e,i)=><h2 key={i}>{e}</h2>)
    return (
      <div className="App">
        <input onChange={e=>this.handleInput(e.target.value)}/>
        {animalDisplay}
      </div>
    );
  }
}

export default App;
