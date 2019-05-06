import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Questions from './components/Questions.js';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <p>Work in progress.</p>
        <Questions />
      </div>
    );
  }
}

export default App;
