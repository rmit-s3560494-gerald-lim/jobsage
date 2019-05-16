import React, { Component } from 'react';
import { 
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import {ProtectedAdminRoute} from './Protected.Admin.route';
import {ProtectedUserRoute} from './Protected.User.route';

import Home from './Home';
import AdminLogin from './AdminLogin';
import JobsList from './JobsList';
import CreateJobs from './CreateJobs';
import EditJobs from './EditJobs';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import JobSeekerProfile from './JobSeekerProfile';
import AdminHomePage from './AdminHomePage';
import AdminRemoveUsers from './AdminRemoveUsers';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <ProtectedUserRoute exact path='/home' component={Home} />
          <ProtectedUserRoute path='/jobs' component={JobsList} />
          <ProtectedUserRoute path='/add' component={CreateJobs} />
          <ProtectedUserRoute path="/edit/:id" component={EditJobs} />
          <ProtectedAdminRoute path='/adminremoveusers' component={AdminRemoveUsers} />
          <Route path='/adminlogin' component={AdminLogin}/>
          <Route path='/signup' component={SignUpPage} />
          <Route path='/login' component={LoginPage} />
          <ProtectedUserRoute path='/jobseekerprofile' component={JobSeekerProfile}/>
          <ProtectedAdminRoute exact path='/adminhomepage' component={AdminHomePage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
