import React, { Component } from 'react';
import Home from './components/Home';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      My Fitness Website
        <Home />
      </div>
    );
  }
}

export default App;
