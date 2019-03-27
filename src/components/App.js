import React, { Component } from 'react';
import logo from '../logo.svg';
import Home from '../components/Home';
// import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';

class App extends Component {
  render() {
    return (
      <Switch>
        {/* <Route exact path='/' component={LoginPage} /> */}
        <Route path='/home' component={Home} />
        <Route path="/homepage" component={HomePage} />
        {/* <Route path='/jobs' component={JobPage} /> */}
        {/* <Route path='/profile' component={ProfilePage} /> */}
      </Switch>
    );
  }
}

export default App;
