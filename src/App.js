import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Questions from './components/Questions.js';
import Question from './components/Question/Question';
import Callback from './components/Callback';
import NewQuestion from './components/NewQuestion/NewQuestion';
import SecuredRoute from './components/SecuredRoute/SecuredRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path='/' component={Questions}/>
        <Route exact path='/question/:questionId' component={Question}/>
        <Route exact path='/callback' component={Callback}/>
        <SecuredRoute path='/new-question' component={NewQuestion}/>
      </div>
    );
  }
}

export default App;
