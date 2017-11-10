import React, { Component } from 'react';
import './App.css';
import FooList from './components/foo/FooList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Web UI example</h1>
        </header>
        <FooList />
      </div>
    );
  }
}

export default App;
