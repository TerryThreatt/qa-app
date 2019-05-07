import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Navbar from './components/NavBar';
import Questions from './components/Questions.js';
import Question from './components/Question/Question';
import Callback from './components/Callback';
import NewQuestion from './components/NewQuestion/NewQuestion';
import SecuredRoute from './components/SecuredRoute/SecuredRoute';
import auth0Client from './components/Auth';

class App extends Component {
  constructor(props) { 
    super(props); 
    this.state={ 
      checkingSession: true,
    }
  }

  async componentDidMount() { 
    if (this.props.location.pathname === '/callback') {
      this.setState({checkingSession:false});
      return;
    } try { 
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch(err) { 
      if(err.error !=='login_required') console.log(err.error);
    }
    this.setState({checkingSession:false});
  }



  render() {
    return (
      <div>
        <Navbar />
        <Route exact path='/' component={Questions}/>
        <Route exact path='/question/:questionId' component={Question}/>
        <Route exact path='/callback' component={Callback}/>
        <SecuredRoute path='/new-question'
                  component={NewQuestion}
                  checkingSession={this.state.checkingSession} />
      </div>
    );
  }
}

export default withRouter(App);
