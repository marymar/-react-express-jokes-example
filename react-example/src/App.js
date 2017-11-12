import React, { Component } from 'react';
import './App.css';
import RandomJoke from './components/joke/RandomJoke';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RandomJoke />
        </header>
      </div>
    );
  }
}


export default App;
