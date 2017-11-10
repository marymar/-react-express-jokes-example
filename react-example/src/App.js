import React, { Component } from 'react';
import './App.css';
import RandomJoke from './components/joke/RandomJoke';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chuck Norris</h1>
        </header>
        <RandomJoke />
      </div>
    );
  }
}


export default App;
