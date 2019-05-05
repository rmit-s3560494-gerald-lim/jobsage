import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './App.css';
import Home from './Home';
import AdminLogin from './AdminLogin';
import JobsList from './JobsList';
import CreateJobs from './CreateJobs';
import EditJobs from './EditJobs';

import AdminRemoveUsers from './AdminRemoveUsers';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path='/' component={LoginPage} /> */}
          <Route exact path='/' component={Home} />
          <Route path='/jobs' component={JobsList} />
          <Route path='/add' component={CreateJobs} />
          <Route path="/edit/:id" component={EditJobs} />
          <Route path='/adminremoveusers' component={AdminRemoveUsers} />
          <Route path='/adminlogin' component={AdminLogin}/>
          {/* <Route path='/profile' component={ProfilePage} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
