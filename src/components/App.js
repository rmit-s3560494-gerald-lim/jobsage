import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/home' component={HomePage} />
        {/* <Route path='/jobs' component={JobPage} /> */}
        {/* <Route path='/profile' component={ProfilePage} /> */}
      </Switch>
    );
  }
}

export default App;
