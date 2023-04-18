import './App.css';
import React, { Component } from 'react'
import Moodtracker from './components/Hello';

class App extends Component {

  render() {
      return (
      <div className="App">
        <Moodtracker prop={"value"}/>
      </div>
    );
  }
  
}

export default App;
