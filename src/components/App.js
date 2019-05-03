import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AdminLogin from './AdminLogin';
import JobsList from './JobsList';
import CreateJobs from './CreateJobs';
import EditJobs from './EditJobs';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path='/' component={LoginPage} /> */}
          <Route path='/home' component={HomePage} />
          <Route path='/jobs' component={JobsList} />
          <Route path='/add' component={CreateJobs} />
          <Route path="/edit/:id" component={EditJobs} />

          <Route path='/adminlogin' component={AdminLogin}/>
          {/* <Route path='/profile' component={ProfilePage} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
