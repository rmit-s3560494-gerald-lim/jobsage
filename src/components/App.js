import React, { Component } from 'react';
import { 
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import {ProtectedRoute} from './Protected.route';
// import './App.css';
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
import UserList from './UserList';

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
          <Route path='/signup' component={SignUpPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/jobseekerprofile' component={JobSeekerProfile}/>
          <ProtectedRoute exact path='/adminhomepage' component={AdminHomePage}/>
          <Route path='userlist' component={UserList}/>
          {/* <Route path='/profile' component={ProfilePage} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
