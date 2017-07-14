import React, { Component } from 'react';
import WordBoard from './components/wordBoard.component'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WordBoard/>
      </div>
    );
  }
}

export default App;
