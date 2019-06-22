import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { ProtectedAdminRoute } from './Protected.Admin.route';
import { ProtectedEmployerRoute } from './Protected.Employer.route';
import { ProtectedEmployeeRoute } from './Protected.Employee.route';
import { ProtectedSharedRoute } from './Protected.Shared.route';

import EmployerHome from './EmployerHome';
import EmployeeHome from './EmployeeHome';
import AdminLogin from './AdminLogin';
import JobsList from './JobsList';
import CreateJobs from './CreateJobs';
import EditJobs from './EditJobs';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import JobSeekerProfile from './JobSeekerProfile';
import AdminHomePage from './AdminHomePage';
import AdminRemoveUsers from './AdminRemoveUsers';
import ProfilePage from './ProfilePage.js';
import ViewApplicants from './ViewApplicants';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <ProtectedAdminRoute path='/adminremoveusers' component={AdminRemoveUsers} />
          <ProtectedAdminRoute exact path='/adminhomepage' component={AdminHomePage} />

          <ProtectedEmployerRoute path='/add' component={CreateJobs} />
          <ProtectedEmployerRoute exact path='/employerhome' component={EmployerHome} />
          <ProtectedEmployerRoute path="/edit/:id" component={EditJobs} />
          <ProtectedEmployerRoute path="/view/:id" component={ViewApplicants} />

          <ProtectedEmployeeRoute path='/jobseekerprofile' component={JobSeekerProfile} />
          <ProtectedEmployeeRoute exact path='/employeehome' component={EmployeeHome} />

          <ProtectedSharedRoute path='/jobs' component={JobsList} />
          <ProtectedSharedRoute path='/profile' component={ProfilePage} />

          <Route path='/adminlogin' component={AdminLogin} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/' component={LoginPage} />
          <Route path='/login' component={LoginPage} />


        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
