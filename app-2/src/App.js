import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      arr:[1,2,3,4,5,6]
    }
  }
  render() {
    let numberDisplay = this.state.arr.map((e,i)=><h2 key={i}>{e}</h2>);
    return (
      <div className="App">
        {numberDisplay}
      </div>
    );
  }
}

export default App;
