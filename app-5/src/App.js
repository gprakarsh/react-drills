import React, { Component } from 'react';
import Image from './Image'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image source={'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'}/>
      </div>
    );
  }
}

export default App;
