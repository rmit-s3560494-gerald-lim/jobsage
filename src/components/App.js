import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AdminLogin from './AdminLogin';

class App extends Component {
  render() {
    return (
      <Switch>
        {/* <Route exact path='/' component={LoginPage} /> */}
        <Route path='/home' component={HomePage} />
        <Route path='/adminlogin' component={AdminLogin} /> */}
        {/* <Route path='/profile' component={ProfilePage} /> */}
      </Switch>
    );
  }
}

export default App;
