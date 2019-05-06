import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Questions from './components/Questions.js';
import Question from './components/Question/Question';
import Callback from './Callback';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path='/' component={Questions}/>
        <Route exact path='/question/:questionId' component={Question}/>
        <Route exact path='/callback' component={Callback}/>
      </div>
    );
  }
}

export default App;
