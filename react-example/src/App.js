import React, { Component } from 'react';
import './App.css';
import RandomJoke from './components/joke/RandomJoke';
import Jokes from './components/joke/Jokes';
import Searchbar from './components/search/Searchbar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RandomJoke />
        </header>
        <Searchbar handleSearch={this.performSearch} />
        <Jokes />
      </div>
    );
  }
}

export default App;
